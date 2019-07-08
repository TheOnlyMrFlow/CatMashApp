<template>

    <v-container text-xs-center>

        <v-container grid-list-md>

            <v-layout row wrap align-center class="images-container">

                 <v-flex xs12 offset-sm2 sm8 offset-md3 md6 text-xs-center v-for="(cat, index) in cats">

                     <img :src="cat.image">
                     <v-layout class="rank" text-xs-center align-center justify-center>
                         <span>{{index + 1}}</span>
                    </v-layout>
                    
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
import { axios } from 'axios'

  export default {

      components: {
          CatAvatar
      },

    data () {
        return {
            cats: Array
        }
    },
    created () {
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

                    console.log(data);
                    vm.cats = data;

                })
                .catch(error => {

                    console.log(error);

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
    left: 94%;
    bottom: 3vw;
    border-radius: 50%;
    opacity: 0.7;
    font-size: 5vw;
    width: 5vw;
    height: 5vw;
    background-color: var(--v-primary-base);

}

.mash-button {
    width: 50%;
}

</style>
