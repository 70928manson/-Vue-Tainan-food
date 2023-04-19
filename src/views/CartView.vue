<template>
    <div class="container">
      <div class="mt-3">
        <h3 class="mt-3 mb-4">購物清單</h3>
        <div class="row">
          <div class="col-md-8">
            <table class="table">
              <thead>
                <tr>
                  <!-- <img src="../images/boxes.jpg" alt=""> -->
                  <th scope="col" class="border-0 ps-0">產品</th>
                  <th scope="col" class="border-0">數量</th>
                  <th scope="col" class="border-0">價錢</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-bottom border-top" v-for="cart in carts" :key="cart.id">
                  <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                    <img :src="cart.product.imageUrl" alt="" style="width: 72px; height: 72px; object-fit: cover;">
                    <p class="mb-0 fw-bold ms-3 d-inline-block">{{cart.product.title}}</p>
                  </th>
                  <td class="border-0 align-middle" style="max-width: 160px;">
                    <div class="input-group pe-5">
                      <div class="input-group-prepend numChangeField">
                        <button class="btn btn-outline-dark border-0 py-2 addItemBtn"
                          @click="addCartQty(cart.product.id, cart.qty)" type="button" id="button-addon1">
                          <i class="bi bi-caret-up-fill"></i>
                        </button>
                      </div>
                      <input type="text" class="form-control border-0 text-center my-auto shadow-none" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"
                        :value="cart.qty">
                      <div class="input-group-append">
                        <button class="btn btn-outline-dark border-0 py-2 reduceItemBtn"
                          @click="reduceCartQty(cart.product.id, cart.qty, cart.id)" type="button" id="button-addon2">
                          <i class="bi bi-caret-down-fill"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="border-0 align-middle"><p class="mb-0 ms-auto">NT${{cart.total}}</p></td>
                  <td class="border-0 align-middle">
                    <div>
                      <button class="btn btn-outline-dark border-0 py-2"><i class="bi bi-x" style="fontSize: 175%;" @click="deleteProduct(cart.id)"></i></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-4">
            <div class="border p-4 mb-4">
              <h4 class="fw-bold mb-4">Order Detail</h4>
              <table class="table text-muted border-bottom">
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
                <p class="mb-0 h4 fw-bold">NT${{total.final_total+30}}</p>
              </div>
              <router-link class="btn btn-dark w-100 mt-4" to="/checkout">填寫寄送資料</router-link>
            </div>
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
    addCartQty (id, qty) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const data = {
        product_id: id,
        qty: 1
      }
      this.$http.post(url, { data }).then((res) => {
        console.log(res)
        this.getCartsData()
      })
    },
    reduceCartQty (id, qty, orderID) {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const data = {
        product_id: id,
        qty: -1
      }
      if ((qty - 1) > 0) {
        this.$http.post(url, { data }).then((res) => {
          console.log(res)
          this.getCartsData()
        })
      } else {
        this.$swal({
          title: '確定移除此產品嘛?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: '確定',
          cancelButtonText: '否',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              'Deleted!',
              '刪除成功!',
              'success'
            )
            this.$http.delete(`${url}/${orderID}`).then((res) => {
              console.log(res)
              this.getCartsData()
            })
          }
        })
      }
    },
    deleteProduct (id) {
      console.log('a')
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$swal({
        title: '確定移除此產品嘛?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '確定',
        cancelButtonText: '否',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            '刪除成功!',
            'success'
          )
          this.$http.delete(`${url}/${id}`).then((res) => {
            console.log(res)
            this.getCartsData()
          })
        }
      })
    }
  },
  mounted () {
    this.getCartsData()
  }
}
</script>
