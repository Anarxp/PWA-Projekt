<template>
  <div class="justify-center items-center">
    <div class="q-ma-sm">
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
          <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
            <q-card>
              <q-img
                :src="`http://localhost:3000/images/${props.row.image_url}`"
              >
                <div class="absolute-bottom text-h6">{{ props.row.title }}</div>
              </q-img>
              <q-card-section class="text-right">
                <q-item-label caption>
                  {{ props.row.datum }}
                </q-item-label>
              </q-card-section>
              <q-card-section>
                {{ props.row.description }}
              </q-card-section>
              <q-card-section class="text-center">
                <q-btn
                  class="q-ma-sm"
                  color="blue"
                  icon="edit"
                  @click="prepareToEdit(props.row)"
                />
                <q-btn
                  class="q-ma-sm"
                  @click="store.deleteData(props.row.id)"
                  color="red"
                  icon="delete"
                />
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
              <q-btn
                class="q-ma-sm"
                color="blue"
                icon="edit"
                @click="prepareToEdit(props.row)"
              />
              <q-btn
                class="q-ma-sm"
                @click="store.deleteData(props.row.id)"
                color="red"
                icon="delete"
              />
            </div>
          </q-td>
        </template>
      </q-table>
      <q-dialog v-model="showEditDialog">
        <q-card :style="!$q.screen.lt.sm ? 'width: 67vw' : ''">
          <q-card-section>
            <div class="text-h6">Editing {{ curPhotoTitle }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-form class="q-gutter-md">
              <q-input
                filled
                v-model="curPhoto.title"
                label="New Title"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'It has to be called something!',
                ]"
              />

              <q-input
                filled
                autogrow
                v-model="curPhoto.description"
                label="New Description"
              />
            </q-form>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn label="Update" color="primary" @click="updatePhoto" />
            <q-btn flat label="Cancel" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup>
import useImageStore from "@/stores/imageStore.js";
import { ref } from "vue";

const store = useImageStore();

store.getData();

const showEditDialog = ref(false);
const curPhoto = ref(null);
const curPhotoTitle = ref("");

const prepareToEdit = (photo) => {
  showEditDialog.value = true;
  curPhoto.value = { ...photo };
  curPhotoTitle.value = photo.title;
};

const updatePhoto = () => {
  if (!curPhoto.value.title || curPhoto.value.title.trim().length === 0) {
    console.log("Title is wrong!!1!11!1");
    return;
  }
  store.updateData(curPhoto.value);
  showEditDialog.value = false;
};

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