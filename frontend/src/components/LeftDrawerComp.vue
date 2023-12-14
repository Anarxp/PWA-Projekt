<template>
  <q-drawer side="left" bordered :width="250" :breakpoint="500">
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <q-item to="/" clickable v-ripple @click="$emit('toggleLeftDrawer')">
          <q-item-section avatar>
            <q-icon name="r_home" />
          </q-item-section>

          <q-item-section> Home </q-item-section>
        </q-item>

        <q-item to="/info" active clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="r_info" />
          </q-item-section>

          <q-item-section> Projects </q-item-section>
        </q-item>

        <q-item to="/info" active clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="r_info" />
          </q-item-section>

          <q-item-section> Info </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
<script setup>
defineEmits(["toggleLeftDrawer"]);
</script>
