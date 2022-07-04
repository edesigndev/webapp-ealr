<template>
  <div class="card-benefits">
    <el-card shadow="always">
      <div class="title">
        <span>¿Ya conoces los beneficios de Monto?</span>
      </div>
      <div class="content">
        <img :src="imageCongra" width="200" alt="" />
      </div>
      <div class="footer">
        <a>Ver más</a>
      </div>
    </el-card>
  </div>
</template>
<script>
import imageCongra from '@/assets/congratulation.png';
export default {
  name: 'CardBenefits',
  data() {
    return {
      imageCongra,
    };
  },
};
</script>
