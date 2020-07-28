import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue';
var loginUsersList= require('@/assets/users.json');
import MainHeader from '@/components/MainHeader.vue'
import Vue from 'vue';
import axios from 'axios';

describe('UsersList Testing', () => {
  it('renders props.msg when passed', () => {
    
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })  
  it('should render correctly', () => { })    
    it('to check if the exact object exists in the array or not', function () {
        var obj={
            "userName": "admn",
            "password": "admin"
        }
        expect(loginUsersList.indexOf(obj)).to.equal(-1);
    });
    it('should print two equals 1', function () {
        expect(loginUsersList.length).to.equal(3);
    });
    it('The number of users should be greater than 1', function () {
        expect(loginUsersList).to.have.length.of.at.least(2);
    });
    it('Users json should have a property password', function () {
        expect(loginUsersList[0]).to.have.property('password');
    });}


)
describe('Login.vue testing', () => {
  const wrapper=mount(Login);

  it('check for div existance', () => {
  const div = wrapper.find('div');
  expect(div.exists()).to.equal(true);
})


it("should render MainHeader on mount", () => {
  let component=shallowMount(MainHeader);
  expect(component.find(MainHeader).exists()).to.be.true;
});



})