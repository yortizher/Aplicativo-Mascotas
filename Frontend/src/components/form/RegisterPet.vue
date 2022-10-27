<script setup>
import { reactive, ref } from "vue";

//  let race = ["schnauzer","Doderman", "West Highland"]
//  let category = ["Categoria1","Categoria2", "Categoria3"]
//  let gender = ["Hembra", "Macho"]
//  let namePet = "" 
//  let nameOwner = ""
//  let description = ""
//  let age = 0
//  let vaccines = ""
//  let optionRace = ""
//  let optionGender = ""
//  let optionCategory = ""
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
let errorDescription = false
let errorNamePet = false
let errorNameOwner = false
let errorAge = false
let errorVaccines = false 
let errorSeleccionRace = false
let errorSeleccionCategory  = false
let errorSeleccionGender = false 
// let errorNamePet = ref(false)
// let errorNameOwner = ref(false)
// let errorAge = ref(false)
// let errorVaccines = ref(false) 
// let errorSeleccionRace = ref(false)
// let errorSeleccionCategory  = ref(false)
// let errorSeleccionGender = ref(false) 
// let errorSeleccionGender = ref(false) 
// let errorDescription = ref(false)

function addEmployeesData() {
    fieldValidations()? error:handleSubmit();
}

function fieldValidations() {
    error = false;
    if (age === "" || age <= 0 || typeof age !== "number") {
        errorAge = true;
        error = true;
    } else {
        errorAge = false;
    }
    if (namePet === "") {
        errorNamePet = true;
            error = true;
    } else {
        errorNamePet = false;
    }
    if (nameOwner === "") {
        errorNameOwner = true;
        error = true;
    } else {
        errorNameOwner = false;
    }
    // if (description === "") {
    //     errorDescription = true;
    //     error = true;
    // } else {
    //     errorDescription = false;
    // }
     if (vaccines === "") {
        errorVaccines = true;
        error = true;
    } else {
        errorVaccines = false;
    } 
    if(optionRace === "") {
        errorSeleccionRace = true;
    } else {
       errorSeleccionRace = false;
    }
    if(optionGender === "") {
        errorSeleccionCategory = true;
    } else {
       errorSeleccionCategory = false;
    }
    if(optionCategory === "") {
        errorSeleccionGender = true;
    } else {
       errorSeleccionGender = false;
    }
    return error;
}
// export default {
//     setup(){
//         let race = reactive(["schnauzer","Doderman", "West Highland"])
//         let category = reactive(["Categoria1","Categoria2", "Categoria3"])
//         let gender = reactive(["Hembra", "Macho"])
//         let namePet = ref("") 
//         let nameOwner = ref("")
//         let description = ref("")
//         let age = ref(0)
//         let vaccines = ref("")
//         let optionRace = ref("")
//         let optionGender = ref("")
//         let optionCategory = ref("")
//     }
// }
function handleSubmit() {
    // alert(namePet,age, vaccines, nameOwner, description)
   
    }
</script>
<template>
<!-- @submit.prevent="handleSubmit" -->
    <form class="container w-80" >
        <div class="row mt-3 mb-2 mx-2">
             <div class="col mb-3">
                <label for="namePet" class="form-label">Nombre Mascota</label>
                <input type="text" class="form-control" id="namePet" aria-describedby="exampleHelp" v-model="namePet">
                <span class="error" style="color: red" v-if="errorNamePet">El campo nombre de la mascota debe ser un dato valido</span>
            </div>
            <div class="col mb-3">
                <label for="nameOwner" class="form-label">Nombre Dueño</label>
                <input type="text" class="form-control" id="nameOwner" v-model="nameOwner">
                <span class="error" style="color: red" v-if="errorNameOwner">El campo nombre del dueño debe ser un dato valido</span>
            </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
            <div class="col mb-3">
                <label for="age" class="form-label">Edad</label>
                <input type="text" class="form-control" id="age" v-model="age">
                <span class="error" style="color: red" v-if="errorAge">El campo edad debe ser un dato valido</span>
            </div>
            <div class="col mb-3">
                <label for="vaccines" class="form-label">Vacunas</label>
                <input type="text" class="form-control" id="vaccines" v-model="vaccines">
                <span class="error" style="color: red" v-if="errorVaccines">El campo vacunas debe ser un dato valido</span>
            </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
            <div class="col mb-3">
                <label for="race" class="form-label">Raza</label>
                <select v-model="optionRace"  name="seleccionRace" id="seleccionRace" class="form-select text-center">
                    <option v-for="(item,index) in race" v-text="item"></option>
                </select>
                <span class="error" style="color: red" v-if="errorSeleccionRace">El campo raza debe ser un dato valido</span>
            </div>
            <div class="col mb-3">
                <label for="seleccionCategory" class="form-label">Categoría</label>
                <select  v-model="optionCategory" name="seleccionCategory" id="seleccionCategory" class="form-select  text-center">
                    <option v-for="(item,index) in category" v-text="item"></option>
                </select>
                 <span class="error" style="color: red" v-if="errorSeleccionCategory">El campo categoría debe ser un dato valido</span>
            </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
            <div class="col mb-3">
                <label for="seleccionGender" class="form-label">Género</label>
                <select  v-model="optionGender" name="seleccionGender" id="seleccionGender" class="form-select  text-center">
                    <option v-for="(item,index) in gender" v-text="item"></option>
                </select>
                 <span class="error" style="color: red" v-if="errorSeleccionGender">El campo género debe ser un dato valido</span>
            </div>
        </div>
         <div class="row mt-3 mb-2 mx-2">
            <div class="col mb-3">
                <label for="Description" class="form-label">Descripción</label>
                <textarea  id="Description" class="form-control" name="w3review" rows="4" cols="50" v-model="description">
                
                </textarea>
                 <span class="error" style="color: red" v-if="errorDescription">El campo Descripción debe ser un dato valido</span>
            </div>
        </div>
        <!-- <button type="submit" class="btn btn-primary">Guardar</button> -->
        <button type="button" class="btn btn-primary" @click="handleSubmit">Guardar</button>
    </form>
    <div>
        {{namePet}}
    </div>
</template>