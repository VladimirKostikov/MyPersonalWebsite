<template>
    <NuxtParticles
        id="tsparticles"
        :options="options"
        @load="onLoad"
    >
    </NuxtParticles>
</template>

<script setup lang="ts">
    import type { Container } from 'tsparticles-engine'
    const options = {
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        background: {
            color: {
                value: '#0a192f'
            }
        },
        particles: {
            color: {
                value: "#fff"
            },
            links: {
                color: "#fff",
                enable: true
            },
            move: {
                enable: true
            },
            number: {
                value: 70
            }
        }
    }
    const onLoad = (container: Container) => {
        container.pause()
        setTimeout(() => container.play(), 2000)
    }
</script>