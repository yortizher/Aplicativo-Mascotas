<script setup>
import { reactive, ref } from "vue";

const race = reactive(["schnauzer","Doderman", "West Highland"]);
const category = reactive(["Categoria1","Categoria2", "Categoria3"]);
const gender = reactive(["Hembra", "Macho"]);

const formPet = reactive({
    namePet : '', 
    description : '',
    age : 0,
    vaccines : '',
    optionRace: '',
    optionGender : '',
    optionCategory : '',
})

const formErrorPet = reactive({
    gender : false,
    namePet : false, 
    description : false,
    age : false,
    vaccines : false,
    seleccionRace : false,
    seleccionGender: false,
    seleccionCategory : false,
    })

const petsAdoption = reactive([]);
let errorPet = ref(false);

function fieldValidationsPet() {
    errorPet = false;
    if (formPet.age === "" || formPet.age <= 1) {
        formErrorPet.age = true;
        errorPet = true;
    } else {
       formErrorPet.age = false;
    }
    if (formPet.namePet === "") {
       formErrorPet.namePet = true;
        errorPet = true;
    } else {
       formErrorPet.namePet = false;
    }
    if (formPet.description === "") {
       formErrorPet.description = true;
        errorPet = true;
    } else {
        formErrorPet.description = false;
    }
     if (formPet.vaccines === "") {
        formErrorPet.vaccines = true;
        errorPet = true;
    } else {
       formErrorPet.vaccines = false;
    } 
    if(formPet.optionRace === "") {
       formErrorPet.seleccionRace = true;
       errorPet = true;
    } else {
      formErrorPet.seleccionRace = false;
    }
    if(formPet.optionGender === "") {
       formErrorPet.seleccionGender = true;
       errorPet = true;
    } else {
       formErrorPet.seleccionGender = false;
    }
    if(formPet.optionCategory === "") {
       formErrorPet.seleccionCategory = true;
    } else {
       formErrorPet.seleccionCategory = false;
    }
    return errorPet;
}

const addPet = () => {
    petsAdoption.push(formPet)
    message(
      "center",
      "Registro exitoso",
      "Se ha guardado correctamente",
      1500,
    )
}

const handleSubmitPet = () => fieldValidationsPet()? errorPet : addPet();

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
</script>
<template>
     <h3>Mascota</h3>
    <form class="container w-50"  @submit.prevent="handleSubmitPet">
        <div class="row mt-3 mb-2 mx-2">
             <div class="col mb-3">
                <label for="namePet" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="namePet" aria-describedby="exampleHelp" v-model="formPet.namePet">
                <span class="error" style="color: red" v-if="formErrorPet.namePet">El campo nombre de la mascota debe ser un dato valido</span>
            </div>
             <div class="col mb-3">
                <label for="age" class="form-label">Edad</label>
                <input type="text" class="form-control" id="age" v-model="formPet.age">
                <span class="error" style="color: red" v-if="formErrorPet.age">El campo edad debe ser un dato valido</span>
            </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
            <div class="col mb-3">
                <label for="vaccines" class="form-label">Vacunas</label>
                <input type="text" class="form-control" id="vaccines" v-model="formPet.vaccines">
                <span class="error" style="color: red" v-if="formErrorPet.vaccines">El campo vacunas debe ser un dato valido</span>
            </div>
             <div class="col mb-3">
                <label for="seleccionGender" class="form-label">Género</label>
                <select  v-model="formPet.optionGender" name="seleccionGender" id="seleccionGender" class="form-select  text-center">
                    <option v-for="(item,index) in gender" v-text="item"></option>
                </select>
                 <span class="error" style="color: red" v-if="formErrorPet.seleccionGender">El campo género debe ser un dato valido</span>
            </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
            <div class="col mb-3">
                <label for="race" class="form-label">Raza</label>
                <select v-model="formPet.optionRace"  name="seleccionRace" id="seleccionRace" class="form-select text-center">
                    <option v-for="(item,index) in race" v-text="item"></option>
                </select>
                <span class="error" style="color: red" v-if="formErrorPet.seleccionRace">El campo raza debe ser un dato valido</span>
            </div>
            <div class="col mb-3">
                <label for="seleccionCategory" class="form-label">Categoría</label>
                <select  v-model="formPet.optionCategory" name="seleccionCategory" id="seleccionCategory" class="form-select  text-center">
                    <option v-for="(item,index) in category" v-text="item"></option>
                </select>
                 <span class="error" style="color: red" v-if="formErrorPet.seleccionCategory">El campo categoría debe ser un dato valido</span>
            </div>
        </div>
         <div class="row mt-3 mb-2 mx-2">
            <div class="col mb-3">
                <label for="description" class="form-label">Descripción</label>
                <textarea  id="description" class="form-control" name="description" rows="4" cols="50" v-model="formPet.description">    
                </textarea>
                 <span class="error" style="color: red" v-if="formErrorPet.description">El campo Descripción debe ser un dato valido</span>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
</template>