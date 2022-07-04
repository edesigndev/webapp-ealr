<template>
  <div class="login">
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
              :model="formLogin"
            >
              <h2>Inicio sesión</h2>
              <el-form-item label="Número de celular o correo electrónico">
                <el-input
                  v-model="formLogin.user"
                  placeholder="Ingresa tu celular o correo electrónico"
                ></el-input>
              </el-form-item>
              <el-form-item label="Contraseña">
                <el-input
                  v-model="formLogin.password"
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
              <el-alert :title="mesage" type="warning" v-if="mesage !== ''">
              </el-alert>
            </el-form>
          </el-col>
        </el-row>
      </div>
      <el-row type="flex" justify="space-around">
        <el-col :xs="20" :sm="20" :md="12" :lg="12" :xl="12">
          <div class="right-button">
            <el-button
              type="primary"
              @click="login()"
              round
              :disabled="disabledLogin"
              >Iniciar sesión</el-button
            >

            <p>
              <span>¿Aún no tienes una cuenta?</span>
              <a @click="redirectRegister()"> Regístrate</a>
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ServiceApp from '../services/services';
import { mapMutations, mapActions } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      formLogin: {
        user: '',
        password: '',
      },
      mesage: '',
      currentPasswordType: 'password',
    };
  },
  computed: {
    disabledLogin() {
      return this.formLogin.user && this.formLogin.password ? false : true;
    },
    currentPassStyle() {
      return this.currentPasswordType == 'text' ? { color: '#2465c8' } : {};
    },
  },
  methods: {
    ...mapMutations('account', ['SET_USER']),
    ...mapActions('account', ['saveUser']),
    async login() {
      this.mesage = '';
      try {
        const res = await ServiceApp.Login(this.formLogin);
        await localStorage.setItem('token', res.data.token);
        const token = res.data.token;
        this.saveUser(token);
      } catch (error) {
        this.mesage = error.response.data.message;
      }
    },
    redirectRegister() {
      this.$router.replace({ name: 'register' });
    },
    viewCurrentPassword() {
      this.currentPasswordType =
        this.currentPasswordType == 'password' ? 'text' : 'password';
    },
  },
};
</script>
