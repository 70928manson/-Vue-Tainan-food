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
          <h1 class="pb-3 wow fadeInDown" style="font-family: cursive, '微軟雅黑'; color: white;">成大歷史傳情</h1>
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
              src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/166579864_120232636792118_4549614024922001893_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=WLhhyI4ur2oAX9MLiqs&_nc_ht=scontent-tpe1-1.xx&oh=00_AT_9lFN_p-enQGTI7W_gO9GYsAGn1mZkL12MAeA3sn2llg&oe=627F48FB"
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
              src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/159167166_113658194116229_7145699851772763791_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=sKHPmneWtaoAX_l49S3&_nc_ht=scontent-tpe1-1.xx&oh=00_AT_pUMQi-fVJAsGkWSmnIcdIqDugHKjtqi46HE0ROuEVOg&oe=627ECD56"
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
              src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/167954081_120232556792126_8088938426706686525_n.png?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=ZxKbXzQtyJYAX8SBDov&_nc_ht=scontent-tpe1-1.xx&oh=00_AT9NJzD5LinJgs4L8nKt807zTvvyAPrIK1IiyT-tA8jNwQ&oe=627C346D"
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
      <div class="container wow fadeIn " data-wow-delay="0.45s">
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
          <img src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/170602477_122099629938752_2815713760278194292_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=YxhRIVUNYmgAX9c9gWY&_nc_ht=scontent-tpe1-1.xx&oh=00_AT9PhOgq6RTrLQ3Jc2OsWtlRWBIIGFhpZb7Eli0rhHITwA&oe=627BEB84" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center wow fadeIn" data-wow-delay="0.15s">
          <h4 class="mt-4">糖徨恍若初見，紙願與你相戀</h4>
          <p class="text-muted">老一輩的懷舊零嘴，新一代的奇幻愛戀<br />讓你/妳回到童年純純的愛戀中！</p>
          <router-link to="/products" style="color: #000080;">>> 選購傳情小物</router-link>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <img src="https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/278410664_348113547337358_6324944992369293543_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=nFiXGQREQ1UAX8EIYNP&_nc_ht=scontent-hkt1-2.xx&oh=00_AT-V63DOj91CP2909l5BlPMBSw9kJM0MyCIYaHhD8fDtmA&oe=6263AEEF" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center wow fadeIn" data-wow-delay="0.15s">
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
