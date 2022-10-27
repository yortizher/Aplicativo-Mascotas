
<script setup>
import Tabla from "../components/module-categories/Tabla.vue";
import CategoriesLogic from "../logic/categories/CategoriesLogic";

const dataPet = CategoriesLogic;
</script>

<template>
  <div class="container mt-5 aling-text-center border border-dark">
    <div class="row m-2 colors01">
      <div class="col-md-4">
        <h1>Registro de categorias</h1>
      </div>
      <div class="col-md-4 offset-md-4 m-1">
        <button type="button"  class="btn btn-sm  btn-success d-flex flex-row-reverse"><h6 >Nuevo</h6></button>
      </div>
    </div>
      <CategoriesLogic />
      <Tabla
        title2="Nombre"
        title3="Opciones"
        :dataPet="dataPet"
      />
    
  </div>
</template>

<style scoped>
/* .container .colors01{
  background-color: rgb(2, 2, 2);
} */

</style>
