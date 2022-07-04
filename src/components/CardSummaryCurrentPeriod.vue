<template>
  <div class="card-summary-current-period">
    <el-card shadow="always">
      <i class="el-icon-warning-outline"></i>
      <div class="title">
        <span>Resumen periodo actual</span>
      </div>
      <div class="content">
        <ul>
          <li>
            <i class="el-icon-date"></i>
            <span>Restan 4 días para retirar</span>
          </li>
          <li>
            <i class="el-icon-top"></i>
            <span>Tienes 3 retiros disponibles</span>
          </li>
          <li>
            <i class="el-icon-bank-card"></i>
            <span>$12, 727 salario trabajado</span>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'CardSummaryCurrentPeriod',
  data() {
    return {
      percentage: 70,
    };
  },
  methods: {
    format() {
      return `${'$3400'}\n${'Disponibles'}`;
    },
  },
};
</script>
