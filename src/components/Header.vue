<template>
  <div class="header">
    <i class="el-icon-bell"></i>
    <div class="nav-menu">
      <div class="nav-icons">
        <i class="el-icon-bell"></i>
        <i
          :class="!showMobileMenu ? 'el-icon-menu' : 'el-icon-close'"
          @click="showMenu()"
        ></i>
      </div>
      <div
        class="nav-content"
        :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"
      >
        <ul class="nav-items">
          <li><a @click="redirect('home')" class="menu__item">Home</a></li>
          <li v-if="isAdmin">
            <a @click="redirect('usuarios')" class="menu__item">Usuarios</a>
          </li>
          <li>
            <a @click="redirect('notas')" class="menu__item">Notas</a>
          </li>
          <li>
            <a href="" class="menu__item" @click="logout()">Cerrar sessión</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import role from '@/utils/enums';
export default {
  name: 'Header',
  data() {
    return {
      showMobileMenu: false,
    };
  },
  computed: {
    ...mapGetters('account', ['isActive', 'getRole']),
    isAdmin() {
      return this.getRole === role.ADMIN.value ? true : false;
    },
  },
  methods: {
    ...mapActions('account', ['logout']),
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    redirect(path) {
      this.$router.replace({ name: path });
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>
