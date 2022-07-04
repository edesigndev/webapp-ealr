<template>
  <div class="menu">
    <SidebarUser />
    <el-menu
      background-color="#2465c8"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="$route.path"
      :router="true"
    >
      <div class="subTitle">
        <span>Menú</span>
      </div>
      <el-menu-item index="/">
        <i class="el-icon-house"></i>
        <span>Home</span>
      </el-menu-item>
      <el-menu-item index="/usuarios" v-if="isAdmin">
        <i class="el-icon-user"></i>
        <span>Usuarios</span>
      </el-menu-item>
      <el-menu-item index="/notas">
        <i class="el-icon-tickets"></i>
        <span>Notas</span>
      </el-menu-item>

      <el-menu-item index="4" @click="logout()" class="mt-1">
        <i class="el-icon-switch-button"></i>
        <span>Cerrar sessión</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import SidebarUser from '../components/SidebarUser';
import role from '@/utils/enums';
export default {
  name: 'Sidebar',
  components: {
    SidebarUser,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters('account', ['isActive', 'getRole']),
    isAdmin() {
      return this.getRole === role.ADMIN.value ? true : false;
    },
  },
  methods: {
    ...mapActions('account', ['logout']),
    useCash() {
      console.log('useCash');
    },
  },
};
</script>
