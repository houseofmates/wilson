<h1 align="center">wilson</h1>

<p align="center">
a browser-based virtual pet game built with react and vite. feed him, pet him, play with him, read him a story, clean him up, tuck him in — or watch the stats gradually drift and things slowly go wrong.
</p>

<hr>

## what is it

wilson is a tamagotchi-style pet game starring dr. james wilson from house md.
the goal is simple: keep his four stats — hunger, happiness, cleanliness, and energy — from bottoming out.
each stat decays on a timer. when things get critical, wilson lets you know.

the app is built for mobile browsers and packaged with capacitor for android, but it runs fine in any modern desktop browser too.

## what makes it personal

wilson was not built to teach anyone about virtual pets. it was built to have sitting around when the day needs a small, quiet accountability loop. you open the tab. wilson might be fine or wilson might be fading. the decision to engage is yours, and the game respects that.

the mood is the point. every visual and animation choice was made to feel like a lived-in, slightly melancholic desktop companion instead of a lego-themed app for children.

## features

- **four stats** — hunger, happiness, cleanliness, and energy. each decays on a timer so wilson naturally drifts toward needing attention
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

base44 variables are needed for production deploys (vite_base44_app_id and vite_base44_app_base_url in .env.local). those are build-time only and do not affect the dev server.

## license

<a href="./LICENSE">the mates license</a>
