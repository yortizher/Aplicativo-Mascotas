<script setup>
    import { reactive } from '@vue/reactivity'
    import Card from '../components/card/Card.vue'
    
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
                        <a href="#">Ver más</a>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">
                            <button>Adoptar</button>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>