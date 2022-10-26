<Script setup>


</Script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
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
        <ul class="navbar-nav">
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
.dropdown-item {
  background-color: white;
  color: black;
}
.dropdown-item:hover {
  background-color: rgb(139, 235, 248);
  color: black;
}

</style>