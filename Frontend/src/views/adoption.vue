<script setup>
    import { reactive, ref, onMounted} from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { RouterLink, RouterView } from 'vue-router'
    import AdoptionModal from '../components/modal/AdoptionModal.vue'
    // import { , ref, computed } from "vue";


    const router = useRouter();
    const route = useRoute();
   
     const petSelected = ref({});
     let pets = reactive([])
   
    // let pets = [
    //      {
    //         id: crypto.randomUUID(),
    //         petname: "Thor",
    //         age: 1,
    //         breed: "schnauzer",
    //         photo: "https://breed-assets.wisdompanel.com/dog/schnauzer-miniature/Miniature_Schnauzer__Color_Small_File.png",
    //         description: "Thor le gusta las galletas con sabor a pollo, le gusta jugar futbol, los regalos y sobresas, ir al parque y hacer amigos",
    //         gender: "macho",
    //         vaccine: ["vacuna pentavalente", "coronavirus canino"],
    //         owner_name: "Caro Lopez",
    //         specie: "Categoria"
                        
    //     },
    //           {
    //         id: crypto.randomUUID(),
    //         petname: "Rocky",
    //         age: 3,
    //         breed: "Doderman",
    //         photo: "https://filosofiaanimal.com/wp-content/uploads/2021/07/nombre-perros-cachorro.png",
    //         description: "Rocky le gusta las galletas con sabor a pollo, le gusta jugar futbol, los regalos y sobresas, ir al parque y hacer amigos",
    //         gender: "macho",
    //         vaccine: ["moquillo","parvovirosis", "rabia"],
    //         owner_name: "Juan Castro",
    //         specie: "Categoria"
                        
    //     },
    //           {
    //         id: crypto.randomUUID(),
    //         petname: "Nala",
    //         age: 2,
    //         breed: "West Highland",
    //         photo: "https://breed-assets.wisdompanel.com/dog/west-highland-white-terrier/West_Highland_Terrier_Color_Small_File_copy.png",
    //         description: "Nala le gusta las galletas con sabor a pollo, le gusta jugar futbol, los regalos y sobresas, ir al parque y hacer amigos",
    //         gender: "hembra",
    //         vaccine: ["parvovirosis", "rabia"],
    //         owner_name: "Ana Castillo",
    //         specie: "Categoria"
                        
    //     },
    // ]
   
    const  data= async()=> {
        const urlData = "http://localhost:5000/api/v1/toperson"
        await fetch(urlData)
        .then(resp => resp.json())
        .then(data => pets.value= data)
        console.log(pets)
   };

onMounted(() => {
  data(); 
})
// console.log(pets)
    const adoption = (id,petname) => router.push(`/Adoption/${id}/${petname}`)
    const setPetSelected = (pet) => petSelected.value = {...pet}
     console.log(route.params.nombre)
    console.log(router)
</script>
<template>
    <h1 class="title">Adoptar</h1>
    <div class="d-flex container cards">
        <div class="row row-cols-1 row-cols-md-3 g-4"  v-for="pet in pets" :key="pet.id">
            <div class="col w-75 mb-3">
                <div class="card h-100">
                    <img :src="pet.photo" class="card-img-top img" alt="foto de la mascota">
                    <div class="card-body">
                        <h5 class="card-title text-info">{{pet.petname}}</h5>
                        <p class="card-text">{{pet.description}}</p>
                        <a href="#"  class="d-flex justify-content-end ancla" @click="setPetSelected(pet)" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver más</a>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">
                            <button @click="adoption(pet.id,pet.petname)" class="btn btn-info display-6 d-grid">Adoptar</button>
                        </small>
                    </div>
                 <AdoptionModal :pet="petSelected"/>   
                </div>
            </div>
        </div>
    </div> 
</template>
<style scoped>
.title {
    text-align: center;
    margin-top: 10%;
    color: #0d6efd;
}

.cards {
  display: flex;
  flex-direction: column;  
  margin: 8% 12%;
}

.ancla:link {
    color:#0d6efd;
    text-decoration: none;
}
.ancla:visited {
    color:#0000ff;
    text-decoration: underline;
}
.ancla:hover {
    color:#00c3ff;
    text-decoration: underline;
}

.container {
    margin-bottom: 5%;
}
.btn {
    width: 100%;
}
 @media (min-width: 768px) {
    .title {
        margin-top: 8%;
    }
    .cards {
        margin: 5% 25%;
        width: 70%;
    }  
    .img {
        width:70%;
        height:70%;
        margin: 2px auto;
    }
 }
@media (min-width: 1024px) {
   .title {
        margin-top: 2%;
    }
    .cards {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 3% 8%;
    }  
    .img {
        margin: 2px auto;
    }
} 


</style>