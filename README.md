<h1 align="center">wilson</h1>

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

<h2 align="center">license</h2>

<p align="center"><a href="license">mates license</a></p>
