<template>
  <div class="justify-center items-center">
    <div class="q-ma-xl">
      <q-table
        :grid="$q.screen.lt.md"
        card-class="bg-transparent"
        virtual-scroll
        bordered
        :rows-per-page-options="[0]"
        :virtual-scroll-sticky-size-start="5"
        row-key="title"
        title="Projects"
        :rows="store.data"
        :columns="columns"
      >
        <template v-slot:body-cell-image_url="props">
          <q-td :props="props">
            <img
              :src="props.value"
              :alt="props.row.title"
              style="height: 128px"
            />
          </q-td>
        </template>
        <template #body-cell-actions="props">
          <q-td :props="props">
            <div class="q-pa-md">
              <q-btn style="margin-right: 0.5rem" color="blue" icon="edit" />
              <q-btn
                @click="store.deleteData(props.row.id)"
                color="red"
                icon="delete"
              /></div
          ></q-td>
        </template>
      </q-table>
    </div>
  </div>
</template>

<style scoped>
.my-sticky-virtscroll-table {
  height: 410px;
}

.bg-transparent,
.q-table__card {
  background-color: hsla(0, 0%, 100%, 0.33) !important;
  backdrop-filter: blur(8px) !important;
  border-radius: 24px !important;
}

@media (max-width: 960px) {
  .q-table__card {
    background-color: hsla(0, 0%, 100%, 0.33) !important;
    backdrop-filter: blur(8px) !important;
    border-radius: 24px !important;
  }
}
</style>

<script setup>
import useImageStore from "@/stores/imageStore.js";

const store = useImageStore();

store.getData();

const columns = [
  {
    name: "image_url",
    label: "Image",
    align: "center",
    field: "image_url",
    sortable: true,
    format: (image_url) => `http://localhost:3000/images/${image_url}`,
  },
  {
    name: "title",
    label: "Title",
    align: "center",
    field: "title",
    sortable: true,
  },
  {
    name: "description",
    label: "Description",
    align: "center",
    field: "description",
    sortable: true,
  },
  {
    name: "resolution",
    label: "Resolution",
    align: "center",
    field: "resolution",
    sortable: true,
  },
  {
    name: "camera",
    label: "Camera",
    align: "center",
    field: "camera",
    sortable: true,
  },
  {
    name: "datum",
    label: "Date",
    align: "center",
    field: "datum",
    sortable: true,
  },
  {
    name: "actions",
    label: "Actions",
    align: "center",
    sortable: false,
  },
];
</script>
