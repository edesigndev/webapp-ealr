<template>
  <el-container>
    <el-aside width="300px">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue';
export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    Header,
  },
};
</script>
