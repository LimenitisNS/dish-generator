<template>
  <el-form class="dish-form">
    <el-form-item>
      <el-select
        v-model="selectIngredient"
        multiple
        filterable
        remote
        :remote-method="handleSearchIngredient"
      />
    </el-form-item>
    <el-form-item>
      <el-button @click="handleCreateDish">Создать</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class DishForm extends Vue {
  selectIngredient = [];

  handleSearchIngredient(query: string): void {
    console.log(query);
  }

  handleCreateDish(): void {
    console.log("create");
    this.selectIngredient = [];
  }
}
</script>

<style scoped lang="scss">
.dish-form {
  display: flex;
}
</style>
