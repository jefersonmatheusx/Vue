<template>
  <div class="new-task">
    <input
      class="form-element"
      placeholder="Nova tarefa?"
      v-model="name"
      @keydown.enter="add"
      type="text"
    />
    <button class="form-element" @click="add()">+</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
  }),
  methods: {
    add() {
      this.$emit("addTask", { name: this.name, pending: true });
      this.name = "";
    },
  },
};
</script>

<style>
.new-task {
  margin: 35px;
}
.form-element{
  outline:none;
  font-size:;
  border:1px solid #fff;
  padding:5px 10px 8px;
  color:#fff;
}
input.form-element{
  width: 500px;
  background:#fff2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
button.form-element{
  border-left:none;
  background: #2196F3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

}
</style>