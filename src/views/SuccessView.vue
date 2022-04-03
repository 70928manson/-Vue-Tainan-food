<template>
    <div class="position-relative d-flex">
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <div class="row my-auto pb-7">
          <div class="col-md-4 d-flex flex-column">
            <div class="my-auto">
              <h2>恭喜! 訂單寄送成功</h2>
              <p>有漏掉什麼喜歡的東西嘛，趕快再回來產品列表看看吧!</p>
              <router-link class="btn btn-dark mt-4 px-5" to="/products">Back To Products List</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="w-md-50 w-100 position-absolute opacity-1" style="z-index: -1; min-height: 100vh; right: 0;
      background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
      background-position: center center; opacity: 0.3;">
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      pagination: {}
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then(res => {
          console.log(res)
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
