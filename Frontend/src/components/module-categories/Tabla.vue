<script setup>
const emit = defineEmits(["demo"]);
defineProps({
  title2: String,
  title3: String,
  dataPet: {
    type: Array,
    required: true,
  },
});
const metodoEnviar=(data)=>{
  return $emit('metodoPrueba',data);
}
</script>

<template>
  <div class="row">
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">
              <h3>{{ title2 }}</h3>
            </th>
            <th scope="col">
              <h3>{{ title3 }}</h3>
            </th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr class="body" v-for="item in dataPet" :key="item.name">
            <td v-text="item.name"></td>
            <td style="width: 120px">
              <button
                title="Eliminar"
                type="button"
                class="btn btn-danger me-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal06"
                @click="$emit('metodoPrueba',item)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </button>

              <button
                type="button"
                class="btn btn-success"
                title="Editar"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="$emit('metodoPrueba',item)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pass-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M10 0a2 2 0 1 1-4 0H3.5A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0H10ZM4.5 5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm0 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
.table{
  background-color: rgb(219, 236, 231);
}
</style>