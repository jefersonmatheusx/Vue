<template>
  <div id="usuarioInfo" class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Idade do usuário:
      <strong>{{idade}}</strong>
    </p>
    <p>
      NOme do Usuário:
      <strong>{{ inverterNome }}</strong>
    </p>
    <button @click="reinicializarNome">Reiniciar Nome</button>
    <button @click="reiniciarFn">Reiniciar Nome(callback)</button>
  </div>
</template>

<script>
import barramento from "@/barramento.js";

export default {
  name: "usuarioInfo",
  props: {
    nome: {
      type: String,
      required: true,
      default: "anônimo"
      // default: function(){
      //     return Array(10).fill(0).join(',')
      // }
    },
    idade: Number,
    reiniciarFn: Function
  },
  data: () => {
    return {
      _nome: this.nome,
      _idade: this.idade
    };
  },
  methods: {
    reinicializarNome() {
      this._nome = "Pedro";
      this.$emit("nomeMudou", this._nome);
    }
  },
  created() {
    // barramento.$on('idadeMudou',idade => {
    //     this.idade = idade
    // })
    barramento.quandoIdadeMudar(idade => {
      this.idade = idade;
    });
  },
  computed: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
