<template>
    <div class="w-4/6 h-full flex flex-col  items-center animate-slide-right">
        <div class="w-36 h-36 rounded-full bg-slate-600"></div>
        <div class="h-full">
            <h1 class="font-italian text-primary text-3xl mt-5 pb-5">GUILHERME SCHWENGBER ,</h1>
            <p class="font-main text-white tracking-widest ">
                Olá, sou um desenvolvedor front-end apaixonado por tecnologia, com 19 anos de idade. Desde muito cedo, sempre tive interesse em explorar o mundo digital e foi essa curiosidade que me levou a descobrir a programação e me tornar um entusiasta da área.
            </p>
            <p class="font-main text-white tracking-widest mt-5">
                Atualmente, meu foco é no desenvolvimento front-end, onde tenho a oportunidade de criar interfaces visuais e interativas que ofereçam a melhor experiência possível para os usuários. Eu realmente gosto de transformar ideias em designs atraentes e funcionais, sempre buscando aprimorar minhas habilidades técnicas e de comunicação para me tornar cada vez mais eficiente em meu trabalho.
            </p>
            <p class="font-main text-white tracking-widest mt-5">
                Como um apaixonado por tecnologia, estou sempre buscando aprender e me atualizar sobre as novidades da área. Acredito que essa é uma das características mais importantes para um desenvolvedor, pois a tecnologia está em constante evolução e é fundamental acompanhar essa evolução para continuar entregando soluções eficientes e de qualidade.
            </p>
            <p class="font-main text-white tracking-widest mt-5">
                Além disso, sou alguém determinado e dedicado, sempre em busca de novos desafios e oportunidades para me desenvolver profissionalmente. Estou comprometido em construir uma carreira sólida e bem sucedida como desenvolvedor front-end e sei que posso contar com meu espírito entusiasmado para seguir em frente.
            </p>
            <p class="font-main text-white tracking-widest mt-5">
                Estou muito animado em mostrar meus projetos e trabalhos em meu portfolio, que refletem meu estilo criativo e técnico. Espero que você goste do meu trabalho e que possamos trabalhar juntos em futuros projetos.

            </p>
        </div>
        <div class="w-full flex flex-row justify-around">
            <BotaoCurriculo />

            <button class="border border-primary px-5 py-2 font-main tracking-widest text-yellow">CONTATO</button>
        </div>
    </div>
</template>
<script>
import BotaoCurriculo from "../components/BotaoCurriculo.vue";

export default{
    name: "SobreVue",
    components: {BotaoCurriculo}
}
</script>
<style>
.animate-slide-right {
  animation: slide-right 0.5s ease-out;
}

@keyframes slide-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>