<script setup>
  import { reactive, ref, onMounted} from 'vue'

const petsAdoption = reactive([]);
let errorPet = ref(false);
const race = reactive([]);
const category = reactive(["Categoria1","Categoria2", "Categoria3"]);
const gender = reactive(["Hembra", "Macho"]);
const select = ref('')

let namePet = ref('') 
let description = ref('')
let age= ref('')
let vaccines = ref('')
let optionRace= ref('')
let optionGender = ref('')
let optionCategory = ref('')
let name= ref('')
let identification= ref('')
let direction= ref('')
let phone= ref('')
let email= ref('')
let profession= ref('')

const dataRace= async()=> {
        const urlData = "http://localhost:5000/api/v1/race"
        // const resp = await fetch(urlData)
        // // console.log(resp)
        // const db = await resp.json()
        // pets.value= db
        await fetch(urlData)
        .then(resp => resp.json())
        .then(data => race.value= data)
        console.log(race)
   };
onMounted(() => {
  dataRace(); 
})

// let formPet = reactive({
//     namePet : '', 
//     description : '',
//     age : 0,
//     vaccines : '',
//     optionRace: '',
//     optionGender : '',
//     optionCategory : '',
//     name: '',
//     identification: '',
//     direction: '',
//     phone: '',
//     email: '',
//     profession: '',
// })

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
    if (age.value === "" || age <= 1) {
        formErrorPet.age = true;
        errorPet = true;
    } else {
       formErrorPet.age = false;
    }
    if (namePet.value === "") {
       formErrorPet.namePet = true;
        errorPet = true;
    } else {
       formErrorPet.namePet = false;
    }
    if (description.value === "") {
       formErrorPet.description = true;
        errorPet = true;
    } else {
        formErrorPet.description = false;
    }
     if (vaccines.value === "") {
        formErrorPet.vaccines = true;
        errorPet = true;
    } else {
       formErrorPet.vaccines = false;
    } 
    if(optionRace.value === "") {
       formErrorPet.seleccionRace = true;
       errorPet = true;
    } else {
      formErrorPet.seleccionRace = false;
    }
    if(optionGender.value === "") {
       formErrorPet.seleccionGender = true;
       errorPet = true;
    } else {
       formErrorPet.seleccionGender = false;
    }
    if(optionCategory.value === "") {
       formErrorPet.seleccionCategory = true;
    } else {
       formErrorPet.seleccionCategory = false;
    }
    if (name.value === "") {
        formErrorPet.name = true;
        errorPet = true;
    } else {
        formErrorPet.name = false;
    }
    if (identification.value === "") {
        formErrorPet.identification = true;
        errorPet = true;
    } else {
        formErrorPet.identification = false;
    }
    if (direction.value === "") {
        formErrorPet.direction = true;
        errorPet = true;
    } else {
        formErrorPet.direction = false;
    }
     if (phone.value === "") {
        formErrorPet.phone = true;
        errorPet = true;
    } else {
        formErrorPet.phone = false;
    } 
    if(email.value === "") {
        formErrorPet.email = true;
        errorPet = true;
    } else {
       formErrorPet.email = false;
    }
    if(profession.value === "") {
        formErrorPet.profession = true;
        errorPet = true;
    } else {
       formErrorPet.profession = false;
    }
    return errorPet;
}
const createPetsAdoption = () => {
  const urlDB = `http://localhost:5000/api/v1/`;
  fetch(urlDB, {
    method: "POST",
    body: petsAdoption,
  })
    .then((response) => response)
    .then((response) => {
      data();
      alert(
        "center",
        "Creación completada",
        "Se ha creado correctamente la categoría",
        1500
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const addPet = (e) => {
    let formPet = {
        namePet : namePet.value, 
        description : description.value,
        age : age.value,
        vaccines : vaccines.value,
        optionRace: optionRace.value,
        optionGender : optionGender.value,
        optionCategory : optionCategory.value,
        name: name.value,
        identification: identification.value,
        direction: direction.value,
        phone: phone.value,
        email: email.value,
        profession: profession.value,
    }
    //   petsAdoption.push(formPet)
    createPetsAdoption(formPet)
    console.log(petsAdoption)
    e.target.reset();
    console.log(petsAdoption)
    // clear();
}
const clear=() =>{
    namePet.value = ''
    description.value = ''
    age.value = 0
    vaccines.value = ''
    optionRace = ''
    optionGender = ''
    optionCategory =''
    name = ''
    identification= ''
    direction = ''
    phone = ''
    email = ''
    profession = ''
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
                    <input type="text" class="form-control" id="namePet" aria-describedby="exampleHelp" v-model="namePet">
                    <span class="error" style="color: red" v-if="formErrorPet.namePet">El campo nombre de la mascota debe ser un dato valido</span>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                    <label for="age" class="form-label">Edad</label>
                    <input type="text" class="form-control" id="age" v-model="age">
                    <span class="error" style="color: red" v-if="formErrorPet.age">El campo edad debe ser un dato valido</span>
                </div>
            </div>
            <div class="row mt-3 mb-2 mx-2">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                    <label for="vaccines" class="form-label">Vacunas</label>
                    <input type="text" class="form-control" id="vaccines" v-model="vaccines">
                    <span class="error" style="color: red" v-if="formErrorPet.vaccines">El campo vacunas debe ser un dato valido</span>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                    <label for="seleccionGender" class="form-label">Género</label>
                    <select  v-model="optionGender" :ref="select" name="seleccionGender" id="seleccionGender" class="form-select  text-center">
                        <option v-for="(item,index) in gender" v-text="item" :key="index"></option>
                    </select>
                    <span class="error" style="color: red" v-if="formErrorPet.seleccionGender">El campo género debe ser un dato valido</span>
                </div>
            </div>
            <div class="row mt-3 mb-2 mx-2">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                    <label for="race" class="form-label">Raza</label>
                    <select v-model="optionRace"  :ref="select" name="seleccionRace" id="seleccionRace" class="form-select text-center">
                        <option v-for="(item,index) in race.value" v-text="item.name" :key="index"></option>
                    </select>
                    <span class="error" style="color: red" v-if="formErrorPet.seleccionRace">El campo raza debe ser un dato valido</span>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                    <label for="seleccionCategory" class="form-label">Categoría</label>
                    <select  v-model="optionCategory"  :ref="select" name="seleccionCategory" id="seleccionCategory" class="form-select  text-center">
                        <option v-for="(item,index) in category" v-text="item" :key="index"></option>
                    </select>
                    <span class="error" style="color: red" v-if="formErrorPet.seleccionCategory">El campo categoría debe ser un dato valido</span>
                </div>
            </div>
            <div class="row mt-3 mb-2 mx-2">
                <div class="col mb-3">
                    <label for="description" class="form-label">Descripción</label>
                    <textarea  id="description" class="form-control" name="description" rows="4" cols="50" v-model="description">    
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
                <input type="text" class="form-control" id="name" aria-describedby="exampleHelp" v-model="name">
                <span class="error" style="color: red" v-if="formErrorPet.name">El campo nombre debe ser un dato valido</span>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <label for="identification" class="form-label">Cédula</label>
                <input type="text" class="form-control" id="identification" v-model="identification">
                <span class="error" style="color: red" v-if="formErrorPet.identification">El campo cédula de la mascota debe ser un dato valido</span>
            </div>
            </div>
            <div class="row mt-3 mb-2 mx-2">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <label for="direction" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="direction" v-model="direction">
                <span class="error" style="color: red" v-if="formErrorPet.direction">El campo dirección de la mascota debe ser un dato valido</span>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <label for="phone" class="form-label">Teléfono</label>
                <input type="text" class="form-control" id="phone" v-model="phone">
                <span class="error" style="color: red" v-if="formErrorPet.phone">El campo teléfono de la mascota debe ser un dato valido</span>
            </div>
            </div>
            <div class="row mt-3 mb-2 mx-2">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="email">
                <span class="error" style="color: red" v-if="formErrorPet.email">El campo email de la mascota debe ser un dato valido</span>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <label for="profession" class="form-label">Profesión</label>
                <input type="text" class="form-control" id="profession" v-model="profession">
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