<template>
    <span class="font-main text-2xl mt-5 text-white tracking-widest cursor-pointer transition duration-150 ease-in hover:text-primary" @click="$emit('mudarMenu', `${Item.id}`)">
        {{ Item.text }}
    </span>
</template>
<script>
export default{
    name: "ItemMenu",
    props: {Item: Object}
}
</script>