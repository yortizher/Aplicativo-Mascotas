<script setup>
    import { reactive, ref, onMounted} from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { RouterLink, RouterView } from 'vue-router'
    import AdoptionModal from '../components/modal/AdoptionModal.vue'
  

    const router = useRouter();
    const route = useRoute();
   
     const petSelected = ref({});
    let pets = reactive([])
   
   
   
    const  data= ()=> {
        const urlData = "http://localhost:5000/api/v1/toperson"
       fetch(urlData)
        .then(resp => resp.json())
        .then(data => pets.value= data)
        console.log(pets)
   };

onMounted(() => {
  data(); 
})
console.log(pets)
    const adoption = (id,pet_name) => router.push(`/Adoption/${id}/${pet_name}`)
    const setPetSelected = (pet) => petSelected.value = {...pet}

</script>
<template>
    <div class="row m-5">
            <h2 class="title text-center my-4">Adoptar</h2>
            <div class="col pets">
                <div class="card" v-for="pet in pets.value" :key="pet.id">
                    <img :src="pet.pet_url" class="card-img-top img" alt="foto de la mascota">
                    <div class="card-body">
                        <div class="card-header">
                            <h5 class="card-title text-info">{{pet.pet_name}}</h5>
                        </div>
                        <div class="card-desc">
                             <p class="card-text">{{pet.description}}</p>
                            <a href="#"  class="d-flex justify-content-end ancla" @click="setPetSelected(pet)" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver más</a>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">
                                <button @click="adoption(pet.id,pet.pet_name)" class="btn btn-info display-6 d-grid">Adoptar</button>
                            </small>
                        </div>
                        <AdoptionModal :pet="petSelected"/> 
                    </div>
                </div>
            </div>          
        </div>    
</template>


<style scoped>

.pets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 1rem 13px;
  gap: 36px;
  border: none !important;
  perspective: 800px; 
}

.card-body { 
    position: relative;
}

.pets .card img {
    width: 100%;
    height: 11rem;
    object-fit: cover;
}

.title {
    text-align: center;
    margin-top: 10%;
    color: #0d6efd;
}
.container-main {
    display: flex;
    flex-direction: column;
    background: red;
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
        object-fit: cover;
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
        object-fit: cover;
    }
}  


</style>