<template>
    <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 400px;">
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0;
      background-image: url(https://upload.cc/i1/2022/08/29/WxONTQ.jpg?fbclid=IwAR1oqoGVQqsHTYIUIzouKRyJkKTGPw1CqcoO0RQOB2sP4GC_CAZXV4XJaLI);
      background-position: center center; opacity: 0.5; background-repeat:no-repeat; background-size:cover;"></div>
      <h2 class="fw-bold">傳情小物</h2>
    </div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <!-- <div class="col-md-4">
          <div class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample">
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pe-1">
                  <h4 class="mb-0">
                    產品分類
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li><a href="#" class="py-2 d-block text-muted">2021</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">2022</a></li>
                    <li><a href="#" class="py-2 d-block text-muted">Todo</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="col-md-12">  <!-- 原尺寸 col-md-8 -->
          <div class="row rows-cols-1 row-cols-md-2 row-cols-lg-4">
            <div class="col-md-6" v-for="product in products" :key="product.id">
              <div class="card border-0 mb-4 position-relative position-relative">
                <div :style="{backgroundImage: `url(${product.imageUrl})`}"
                  style="height: 200px;
                   background-size: cover;
                   background-position: center center"
                ></div>
                <!-- <img :src="product.imageUrl" alt="..."> -->
                <a href="#" class="text-dark">
                  <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
                </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><router-link :to="`/product/${product.id}`">{{ product.title }}</router-link></h4>
                  <!--description style="height: 4.5rem; (1行高1.5rem) 超過3行高就會被裁掉" -->
                  <p class="card-text text-muted mb-0"
                    style="height: 4.5rem;  overflow: hidden;">{{ product.description }}</p>
                  <p class="card-text mb-0">NT${{ product.price }} <span class="text-muted "><del>NT${{ product.origin_price }}</del></span></p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
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
