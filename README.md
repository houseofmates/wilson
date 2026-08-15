<h1 align="center">wilson</h1>

<<<<<<< Updated upstream
<p align="center">
a browser-based virtual pet game built with react and vite.
feed, pet, play, read, clean, and put renowned oncologist james wilson to bed — or watch him slowly fade into a bad day.
</p>

<hr>

<h2 align="center">what is it</h2>

<p align="center">wilson is a tamagotchi-style pet game starring dr. james wilson from house md.
the goal is simple: keep his four stats — hunger, happiness, cleanliness, and energy — from bottoming out.
each stat decays on a timer. when things get critical, wilson lets you know.</p>

<p align="center">the app is built for mobile browsers and packaged with capacitor for android, but it runs fine in any modern desktop browser too.</p>

<hr>

<h2 align="center">stack</h2>

<div align="center">
<table>
  <thead>
    <tr><th>thing</th><th>version</th></tr>
  </thead>
  <tbody>
    <tr><td>react</td><td>18</td></tr>
    <tr><td>vite</td><td>6</td></tr>
    <tr><td>capacitor</td><td>8</td></tr>
    <tr><td>tailwind css</td><td>3</td></tr>
    <tr><td>framer motion</td><td>11</td></tr>
    <tr><td>tanstack query</td><td>5</td></tr>
  </tbody>
</table>
</div>

<hr>

<h2 align="center">how to run</h2>

<pre align="center"><code>npm install
npm run dev
</code></pre>

<p align="center">open <a href="http://localhost:5173">http://localhost:5173</a> in your browser.</p>

<p align="center">to preview on android, build the project and sync with capacitor:</p>

<pre align="center"><code>npm run build
npx cap sync android
npx cap open android
</code></pre>

<hr>

<h2 align="center">how to deploy</h2>

<p align="center">the app uses environment variables at build time:</p>

<pre align="center"><code># .env.local
VITE_BASE44_APP_ID=your_app_id
VITE_BASE44_APP_BASE_URL=https://your-backend.base44.app
</code></pre>

<p align="center">set those before building so the app can reach the base44 backend.</p>

<p align="center">production assets are in <code>dist/</code>. point nginx or any static host at that folder for a bare-metal deploy.</p>

<hr>
=======
a browser-based virtual pet game built with react and vite. feed him, pet him, play with him, read him a story, clean him up, tuck him in — or watch the stats gradually drift and things slowly go wrong.

wilson is a pixel-art dog loosely inspired by dr. james wilson from house md. the game says nothing about the character you are caring for. the pixel art says enough.

made for house because a tamagotchi that is slightly sadder than a generic one is more interesting to check on.

## what makes it personal

wilson was not built to teach anyone about virtual pets. it was built to have sitting around when the day needs a small, quiet accountability loop. you open the tab. wilson might be fine or wilson might be fading. the decision to engage is yours, and the game respects that.

the mood is the point. every visual and animation choice was made to feel like a lived-in, slightly melancholic desktop companion instead of a lego-themed app for children.

## features

- **four hunger, happiness, cleanliness, and energy stats** — each decays on a timer so wilson naturally drifts toward needing attention
- **interact** — feed, pet, play, read, clean, put to bed. each action affects the stats without a cooldown, so you can stack care in one sitting
- **save state in localstorage** — wilson persists between sessions without a backend or account
- **mobile-ready** — responsive layout built for phone browsers but equally comfortable on desktop
- **capacitor android** — packaged for android apk builds through capacitor
- **realistic stat decay** — the clock ticks regardless of whether the tab is open. neglect wilson long enough and the spawning stat goes critical.

## what it is not for

- **not educational** — there is no learning objective. the only thing you practice is remembering to check on something.
- **not competitive** — no leaderboards, no unlockable stat threshold, no high score table. wilson is a dog, not a scoreboard.
- **not a full game loop** — there is no win state. wilson keeps going until one stat hits critical, and then the game ends. if you are looking for branching storylines or a progression map, this is not it.
- **no account or cloud save** — everything lives in localstorage. clearing your browser data or reloading the page will reset wilson.

## installation

```bash
# clone
git clone <wilson-repo-url>
cd wilson

# install dependencies
npm install

# run dev server
npm run dev
# opens http://localhost:5173

# build for production
npm run build
```

the dist/ folder is ready to serve statically. point nginx, caddy, or any static host at it for bare-metal deployment.

base44 variables are needed for production deploys (VITE_BASE44_APP_ID and VITE_BASE44_APP_BASE_URL in .env.local). those are build-time only and do not affect the dev server.
>>>>>>> Stashed changes

<h2 align="center">license</h2>

<<<<<<< Updated upstream
<p align="center"><a href="license">mates license</a></p>
=======
<a href="file:///home/house/license_templates/mates_license.md">the mates license</a>
>>>>>>> Stashed changes
