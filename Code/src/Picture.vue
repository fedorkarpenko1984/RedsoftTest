<template>
    <div>
      <div class="box">
        <div class="whiteRectangle" v-if=this.sold></div>
        <img :src=pathToImg alt="">
        <h2>{{ name }}</h2>
        <h2>{{ artist }}</h2>

        <div class="prices">
          <h4>{{ oldPrice }}</h4>
          <h3>{{ newPrice }}</h3>
        </div>

        <button
          class="buy"
          @mouseover="changeColorHov()"
          v-if=!this.sold
          @mouseout="changeColorNorm()"
          @click="changeBtn()"
          :class="btnColor"
        >{{ btnTitle }}
        </button>
        <img class='loader' v-if=loader src="static/loader.png" alt="">
        <h3 v-if=this.sold class="sold">Продана на аукционе</h3>

      </div>
    </div>
</template>

<script>
  import axios from 'axios'



    export default {
      data() {
        return {
          btnColor: 'normal',
          btnTitle: 'Купить',
          getStatus: [],
          loader: false
        }
      },
      mounted() {
        if (this.inBasket) {
          this.btnColor = 'inBasket'
          this.btnTitle = '\n' +
            '✓ В корзине'
        }
      },


      props: ['picId', 'pathToImg', 'sold', 'name', 'artist', 'oldPrice', 'newPrice', 'inBasket'],
      methods: {
        changeColorHov: function () {
          if (this.btnColor == 'normal') this.btnColor = 'hover'
        },
        changeColorNorm: function () {
          if (this.btnColor == 'hover') this.btnColor = 'normal'
        },
        changeBtn: function () {


          if (this.btnColor == 'inBasket') {
            this.btnColor = 'hover'
            this.btnTitle = 'Купить'
          }
          else
            {
              console.log('загрузка')
              this.btnTitle = ''
              this.loader = !this.loader
              {
                axios
                  .get('https://jsonplaceholder.typicode.com/posts/1')
                  .then(response => {
                    this.getStatus = response.status
                    console.log(this.getStatus)
                    if (this.getStatus == 200) {
                      console.log(this.getStatus)
                      this.loader = !this.loader
                      this.btnColor = 'inBasket'
                      this.btnTitle = '\n' + '✓ В корзине'
                      this.$store.commit('changeId', this.picId - 1)
                      this.$store.commit('saveId')
                      console.log('работает')
                      this.getStatus = 0}
                    else {
                      this.loader = !this.loader
                      console.log('не работает')
                      this.btnColor = 'hover'
                      this.btnTitle = 'Купить'
                      this.getStatus = 0
                    }
                  })
              }


            }

          }
      }
    }
</script>


<style scoped>
  .box{
    z-index: 900;
    display: block;
    position: relative;
    width: 14.47vw;
    height: 17vw;
    border: 1px solid #e1e1e1;

    background: #E5E5E5;
  }
  .whiteRectangle{
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: #E5E5E5;
    opacity: 0.35;
  }
  img{
    width: 100%;
    height: 8.18vw;
    border-style: none;
    border-bottom: 1px solid #e1e1e1;
  }
  h2{
    color: #343030;
    font-family: Merriweather;
    font-weight: normal;
    font-size: 0.9375vw;
    margin-left: 1.25vw;
  }
  h4{
    color: #A0A0A0;
    font-family: Merriweather;
    font-weight: normal;
    font-size: 0.7291vw;
    text-decoration: line-through;
    margin-bottom: -0.6vw;
  }
  h3{
    font-family: Merriweather;
    font-weight: normal;
    font-size: 0.8333vw;
    color: #343030;
  }
  .prices{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 1.25vw;
    width: 60%;
    top: 78.35%;
    height: 2vw;
  }
  .buy{
    position: absolute;
    left: 49.29%;
    top: 78.05%;
    width: 6.1458vw;
    height: 2.5vw;
    border-style: none;
    font-family: Merriweather;
    font-weight: bold;
    font-size: 0.7291vw;
    color: #F4F6F9;
    outline: none;
  }
  .normal{
    background: #403432;
  }
  .hover{
    background: #776763;
  }
  .inBasket{
    background: #5B3A32;
  }

  p{
    display: none;
  }
  .sold{
    position: absolute;
    left: 8.57%;
    top: 78%;
    font-weight: bold;
  }
  .loader{
    position: absolute;
    left: 49.29%;
    top: 78.05%;
    width: 6.1458vw;
    height: 2.5vw;
  }
</style>
