<script setup>
defineProps(['pet']);
</script>

<template>
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">{{pet.name}}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <ul>
          <p><span>race:</span> {{pet.race}}</p>
          <p><span>age :</span> {{pet.age}}</p>  
          <p><span>gender:</span> {{pet.gender}}</p>
          <p><span>age :</span> {{pet.age}}</p> 
          <p><span>vaccines:</span> {{pet.vaccines}}</p>
          <p><span>owner:</span> {{pet.owner}}</p> 
          <p><span>category:</span> {{pet.category}}</p> 
          <p><span>description:</span> {{pet.description}}</p> 
        </ul>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
  </div>
</template>