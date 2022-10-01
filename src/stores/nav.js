import { defineStore } from "pinia";
import { ref } from "vue";
import { NAVCONFIG } from "../components/NavBar/config";

export const useNavStore = defineStore("nav", () => {
  const activeNav = ref(NAVCONFIG[0].value);
  function changeNav(value) {
    activeNav.value = value;
  }

  return { activeNav, changeNav };
});
