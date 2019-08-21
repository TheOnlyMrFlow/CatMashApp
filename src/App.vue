<template>
  <v-app dark>

    <v-toolbar app color="primary">
      <v-toolbar-title class="headline">
        <span>CATMASH</span>
        <span class="font-weight-light"> by MrFlow</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style>

</style>
