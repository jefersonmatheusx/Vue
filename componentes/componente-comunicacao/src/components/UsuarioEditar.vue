<template>
  <div id="userEdit" class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>
      Idade do usuário:
      <strong>{{idade_}}</strong>
      <strong>{{nome}}</strong>
    </p>
    <button @click="alterarIdade">Mudar idade</button>
  </div>
</template>

<script>
import barramento from "@/barramento";
export default {
  el: "userEdit",
  props: {
    idade: Number
  },
  data() {
    return {
      idade_: this.idade
    };
  },
  methods: {
    alterarIdade() {
      this.idade_ = 30;
      barramento.alterarIdade(this.idade_)
    //   barramento.$emit('idadeMudou',this.idade_)
    }
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
