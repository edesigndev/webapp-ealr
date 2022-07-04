<template>
  <div class="notes">
    <el-row :gutter="12" type="flex" justify="center">
      <el-col :sm="20" :md="20" :lg="20" :xl="20">
        <h1>Notas</h1>
        <h3 v-if="!edit">Agregar nueva nota</h3>
        <h3 v-else>Editar Nota</h3>
        <el-form
          :model="form"
          :rules="rules"
          ref="form"
          label-position="left"
          label-width="100px"
        >
          <el-form-item label="Nombre" prop="nombre">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="Descripcion" prop="descripcion">
            <el-input v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :type="!edit ? 'success' : 'warning'"
              @click="onSubmit('form')"
              >{{ !edit ? 'Agregar' : 'Editar' }}</el-button
            >
            <el-button @click="onCancel()" v-if="edit">Cancelar</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row :gutter="12" type="flex" justify="center">
      <el-col :sm="20" :md="20" :lg="20" :xl="20">
        <h3>Listar Notas</h3>
        <div class="table-container">
          <el-table :data="notas" style="width: 100%">
            <el-table-column type="index" width="50"> </el-table-column>
            <el-table-column prop="name" label="Nombre" fit> </el-table-column>
            <el-table-column prop="description" label="Descripcion" fit>
            </el-table-column>
            <el-table-column prop="date" label="Fecha" fit>
              <template slot-scope="scope">
                <span>{{ formatDate(scope.row.date) }}</span>
              </template>
            </el-table-column>
            <el-table-column label="Acciones" width="120">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="warning"
                  @click="activateEditNote(scope.row)"
                >
                  <i class="el-icon-edit"></i>
                </el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="deleteNote(scope.row)"
                >
                  <i class="el-icon-delete"></i>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import moment from 'moment';
import ServiceApp from '../services/services';
export default {
  data() {
    return {
      notas: [],
      form: {
        name: '',
        description: '',
      },
      edit: false,
      rules: {
        name: [
          { required: true, message: 'Ingrese nombre', trigger: 'blur' },
          {
            min: 3,
            max: 50,
            message: 'Length should be 3 to 50',
            trigger: 'blur',
          },
        ],
        description: [
          {
            required: true,
            message: 'Ingrese descripcion',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 50,
            message: 'Length should be 3 to 50',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  mounted() {
    this.listarNotas();
  },
  computed: {
    ...mapState('account', ['token']),
  },
  methods: {
    async listarNotas() {
      try {
        const response = await ServiceApp.ListNotes();
        this.notas = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async agregarNota() {
      try {
        const response = await ServiceApp.RegisterNote(this.form);
        this.notas.push(response.data);
        this.resetForm();
        this.$message({
          message: 'Nota Agregada',
          type: 'success',
        });
      } catch (error) {
        console.log(error);
      }
    },
    async editarNota() {
      try {
        await ServiceApp.UpdateNote(this.form);
        this.$message({
          message: 'Nota actualizada',
          type: 'success',
        });
        this.edit = false;
        this.listarNotas();
        this.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
    async activateEditNote(row) {
      this.edit = true;
      try {
        const response = await ServiceApp.Note(row._id);
        this.form.name = response.data.name;
        this.form.description = response.data.description;
        this.form.id = response.data._id;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteNote(row) {
      try {
        await ServiceApp.DeleteNote(row._id);
        this.$message({
          message: 'Se elimino Nota',
          type: 'success',
        });
        this.listarNotas();
      } catch (error) {
        console.log(error);
      }
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!this.edit) {
            this.agregarNota();
          } else {
            this.editarNota();
          }
        } else {
          return false;
        }
      });
    },
    onCancel() {
      this.edit = false;
      this.resetForm();
    },
    resetForm() {
      this.form.name = '';
      this.form.description = '';
    },
    formatDate(date) {
      return moment(date).format('DD/MM/YYYY');
    },
  },
};
</script>
