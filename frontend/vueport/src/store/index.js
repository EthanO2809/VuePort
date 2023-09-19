import { createStore } from 'vuex';
import axios from "axios";
import router from "@/router";
const miniURL = "https://vueport.onrender.com";

export default createStore({
  state: {
    info,
    msg: null,
  },
  getters: {
  },
  mutations: {
    setInformaton(state, info) {
      state.info = info;
    },
  },
  actions: {
    async fetchUser(context) {
      try {
        const { data } = await axios.get(`${miniURL}Information`);
        context.commit("setInformation", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
  },
  modules: {},
})
