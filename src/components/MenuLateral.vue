<template>
    <div class="h-full w-96 flex flex-col items-center border-r-2 border-yellow">
        <div class="w-60 h-auto">
            <div class="w-36 h-36 rounded-full bg-slate-600 m-auto"></div>
            <div class="border-b-2 w-full border-yellow">
                <h1 class="font-italian text-primary text-center text-3xl mt-5 pb-5">GUILHERME SCHWENGBER</h1>
            </div>
            <div class="w-56 flex flex-col justify-center items-start px-10 h-80">
                <ItemMenu 
                    @mudarMenu="$emit('mudarMenu', `${item.id}`)" 
                    v-for="item in menu" 
                    :key="item.id" 
                    :Item="item"
                />
            </div>
            <div class="flex justify-center">
                <BotaoCurriculo />
            </div>
        </div>
    </div>
</template>
<script>
import BotaoCurriculo from "../components/BotaoCurriculo.vue";
import ItemMenu from "../components/ItemMenu.vue";

export default {
    name: "MenuLateral",
    components: {BotaoCurriculo, ItemMenu},
    
    data(){
        return{
            menu: [
                {
                    text: "Sobre Mim",
                    id: "Sobre"
                },
                {
                    text: "Habilidades",
                    id: "Habilidades"
                },
                {
                    text: "Projetos",
                    id: "Projetos"
                },
                {
                    text: "Contato",
                    id: "Contato"
                },
            ]
        }
    }
}
</script>
