<script setup>
  import { reactive, ref, onMounted} from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { RouterLink, RouterView } from 'vue-router'

    const router = useRouter();
    const route = useRoute();
    // console.log(route.params.nombre)
    console.log(router)


const formPet = reactive([])
const petsAdoption = reactive([]);
let genders = reactive(["Mancho", "Hembra"]);
let errorPet = ref(false);
const category = reactive([]);
const race = reactive([]);


let petname = ref('') 
let description = ref('')
let age= ref('')
let gender = ref('')
let vaccine = ref('')
let breed = ref('')
let specie = ref('')
let name = ref('') 
let identity_card= ref('')
let phone= ref('')
let address= ref('')
let occupation= ref('')
let email= ref('')



const dataRace= async()=> {
        const urlData = "http://localhost:5000/api/v1/race"
        await fetch(urlData)
        .then(resp => resp.json())
        .then(data => race.value= data)   
   };

  
const dataCategory= async()=> {
        const urlData = "http://localhost:5000/api/v1/species"
        await fetch(urlData)
        .then(resp => resp.json())
        .then(data => category.value= data)
   };

onMounted(() => {
  dataRace();
  dataCategory();
})

const formErrorPet = reactive({
        petname:  false,
        description:false,
        age: false,
        seleccionGender: false,
        breed: false,
        specie: false,
        vaccine: false,
        name: false,
        identity_card: false,
        phone: false,
        address: false,
        occupation: false,
        email: false,
        seleccionRace : false,
        seleccionCategory : false, 
    })



function fieldValidationsPet() {
    errorPet = false;
    if (age.value === "" || age <= 1) {
        formErrorPet.age = true;
        errorPet = true;
    } else {
       formErrorPet.age = false;
    }
    if (petname.value === "") {
       formErrorPet.petname = true;
        errorPet = true;
    } else {
       formErrorPet.petname = false;
    }
    if (description.value === "") {
       formErrorPet.description = true;
        errorPet = true;
    } else {
        formErrorPet.description = false;
    }
     if (vaccine.value === "") {
        formErrorPet.vaccine = true;
        errorPet = true;
    } else {
       formErrorPet.vaccine = false;
    } 
    if(breed.value === "") {
       formErrorPet.seleccionRace = true;
       errorPet = true;
    } else {
      formErrorPet.seleccionRace = false;
    }
    if(gender.value === "") {
       formErrorPet.seleccionGender = true;
       errorPet = true;
    } else {
       formErrorPet.seleccionGender = false;
    }
    if(specie.value === "") {
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
    if (identity_card.value === "") {
        formErrorPet.identity_card = true;
        errorPet = true;
    } else {
        formErrorPet.identity_card = false;
    }
    if (address.value === "") {
        formErrorPet.address = true;
        errorPet = true;
    } else {
        formErrorPet.address = false;
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
    if(occupation.value === "") {
        formErrorPet.occupation = true;
        errorPet = true;
    } else {
       formErrorPet.occupation = false;
    }
    return errorPet;
}
const createPetsAdoption = () => {
  const formData = new FormData()
    formData.append("petname", petname.value);
    formData.append("description",description.value);
    formData.append("age", age.value);
    formData.append("gender", gender.value);
    formData.append("breed", breed.value);
    formData.append("specie", specie.value);
    formData.append("vaccine", vaccine.value);
    formData.append("name",name.value);
    formData.append("identity_card", identity_card.value);
    formData.append("phone", phone.value);
    formData.append("address", address.value);
    formData.append("occupation",  occupation.value);
    formData.append("email", email.value);
  const urlDB = `http://localhost:5000/api/v1/toperson`;
  fetch(urlDB, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
          'Content-Type': 'application/json; charset=utf-8'
    }
  })
    .then((response) => response)
    .then((response) => { 
        message(
            "center",
            "Creación completada",
            "Se ha creado correctamente el registro",
            1500
        );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    clear();
};

const addPet = () => {
    
    
    //   petsAdoption.push( formData)
    console.log("Data mascota", formData)
   return  createPetsAdoption(formData)
    // e.target.reset();
    // console.log("Data mascota",petsAdoption)
    clear();
}
const clear=() =>{
   petname.value = '';
   description.value = '';
   age.value= '';
   gender.value = '';
   vaccine.value = '';
   breed.value = '';
   specie.value = '';
   name.value = ''; 
   identity_card.value= '';
   phone.value= '';
   address.value= '';
   occupation.value= '';
   email.value= '';
}
// const handleSubmitPet = (e) => fieldValidationsPet()? errorPet : addPet(e);
const handleSubmitPet = () => fieldValidationsPet()? errorPet : createPetsAdoption();

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
                    <input type="text" class="form-control" id="namePet" aria-describedby="exampleHelp" v-model="petname">
                    <span class="error" style="color: red" v-if="formErrorPet.petname">El campo nombre de la mascota debe ser un dato valido</span>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                    <label for="age" class="form-label">Edad</label>
                    <input type="text" class="form-control" id="age" v-model.number="age">
                    <span class="error" style="color: red" v-if="formErrorPet.age">El campo edad debe ser un dato valido</span>
                </div>
            </div>
            <div class="row mt-3 mb-2 mx-2">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                    <label for="vaccines" class="form-label">Vacunas</label>
                    <input type="text" class="form-control" id="vaccines" v-model="vaccine">
                    <span class="error" style="color: red" v-if="formErrorPet.vaccine">El campo vacunas debe ser un dato valido</span>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                    <label for="seleccionGender" class="form-label">Género</label>
                   <select v-model="gender"  name="seleccionRace" id="seleccionGender" class="form-select text-center">
                        <option v-for="(item,index) in genders" v-text="item" :key="index"></option>
                    </select>
                    <span class="error" style="color: red" v-if="formErrorPet.seleccionGender">El campo género debe ser un dato valido</span>
                </div>
            </div>
            <div class="row mt-3 mb-2 mx-2">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                    <label for="race" class="form-label">Raza</label>
                    <select v-model="breed" name="seleccionRace" id="seleccionRace" class="form-select text-center">
                        <option v-for="(item,index) in race.value" v-text="item.name" :key="index"></option>
                    </select>
                        <span class="error" style="color: red" v-if="formErrorPet.seleccionRace">El campo raza debe ser un dato valido</span>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                        <label for="seleccionCategory" class="form-label">Categoría</label>
                        <select  v-model="specie"  name="seleccionCategory" id="seleccionCategory" class="form-select  text-center">
                            <option v-for="(item,index) in category.value" v-text="item.name" :key="index"></option>
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
                <input type="text" class="form-control" id="identification" v-model="identity_card">
                <span class="error" style="color: red" v-if="formErrorPet.identity_card">El campo cédula de la mascota debe ser un dato valido</span>
            </div>
            </div>
            <div class="row mt-3 mb-2 mx-2">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <label for="direction" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="direction" v-model="address">
                <span class="error" style="color: red" v-if="formErrorPet.address">El campo dirección de la mascota debe ser un dato valido</span>
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
                <input type="text" class="form-control" id="profession" v-model="occupation">
                <span class="error" style="color: red" v-if="formErrorPet.occupation">El campo profesión de la mascota debe ser un dato valido</span>
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