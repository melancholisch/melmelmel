<template>
  <div class="links-container" v-if="showLinks">
    <a href="#about-me" class="link">About Me</a>
    <a href="#projects" class="link">Projects</a>
    <a href="#contact" class="link">Contact</a>
    <a href="https://github.com/melancholisch" target="_blank" class="link">GitHub</a>
    <a href="https://linkedin.com/in/your-linkedin" target="_blank" class="link">LinkedIn</a>
  </div>
</template>

<script>
export default {
  name: 'Links',
  props: {
    showLinks: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.links-container {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    animation: fadeIn 2s forwards;
}

.link {
  color: #fff;
  text-decoration: none;
  padding: 0 10px
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>