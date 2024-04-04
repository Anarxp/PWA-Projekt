<template>
  <div class="justify-center items-center">
    <div class="q-ma-xl">
      <q-table
        :grid="$q.screen.lt.md"
        card-class="backhome"
        virtual-scroll
        bordered
        :rows-per-page-options="[0]"
        :virtual-scroll-sticky-size-start="5"
        row-key="title"
        title="Projects"
        :rows="store.data"
        :columns="columns"
      >
        <template v-slot:item="props">
          <div
            class="q-pa-xs col-xs-12 col-sm-6 col-md-4"
          >
            <q-card flat bordered>
              <q-card-section class="text-center"> </q-card-section>
              <q-separator />
              <q-card-section
                class="flex flex-center"
                :style="{ fontSize: props.row.calories / 2 + 'px' }"
              >
                <div>{{ props.row.calories }} g</div>
              </q-card-section>
            </q-card>
          </div>
        </template>

        <template v-slot:body-cell-image_url="props">
          <q-td :props="props">
            <q-img
              :src="props.value"
              :alt="props.row.title"
              style="height: 100px; width: 200px"
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
/* .q-table__card {
  background-color: hsla(0, 0%, 100%, 0.33) !important;
  backdrop-filter: blur(8px) !important;
  border-radius: 24px !important;
} */

.backhome {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.55);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  border: 1px solid rgba(255, 255, 255, 1);

  @media (max-width: 960px) {
    background-color: blue;
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
