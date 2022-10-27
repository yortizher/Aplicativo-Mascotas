<script setup>
import { ref } from "@vue/reactivity";

let name =  ref("");
let identification=ref("");
let direction=ref("");
let photo=ref("");
let email=ref("");
let profession=ref("");

let person = []
 function handleSubmit() {
   
    }

</script>
<template>
     <form class="container w-50" @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" aria-describedby="exampleHelp" v-model="name">
        </div>
        <div class="mb-3">
            <label for="identification" class="form-label">Cédula</label>
            <input type="text" class="form-control" id="identification" v-model="identification">
        </div>
         <div class="mb-3">
            <label for="direction" class="form-label">Dirección</label>
            <input type="text" class="form-control" id="direction" v-model="direction">
        </div>
         <div class="mb-3">
            <label for="photo" class="form-label">Teléfono</label>
            <input type="text" class="form-control" id="photo" v-model="photo">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="email">
        </div>
         <div class="mb-3">
            <label for="profession" class="form-label">Profesión</label>
            <input type="text" class="form-control" id="profession" v-model="profession">
        </div>
        <div>
            <button type="button" class="btn btn-primary">Sí</button>
            <button type="submit" class="btn btn-primary">No</button>
        </div>
    </form>
</template>