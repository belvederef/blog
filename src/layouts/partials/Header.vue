<template>
  <div>
    <header class="layout-header">
      <nav class="nav">
        <ToggleTheme />
      </nav>
    </header>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ToggleTheme from "@/components/ToggleTheme.vue";

@Component({
  components: {
    ToggleTheme,
  },
})
export default class Header extends Vue {}
</script>

<style>
.layout-header {
  width: 100%;
  margin: 0px auto;
  margin-top: 30px;
}
.nav {
  display: flex;
  justify-content: flex-end;
}
</style>
