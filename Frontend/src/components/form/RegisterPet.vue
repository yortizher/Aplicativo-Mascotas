<script setup>
import { reactive, ref } from "@vue/reactivity"

 let race = reactive(["schnauzer","Doderman", "West Highland"])
 let category = reactive(["Categoria1","Categoria2", "Categoria3"])
 let gender = reactive(["Hembra", "Macho"])
 let namePet = ref("") 
 let nameOwner = ref("")
 let description = ref("")
 let age = ref(0)
 let vaccines = ref("")
 let optionRace = ref("")
 let optionGender = ref("")
 let optionCategory = ref("")
</script>
<template>
    <form class="container w-80" @submit.prevent="handleSubmit">
        <div class="row mt-3 mb-2 mx-2">
             <div class="col mb-3">
                <label for="exampleInput" class="form-label">Nombre Mascota</label>
                <input type="text" class="form-control" id="exampleInput" aria-describedby="exampleHelp" v-model="namePet">
            </div>
            <div class="col mb-3">
                <label for="exampleInput2" class="form-label">Nombre Dueño</label>
                <input type="text" class="form-control" id="exampleInput2" v-model="nameOwner">
            </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
            <div class="col mb-3">
                <label for="age" class="form-label">Edad</label>
                <input type="text" class="form-control" id="age" v-model="age">
            </div>
            <div class="col mb-3">
                <label for="vaccines" class="form-label">Vacunas</label>
                <input type="text" class="form-control" id="vaccines" v-model="vaccines">
            </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
            <div class="col mb-3">
                <label for="race" class="form-label">Raza</label>
                <select v-model="optionRace"  name="seleccionRace" id="seleccionRace" class="form-select text-center">
                    <option v-for="(item,index) in race" v-text="item"></option>
                </select>
            </div>
            <div class="col mb-3">
                <label for="exampleInput2" class="form-label">Categoría</label>
                <select  v-model="optionCategory" name="seleccionCategory" id="seleccionCategory" class="form-select  text-center">
                    <option v-for="(item,index) in category" v-text="item"></option>
                </select>
            </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
            <div class="col mb-3">
                <label for="exampleInput2" class="form-label">Género</label>
                <select  v-model="optionGender" name="seleccionGender" id="seleccionGender" class="form-select  text-center">
                    <option v-for="(item,index) in gender" v-text="item"></option>
                </select>
            </div>
        </div>
         <div class="row mt-3 mb-2 mx-2">
            <div class="col mb-3">
                <label for="Description" class="form-label">Descripción</label>
                <textarea  id="Description" class="form-control" name="w3review" rows="4" cols="50" v-model="description">
                
                </textarea>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
</template>