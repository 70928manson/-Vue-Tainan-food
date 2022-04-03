<script>
export default {
  props: ['pages'],
  template: `<nav class="d-flex justify-content-center">
    <ul class="pagination">
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
      <li class="page-item"
        v-for="page in pages.total_pages" :key="page + 'page'">
        <a class="page-link" href="#"
        @click="$emit('get-product', page)">{{ page }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
    </nav>`
}
</script>
