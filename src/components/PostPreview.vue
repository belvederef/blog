<template>
  <g-link :to="post.path" class="clickable-div">
    <article class="post-preview">
      <h3 class="title" v-html="post.title" />
      <time class="date" v-html="post.date" />
      <p class="description" v-html="post.description" />
      <em class="time-to-read">{{ post.timeToRead }} min read</em>
    </article>
  </g-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PostPreview extends Vue {
  @Prop() post!: any;
}
</script>

<style scoped>
a.clickable-div {
  color: inherit;
  text-decoration: inherit;
}
a.clickable-div > article > h3 {
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
  border-bottom: 2px solid transparent;
}
a.clickable-div:hover > article > h3 {
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  border-bottom: 2px solid var(--accent-color);
}
.post-preview {
  margin: 15px 0 25px 0;
}
.date {
  font-weight: 300;
  margin-bottom: 0;
}
.title {
  display: inline;
  margin: 0 8px 8px 0;
}
.description {
  margin: 8px 0;
}
.visuallyhidden {
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
}
.visuallyhidden:focus {
  display: inline-block;
  padding: 15px 23px 14px;
  width: auto;
  height: auto;
  clip: auto;
  color: var(--text-color);
  background-color: var(--bkg-color);
  clip-path: unset;
}
</style>
