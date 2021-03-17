<template>
  <Layout>
    <header class="header">
      <h1 v-html="$page.metadata.siteName" />
      <h2 v-html="$page.metadata.siteDescription" />
    </header>

    <section class="posts">
      <h3 class="post-header">Featured</h3>
      <PostPreview v-for="post in featuredPosts" :key="post.id" :post="post" />
    </section>

    <section class="posts">
      <h3 class="post-header">Latest</h3>
      <template v-for="[year, posts] in postsByYear">
        <div :key="year">
          <h4 class="year">{{ year }}</h4>
          <hr class="line" />
        </div>
        <PostPreview v-for="post in posts" :key="post.id" :post="post" />
      </template>
    </section>
  </Layout>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PostPreview from "@/components/PostPreview.vue";

@Component({
  metaInfo: {
    title: "Homepage",
  },
  components: {
    PostPreview,
  },
})
export default class Index extends Vue {
  get featuredPosts() {
    return (this as any).$page.allPost.edges
      .filter(
        ({ node: post }: { node: { [key: string]: any } }) =>
          post.featured === true
      )
      .map(({ node: post }) => ({ ...post, date: post.fullDate }));
  }
  get postsByYear() {
    const postsByYear: {
      [year: string]: Array<{ [key: string]: any }>;
    } = (this as any).$page.allPost.edges.reduce(
      (
        prev: { [year: string]: Array<{ [key: string]: any }> },
        { node: post }: { node: { [key: string]: any } }
      ) => {
        const year = new Date(post.isoDate).getFullYear().toString();
        if (!year) throw Error(`Could not read year of post: ${post.title}`);
        if (!Array.isArray(prev[year])) prev[year] = [];
        prev[year].push({ ...post, date: post.shortDate });
        return prev;
      },
      {}
    );
    return Object.entries(postsByYear).sort(
      ([yearA, _], [yearB, __]) => +yearB - +yearA
    );
  }
}
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        isoDate: date
        shortDate: date (format: "D MMM")
        fullDate: date (format: "D MMM YYYY")
        path
        featured
      }
    }
  }
}
</page-query>

<style>
.header {
  font-family: "Stylish";
  font-size: 35px;
  text-align: center;
  line-height: 1.4em;
  padding: 0.7em;
}

@media (max-width: 410px) {
  .header > h1 {
    font-size: 1.3em;
  }
}

.header h2 {
  font-weight: 200;
  font-size: 35px;
}
.post-header {
  color: #333;
  display: inline-block;
  margin: auto;
  padding: 2px 5px;
  background-color: var(--accent-color);
}
.posts {
  margin-bottom: 100px;
}

.year {
  margin-bottom: 0;
}
.line {
  border: 0.5px solid #cdc8c5;
  margin: 0;
}
</style>
