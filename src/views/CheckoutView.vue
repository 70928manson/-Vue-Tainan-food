<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="fw-bold mb-4 pt-3">填寫寄送資料</h3>
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
                <p class="mb-0 fw-bold">x{{cart.qty}}</p>
              </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                  <td class="text-end border-0 px-0 pt-4">NT${{total.total}}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">運費</th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">NT$30</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">Total</p>
              <p class="mb-0 h4 fw-bold">NT${{total.final_total + 30}}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <form>
            <p>Send information</p>
            <div class="mb-2">
              <label for="customerEmail" class="text-muted mb-0">Email</label>
              <input type="email" class="form-control" id="customerEmail" aria-describedby="emailHelp" placeholder="example@gmail.com">
            </div>
            <div class="mb-2">
              <label for="customerAddress" class="text-muted mb-0">Shipping address</label>
              <input type="text" class="form-control" id="customerAddress" placeholder="address">
            </div>
            <div class="mb-2">
              <label for="customerName" class="text-muted mb-0">Name</label>
              <input type="text" class="form-control" id="customerName" placeholder="Carmen A. Rose">
            </div>
            <div class="mb-2">
              <label for="customerPhone" class="text-muted mb-0">Phone</label>
              <input type="text" class="form-control" id="customerPhone" placeholder="Password">
            </div>
            <div class="mb-2">
              <label for="customerMessage" class="text-muted mb-0">Message</label>
              <textarea class="form-control" rows="3" id="customerMessage" placeholder="message ... "></textarea>
            </div>
          </form>
          <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
            <router-link class="text-dark mt-md-0 mt-3" to="/products"><i class="bi bi-chevron-double-left"></i>返回產品列表</router-link>
            <div class="btn btn-dark py-3 px-7" to="/success" @click="addToOrder">寄出</div>
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
    },
    addToOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const customerName = document.querySelector('#customerName').value
      const customerEmail = document.querySelector('#customerEmail').value
      const customerPhone = document.querySelector('#customerPhone').value
      const customerAddress = document.querySelector('#customerAddress').value
      const customerMessage = document.querySelector('#customerMessage').value

      if (customerName === '' || customerEmail === '' || customerPhone === '') {
        alert('看一下下資料是否正確 ')
        return 0
      } else {
        const data = {
          user: {
            name: customerName,
            email: customerEmail,
            tel: customerPhone,
            address: customerAddress
          },
          message: customerMessage
        }
        this.$http.post(url, { data }).then((res) => {
          console.log(res)
          this.$router.push({ path: '/success' })
          this.getCartsData()
        })
      }
    }
  },
  mounted () {
    this.getCartsData()
  }
}
</script>
