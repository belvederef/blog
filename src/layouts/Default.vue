<template>
  <main class="layout" role="main">
    <Header />
    <slot />
    <div class="footer">
      <p>
        Made with ❤️ by
        <g-link to="https://github.com/belvederef">Francesco Belvedere</g-link>
      </p>
      <!-- <a target="_blank" href="/sitemap.xml">Sitemap</a>
      <a target="_blank" href="/feed.xml">RSS Feed</a> -->
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Header from "./partials/Header.vue";

@Component({
  components: {
    Header,
  },
})
export default class Default extends Vue {}
</script>

<style>
:root {
  --text-color: #333;
  --accent-color: #fecd43;
  --bkg-color: white;
  --line-color: #cdc8c5;
  --link-color: #006a9a;
}
:root [data-theme="sepia"] {
  --text-color: #433422;
  --accent-color: #00a672;
  --bkg-color: #f1e7d0;
  --line-color: #00a672;
  --link-color: #006a9a;
}

:root [data-theme="dark"] {
  --text-color: #ffffff;
  --accent-color: #fecd43;
  --bkg-color: #030200;
  --line-color: #fecd43;
  --link-color: #85d9ff;
}
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  border: 15px solid var(--accent-color);
  min-height: 100vh;
  background-color: var(--bkg-color);
  color: var(--text-color);
  transition: background 0.3s;
}

a {
  -webkit-transition: 0.15s ease;
  transition: 0.15s ease;
  text-decoration: underline solid var(--accent-color) 2px;
  color: var(--link-color);
}
a:hover {
  opacity: 0.66;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.footer {
  padding-top: calc(30em / 4);
  text-align: center;
  font-size: 1em;
}

.dashed-link {
  border: 2px dashed var(--accent-color);
  padding: 7px;
  color: var(--text-color);
  text-decoration: none;
}
</style>
