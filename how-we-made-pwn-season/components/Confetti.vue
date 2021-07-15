<template>
  <div class="flex flex-col justify-center">
    <button class="mx-auto text-4xl" @click="toggle">🎉</button>
  </div>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.$confetti.start({
        defaultSize: 20,
        windSpeedMax: 2,
        particlesPerFrame: 4,
        particles: [
          {
            type: "heart",
          },
          {
            type: "rect",
          },
        ],
      });
      setTimeout(() => this.$confetti.stop(), 3000);
    },
  },
};
</script>

<style>
</style>