// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
// describe('HelloWorld.vue', () => {
  //   it('renders props.msg when passed', () => {
    //     const msg = 'new message'
    //     const wrapper = shallowMount(HelloWorld, {
      //       propsData: { msg }
      //     })
      //     expect(wrapper.text()).to.include(msg)
      //   })
      // })
      
      
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '../../src/App'
import MashView from '../../src/components/Mash'

describe('App layout', () => {

  const wrapper = shallowMount(App)


  it('renders the toolbar title', () => {
    // arrange
    

    let toolbar = wrapper.find('v-toolbar-stub')
    let titles = toolbar.findAll('span')
    
    expect(titles.at(0).html()).to.contain('CATMASH');
    expect(titles.at(1).html()).to.contain('by MrFlow');

  })

})

describe('Mash component', () => {

  const wrapper = shallowMount(MashView)

  let images = wrapper.findAll('v-img-stub')    

  it('renders two and only two images', () => {
    expect(images.length).equals(2)
  })

  it(' dvsd ', () => {
    
    expect(images.at(0).props).equals(2)
  })

})