<script setup>
</script>

<template>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFzY290YXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Adopta no compres</h5>
        <p>Todos merecemos un verdadero hogar.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1516025455112-e73ad04772e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFzY290YXN8ZW58MHwwfDB8YmxhY2t8&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Recibe y da amor</h5>
        <p>La felicidad de ellos esta en tus manos.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1628852303716-6e27f03aa533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbmVqb3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>La mejor compañia</h5>
        <p>Un amigo leal que esta contigo en los mejores y peores momentos.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
*{
   font-family: 'Montserrat', sans-serif;

}
.body{
  background: #000;
}
.section-padding{
  padding: 100px 0;
}
.carousel-item{
  height: 91vh;
  min-height: 300px;
}
.carousel-caption{
  bottom: 220px;
  z-index: 2;
}
.carousel-caption h5{
  font-size: 45px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 25px;
  color: rgb(39, 198, 247) !important;
}
.carousel-caption p{
  width: 60%;
  margin: auto;
  font-size: 18px;
  line-height: 1.9;
}
.carousel-inner::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.7);
  z-index: 1;
}
</style>

<!-- <img src="https://images.unsplash.com/photo-1516025455112-e73ad04772e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFzY290YXN8ZW58MHwwfDB8YmxhY2t8&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1470165298985-da625de26cf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFzY290YXN8ZW58MHwwfDB8dGVhbHw%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFzY290YXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://unsplash.com/es/fotos/adK3Vu70DEQ" class="d-block w-100" alt="...">
    
      https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFzY290YXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60
    
    </div> -->