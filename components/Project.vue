<template>
    <div class="max-w-[540px] animate__animated animate__fadeInDown h-full flex items-center mx-auto">
        <div class="w-full block h-auto bg-gradient-to-b rounded-lg from-navy-100 to-navy-200">
            <div class="w-full mb-2 bg-white p-10 rounded-lg">
                <img :src="img" class="block mx-auto  w-max" alt="">
            </div>
            <div class="w-full px-7 my-5 flex justify-between">
                <div class="text-green text-2xl font-bold">
                    {{ title }}
                </div>
                <div class="text-slate-300 text-xl font-bold">
                    <a :href="link">View</a>
                </div>
            </div>

            <div class="my-5 px-7 text-white">
                <span>{{ description }}</span>
            </div>

            <div>
                
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'post',
    props: [
      'title',
      'img',
      'description',
      'link'
    ],
  }
</script>