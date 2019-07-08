import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#c13636',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  },
  options: {
    customProperties: true
  }
})

// 36a94d 