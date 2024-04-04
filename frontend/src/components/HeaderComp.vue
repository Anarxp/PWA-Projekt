<template>
  <q-header class="backg text-white rounded" height-hint="98">
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        class="text-black"
        icon="r_menu"
        @click="$emit('toggleLeftDrawer')"
      />

      <q-toolbar-title>
        <div class="flex items-center">
          <img src="/images/AnarxpLogo.svg" />
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup>
defineEmits(['toggleLeftDrawer']);
</script>

<style scoped>
.rotate-on-hover {
  transform: rotate(0);
  transition: transform 0.8s ease-in-out;
}
.rotate-on-hover:hover {
  transform: rotate(-360deg);
  transition: transform 0.8s ease-in-out;
}
img {
  height: 50px;
  width: 100px;
  margin-right: 10px;
}
</style>
