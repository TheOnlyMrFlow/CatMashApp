<template>

    <v-container fill-height>

        <v-container grid-list-md fill-height>

            <v-layout row wrap fill-height align-center text-xs-center>

                <h3 class="hidden-xs-only" style="width: 100%;">Vote for the cutest !</h3>

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


                    <v-btn round color="primary" to="/ranking">
                        <span>See ranking</span>
                    </v-btn>


                 </v-flex>


            </v-layout>

        </v-container>

    </v-container>
  
</template>

<script>

import CatAvatar from './CatAvatar'
import { setTimeout } from 'timers';

  export default {

      components: {
          CatAvatar
      },

    data () {
        return {
            clickEnabled: false,
            picked: 0,
            show: false,
            catOne: {
                selected: false,
                notSelected: false,
                image: '',
                id: ''
            },
            catTwo: {
                selected: false,
                notSelected: false,
                image: '',
                id: ''
            }
        }
    },
    created () {
        this.loadCats();
    },
    methods: {
        loadCats() {

            this.show = false;

            this.catOne.selected = false;
            this.catOne.notSelected = false;
            this.catTwo.selected = false;
            this.catTwo.notSelected = false;

            let vm = this;
            

            this.$http
                .get(
                    process.env.VUE_APP_API_URL + 'cats/pick'
                )
                .then(response => {

                    let data = response.data;                   

                    vm.catOne.image = data[0].image;
                    vm.catOne.id = data[0].id;
                    vm.catTwo.image = data[1].image;
                    vm.catTwo.id = data[1].id;

                    vm.show = true;
                    vm.clickEnabled = true;
                    
                    

                })
                // eslint-disable-next-line                    
                .catch(error => {
                })

        },

        pickCat(nb) {  


            if (nb !== 1 && nb !== 2) {
                // eslint-disable-next-line
                console.error('Cannot be anything else than 1 or 2 bro')
                return;
            }
            
            if (!this.clickEnabled) {
                return;
            }
            
            this.clickEnabled = false;

            let idWinner;
            let idLoser;

            if (nb === 1) {
                idWinner = this.catOne.id;
                idLoser = this.catTwo.id;
                this.catOne.selected = true;
                this.catOne.notSelected = false;
                this.catTwo.selected = false;
                this.catTwo.notSelected = true;
            }

            else if (nb === 2) {
                idWinner = this.catTwo.id;
                idLoser = this.catOne.id;
                this.catOne.selected = false;
                this.catOne.notSelected = true;
                this.catTwo.selected = true;
                this.catTwo.notSelected = false;
            }

            

            this.$http
                .patch(
                    process.env.VUE_APP_API_URL + 'cats/' + idWinner + '/mashes/' + idLoser,
                    {}
                )
                // eslint-disable-next-line                    
                .then(response => {
                                       
                })
                // eslint-disable-next-line                    
                .catch(error => {
                                        
                })
            
            // this little cooldown leaves time for the user to have a click feedback (a red circle around the avatar of the cat they picked)
            setTimeout(() => {
                this.loadCats();
            }, 200);
        }
    }
  }
</script>

<style>

a {
    width: 100%;
}

h3 {

    font-size: 2em;

}

</style>
