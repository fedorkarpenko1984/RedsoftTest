<template>
      <div class="footer">
          <div class="box">
              <div class="subBox">
                  <img class="logoFooter" src="./assets/logoFooter.png" alt="">
                  <div class="razdelMenu">Каталог</div>
                  <div class="razdelMenu">Доставка</div>
                  <div class="razdelMenu">Оплата</div>
                  <div class="razdelMenu">Контакты</div>
                  <div class="razdelMenu">О галерее</div>
              </div>
              <div class="subBox">
                  <img src="static/phone.png" alt="" style="height: 0.73vw">
                  <h5>+7 (495) 555-55-55</h5>
                  <img src="static/mapMarker.png" alt="" style="height: 0.73vw;margin-left: 2.6vw ">
                  <h5 style="margin-top: 1.3vw">г. Москва, ул. Расплетина, 24</h5>
              </div>
        </div>
      </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .footer{
    background: #ECEAEA;
  }
  .box{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 63.07vw;
    height: 5vw;
    border-bottom: 1px solid #e1e1e1;
    margin-left: 18.33vw;
  }
  .subBox{
    width: auto;
    height: 5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .logoFooter{
    display: block;
    width: 2.5vw;
    height: 2.5vw;
    margin-right: 1.25vw;
  }
  .razdelMenu{
    height: auto;
    width: auto;
    padding-left: 1.25vw;
    padding-right: 1.25vw;
    font-size: 0.74vw;
    font-family: Merriweather;
    background: #ECEAEA;
  }
  h5{
    height: auto;
    width: auto;
    font-size: 0.7vw;
    font-family: Merriweather;
    color: #555555;
    background: #ECEAEA;
    margin-left: 0.47vw;
  }
</style>
