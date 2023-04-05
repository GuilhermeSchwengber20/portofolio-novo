<template>
    <div class="w-4/5 h-full flex flex-col items-center justify-center mt-14 animate-slide-right ">
        <div class="flex flex-col justify-center items-center">
            <h2 class="text-center font-main text-3xl text-yellow tracking-widest mt-10 mr-10">CONTATO</h2>
            <span class="text-center font-main text-xl text-white mt-2">Alguma pergunta ou deseja mais alguma informação? Me escreva uma mensagem.</span>
        </div>
        <div class="w-2/4 h-full mt-7 flex flex-col items-center ">
            <div class="w-full flex flex-row gap-7">
                <div>
                    <input type="text" class="w-80 h-10 p-2 outline-none bg-input  tracking-widest font-main placeholder:font-bold" placeholder="Primeiro nome">
                </div>
                <div>
                    <input type="text" class="w-80 h-10 p-2 outline-none bg-input  tracking-widest font-main placeholder:font-bold" placeholder="Ultimo nome">
                </div>
            </div>
            <div class="w-full flex flex-row mt-7">
                <input type="text" class="w-full h-10 p-2 outline-none bg-input  tracking-widest font-main placeholder:font-bold" placeholder="Email:">
            </div>
            <div class="w-full flex flex-row mt-7 items-center">
                <div class=" flex flex-row items-center w-96">
                    <span class="font-main text-xl text-white tracking-widest">Gênero:</span>
                    <div class="ml-3 ">
                        <input type="radio" id="masc"/>
                        <label for="masc" class="ml-2 font-main text-xl text-white tracking-widest">Masc.</label>
                    </div>
                    <div class="ml-3 ">
                        <input type="radio" id="fem"/>
                        <label for="fem" class="ml-2 font-main text-xl text-white tracking-widest">Fem.</label>
                    </div>
                </div>
                <div class="w-96 ">
                    <input type="text" class="w-full h-10 p-2 outline-none bg-input  tracking-widest font-main placeholder:font-bold" placeholder="Tel.">
                </div>
            </div>
            <div class="w-full flex flex-row mt-7 items-center">
                <textarea class="w-full h-32 resize-none bg-input font-main tracking-widest placeholder:font-bold outline-none p-2" placeholder="Escreva uma mensagem"></textarea>
            </div>
            <div class="w-full flex flex-row mt-7 items-center justify-end">
                <button class="border border-yellow px-5 py-2 font-main tracking-widest text-primary">FALE COMIGO</button>
            
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: "ContatoVue"
}
</script>