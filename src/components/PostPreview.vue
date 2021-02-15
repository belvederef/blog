<template>
  <!-- <g-link :to="post.path" class="clickable-div"> -->
  <article class="post-preview">
    <!-- <hr class="line" /> -->
    <h3 class="title" v-html="post.title" />
    <time class="date" v-html="post.date" />
    <p class="description" v-html="post.description" />
    <strong class="time-to-read">{{ post.timeToRead }} min read</strong> &nbsp;
    <g-link :to="post.path" class="read"
      >Read More
      <span class="visuallyhidden">about {{ post.title }}</span></g-link
    >
  </article>
  <!-- </g-link> -->
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PostPreview extends Vue {
  @Prop() post!: any;
}
</script>

<style scoped>
.clickable-div {
  text-decoration: none;
  color: var(--text-color);
  margin-bottom: 30px;
  border: 1px solid black;
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

.read {
  padding: 7px;
  color: var(--text-color);
  text-decoration: none;
  border: 2px dashed var(--border-color);
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
