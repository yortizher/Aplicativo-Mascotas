<script setup>
 import RegisterPet from '../components/form/RegisterPet.vue'
 import RegisterAdoption from '../components/form/RegisterAdoption.vue'
</script>
<template>
   <div class="container contents my-5">
    <h2 class="title">Dar en adopción</h2>
    <RegisterPet/>
   </div>
</template>
<style scoped>

.title {
      text-align: center;
      margin-top: 10%;
      color: #0d6efd;
  }
 
  .contents {
      width: 55%;
  }

</style>
