<template>
  <Layout>
    <br />
    <g-link to="/" class="dashed-link"> &larr; Go Back</g-link>
    <div class="post-title">
      <h1>{{ $page.post.title }}</h1>
      <p class="post-date">
        {{ $page.post.date }} | {{ $page.post.timeToRead }} min read
      </p>
    </div>
    <div class="post-content" v-html="$page.post.content"></div>
    <Disqus
      class="disqus"
      shortname="belvederef-blog"
      :identifier="$page.post.path"
    />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<style>
.post-title {
  text-align: center;
  font-size: 30px;
  line-height: 1.4em;
  padding: 2em 0;
  font-family: "Stylish";
}

.post-date {
  font-size: 16px;
  font-weight: 400;
}

.post-content {
  font-size: 18px;
}
.disqus {
  margin-top: 90px;
}
</style>
