<template>
  <v-app dark>
    <v-toolbar app color="primary">
      <v-toolbar-title class="headline">
        <span>CATMASH</span>
        <span class="font-weight-light"> by MrFlow</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn> -->
    </v-toolbar>

    <v-content>
      <router-view></router-view>
      <!-- <HelloWorld/> -->
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>

html, body {
  overflow: hidden;
}

</style>
