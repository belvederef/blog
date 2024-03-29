declare module "*.vue" {
  import Vue from "vue";
  export default Vue;

  module "vue/types/vue" {
    interface Vue {
      $page: { [key: string]: any };
      $disqus: any;
    }
  }
}
