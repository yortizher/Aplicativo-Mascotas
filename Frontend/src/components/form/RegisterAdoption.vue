<script setup>
import { reactive, ref } from "vue";
import { RouterLink } from 'vue-router'

const form = reactive({
        name: '',
        identification: '',
        direction: '',
        phone: '',
        email: '',
        profession: '',
    })

const formError = reactive({
        name: false,
        identification: false,
        direction: false,
        phone: false,
        email: false,
        profession: false,
    })
const persons = reactive([]);
let error = ref(false)

function fieldValidations() {
    error = false;
    if (form.name === "") {
        formError.name = true;
            error = true;
    } else {
        formError.name = false;
    }
    if (form.identification === "") {
        formError.identification = true;
        error = true;
    } else {
        formError.identification = false;
    }
    if (form.direction === "") {
        formError.direction = true;
        error = true;
    } else {
        formError.direction = false;
    }
     if (form.phone === "") {
        formError.phone = true;
        error = true;
    } else {
        formError.phone = false;
    } 
    if(form.email === "") {
        formError.email = true;
        error = true;
    } else {
       formError.email = false;
    }
    if(form.profession === "") {
        formError.profession = true;
        error = true;
    } else {
       formError.profession = false;
    }
    return error;
}
const addPerson = () => {
    persons.push(form)
    message(
      "center",
      "Registro exitoso",
      "Se ha guardado correctamente",
      1500,
    )
}
const message = (position,title,text,time) => {
    Swal.fire({
    position: position,
    icon: 'success',
    title: title,
    text: text,
    showConfirmButton: false,
    timer: time,
  })
  };
const  handleSubmit = () => fieldValidations()? error : addPerson();
function clearForm() {
        form.name = '';
        form.identification = '';
        form.direction = '';
        form.phone = '';
        form.email = '';
        form.profession = '';        
}

</script>
<template>
      <h3>Persona</h3>
     <form class="container w-50" @submit.prevent="handleSubmit">
        <div class="row mt-3 mb-2 mx-2">
        <div class="col mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" aria-describedby="exampleHelp" v-model="form.name">
            <span class="error" style="color: red" v-if="formError.name">El campo nombre debe ser un dato valido</span>
        </div>
        <div class="col mb-3">
            <label for="identification" class="form-label">Cédula</label>
            <input type="text" class="form-control" id="identification" v-model="form.identification">
            <span class="error" style="color: red" v-if="formError.identification">El campo cédula de la mascota debe ser un dato valido</span>
        </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
         <div class="col mb-3">
            <label for="direction" class="form-label">Dirección</label>
            <input type="text" class="form-control" id="direction" v-model="form.direction">
            <span class="error" style="color: red" v-if="formError.direction">El campo dirección de la mascota debe ser un dato valido</span>
        </div>
         <div class="col mb-3">
            <label for="phone" class="form-label">Teléfono</label>
            <input type="text" class="form-control" id="phone" v-model="form.phone">
            <span class="error" style="color: red" v-if="formError.phone">El campo teléfono de la mascota debe ser un dato valido</span>
        </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
        <div class="col mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="form.email">
            <span class="error" style="color: red" v-if="formError.email">El campo email de la mascota debe ser un dato valido</span>
        </div>
         <div class="col mb-3">
            <label for="profession" class="form-label">Profesión</label>
            <input type="text" class="form-control" id="profession" v-model="form.profession">
            <span class="error" style="color: red" v-if="formError.profession">El campo profesión de la mascota debe ser un dato valido</span>
        </div>
        </div>
        <div>
            <button type="submit" class="btn btn-primary">Sí</button>
            <RouterLink to="/Adoption" class="btn btn-primary">No</RouterLink>
        </div>
    </form>
</template>
