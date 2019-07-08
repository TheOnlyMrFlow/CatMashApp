<template>

<v-avatar 
    v-if="show"
    size=35vh
    contain>
        <img :src="image" alt="avatar" @load="loadedEvent">
</v-avatar>

<v-avatar 
    v-else
    size=35vh
    contain>
        <v-progress-circular
            :width="4"
            :size="70"
            color="white"
            indeterminate
            >
        </v-progress-circular>
</v-avatar>

</template>


<script>
export default {
    data () {
        return {
            loaded: false
        }
    },
    props: {
        image: String,
        show: Boolean
    },
    methods: {
        loadedEvent() {
            this.loaded = true;
        }
    }
  }
</script>

<style>
    img {   
        border-style: solid;
        border-width: 4px;
        border-color: white;
    }

    .selected img {
        border-color: var(--v-primary-base);
    }

    .not-selected img {
        opacity: 0.2;
    }

</style>