<template>
  <div class="register">
    <div class="left">
      <span
        >Tu dinero <br />
        cuando quieras</span
      >
      <span>Conoce más acerca de Monto</span>
    </div>
    <div class="right">
      <div class="right-container">
        <el-row type="flex" justify="space-around">
          <el-col :xs="20" :sm="20" :md="12" :lg="12" :xl="12">
            <el-form
              label-position="top"
              label-width="100px"
              :model="formRegister"
              :rules="rules"
              ref="formRegister"
            >
              <h2>Información personal</h2>
              <el-form-item label="Nombre(s)" prop="names">
                <el-input
                  v-model="formRegister.names"
                  placeholder="Ingresa tu(s) nombre(s) legal"
                ></el-input>
              </el-form-item>
              <el-form-item label="Apellido(s)" prop="lastNames">
                <el-input
                  v-model="formRegister.lastNames"
                  placeholder="Ingresa tu(s) apellido(s)"
                ></el-input>
              </el-form-item>
              <el-form-item label="Fecha de nacimiento">
                <el-date-picker
                  type="date"
                  placeholder="DD/MM/AAAA"
                  format="dd/MM/yyyy"
                  v-model="formRegister.dateOfBirth"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="Correo eléctronico (opcional)" prop="email">
                <el-input
                  v-model="formRegister.email"
                  placeholder="Ingresa tu correo eléctronico"
                ></el-input>
              </el-form-item>
              <el-form-item label="Celular" prop="cellphone">
                <el-input
                  v-model="formRegister.cellphone"
                  placeholder="Ingresa tu número de celular"
                ></el-input>
              </el-form-item>
              <el-form-item label="Contraseña" prop="password">
                <el-input
                  v-model="formRegister.password"
                  placeholder="Ingresa tu contraseña"
                  :type="currentPasswordType"
                >
                  <em
                    slot="suffix"
                    class="el-input__icon el-icon-view"
                    :style="currentPassStyle"
                    @click="viewCurrentPassword"
                  ></em
                ></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-around">
          <el-col :xs="20" :sm="20" :md="12" :lg="12" :xl="12">
            <div class="right-button">
              <el-button type="primary" @click="register('formRegister')" round
                >Registrar</el-button
              >
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import ServiceApp from '../services/services';
export default {
  name: 'Register',
  data() {
    return {
      formRegister: {
        names: '',
        lastNames: '',
        dateOfBirth: '',
        cellphone: '',
        email: '',
        password: '',
      },
      currentPasswordType: 'password',
      rules: {
        names: [
          {
            required: true,
            message: 'Campo obligatorio',
            trigger: 'blur',
          },
        ],
        lastNames: [
          {
            required: true,
            message: 'Campo obligatorio',
            trigger: 'blur',
          },
        ],
        cellphone: [
          {
            required: true,
            message: 'Campo obligatorio',
            trigger: 'blur',
          },
        ],
        email: [
          {
            required: false,
            message: 'Campo obligatorio',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: 'Campo obligatorio', trigger: 'blur' },
        ],
      },
    };
  },
  computed: {
    currentPassStyle() {
      return this.currentPasswordType == 'text' ? { color: '#2465c8' } : {};
    },
  },
  methods: {
    viewCurrentPassword() {
      this.currentPasswordType =
        this.currentPasswordType == 'password' ? 'text' : 'password';
    },
    register(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            await ServiceApp.RegisterUser(this.formRegister);
            this.$message({
              message: 'Usuario creado',
              type: 'success',
            });
            this.$router.replace({ name: 'login' });
          } catch (error) {
            this.$message({
              message: 'Usuario ya existe',
              type: 'warning',
            });
            console.log(error);
          }
        } else {
          return false;
        }
      });
    },
  },
};
</script>
