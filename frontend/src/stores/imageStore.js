import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

const useImageStore = defineStore("ImageId", () => {
  const data = ref([]);

  const getData = async () => {
    const result = await axios.get("/fotos");
    data.value = result.data;
  };

  const deleteData = async (id) => {
    const result = await axios.delete(`/fotos/${id}`);
    getData();
  };

  const updateData = async (id) => {
    const result = await axios.delete(`/fotos/${id}`);
    getData();
  };

  return { data, getData, deleteData, updateData };
});

export default useImageStore;
