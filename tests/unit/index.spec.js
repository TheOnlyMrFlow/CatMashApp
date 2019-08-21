
import { expect } from 'chai'
import { shallowMount, createLocalVue} from '@vue/test-utils'

import App from '../../src/App'
import MashView from '../../src/components/Mash'
import axios from 'axios'

import CatAvatar from '../../src/components/CatAvatar'

const localVue = createLocalVue()
localVue.prototype.$http = axios


describe('App layout', () => {

  const wrapper = shallowMount(App, {
    stubs: ['router-link', 'router-view']
  })


  it('renders the toolbar title', () => {
   
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

  it('images doesnt lap', () => {

    var rect1 = images.at(0);
    var rect2 = images.at(1);

    var overlap = (rect1.right > rect2.left)
      
      expect(overlap).to.be.false;
  })


})