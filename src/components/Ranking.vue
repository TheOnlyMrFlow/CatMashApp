<template>

    <v-container fill-height>

        <v-container grid-list-md fill-height>

            <v-layout row wrap fill-height align-center>

                 <v-flex offset-sm2 sm4 xs12 text-xs-center>
                    <CatAvatar
                        @click.native="pickCat(1)"
                        :show="show"
                        v-bind:class="{ 'selected': catOne.selected, 'not-selected': catOne.notSelected }"   
                        :image="catOne.image"
                        >
                    </CatAvatar>
                 </v-flex>

                 <v-flex sm4 xs12 text-xs-center>
                    <CatAvatar
                        @click.native="pickCat(2)"
                        :show="show"
                        
                        :class="[catTwo.selected ? 'selected' : '', catTwo.notSelected ? 'not-selected': '']"

                        :image="catTwo.image"
                        >
                    </CatAvatar>
                 </v-flex>

                 <v-flex xs12 sm6 offset-sm3 text-xs-center mt-3>


                    <v-btn round color="primary" to="/about">
                        <span>See ranking</span>
                    </v-btn>


                 </v-flex>


            </v-layout>

        </v-container>

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

a {
    width: 100%;
}


</style>
