<template>
  <div class="users">
    <el-row :gutter="12" type="flex" justify="center">
      <el-col :sm="20" :md="20" :lg="20" :xl="20">
        <h1>Usuarios</h1>
        <div class="table-container">
          <el-table :data="users" style="width: 100%">
            <el-table-column type="index" width="50"> </el-table-column>
            <el-table-column prop="names" label="Nombre" width="120">
            </el-table-column>
            <el-table-column prop="lastNames" label="Apellido" width="120">
            </el-table-column>
            <el-table-column prop="cellphone" label="Celular" width="120">
            </el-table-column>
            <el-table-column prop="email" label="Email" width="200">
            </el-table-column>
            <el-table-column
              prop="dateOfBirth"
              label="F. Nacimiento"
              width="150"
            >
              <template slot-scope="scope">
                <span>{{ formatDate(scope.row.dateOfBirth) }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="role" label="Rol" fit>
              <template slot-scope="scope">
                <el-tag
                  :type="
                    scope.row.role === role.ADMIN.value ? 'primary' : 'success'
                  "
                  disable-transitions
                  >{{ scope.row.role }}</el-tag
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import moment from 'moment';
import role from '@/utils/enums';
import ServiceApp from '../services/services';
export default {
  data() {
    return {
      role,
      users: [],
    };
  },
  mounted() {
    this.listarUsers();
  },
  methods: {
    async listarUsers() {
      try {
        const response = await ServiceApp.ListUsers();
        this.users = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    formatDate(date) {
      return moment(date).format('M / D / YYYY');
    },
  },
};
</script>
