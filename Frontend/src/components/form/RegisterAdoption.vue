<script setup>
import { reactive, ref } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'



const {params } = useRoute();
console.log(params)

	
let pet_name = ref(params.namePet)
let owner_name = ref('')
let cc = ref('')
let address = ref('')
let phone = ref('')
let email = ref('')
let occupation = ref('')
let formData = ref({})

const formError = reactive({
        owner_name: false,
        cc: false,
        address: false,
        phone: false,
        email: false,
        occupation: false
    })
const persons = reactive([]);
let error = ref(false)

function fieldValidations() {
    error = false;
    if (owner_name.value === "") {
        formError.owner_name = true;
            error = true;
    } else {
        formError.owner_name = false;
    }
    if (cc.value === "") {
        formError.cc = true;
        error = true;
    } else {
        formError.cc = false;
    }
    if (address.value === "") {
        formError.address = true;
        error = true;
    } else {
        formError.address = false;
    }
     if (phone.value === "") {
        formError.phone = true;
        error = true;
    } else {
        formError.phone = false;
    } 
    if(email.value === "") {
        formError.email = true;
        error = true;
    } else {
       formError.email = false;
    }
    if(occupation.value === "") {
        formError.occupation = true;
        error = true;
    } else {
       formError.occupation = false;
    }
    return error;
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
const addPerson = () => {
    formData.value = {
        pet_name: pet_name.value,
        owner_name: owner_name.value,
        cc: cc.value,
        address: address.value,
        phone: phone.value,
        email: email.value,
        occupation: occupation.value
    }
    // e.target.reset();
    console.log(formData)
}


const createPerson = async()=> {
  const urlDB = `http://localhost:5000/api/v1/torefuge`;
  try {  
    addPerson();
    const response = await fetch(urlDB, {
       method: "POST",
       body: JSON.stringify(formData.value),
    })
    const data = await response.json();
    console.log(data)
  }catch (error) {
    console.log(error)
  }
};
//   const formData = new FormData()
//   formData.append("pet_name", pet_name.value);
//   formData.append("owner_name", owner_name.value);
//   formData.append("cc", cc.value);
//   formData.append("address", address.value);
//   formData.append("phone", phone.value);
//   formData.append("email", email.value);
//   formData.append("occupation", occupation.value);
    // clear();
//   fetch(urlDB, {
//     method: "POST",
//      body: JSON.stringify(formData),
//     headers: {
//           'Content-Type': 'application/json; charset=utf-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((response) => { 
//         message(
//             "center",
//             "Creaci??n completada",
//             "Se ha creado correctamente el registro",
//             1500
//         );
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
//  message(
//             "center",
//             "Creaci??n completada",
//             "Se ha creado correctamente el registro",
//             1500
//         );
const clear=() =>{
   owner_name.value = '';
   cc.value = '';
   email.value = '';
   phone.value= '';
   address.value= '';
   occupation.value = '';
}

const  handleSubmit = () => fieldValidations()? error : createPerson();


</script>
<template>
     <form class="container contents w-100" @submit.prevent="handleSubmit">
        <div class="row mt-3 mb-2 mx-2">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-3">
                <label for="name" class="form-label">Nombre Mascota</label>
                <input type="text"  readonly class="form-control" id="name" aria-describedby="exampleHelp"  v-model="pet_name">
            </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="name" aria-describedby="exampleHelp" v-model="owner_name">
                <span class="error" style="color: red" v-if="formError.owner_name">El campo nombre debe ser un dato valido</span>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <label for="identification" class="form-label">C??dula</label>
                <input type="text" class="form-control" id="identification" v-model="cc">
                <span class="error" style="color: red" v-if="formError.cc">El campo c??dula de la mascota debe ser un dato valido</span>
            </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
         <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
            <label for="direction" class="form-label">Direcci??n</label>
            <input type="text" class="form-control" id="direction" v-model="address">
            <span class="error" style="color: red" v-if="formError.address">El campo direcci??n de la mascota debe ser un dato valido</span>
        </div>
         <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
            <label for="phone" class="form-label">Tel??fono</label>
            <input type="text" class="form-control" id="phone" v-model="phone">
            <span class="error" style="color: red" v-if="formError.phone">El campo tel??fono de la mascota debe ser un dato valido</span>
        </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="email">
            <span class="error" style="color: red" v-if="formError.email">El campo email de la mascota debe ser un dato valido</span>
        </div>
         <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
            <label for="profession" class="form-label">Profesi??n</label>
            <input type="text" class="form-control" id="profession" v-model="occupation">
            <span class="error" style="color: red" v-if="formError.occupation">El campo profesi??n de la mascota debe ser un dato valido</span>
        </div>
        </div>
        <div class="container-btn">
             <button type="submit" class="btn btn-info ">S??</button>
            <RouterLink to="/Adoption" class="btn btn-info ">No</RouterLink>
        </div>
    </form>
</template>
<style scoped>

.container-btn {
    display: flex;
    flex-direction: column;
}
.btn {
    width: 50%;
    margin: 2px auto 8px;
}
 @media (min-width: 768px) {
  
    .btn {
        width: 40%;
        margin: 2px auto 8px;
    }
    .container-btn {
    display: flex;
    flex-direction: row;
}
    
 }
@media (min-width: 1024px) { 
    .btn {
        width: 20%;
        padding: 5px 10px;
        margin: 2px 20px;   
    }
} 



</style>
