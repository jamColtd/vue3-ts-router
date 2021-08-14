import  Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

//state在vuex中用于存储数据
var state = {
  count:1
}
//mutations里面放的是方法，方法主要用于改变state里面的数据
var mutations = {
  incCount(){
    ++state.count;
  }
}
//getters的作用和用法类似于vue中的computed
var getters = {
  testNum:(state)=>{
    return state.count*2;
  }
}
//实例化vuxe.store
const store = new Vuex.Store({
  state:state,
  mutations:mutations,
  getters:getters
})
//抛出暴露
export default store;