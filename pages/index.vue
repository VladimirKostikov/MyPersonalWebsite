<template>
    <section class="w-full h-screen flex items-center">
        <component :is="Particles" />
        <div class="w-max mx-auto text-white">
            <div class="uppercase text-white font-bold text-4xl text-center"><span>Hi, I'm</span></div>
            <div class="uppercase text-green font-bold text-7xl my-6"><span>Vladimir Kostikov</span></div>
            <div class="uppercase text-slate-300 font-bold text-2xl text-center"><span>Web Developer</span></div>
            <div class="flex mt-10 w-max mx-auto gap-10">
                <div class="hover:bg-darkgreen hover:text-white hover:border-darkgreen border-2 rounded-lg uppercase font-bold cursor-pointer border-slate-200 text-slate-200 py-3 px-5"><span>View my projects</span></div>
                <div class="hover:bg-darkgreen hover:text-white hover:border-darkgreen border-2 rounded-lg uppercase font-bold cursor-pointer border-slate-200 text-slate-200 py-3 px-5"><span>Contact me</span></div>
            </div>
        </div>
    </section>
    <section class="w-full h-screen bg-gradient-to-b from-navy-100 to-navy-200 flex items-center">
        <div class="w-max mx-auto">
           <div class="text-slate-200 text-5xl text-white font-bold text-center pb-5 border-b-2 border-green w-max mx-auto"><span>About me</span></div>
           <div class="my-10 max-w-[1200px] text-white text-2xl text-center">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at deleniti, commodi tenetur incidunt temporibus eius rem voluptate? Nam dolore illum exercitationem voluptatum libero unde, vitae fugit modi blanditiis cum doloremque vero ea voluptates odio itaque nemo molestias, corrupti aliquam veniam deleniti quia animi, tenetur culpa. Nostrum, libero voluptate.</span>
           </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { Particles } from '#components'

    const title = ref('My App')
    const description = ref('My App Description')

    // This will be reactive when you change title/description above
    useHead({
    title,
    meta: [{
        name: 'description',
        content: description
    }]
    })


</script>