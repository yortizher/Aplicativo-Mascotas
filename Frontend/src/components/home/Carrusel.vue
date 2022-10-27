<script setup>
</script>

<template>
 <div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://images.unsplash.com/photo-1516025455112-e73ad04772e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFzY290YXN8ZW58MHwwfDB8YmxhY2t8&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1470165298985-da625de26cf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFzY290YXN8ZW58MHwwfDB8dGVhbHw%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1556799618-3fed4f3c4739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFzY290YXN8ZW58MHwwfDB8Z3JlZW58&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFzY290YXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://unsplash.com/es/fotos/adK3Vu70DEQ" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style scoped>
.carousel .carousel-inner .carousel-item img{
    height: 614px;
}

</style>

