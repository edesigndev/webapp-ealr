<template>
  <div class="card-period">
    <el-card shadow="always">
      <i class="el-icon-warning-outline"></i>
      <div class="title">
        <span>Periodo Actual <br />01 al 15 de agosto</span>
      </div>
      <div class="graphic">
        <el-progress
          type="dashboard"
          :percentage="percentage"
          color="#5cb87a"
          :width="250"
          :stroke-width="30"
          :format="format"
        ></el-progress>
        <div class="leyends">
          <span
            >Inicia <br />
            Periodo</span
          >
          <span
            >13 Ago <br />
            Fecha de Corte</span
          >
        </div>
      </div>
      <div class="footer">
        <el-button type="primary" round>Retirar un monto</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'CardPeriod',
  data() {
    return {
      percentage: 70,
    };
  },
  methods: {
    format() {
      return '$3400';
    },
  },
};
</script>
