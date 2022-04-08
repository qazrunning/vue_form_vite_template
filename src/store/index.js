import { createStore } from 'vuex'

const store = createStore({
  state(){
    return{
      name:'sss'
    }
  },
  mutations:{
    plus(state){
      state.name = "史蒂夫"
    }
  }
})
export default store