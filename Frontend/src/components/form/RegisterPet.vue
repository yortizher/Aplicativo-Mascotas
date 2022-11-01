<script setup>
import { reactive, ref } from "vue";

// const petsAdoption = reactive([]);
let petsAdoption = [];
let errorPet = ref(false);
const race = reactive(["schnauzer","Doderman", "West Highland"]);
const category = reactive(["Categoria1","Categoria2", "Categoria3"]);
const gender = reactive(["Hembra", "Macho"]);
const select = ref('')
let formPet = reactive({
    namePet : '', 
    description : '',
    age : 0,
    vaccines : '',
    optionRace: '',
    optionGender : '',
    optionCategory : '',
    name: '',
    identification: '',
    direction: '',
    phone: '',
    email: '',
    profession: '',
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
    name: false ,
    identification: false,
    direction: false,
    phone: false,
    email: false,
    profession: false,
    })



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
    if (formPet.name === "") {
        formErrorPet.name = true;
        errorPet = true;
    } else {
        formErrorPet.name = false;
    }
    if (formPet.identification === "") {
        formErrorPet.identification = true;
        errorPet = true;
    } else {
        formErrorPet.identification = false;
    }
    if (formPet.direction === "") {
        formErrorPet.direction = true;
        errorPet = true;
    } else {
        formErrorPet.direction = false;
    }
     if (formPet.phone === "") {
        formErrorPet.phone = true;
        errorPet = true;
    } else {
        formErrorPet.phone = false;
    } 
    if(formPet.email === "") {
        formErrorPet.email = true;
        errorPet = true;
    } else {
       formErrorPet.email = false;
    }
    if(formPet.profession === "") {
        formErrorPet.profession = true;
        errorPet = true;
    } else {
       formErrorPet.profession = false;
    }
    return errorPet;
}

const addPet = (e) => {
    let obj = JSON.parse(JSON.stringify(formPet))
     //  petsAdoption.push(formPet)
    petsAdoption = [...petsAdoption, obj]
    message(
      "center",
      "Registro exitoso",
      "Se ha guardado correctamente",
      1500,
    )
    console.log(petsAdoption)
    e.target.reset();
    console.log(petsAdoption)
    // clear();
}
const clear=() =>{
    formPet.namePet = ''
    formPet.description = ''
    formPet.age = 0
    formPet.vaccines = ''
    formPet.optionRace = ''
    formPet.optionGender = ''
    formPet.optionCategory =''
    formPet.name = ''
    formPet.identification= ''
    formPet.direction = ''
    formPet.phone = ''
    formPet.email = ''
    formPet.profession = ''
}

const handleSubmitPet = (e) => fieldValidationsPet()? errorPet : addPet(e);

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
    <form class="container contents w-100"  @submit.prevent="handleSubmitPet">
        <div>
            <h3 class="sub-title">Mascota</h3>
            <div class="row mt-3 mb-2 mx-2">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                    <label for="namePet" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="namePet" aria-describedby="exampleHelp" v-model="formPet.namePet">
                    <span class="error" style="color: red" v-if="formErrorPet.namePet">El campo nombre de la mascota debe ser un dato valido</span>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                    <label for="age" class="form-label">Edad</label>
                    <input type="text" class="form-control" id="age" v-model="formPet.age">
                    <span class="error" style="color: red" v-if="formErrorPet.age">El campo edad debe ser un dato valido</span>
                </div>
            </div>
            <div class="row mt-3 mb-2 mx-2">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                    <label for="vaccines" class="form-label">Vacunas</label>
                    <input type="text" class="form-control" id="vaccines" v-model="formPet.vaccines">
                    <span class="error" style="color: red" v-if="formErrorPet.vaccines">El campo vacunas debe ser un dato valido</span>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                    <label for="seleccionGender" class="form-label">Género</label>
                    <select  v-model="formPet.optionGender" :ref="select" name="seleccionGender" id="seleccionGender" class="form-select  text-center">
                        <option v-for="(item,index) in gender" v-text="item"></option>
                    </select>
                    <span class="error" style="color: red" v-if="formErrorPet.seleccionGender">El campo género debe ser un dato valido</span>
                </div>
            </div>
            <div class="row mt-3 mb-2 mx-2">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                    <label for="race" class="form-label">Raza</label>
                    <select v-model="formPet.optionRace"  :ref="select" name="seleccionRace" id="seleccionRace" class="form-select text-center">
                        <option v-for="(item,index) in race" v-text="item"></option>
                    </select>
                    <span class="error" style="color: red" v-if="formErrorPet.seleccionRace">El campo raza debe ser un dato valido</span>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                    <label for="seleccionCategory" class="form-label">Categoría</label>
                    <select  v-model="formPet.optionCategory"  :ref="select" name="seleccionCategory" id="seleccionCategory" class="form-select  text-center">
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
        </div>
        <div>
            <h3 class="sub-title">Persona</h3>
             <div class="row mt-3 mb-2 mx-2">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="name" aria-describedby="exampleHelp" v-model="formPet.name">
                <span class="error" style="color: red" v-if="formErrorPet.name">El campo nombre debe ser un dato valido</span>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <label for="identification" class="form-label">Cédula</label>
                <input type="text" class="form-control" id="identification" v-model="formPet.identification">
                <span class="error" style="color: red" v-if="formErrorPet.identification">El campo cédula de la mascota debe ser un dato valido</span>
            </div>
            </div>
            <div class="row mt-3 mb-2 mx-2">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <label for="direction" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="direction" v-model="formPet.direction">
                <span class="error" style="color: red" v-if="formErrorPet.direction">El campo dirección de la mascota debe ser un dato valido</span>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <label for="phone" class="form-label">Teléfono</label>
                <input type="text" class="form-control" id="phone" v-model="formPet.phone">
                <span class="error" style="color: red" v-if="formErrorPet.phone">El campo teléfono de la mascota debe ser un dato valido</span>
            </div>
            </div>
            <div class="row mt-3 mb-2 mx-2">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="formPet.email">
                <span class="error" style="color: red" v-if="formErrorPet.email">El campo email de la mascota debe ser un dato valido</span>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <label for="profession" class="form-label">Profesión</label>
                <input type="text" class="form-control" id="profession" v-model="formPet.profession">
                <span class="error" style="color: red" v-if="formErrorPet.profession">El campo profesión de la mascota debe ser un dato valido</span>
            </div>
            </div>
        </div>
        <button type="submit" class="btn btn-info display-6 d-grid">Guardar</button>
    </form>
</template>
<style scoped>
.btn {
    width: 90%;
    margin: 2px auto 8px;
}

.title {
      text-align: center;
      margin-top: 10%;
      color: #0d6efd;
  }
  .sub-title {
    text-align: center;
    margin-top: 10%;
    color: #718093;
  }
  .contents {
      width: 75%;
  }

 @media (min-width: 768px) {
  .sub-title {
    text-align: left;
  }
    .contents {
      width: 50%;
  }
 }
@media (min-width: 1024px) { 
    .btn {
     width: 70%;
    }
} 

</style>