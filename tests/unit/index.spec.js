
import { expect } from 'chai'
import { shallowMount, createLocalVue} from '@vue/test-utils'

import App from '../../src/App'
import MashView from '../../src/components/Mash'
import axios from 'axios'

import CatAvatar from '../../src/components/CatAvatar'

const localVue = createLocalVue()
localVue.prototype.$http = axios

// shallowMount(Component, {
//   localVue,
//   router
// })

describe('App layout', () => {

  const wrapper = shallowMount(App, {
    stubs: ['router-link', 'router-view']
  })


  it('renders the toolbar title', () => {
    // arrange
    

    let toolbar = wrapper.find('v-toolbar-stub')
    let titles = toolbar.findAll('span')
    
    expect(titles.at(0).html()).to.contain('CATMASH');
    expect(titles.at(1).html()).to.contain('by MrFlow');

  })

})

describe('Mash component', () => {

  const wrapper = shallowMount(MashView, {localVue})

  let images = wrapper.findAll(CatAvatar)    

  it('renders two and only two images', () => {
    expect(images.length).equals(2)
  })

  // it('images doesnt lap', () => {
    
  //   expect(
  //     images.at(0).right 
  //   ).to.be.true(4);

  //   // var overlap = !(rect1.right < rect2.left || 
  //   //   rect1.left > rect2.right || 
  //   //   rect1.bottom < rect2.top || 
  //   //   rect1.top > rect2.bottom)
  // })

})