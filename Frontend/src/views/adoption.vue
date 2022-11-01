<script setup>
    import { reactive, ref, onMounted} from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { RouterLink, RouterView } from 'vue-router'
    import AdoptionModal from '../components/modal/AdoptionModal.vue'
    // import { , ref, computed } from "vue";
  
     const route = useRouter();
     const petSelected = ref({});
    // let pets = reactive([])
    // let pets = []
    let pets = [
         {
            id: crypto.randomUUID(),
            name: "Thor",
            age: 1,
            race: "schnauzer",
            photo: "https://breed-assets.wisdompanel.com/dog/schnauzer-miniature/Miniature_Schnauzer__Color_Small_File.png",
            description: "Thor le gusta las galletas con sabor a pollo, le gusta jugar futbol, los regalos y sobresas, ir al parque y hacer amigos",
            gender: "macho",
            condition: "Adopción",
            vaccines: ["vacuna pentavalente", "coronavirus canino"],
            owner: "Caro Lopez",
            category: "Categoria"
                        
        },
              {
            id: crypto.randomUUID(),
            name: "Rocky",
            age: 3,
            race: "Doderman",
            photo: "https://filosofiaanimal.com/wp-content/uploads/2021/07/nombre-perros-cachorro.png",
            description: "Rocky le gusta las galletas con sabor a pollo, le gusta jugar futbol, los regalos y sobresas, ir al parque y hacer amigos",
            gender: "macho",
            condition: "Adopción",
            vaccines: ["moquillo","parvovirosis", "rabia"],
            owner: "Juan Castro",
            category: "Categoria"
                        
        },
              {
            id: crypto.randomUUID(),
            name: "Nala",
            age: 2,
            race: "West Highland",
            photo: "https://breed-assets.wisdompanel.com/dog/west-highland-white-terrier/West_Highland_Terrier_Color_Small_File_copy.png",
            description: "Nala le gusta las galletas con sabor a pollo, le gusta jugar futbol, los regalos y sobresas, ir al parque y hacer amigos",
            gender: "hembra",
            condition: "Adopción",
            vaccines: ["parvovirosis", "rabia"],
            owner: "Ana Castillo",
            category: "Categoria"
                        
        },
    ]
    let person = reactive([
        {
            identification: '',
            direction: '',
            phone: '',
            profession: ''
        }
    ])
//     const  data= async()=>   {
//     // metodo para la logica pertinente
//         const urlData = "http://localhost:5000/api/v1/toperson"
//         // const resp = await fetch(urlData)
//         // console.log(resp)
//         // const db = await resp.json()
//         fetch(urlData)
//         .then(response => response.json())
//         .then(data => pets.value=data)
//         console.log(pets)
//    };



// onMounted(() => {
//   data(); 
// })
    
    const adoption = name => route.push(`/Adoption/${name}`)
    const setPetSelected = (pet) => petSelected.value = {...pet}
    
</script>
<template>
    <h1 class="title">Adoptar</h1>
    <div class="d-flex container cards">
        <div class="row row-cols-1 row-cols-md-3 g-4"  v-for="pet in pets" :key="pet.id">
            <div class="col w-75 mb-3">
                <div class="card h-100">
                    <img :src="pet.photo" class="card-img-top img" alt="foto de la mascota">
                    <div class="card-body">
                        <h5 class="card-title text-info">{{pet.name}}</h5>
                        <p class="card-text">{{pet.description}}</p>
                        <a href="#"  class="d-flex justify-content-end ancla" @click="setPetSelected(pet)" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver más</a>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">
                            <button @click="adoption(pet.name)" class="btn btn-info display-6 d-grid">Adoptar</button>
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