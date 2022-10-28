<script setup>
import { ref } from "vue";

let name =  ref("");
let identification=ref("");
let direction=ref("");
let photo=ref("");
let email=ref("");
let profession=ref("");
let errorProfession = false
let errorName = false
let errorIdentification = false
let errorDirection = false
let errorPhoto = false
let errorEmail = false
let person = []
function addEmployeesData() {
    fieldValidations()? error:handleSubmit();
}

function fieldValidations() {
    error = false;
    if (name === "") {
        errorName = true;
            error = true;
    } else {
        errorName = false;
    }
    if (identification === "") {
        errorIdentification = true;
        error = true;
    } else {
        errorIdentification = false;
    }
    if (direction === "") {
        errorDirection = true;
        error = true;
    } else {
        errorDirection = false;
    }
     if (photo === "") {
        errorPhoto = true;
        error = true;
    } else {
        errorPhoto = false;
    } 
    if(email === "") {
        errorEmail = true;
        error = true;
    } else {
       errorEmail = false;
    }
    if(profession === "") {
        errorProfession = true;
        error = true;
    } else {
       errorProfession = false;
    }
    return error;
}

</script>
<template>
     <form class="container w-50" @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" aria-describedby="exampleHelp" v-model="name">
            <span class="error" style="color: red" v-if="errorName">El campo nombre debe ser un dato valido</span>
        </div>
        <div class="mb-3">
            <label for="identification" class="form-label">Cédula</label>
            <input type="text" class="form-control" id="identification" v-model="identification">
            <span class="error" style="color: red" v-if="errorIdentification">El campo cédula de la mascota debe ser un dato valido</span>
        </div>
         <div class="mb-3">
            <label for="direction" class="form-label">Dirección</label>
            <input type="text" class="form-control" id="direction" v-model="direction">
            <span class="error" style="color: red" v-if="errorDirection">El campo dirección de la mascota debe ser un dato valido</span>
        </div>
         <div class="mb-3">
            <label for="photo" class="form-label">Teléfono</label>
            <input type="text" class="form-control" id="photo" v-model="photo">
            <span class="error" style="color: red" v-if="errorPhoto">El campo teléfono de la mascota debe ser un dato valido</span>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="email">
            <span class="error" style="color: red" v-if="errorEmail">El campo email de la mascota debe ser un dato valido</span>
        </div>
         <div class="mb-3">
            <label for="profession" class="form-label">Profesión</label>
            <input type="text" class="form-control" id="profession" v-model="profession">
            <span class="error" style="color: red" v-if="errorProfession">El campo profesión de la mascota debe ser un dato valido</span>
        </div>
        <div>
            <button type="button" class="btn btn-primary">Sí</button>
            <button type="submit" class="btn btn-primary">No</button>
        </div>
    </form>
</template>
