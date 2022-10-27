<Script setup>


</Script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/"  class="navbar-brand" href="#"><span class="text-info">Adopta</span>me <i class="fa-solid fa-paw"></i></router-link
            >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <!-- separarlo -->
        <ul class="navbar-nav  ms-auto mb-2 mb-lg-0"> 
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link active"
              aria-current="page"
              href="#"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/Adoption" class="nav-link active" href="#"
              >Adoptar</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/GiveAdoption" class="nav-link active" href="#"
              >Dar en adopción</router-link
            >
          </li>
          <li class="nav-item dropdown active">
            <a
              class="nav-link dropdown-toggle active"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Administrar
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link
                  to="/CategoryRegistration"
                  class="dropdown-item active"
                  href="#"
                  >Categorias</router-link
                >
              </li>
              <li>
                <router-link
                  to="/BreedRegistry"
                  class="dropdown-item active"
                  href="#"
                  >Razas</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
.dropdown-item {
  background-color: white;
  color: black;
}
.dropdown-item:hover {
  background-color:blue;
  color: rgb(228, 223, 223);
}
.navbar{
  font-size: 130%;
  background-color:rgb(169, 173, 173);
}
 .router-link-exact-active{ 
  color: blue !important;
}
    
*{
  font-family: 'Montserrat', sans-serif;

}
.body{
  background: f1fbff;
}
.section-padding{
  padding: 100px 0;
}
.navbar-nav {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
}
.navbar-light .navbar-brand{
  color: #000;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: 700; 
  letter-spacing: 2px;
}
.navbar-light .navbar-brand:focus,
.navbar-light .navbar-brand:hover{
  color: #000;
}
.w-100{
  height: 100vh;
}

</style>