<h1 align="center">wilson</h1>

<p align="center">
a browser-based virtual pet game built with react and vite.
feed, pet, play, read, clean, and put wilson to bed — or watch him slowly fade into a bad day.
</p>

---

<h1 align="center">what is it</h1>

wilson is a tamagotchi-style pet game starring dr. james wilson from house md.
the goal is simple: keep his four stats — hunger, happiness, cleanliness, and energy — from bottoming out.
each stat decays on a timer. when things get critical, wilson lets you know.

the app is built for mobile browsers and packaged with capacitor for android, but it runs fine in any modern desktop browser too.

---

<h1 align="center">stack</h1>

|thing|version|
|---|---|
|react|18|
|vite|6|
|capacitor|8|
|tailwind css|3|
|framer motion|11|
|tanstack query|5|

---

<h1 align="center">how to run</h1>

```sh
npm install
npm run dev
```

open <http://localhost:5173> in your browser.

to preview on android, build the project and sync with capacitor:

```sh
npm run build
npx cap sync android
npx cap open android
```

---

<h1 align="center">how to deploy</h1>

the app uses environment variables at build time:

```
# .env.local
VITE_BASE44_APP_ID=your_app_id
VITE_BASE44_APP_BASE_URL=https://your-backend.base44.app
```

set those before building so the app can reach the base44 backend.

production assets are in `dist/`. point nginx or any static host at that folder for a bare-metal deploy.

---

<h1 align="center">license</h1>

unlicensed — do whatever you want with it.
