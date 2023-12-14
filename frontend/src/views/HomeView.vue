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
        row-key="index"
        title="Projects"
        :rows="rows"
        :columns="columns"
      />
    </div>
  </div>
</template>

<style scoped>
.my-sticky-virtscroll-table {
  height: 410px;
}

.bg-transparent, .q-table__card {
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
import TitleComp from "@/components/TitleComp.vue";
import useDefaultStore from "@/stores/defaultStore.js";

const store = useDefaultStore();

const increaseCounter = () => store.increaseCounter();

const columns = [
  {
    name: "image",
    align: "center",
    label: "Image",
    field: "image",
    sortable: false,
  },
  {
    name: "title",
    align: "center",
    label: "Title",
    field: "title",
    sortable: true,
  },
  {
    name: "description",
    label: "Description",
    field: "description",
    sortable: false,
  },
];

const rows = [
  {
    title: "Landschaftsfotografie",
    image: "URL_zu_deinem_Bild1",
    description: "Eine atemberaubende Landschaftsaufnahme.",
  },
  {
    title: "Porträtfotografie",
    image: "URL_zu_deinem_Bild2",
    description: "Ein einfühlsames Porträt eines Menschen.",
  },
  {
    title: "Stadtfotografie",
    image: "URL_zu_deinem_Bild3",
    description: "Eine faszinierende Ansicht einer Stadt bei Nacht.",
  },
  {
    title: "Naturfotografie",
    image: "URL_zu_deinem_Bild4",
    description: "Eine Sammlung von faszinierenden Naturaufnahmen.",
  },
  {
    title: "Architekturfotografie",
    image: "URL_zu_deinem_Bild5",
    description: "Aufnahmen von beeindruckenden architektonischen Strukturen.",
  },
  {
    title: "Tierfotografie",
    image: "URL_zu_deinem_Bild6",
    description: "Einblicke in die Welt der Tiere durch eindrucksvolle Fotos.",
  },
  {
    title: "Naturfotografie",
    image: "URL_zu_deinem_Bild4",
    description: "Eine Sammlung von faszinierenden Naturaufnahmen.",
  },
  {
    title: "Architekturfotografie",
    image: "URL_zu_deinem_Bild5",
    description: "Aufnahmen von beeindruckenden architektonischen Strukturen.",
  },
  {
    title: "Tierfotografie",
    image: "URL_zu_deinem_Bild6",
    description: "Einblicke in die Welt der Tiere durch eindrucksvolle Fotos.",
  },
  {
    title: "Naturfotografie",
    image: "URL_zu_deinem_Bild4",
    description: "Eine Sammlung von faszinierenden Naturaufnahmen.",
  },
  {
    title: "Architekturfotografie",
    image: "URL_zu_deinem_Bild5",
    description: "Aufnahmen von beeindruckenden architektonischen Strukturen.",
  },
  {
    title: "Tierfotografie",
    image: "URL_zu_deinem_Bild6",
    description: "Einblicke in die Welt der Tiere durch eindrucksvolle Fotos.",
  },
  {
    title: "Naturfotografie",
    image: "URL_zu_deinem_Bild4",
    description: "Eine Sammlung von faszinierenden Naturaufnahmen.",
  },
  {
    title: "Architekturfotografie",
    image: "URL_zu_deinem_Bild5",
    description: "Aufnahmen von beeindruckenden architektonischen Strukturen.",
  },
  {
    title: "Tierfotografie",
    image: "URL_zu_deinem_Bild6",
    description: "Einblicke in die Welt der Tiere durch eindrucksvolle Fotos.",
  },
  // Weitere Objekte hier ...
];
</script>
