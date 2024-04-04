<template>
  <q-layout view="hHh lpR fFf">
    <HeaderComp @toggleLeftDrawer="toggleLeftDrawer"></HeaderComp>

    <LeftDrawerComp
      @toggleLeftDrawer="toggleLeftDrawer"
      v-model="leftDrawerOpen"
    ></LeftDrawerComp>

    <q-page-container>
      <q-page class="q-pa-md justify-center">
        <RouterView />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import LeftDrawerComp from '@/components/LeftDrawerComp.vue';
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
</script>

<style>
.backg {
  background-color: hsla(0, 0%, 100%, 0.33);
  background: hsla(0, 0%, 100%, 0.33);
  backdrop-filter: blur(8px);
  box-shadow: 2px 2px 4px hsla(0, 0%, 0%, 0.25);
}
</style>
