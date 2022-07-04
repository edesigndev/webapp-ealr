<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
const defaultLayout = 'default';
export default {
  name: 'default',
  data() {
    return {};
  },
  computed: {
    ...mapGetters('account', ['isActive']),
    layout() {
      return (this.$route.meta.layout || defaultLayout) + '-layout';
    },
  },
  methods: {
    ...mapActions('account', ['logout', 'readToken']),
  },
  created() {
    this.readToken();
  },
};
</script>
<style lang="scss">
@import '@/scss/main.scss';
</style>
