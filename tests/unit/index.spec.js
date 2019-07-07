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
import HomeView from '../../src/views/Home'

describe('UserView', () => {
  it('renders the component', () => {
    // arrange
    const wrapper = shallowMount(HomeView)
    // assert
    expect(wrapper.html()).to.include('world')
  })
})