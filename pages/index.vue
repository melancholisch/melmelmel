<template>
  <div :class="themeClass" id="app">
    <div class="links-container" v-if="showLinks">
      <div class="links">
        <a href="#about-me" class="link" @click="showSection('aboutMe')">about</a>
        <a href="#projects" class="link" @click="showSection('projects')">projects</a>
        <a href="https://github.com/melancholisch" target="_blank" class="link" >github</a>
      </div>

      <button @click="toggleTheme" class="icon-button">
        <component :is="themeIcon" class="w-6 h-6" :class="{'moon-icon': isDarkMode}"/>
      </button>
    </div>

    <div class="fixed-center">
      <Graveyard :image="graveyardImage" />
    </div>
    <div class="content">
      <AboutMe v-if="activeSection === 'aboutMe'" id="about-me" />
      <Projects v-if="activeSection === 'projects'" id="projects" />
    </div>
    <Footer v-if="showFooter" />

  </div>
</template>

<script>
import Graveyard from '~/components/Graveyard.vue';
import AboutMe from '@/components/AboutMe.vue';
import Projects from '@/components/Projects.vue';
import Footer from '@/components/Footer.vue';
import { SunIcon, MoonIcon } from 'vue-feather-icons';

export default {
  components: {
    AboutMe,
    Projects,
    SunIcon,
    MoonIcon, 
    Graveyard,
    Footer
  },
  data() {
    return {
      showLinks: false,
      isDarkMode: true,
      activeSection: null,
      themeIcon: 'MoonIcon',
      showFooter: false
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
    showSection(section) {
      this.activeSection = section;
    },
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
      this.showFooter = true;
      this.showSection('aboutMe');
      document.body.classList.add('overflow-auto');
    }, 5000); // Show links after 5 seconds
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

// vars
:root {
  --purple: #682ae9;
  --light: #dbdbdb;
  --header-link: #dbdbdb;
  --header-link-hover: #682ae9;
  --header-link-hover-icon: #dbdbdb;
  --header-link-active: rgba(85, 85, 85, 1);
  --std-color: #dbdbdb;
  --bg: #0a0a23;
  --bg-rgb: 10, 10, 35; 
  --bgLight: radial-gradient(var(--bg), transparent, var(--purple) 130%);
  --gray: #808080;
  --comment: #555;
}

// reset
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 0;
  min-width: 0;
  font-family: inherit;
}

::selection {
  background: var(--purple);
  color: white;
}

body {
  min-height: 100vh;
  overflow: hidden;
  font-family: 'Roboto Mono', monospace;


  &.locked {
    overflow: hidden;
  }
}

.overflow-auto {
  overflow-y: auto;
}

#app {
  overflow: hidden;
  margin: 0 auto;
}

// general
li {
  list-style: none;
}

a {
  text-decoration: none;
    &:hover {
      color: var(--header-link-hover);
      svg {
        fill: var(--header-link-hover-icon);
      }
    }
    &.router-link-exact-active,
    &.router-link-active {
      color: var(--purple);
    }
  }

button {
  border: 0;
}

svg {
  title,
  desc {
    display: none;
  }
}

// background
.dark-theme{
  background-color: #0a0a23;
}

.light-theme{
  background-color: #f5f5f5;
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
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
  background: linear-gradient(180deg, var(--bg) 3rem, rgba(var(--bg-rgb), 0)); //fix this
  padding: 10px;
}

.light-theme .links-container {
  background: #f5f5f5
}

.link {
  color: #fff;
  text-decoration: none;
  padding: 0 10px;
}

.light-theme .link {
  color: black;
  &:hover {
    color: var(--header-link-hover);
    svg {
      fill: var(--header-link-hover-icon);
    }
  }
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

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

//theme icon
.icon-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover .w-6.h-6 {
    color: var(--header-link-hover);
  }
}

.icon-button:focus {
  outline: none;
}
.moon-icon {
  color: white;
}
</style>