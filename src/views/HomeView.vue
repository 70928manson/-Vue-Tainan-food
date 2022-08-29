<template>
  <div class="position-relative">
    <div class="container d-flex flex-column" style="min-height: 100vh;">
      <div class="position-absolute" style="top:0; bottom:0; left:0; right:0;
        background-image: url(https://images.unsplash.com/photo-1518818419601-72c8673f5852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
        background-repeat: no-repeat;
        background-size: cover; background-position: center center;">
      </div>
      <div class="row justify-content-center my-auto">
        <div class="position-absolute col-md-4 text-center" style="width: 400px; margin: auto;">
          <h1 class="pb-3 wow fadeInUp" style="font-family: cursive, '微軟雅黑'; color: white;">成大歷史傳情</h1>
          <h6 class="mb-0 wow fadeInDown" style="font-family: cursive, '微軟雅黑'; color: white;">星空夜語，一生命定</h6>
            <h1 style="padding-top: 100px;"><i class="bi bi-chevron-double-down wow flash" data-wow-delay="0.6s" @click="goDown" style="cursor: pointer; color: white;"></i></h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container wow fadeIn" data-wow-delay="0.1s" id="test" style="font-family: 'Noto Sans TC', cursive, '微軟雅黑';">
      <div class="row mt-5">
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              src="../images/st1.jpg"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body text-center">
              <h4>想與你共寫</h4>
              <div class="d-flex justify-content-center">
                <p class="card-text text-muted mb-0">
                  今生今世的一紙相伴
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              src="../images/headout.jpg"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body text-center">
              <h4>歷史傳情</h4>
              <div class="d-flex justify-content-center">
                <p class="card-text mb-0">
                  替你將心意傳遞給遠方的他/她
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              src="../images/st2.png"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body text-center">
              <h4>想聽你的聲音</h4>
              <div class="d-flex justify-content-center">
                <p class="card-text text-muted mb-0">
                  車馬很慢，書信很遠，聽你一言，一生只願愛你一人
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div class="mt-7" style="background-color: #fff7eb; font-family: 'Noto Sans TC', cursive, '微軟雅黑';">
      <div class="container wow fadeInUp " data-wow-delay="0.45s">
        <div class="row justify-content-center py-7">
          <div class="col-md-6 text-center">
            <h3>《歷史傳情，心繫於你》</h3>
            <p class="my-5">你也有想要一生一世相守的人嗎？<br />
              又或是有心儀的的對象？<br />
              想表達滿腔的愛意，到嘴邊時卻又羞於開口？<br />
              沒問題！<br />
              歷史傳情提供各種小物<br />
              就讓成大歷史幫助你將全部的心意傳遞給他/她吧！</p>
            <p><small>— 成大歷史傳情 —</small></p>
          </div>
        </div>
      </div>
  </div>
  <div class="container my-7" style="font-family: 'Noto Sans TC', cursive, '微軟雅黑';">
      <div class="row">
        <div class="col-md-6">
          <img src="../images/handbox1.jpg" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center wow fadeInUp" data-wow-delay="0.15s">
          <h4 class="mt-4">糖徨恍若初見，紙願與你相戀</h4>
          <p class="text-muted">老一輩的懷舊零嘴，新一代的奇幻愛戀<br />讓你/妳回到童年純純的愛戀中！</p>
          <router-link to="/products" style="color: #000080;">>> 選購傳情小物</router-link>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <img src="../images/couple2.jpg" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center wow fadeInUp" data-wow-delay="0.15s">
          <h4 class="mt-4">緣起百年，今生之戀</h4>
          <p class="text-muted">對你的思念寄予散落的星星<br />但願那點點的星光能照進你的窗前</p>
          <router-link to="/products" style="color: #000080;">>> 選購傳情小物</router-link>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    goDown () {
      document.getElementById('test').scrollIntoView()
    }
  },
  mounted () {
    new this.$wow.WOW().init()
  }
}
</script>
