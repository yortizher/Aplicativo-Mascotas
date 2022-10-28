<script setup>
 import RegisterPet from '../components/form/RegisterPet.vue'
 import RegisterAdoption from '../components/form/RegisterAdoption.vue'
</script>
<template>
   <div class="container w-50 my-5">
    <h1>Dar en adopción</h1>
    <div>
      <RegisterPet/>
      <RegisterAdoption/>
    </div>
   </div>
</template>