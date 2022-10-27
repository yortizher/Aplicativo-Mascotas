<template>
    <form class="container w-80">
        <div class="row mt-3 mb-2 mx-2">
             <div class="col mb-3">
                <label for="exampleInput" class="form-label">Nombre Mascota</label>
                <input type="text" class="form-control" id="exampleInput" aria-describedby="exampleHelp">
            </div>
            <div class="col mb-3">
                <label for="exampleInput2" class="form-label">Nombre Dueño</label>
                <input type="text" class="form-control" id="exampleInput2">
            </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
            <div class="col mb-3">
                <label for="exampleInput2" class="form-label">Edad</label>
                <input type="text" class="form-control" id="exampleInput2">
            </div>
            <div class="col mb-3">
                <label for="exampleInput2" class="form-label">Vacunas</label>
                <input type="text" class="form-control" id="exampleInput2">
            </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
            <div class="col mb-3">
                <label for="exampleInput2" class="form-label">Raza</label>
                <select  name="seleccionProducto" id="seleccionProducto" class="form-select  text-center">
                    <option>Seleccione</option>
                </select>
            </div>
            <div class="col mb-3">
                <label for="exampleInput2" class="form-label">Categoría</label>
                <select  name="seleccionProducto" id="seleccionProducto" class="form-select  text-center">
                    <option>Seleccione</option>
                </select>
            </div>
        </div>
        <div class="row mt-3 mb-2 mx-2">
            <div class="col mb-3">
                <label for="exampleInput2" class="form-label">Género</label>
                <select  name="seleccionProducto" id="seleccionProducto" class="form-select  text-center">
                    <option>Seleccione</option>
                </select>
            </div>
        </div>
         <div class="row mt-3 mb-2 mx-2">
            <div class="col mb-3">
                <label for="exampleInput2" class="form-label">Descripción</label>
                <textarea  id="exampleInput2" class="form-control" name="w3review" rows="4" cols="50">
                
                </textarea>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
</template>