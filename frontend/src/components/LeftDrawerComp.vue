<template>
  <q-drawer
    side="left"
    elevated
    overlay
    behavior="desktop"
    bordered
    :width="250"
    :breakpoint="500"
    class="backg"
  >
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <q-item
          to="/"
          class="text-black"
          clickable
          v-ripple
          @click="$emit('toggleLeftDrawer')"
        >
          <q-item-section avatar>
            <q-icon name="r_home" />
          </q-item-section>
          <q-item-section> Home </q-item-section>
        </q-item>

        <q-item
          to="/projects"
          class="text-black"
          clickable
          v-ripple
          @click="$emit('toggleLeftDrawer')"
        >
          <q-item-section avatar>
            <q-icon name="r_view_agenda" />
          </q-item-section>
          <q-item-section> New Project </q-item-section>
        </q-item>

        <q-item
          to="/info"
          class="text-black"
          clickable
          v-ripple
          @click="$emit('toggleLeftDrawer')"
        >
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
defineEmits(['toggleLeftDrawer']);
</script>

<style scoped></style>
