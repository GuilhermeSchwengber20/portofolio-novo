<template>
  <div class="w-full h-screen bg-background p-20 flex flex-row gap-16 overflow-hidden">
    <MenuLateral @mudarMenu="mudarMenuItem" />
    <Sobre v-if="mostrar === 'Sobre'" class="transition-all" />
    <Habilidades v-else-if="mostrar === 'Habilidades'" class="transition-all"/>
    <Projetos v-else-if="mostrar === 'Projetos'" class="transition-all"/>
    <Contato v-else-if="mostrar === 'Contato'" class="transition-all"/>
  </div>
</template>

<script>
import MenuLateral from "./components/MenuLateral.vue"
import Habilidades from "./components/Habilidades.vue"
import Projetos from "./components/Projetos.vue"
import Sobre from "./components/Sobre.vue"
import Contato from "./components/Contato.vue"
export default {
  name: 'App',
  components: {
    MenuLateral,
    Sobre,
    Habilidades,
    Projetos,
    Contato
  },
  data(){
    return{
      mostrar: "Sobre"
    }
  },
  methods: {
    mudarMenuItem(id){
      this.mostrar = id
    }
  }
}
</script>
<style>

</style>
