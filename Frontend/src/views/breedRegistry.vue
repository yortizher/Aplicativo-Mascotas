<script setup>
import  Tabla from '../components/module-categories/Tabla.vue';
// import DBRace from '../logic/race/DBBRace'

const DBRace = [
    {
       id: crypto.randomUUID(),
       name: "schnauzer",                
       species: 1,
   },
   {
       id: crypto.randomUUID(),
       name: "Doderman",
       species: 1,            
   },
  {
       id: crypto.randomUUID(),
       name:"West Highland",
       species: 2,         
   },
]
const dataPet = DBRace 

</script>

<template>
    <div class="container mt-5 aling-text-center border border-dark">
        <div class="row m-2 colors01">
            <div class="col-md-4">
                <h1>Registro de razas</h1>
            </div>
            <div class="col-md-4 offset-md-4 m-1">
                <button type="button"  class="btn btn-success float-end" data-bs-target="#exampleModal">Nuevo</button>
            </div>      
        </div>
        <Tabla
        title2="Nombre"
        title3="Opciones"
        :dataPet="dataPet"
      />
    </div>
  
</template>