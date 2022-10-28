
<script setup>
import Tabla from "../components/module-categories/Tabla.vue";
import CategoriesLogic from "../logic/categories/CategoriesLogic";
import { ref } from "vue";
const dataPet = CategoriesLogic;
//

const name = ref("");
const name1 = ref("");
const error1 = ref(false);
const error2 = ref(false);


const getError1 = () => {

  if (name.value == "") {
    error1.value = true;
  } else {
    error1.value = false;
  }
};
const getError2 = () => {

if (name1.value == "") {
  error2.value = true;
} else {
  error2.value = false;
}
};

const validationEdit = () => {
  getError1()
  if(error1.value == true ){
    getError1()     
  }else{
    editCategory()

    alert(
      "center",
      "Actualización completada",
      "Se ha actualizado correctamente la categoría",
      1500,
    )
    close()
  }
  
};
const editCategory = () => {
  // metodo para la logica pertinente
  name.value ="";

};
const close = () => {
  const closeModal = document.getElementById('close');
      closeModal.click();
      
  };
const validationCreate = () => {
  getError2()
  if(error2.value == true ){
               
  }else{
    createCategory()
    alert(
      "center",
      "Creación completada",
      "Se ha creado correctamente la categoría",
      1500,
    )
   
  }
  
};
const createCategory = () => {
  // metodo para la logica pertinente
   name1.value ="";
};


const alertDelete = () => {
  alert(
    "center",
    "Eliminada correctamente",
    "Se ha eliminado una categoría",
    1500,
    )
  };

const alert = (position,title,text,time) => {
  Swal.fire({
  position: position,
  icon: 'success',
  title: title,
  text: text,
  showConfirmButton: false,
  timer: time,
})
};





</script>

<template>
  <div class="container mt-5 aling-text-center">
    <div class="row">
      <div class="col-md-4 align-self-start">
        <h1>Registro de categorías</h1>
      </div>
      <div class="col-md-4 align-self-end">
        <button
          type="button"
          class="btn btn-info display-6"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal01"
        >
          Nuevo
        </button>
      </div>
    </div>
    <div class="row m-2 colors01"></div>
    <CategoriesLogic />
    <Tabla title2="Nombre" title3="Opciones" :dataPet="dataPet" />
  </div>

  <!-- Modal editar -->

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Editar categoría
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            id="close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-floating mb-3">
            <input
              v-model="name"
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="Nombre"
            />
            <span v-if="error1"   class="text-danger">Por favor llene el nombre</span>
            <label for="floatingInput">Nombre</label>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            
          >
            Cerrar
          </button>
          <button @click="validationEdit()"   type="button" class="btn btn-primary">Actualizar</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Fin modal editar -->
  <!-- Modal crear -->
  <div
    class="modal fade"
    id="exampleModal01"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Registro de categoría
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-floating mb-3">
            <input
              v-model="name1"
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="Nombre"
            />
            <span v-if="error2"  class="text-danger">Por favor llene el nombre</span>
            <label for="floatingInput">Nombre</label>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
          <button
            @click="validationCreate()"
            type="button"
            class="btn btn-primary"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Fin modal crear -->
  <!-- Modal eliminar -->
  <div
    class="modal fade"
    id="exampleModal06"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Eliminar categoría
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-floating mb-3">
            <p>¿Está seguro de eliminar esta categoría?</p>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            No
          </button>
          <button @click="alertDelete()" data-bs-dismiss="modal"  type="button" class="btn btn-primary">Si</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Fin modal eliminar -->
</template>

<style scoped>
/* .container .colors01{
  background-color: rgb(2, 2, 2);
} */
</style>
