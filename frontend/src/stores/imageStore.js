import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const useImageStore = defineStore('ImageId', () => {
  const data = ref([]);

  const getData = async () => {
    const result = await axios.get('/fotos');
    data.value = result.data;
  };

  const createData = async (photo) => {
    await axios.post('/fotos', photo);
    getData();
  };

  const deleteData = async (id) => {
    await axios.delete(`/fotos/${id}`);
    getData();
  };

  const updateData = async (photo) => {
    const { id } = photo;
    await axios.patch(`/fotos/${id}`, photo);
    getData();
  };

  return { data, getData, createData, deleteData, updateData };
});

export default useImageStore;
