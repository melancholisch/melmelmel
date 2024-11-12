<template>
  <div class="container">
    <Graveyard />
    <div class="links-container" v-if="showLinks">
      <a href="#about-me" class="link" >About Me</a>
      <a href="#projects" class="link" >Projects</a>
      <a href="#contact" class="link" >Contact</a>
      <a href="https://github.com/melancholisch" target="_blank" class="link" >GitHub</a>
    </div>
  </div>
</template>

<script>
import Graveyard from '~/components/Graveyard.vue';
import AboutMe from '@/components/AboutMe.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';

export default {
  components: {
    AboutMe,
    Projects,
    Contact
  },
  data() {
    return {
      showLinks: false,
    };
  },
  mounted() {
    let rainInterval;
    let thunderInterval;

    function createRain() {
      const rain = document.createElement('div');
      rain.classList.add('rain');
      rain.style.left = `${Math.random() * 100}vw`;
      rain.style.animationDuration = `${Math.random() * 2 + 1}s`;
      rain.style.opacity = `${Math.random() * 0.5 + 0.5}`; 
      document.body.appendChild(rain);

      setTimeout(() => {
        rain.remove();
      }, 3000);
    }

    function createThunder() {
      const thunder = document.createElement('div');
      thunder.classList.add('thunder');
      document.body.appendChild(thunder);

      setTimeout(() => {
        thunder.remove();
      }, 500);
    }

    rainInterval = setInterval(createRain, 5);

    setTimeout(() => {
      createThunder();
      clearInterval(rainInterval);
      rainInterval = setInterval(createRain, 1000); // Diminui a frequência da chuva
      thunderInterval = setInterval(createThunder, 300000); // Trovão a cada 5 minutos
    }, 5000);

    setTimeout(() => {
      this.showLinks = true;
    }, 5000); // Show links after 5 seconds
  },
}
</script>


<style>
body {
  margin: 0;
  overflow: hidden;
  background-color: #0a0a23;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
}

.rain {
  position: absolute;
  width: 2px;
  height: 20px;
  opacity: 0.9;
  background: #8d8c8c81;
  animation: fall 0.05s linear infinite;
  /* transform: rotate(15deg); removing the rain angulation*/ 
}

@keyframes fall {
  0% {
    top: -100px;
    opacity: 1;
  }
  100% {
    top: 100vh;
    opacity: 0;
  }
}

  .thunder {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1000;
  pointer-events: none;
  animation: flash 0.1s ease-in-out;
}

@keyframes flash {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.links-container {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: fadeIn 2s forwards;
}

.link {
  color: #fff;
  text-decoration: none;
  padding: 0 10px;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>