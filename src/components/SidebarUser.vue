<template>
  <div class="user">
    <el-row>
      <el-col :span="8">
        <el-avatar icon="el-icon-user-solid" :size="60"></el-avatar>
      </el-col>
      <el-col :span="16">
        <div class="name">
          <span>{{ fullName }}</span> <br />
          <span>ID 001225</span>
        </div>
        <div class="cash">
          <span>Monto Cash:</span>
          <el-row type="flex" justify="space-between" class="cash">
            <el-col :span="12">
              <i class="el-icon-coin"></i>
              <span>$3400</span>
            </el-col>
            <el-col :span="12">
              <el-button type="default" size="mini" @click="useCash()" round
                >Usar</el-button
              >
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'SidebarUser',
  computed: {
    ...mapGetters('account', ['getUser']),
    fullName() {
      return `${this.getUser.names} ${this.getUser.lastNames}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.user {
  padding: 80px 20px 20px 20px;
  align-items: center;
  border-bottom: 1px solid white;
  .name {
    color: white;
    margin-bottom: 1rem;
    font-size: 12px;
  }
  .cash {
    font-size: 11px;
    color: white;
    align-items: center;
  }
  i.el-icon-coin {
    color: #ffd700;
    margin-right: 0.5rem;
  }
}
</style>
