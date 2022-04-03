<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="fw-bold mb-4 pt-3">Checkout</h3>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-center pb-5">
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <div class="d-flex"  v-for="cart in carts" :key="cart.id">
              <img :src="cart.product.imageUrl" alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 fw-bold">{{cart.product.title}}</p>
                  <p class="mb-0">NT${{cart.final_total}}</p>
                </div>
                <p class="mb-0 fw-bold">x1</p>
              </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
                  <td class="text-end border-0 px-0 pt-4">NT${{total.total}}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">Total</p>
              <p class="mb-0 h4 fw-bold">NT${{total.final_total}}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <form>
            <p>Contact information</p>
            <div class="mb-0">
              <label for="ContactMail" class="text-muted mb-0">Email</label>
              <input type="email" class="form-control" id="ContactMail" aria-describedby="emailHelp" placeholder="example@gmail.com">
            </div>
            <p class="mt-4">Shipping address</p>
            <div class="mb-2">
              <label for="ContactName" class="text-muted mb-0">Name</label>
              <input type="text" class="form-control" id="ContactName" placeholder="Carmen A. Rose">
            </div>
            <div class="mb-2">
              <label for="ContactPhone" class="text-muted mb-0">Phone</label>
              <input type="text" class="form-control" id="ContactPhone" placeholder="Password">
            </div>
            <div class="mb-2">
              <label for="ContactMessage" class="text-muted mb-0">Message</label>
              <textarea class="form-control" rows="3" id="ContactMessage" placeholder="message ... "></textarea>
            </div>
          </form>
          <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
            <router-link class="text-dark mt-md-0 mt-3" to="/products"><i class="bi bi-chevron-double-left"></i>返回產品列表</router-link>
            <router-link class="btn btn-dark py-3 px-7" to="/success">寄出</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      carts: [],
      total: []
    }
  },
  methods: {
    getCartsData () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          console.log(res)
          this.carts = res.data.data.carts
          this.total = res.data.data
          console.log(this.total)
        })
    }
  },
  mounted () {
    this.getCartsData()
  }
}
</script>
