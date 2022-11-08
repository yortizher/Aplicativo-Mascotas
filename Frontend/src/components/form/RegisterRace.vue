<script setup>
let name =  ref("");
let species=ref("");


let race = []

 function handleSubmit() {
   
   
}
</script>
<template>
     <form class="container w-50" @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label for="name" class="form-label">Nombre Raza</label>
            <input type="text" class="form-control" id="name" aria-describedby="exampleHelp" v-model="name">
        </div>
        <div class="mb-3">
            <label for="species" class="form-label">Especie</label>
            <input type="text" class="form-control" id="species" v-model="species">
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
</template>