// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// import VueDisqus from "vue-disqus";

import DefaultLayout from "~/layouts/Default.vue";
import "prismjs/themes/prism.css";

export default function(Vue, { router, head, isClient }) {
  // head.link.push(
  //   ...[
  //     {
  //       rel: "preconnect",
  //       href: "https://fonts.gstatic.com",
  //     },
  //     {
  //       rel: "stylesheet",
  //       href: "https://fonts.googleapis.com/css2?family=Stylish&display=swap",
  //     },
  //   ]
  // ),
  // Set default layout as a global component
  // Vue.use(VueDisqus, {
  //   shortname: "belvederef-blog",
  // });
  Vue.component("Layout", DefaultLayout);
}
