<template>
  <div class="container position-relative">
    <!-- <div class="position-absolute" style="top:0; bottom:0; left:0; right:0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
      background-position: center center; opacity: 0.1;">
    </div> -->
    <nav class="navbar sticky-top navbar-expand-lg navbar-light px-0">
          <router-link class="navbar-brand" to="/">
            <div style="font-family: 'Noto Sans TC', cursive, '微軟雅黑';">
              <img src="https://static.vecteezy.com/system/resources/previews/000/565/390/original/love-logo-and-symbols-vector-template.jpg"
            alt="" style="max-width: 50px;">
            成大歷史傳情
            </div>
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup" style="font-family: 'Noto Sans TC', cursive, '微軟雅黑';">
            <div class="navbar-nav pt-2">
              <router-link class="nav-item nav-link me-4 active" to="/">首頁</router-link>  <!--TODO: 現在頁面在哪: <span class="sr-only">(current)</span>-->
              <router-link class="nav-item nav-link me-4 active" to="/products">傳情小物</router-link>
              <div class="d-flex">
                <!--nav-item nav-link btn btn-sm -->
                <router-link class="nav-item nav-link me-4 position-relative px-1" to="/cart">
                  <p><i class="bi bi-cart-fill fs-7"></i></p>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="margin-top: 0.5rem;">
                    <!--可選串連-->
                     {{ cartData?.carts?.length }}
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </router-link>
              </div>
            </div>
          </div>
    </nav>
  </div>
</template>

<script>
import emitter from '@/utils/emitter'

export default {
  data () {
    return {
      cartData: {}
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then((res) => {
          console.log('getCart回復', res)
          this.cartData = res.data.data
        })
    }
  },
  mounted () {
    this.getCart()
    emitter.on('get-cart', () => {
      console.log('emiiter')
      this.getCart()
    })
  }
}
</script>
