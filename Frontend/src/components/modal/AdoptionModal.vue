<script setup>
defineProps(['pet']);
</script>

<template>
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5 text-info" id="exampleModalLabel"><span class="h3">{{pet.name}}</span></h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <ul>
          <p><span class="h5">Raza:</span> {{pet.race}}</p>
          <p><span class="h5">Edad:</span> {{pet.age}}</p>  
          <p><span class="h5">Género:</span> {{pet.gender}}</p>
          <p><span class="h5">Vacunas:</span> {{pet.vaccines}}</p>
          <p><span class="h5">Dueño:</span> {{pet.owner}}</p> 
          <p><span class="h5">Categoria:</span> {{pet.category}}</p> 
          <p><span class="h5">Descripción:</span> {{pet.description}}</p> 
        </ul>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
  </div>
</template>