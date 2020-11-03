<template>
  <div class="catalog">
    <h1>Картины эпохи Возрождения</h1>
    <div class="box">
      <app-picture
        :in-basket=this.$store.state.inBasket[0]
        :pic-id=this.$store.state.picId[0]
        :pathToImg=this.$store.state.paths[0]
        :name=this.$store.state.names[0]
        :artist=this.$store.state.artists[0]
        :old-price=this.$store.state.oldPrice[0]
        :new-price=this.$store.state.newPrice[0]
      ></app-picture>

      <app-picture
        :in-basket=this.$store.state.inBasket[1]
        :pic-id=this.$store.state.picId[1]
        :pathToImg=this.$store.state.paths[1]
        :name=this.$store.state.names[1]
        :artist=this.$store.state.artists[1]
        :old-price=this.$store.state.oldPrice[1]
        :new-price=this.$store.state.newPrice[1]
      ></app-picture>

      <app-picture
        :in-basket=this.$store.state.inBasket[2]
        :pic-id=this.$store.state.picId[2]
        :pathToImg=this.$store.state.paths[2]
        :name=this.$store.state.names[2]
        :artist=this.$store.state.artists[2]
        :old-price=this.$store.state.oldPrice[2]
        :new-price=this.$store.state.newPrice[2]
      ></app-picture>

      <app-picture
        :in-basket=this.$store.state.inBasket[3]
        :pic-id=this.$store.state.picId[3]
        :pathToImg=this.$store.state.paths[3]
        :name=this.$store.state.names[3]
        :artist=this.$store.state.artists[3]
        :old-price=this.$store.state.oldPrice[3]
        :new-price=this.$store.state.newPrice[3]
        :sold=this.$store.state.sold[3]
      ></app-picture>

    </div>
  </div>
</template>

<script>
  import Picture from "./Picture"

    export default {
      data () {
        return {

        }
      },
      components: {
        appPicture: Picture
      }


    }
</script>

<style scoped>
  .box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 63.07vw;
    height: 41vw;
  }
  .catalog{
    display: block;
    padding-left: 18.33vw;
    background: #E5E5E5;
  }
  h1{
    font-size: 1.25vw;
    font-family: Merriweather;
    font-weight: bold;
    color: #343030;
    margin-bottom: 2vw;
  }
</style>
