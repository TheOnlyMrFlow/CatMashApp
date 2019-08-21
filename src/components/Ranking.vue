<template>

    <v-container text-xs-center>

        <v-container grid-list-md>

            <v-layout row wrap align-center class="images-container">

                 <v-flex xs12 offset-sm2 sm8 offset-md4 md4 text-xs-center v-for="(cat, index) in cats" v-bind:key="index">

                     <v-layout class="rank" text-xs-center align-center justify-center>
                         <span>{{index + 1}}</span>
                    </v-layout>
                     <img :src="cat.image">
                    
                 </v-flex>

            </v-layout>

        </v-container>

            
        <v-btn class="mash-button" round color="primary" to="/">
            <span>Help us rank them</span>
        </v-btn>

    </v-container>
  
</template>

<script>

import CatAvatar from './CatAvatar'

  export default {

      components: {
          //eslint-disable-next-line
          CatAvatar
      },

    data () {
        return {
            cats: Array
        }
    },
    created () {
        window.scrollTo(0, 1000);
        this.loadCats();
    },
    methods: {
        loadCats() {        
            
            let vm = this;

            this.$http
                .get(
                    process.env.VUE_APP_API_URL + 'cats?sortBy=elo'
                )
                .then(response => {

                    let data = response.data;

                    vm.cats = data;

                })
                //eslint-disable-next-line
                .catch(error => {

                })

        }
    }
  }
</script>

<style>

.images-container {
    max-height: 75vh;
    overflow-y: scroll;
    
}

.images-container::-webkit-scrollbar
{
    display: none;
	
}

img {
    width: 100%;
}

.rank {
    position: relative;
    left: 0px;
    top: 35px;
    border-radius: 50%;
    opacity: 0.7;
    font-size: 2em;
    width: 60px;
    height: 60px;
    background-color: var(--v-primary-base);

}

.mash-button {
    width: 50%;
}

</style>
