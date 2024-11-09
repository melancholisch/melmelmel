<template>
  <div class="container">
  </div>
</template>

<script>
export default {
  mounted() {
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

    setInterval(createRain, 5);
    setInterval(createThunder, 5000);
  }
}
</script>


<style>
  body {
    margin: 0;
    overflow: hidden;
    background:  #0a0a23; 
  }

  .rain {
    position: absolute;
    width: 2px;
    height: 30px;
    opacity: 0.9;
    background: #8d8c8c81;
    animation: fall 0.05s linear infinite;
    transform: rotate(15deg);
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
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    opacity: 0;
    animation: flash 1s infinite;
  }

  @keyframes flash {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
</style>