"""Fabrique la version hébergeable de Tournée dans dist/.

index.html est écrit sans <!doctype>/<head> (format des artifacts claude.ai).
Ce script l'enveloppe dans une vraie page web, ajoute le manifeste, les icônes
et un service worker pour que l'appli marche hors ligne et s'installe sur l'écran
d'accueil. Le dossier dist/ sert aussi de webDir à Capacitor (appli iPhone / Android).

Usage : python3 scripts/build.py
"""
import hashlib
import json
import pathlib
import shutil

ROOT = pathlib.Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
FILES = ["cards.js", "modes-data.js"]

HEAD = """<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
<meta name="theme-color" content="#170f1f">
<meta name="description" content="Le jeu de soirée gratuit : Je n'ai jamais, Action ou Vérité, Qui pourrait, Tu préfères et 11 autres jeux.">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon-192.png">
<link rel="apple-touch-icon" href="icon-512.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Tournée">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
{adsense}
</head>
<body>
"""

TAIL = """
<script>
if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js");
</script>
</body>
</html>
"""


def adsense_tag(page):
    """Charge le script AdSense seulement si un ID client est rempli dans CONFIG."""
    for line in page.splitlines():
        if "adsenseClient:" in line:
            value = line.split('"')[1] if '"' in line else ""
            if value:
                return f'<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={value}" crossorigin="anonymous"></script>'
    return ""


def icons():
    from PIL import Image, ImageDraw, ImageFont
    for size in (192, 512):
        img = Image.new("RGB", (size, size), "#170f1f")
        d = ImageDraw.Draw(img)
        pad = size // 8
        d.rounded_rectangle([pad, pad, size - pad, size - pad], radius=size // 5, fill="#ff6b4a")
        try:
            font = ImageFont.truetype("DejaVuSans-Bold.ttf", int(size * 0.5))
        except OSError:
            font = ImageFont.load_default()
        d.text((size / 2, size / 2), "T", font=font, fill="#170f1f", anchor="mm")
        img.save(DIST / f"icon-{size}.png")


def main():
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir()
    page = (ROOT / "index.html").read_text(encoding="utf-8")
    (DIST / "index.html").write_text(HEAD.replace("{adsense}", adsense_tag(page)) + page + TAIL, encoding="utf-8")
    for f in FILES:
        shutil.copy(ROOT / f, DIST / f)
    icons()
    manifest = {
        "name": "Tournée",
        "short_name": "Tournée",
        "description": "Le jeu de soirée gratuit qui pose les vraies questions.",
        "lang": "fr",
        "start_url": "./",
        "display": "standalone",
        "orientation": "portrait",
        "scope": "./",
        "background_color": "#170f1f",
        "theme_color": "#170f1f",
        "icons": [
            {"src": "icon-192.png", "sizes": "192x192", "type": "image/png"},
            {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable"},
        ],
    }
    (DIST / "manifest.webmanifest").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    # Le nom du cache change à chaque build : les joueurs reçoivent les nouvelles cartes.
    shell = ["./", "index.html", *FILES, "manifest.webmanifest", "icon-192.png", "icon-512.png"]
    version = hashlib.sha1(b"".join((DIST / f).read_bytes() for f in shell[1:])).hexdigest()[:10]
    (DIST / "sw.js").write_text(f"""const CACHE = "tournee-{version}";
const SHELL = {json.dumps(shell)};
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {{
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
}});
""", encoding="utf-8")
    print(f"dist/ prêt ({len(list(DIST.iterdir()))} fichiers, cache {version})")


if __name__ == "__main__":
    main()
