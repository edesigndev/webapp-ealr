import router from '../router';

import decode from 'jwt-decode';

const state = {
  token: '',
  user: '',
};
const getters = {
  isActive: (state) => !!state.token,
  getUser: (state) => state.user.data,
  getRole: (state) => state.user.data.role,
};

const mutations = {
  SET_USER(state, payload) {
    state.token = payload;
    if (payload === '') {
      state.user = '';
    } else {
      state.user = decode(payload);
      router.push({ name: 'home' });
    }
  },
};

const actions = {
  saveUser({ commit }, payload) {
    localStorage.setItem('token', payload);
    commit('SET_USER', payload);
  },
  logout({ commit }) {
    commit('SET_USER', '');
    localStorage.removeItem('token');
    router.push({ name: 'login' });
  },
  readToken({ commit }) {
    const token = localStorage.getItem('token');
    if (token) {
      commit('SET_USER', token);
    } else {
      commit('SET_USER', '');
    }
  },
};

export const account = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
