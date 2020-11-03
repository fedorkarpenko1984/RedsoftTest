import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inBasket: [false,false,false,false],
    picId: [1,2,3,4],
    paths: ['static/botticelli-birth-venus.jpg','static/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg','static/CreationAdam.jpg','static/AnatomyLesson.jpg'],
    sold: [false,false,false,true],
    names: ['«Рождение Венеры»','«Тайная вечеря»','«Сотворение Адама»','«Урок анатомии»'],
    artists: ['Сандро Ботичелли','Леонардо да Винчи','Микелянджело','Рембрандт'],
    oldPrice: ['2 000 000$','','6 000 000$',''],
    newPrice: ['1 000 000$','3 000 000$','5 000 000$','']

  },
  mutations: {
    changeId (state,payload) {
      state.inBasket[payload] = !state.inBasket[payload]
    },
    loadId (state) {
      if (localStorage.getItem('inBasket')) {
        state.inBasket = JSON.parse(localStorage.getItem('inBasket'))
        console.log(state.inBasket)
      }
      },
    saveId (state) {
      const parsed = JSON.stringify(state.inBasket)
      localStorage.setItem('inBasket', parsed)
      console.log(state.inBasket)
    }
    }


})

