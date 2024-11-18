<template>
  <div :class="themeClass" class="container">
    <div class="links-container" v-if="showLinks">
      <div>
        <a href="#about-me" class="link" >About Me</a>
        <a href="#projects" class="link" >Projects</a>
        <a href="#contact" class="link" >Contact</a>
        <a href="https://github.com/melancholisch" target="_blank" class="link" >GitHub</a>
      </div>

      <button @click="toggleTheme" class="icon-button">
        <component :is="themeIcon" class="w-6 h-6" :class="{'moon-icon': isDarkMode}"/>
      </button>
    </div>

    <div class="fixed-center">
      <Graveyard :image="graveyardImage" />
    </div>
    <div class="content">
      <section>
        <AboutMe v-if="showAboutMe" id="about-me" />
      </section>
      <section>
        <Projects v-if="showProjects" id="projects" />
      </section>
      <section>
        <Contact v-if="showContact" id="contact" />
      </section>
    </div>

  </div>
</template>

<script>
import Graveyard from '~/components/Graveyard.vue';
import AboutMe from '@/components/AboutMe.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
import { SunIcon, MoonIcon } from 'vue-feather-icons';

export default {
  components: {
    AboutMe,
    Projects,
    Contact,
    SunIcon,
    MoonIcon
  },
  data() {
    return {
      showLinks: false,
      isDarkMode: true,
      showAboutMe: false,
      themeIcon: 'MoonIcon'
    };
  },
  computed: {
    themeClass() {
      return this.isDarkMode ? 'dark-theme' : 'light-theme';
    },
    graveyardImage() {
      return this.isDarkMode ? require('./../assets/graveyard-fu2.png') : require('@/assets/graveyard.png');
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      this.themeIcon = this.isDarkMode ? 'MoonIcon' : 'SunIcon';
    },
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
      this.showAboutMe = true;
    }, 5000); // Show links after 5 seconds
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap');

body {
  overflow-x: hidden;
  font-family: 'Work Sans', sans-serif;
}

.dark-theme{
  background-color: #0a0a23;
}

.light-theme{
  background-color: #f5f5f5;
}

.container {
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center;
  align-items: center; */
  /* height: 100vh; */
}

.fixed-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}

.content {
  margin-top: 100vh;
}

.links-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
  animation: fadeIn 2s forwards;
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  z-index: 10;
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

.link {
  color: #fff;
  text-decoration: none;
  padding: 0 10px;
}

.light-theme .link {
  color: black;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.icon-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.icon-button:focus {
  outline: none;
}
.moon-icon {
  color: white;
}
</style>