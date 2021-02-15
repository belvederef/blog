<template>
  <Layout>
    <header class="header">
      <h1 v-html="$page.metadata.siteName" />
      <h2 v-html="$page.metadata.siteDescription" />
    </header>
    <section class="posts">
      <template v-for="[year, posts] in postsByYear">
        <div :key="year">
          <h3 class="year">{{ year }}</h3>
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
    title: "Belvedere's blog",
  },
  components: {
    PostPreview,
  },
})
export default class Index extends Vue {
  get postsByYear() {
    const postsByYear: {
      [year: string]: Array<{ [key: string]: any }>;
      // @ts-ignore
    } = this.$page.allPost.edges.reduce(
      (
        prev: { [year: string]: Array<{ [key: string]: any }> },
        { node: post }: { node: { [key: string]: any } }
      ) => {
        const year = (post._date as string).split(" ").pop();
        if (!year) throw Error(`Could not read year of post: ${post.title}`);
        if (!Array.isArray(prev[year])) prev[year] = [];
        prev[year].push(post);
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
        date (format: "D MMM")
        _date: date (format: "D MMMM YYYY")
        path
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

.year {
  margin-bottom: 0;
}
.line {
  border: 0.5px solid #cdc8c5;
  margin: 0;
}
</style>
