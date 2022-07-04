<template>
  <div class="home">
    <div class="userDate">
      <h5>{{ fullDate }}</h5>
      <h1>{{ welcome }}</h1>
    </div>
    <el-row :gutter="12" type="flex" justify="center">
      <el-col :sm="20" :md="10" :lg="8" :xl="6">
        <CardPeriod />
      </el-col>
    </el-row>
    <el-row :gutter="12" type="flex" justify="center">
      <el-col :sm="20" :md="10" :lg="8" :xl="6">
        <CardSummaryCurrentPeriod />
      </el-col>
    </el-row>
    <el-row :gutter="12" type="flex" justify="center">
      <el-col :sm="20" :md="10" :lg="8" :xl="6">
        <CardBenefits />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import CardPeriod from '../components/CardPeriod.vue';
import CardSummaryCurrentPeriod from '../components/CardSummaryCurrentPeriod.vue';
import CardBenefits from '../components/CardBenefits.vue';
export default {
  name: 'Home',
  components: {
    CardPeriod,
    CardSummaryCurrentPeriod,
    CardBenefits,
  },
  data() {
    return {
      percentage: 70,
    };
  },
  computed: {
    ...mapGetters('account', ['getUser']),
    welcome() {
      return `Bienvenido, ${this.getUser.names}`;
    },
    day() {
      return moment().locale('es').format('D');
    },
    month() {
      const currentMonth = moment().locale('es').format('MMMM');
      return currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);
    },
    year() {
      return moment().locale('es').format('YYYY');
    },
    fullDate() {
      return `${this.day} de ${this.month}, ${this.year}`;
    },
  },
  methods: {
    format() {
      return `${'$3400'}\n${'Disponibles'}`;
    },
  },
};
</script>
