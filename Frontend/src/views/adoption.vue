<script setup>
    import { reactive } from '@vue/reactivity'
    import Card from '../components/card/Card.vue'
    import { useRouter, useRoute } from 'vue-router'
    import { RouterLink, RouterView } from 'vue-router'
    import Modal from '../components/modal/Modal.vue'
  
     const route = useRouter();
    // console.log(params.id)
    
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
    
    
    function adoption(name) {
       route.push({path:`/Adoption/${name}`})
    }
</script>
<template>
    <h1>Adoptar</h1>
    <div class="d-flex container">
        <div class="row row-cols-1 row-cols-md-3 g-4"  v-for="pet in pets" :key="pet.id">
            <div class="col w-75">
                <div class="card h-100">
                    <img :src="pet.photo" class="card-img-top" alt="..." width="280" height="280">
                    <div class="card-body">
                        <h5 class="card-title">{{pet.name}}</h5>
                        <p class="card-text">{{pet.description}}</p>
                        <!-- <router-link :to={{}} data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Ver más</router-link> -->
                        <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver más</a>
                    </div>
                    <!-- <div class="d-grid gap-2 mb-3 mt-5 text-center">
                      <router-link :to={{/AdoptionRegister/pet.name}} href="#">Adoptar</router-link>
                    </div> -->
                    <div class="card-footer">
                        <small class="text-muted">
                            <button @click="adoption(pet.name)">Adoptar</button>
                        </small>
                    </div>
                 <Modal />   
                </div>
            </div>
           
        </div>
        
    </div> 
    <!-- <Modal/> -->

</template>