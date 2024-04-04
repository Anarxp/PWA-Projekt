<template>
  <div>
    <div class="q-pa-md flex-center text-center">
      <h3 class="text-bold">Create a new project</h3>
      <div>
        <q-btn
          class="backg"
          style="font-size: 1.5em"
          no-caps
          label="Let's take a picture!"
          icon="camera"
          @click="
            // enabled = true;
            showCameraDialog()
          "
        />
      </div>
    </div>
    <q-dialog v-model="showingCameraDialog">
      <q-card class="backg">
        <q-card-section>
          <div class="text-h6">New Project</div>
        </q-card-section>

        <q-card-section class="q-pt-none text-center">
          <video ref="video" muted autoplay>
            <p>Your browser doesn't support HTML video.</p>
          </video>
          <div>
            <q-btn label="Snap!" color="primary" @click="takePicture" />
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none text-center">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="title"
              label="Title"
              :rules="[
                (val) => (val && val.length > 0) || 'It has to be called something!',
              ]"
            />

            <q-input filled v-model="description" autogrow label="Description" />
          </q-form>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Create" color="primary" @click="createNew" />
          <q-btn flat label="Cancel" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useUserMedia } from '@vueuse/core';
import useImageStore from '@/stores/imageStore.js';

const store = useImageStore();

const title = ref('');
const description = ref('');

const showingCameraDialog = ref(false);

const video = ref(null);
const { stream, enabled } = useUserMedia({
  constraints: { video: true, audio: false },
});

watchEffect(() => {
  if (video.value) video.value.srcObject = stream.value;
});

const showCameraDialog = () => {
  showingCameraDialog.value = true;
};

const createNew = () => {
  const now = new Date();
  const photo = {
    image_url: 'DSC01851.JPG',
    title: title.value,
    description: description.value,
    resolution: '1440x1080',
    camera: 'Laptop Webcam',
    datum: `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`,
  };
  store.createData(photo);
  showingCameraDialog.value = false;
};

const takePicture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1440;
  canvas.height = 1080;
  const context = canvas.getContext('2d');
  context.drawImage(video.value, 0, 0, canvas.width, canvas.height);
  const dataURL = canvas.toDataURL('image/png');
  // You can now use 'dataURL' to display the captured image or save it.
  // For example, you can save it as a file by creating an anchor element and clicking it programmatically.
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'captured_image.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<style>
video {
  width: 240px;
  height: 180px;
}
</style>
