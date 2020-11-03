<template>
  <div>
    <div class="box">
        <div class="subBox">
          <img class="logoHeader" src="./assets/logoHeader.png" alt="">
          <div class="razdelMenu">Каталог</div>
          <div class="razdelMenu">Доставка</div>
          <div class="razdelMenu">Оплата</div>
          <div class="razdelMenu">Контакты</div>
          <div class="razdelMenu">О галерее</div>
        </div>

        <div class="searchBox">
          <input class="searchInput" type="text" placeholder="Поиск по названию картины">
          <button class="searchBtn">Найти</button>
        </div>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

  .box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 63.07vw;
    height: 5vw;
    background: #E5E5E5;
    margin-left: 18.33vw;
    border-bottom: 1px solid #e1e1e1;
  }
  .subBox{
    display: flex;
    flex-direction: row;
  }
  .logoHeader{
    display: block;
    width: 2.5vw;
    height: 2.5vw;
    margin-top: 1.25vw;
    margin-right: 1.25vw;
  }
  .razdelMenu{
    height: 2.5vw;
    margin-top: 2vw;
    width: auto;
    padding-left: 1.25vw;
    padding-right: 1.25vw;
    font-family: 'Merriweather', serif;
    color: #343030;
    font-size: 0.73vw;
  }
  .searchBox{
    width: auto;
    height: 2.5vw;
    display: flex;
    flex-direction: row;
    margin-top: 1.25vw;
  }
  .searchInput{
    width: 14.36vw;
    border: 1px solid #e1e1e1;
    border-right-style: none;
    outline: none;
    color: #343030;
    font-family: 'Merriweather', serif;
    font-size: 0.74vw;
    padding: 0.8333vw;
  }
  .searchInput::placeholder{
    color: #9f9f9f;
  }
  .searchBtn{
    width: 6.33vw;
    height: 2.5vw;
    color: white;
    border-style: none;
    background: #382E2B;
    font-family: Merriweather;
    font-size: 0.729vw;
    outline: none;
  }

</style>
