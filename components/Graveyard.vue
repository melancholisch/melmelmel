<template>
  <div class="graveyard-container">
    <div class="tombstone">
        <img src="../images/graveyard-fu2.png" alt="Tombstone" class="tombstone-image" />
        <div class="tombstone-text-container">
            <span class="tombstone-text" id="text-1">architecture</span>
            <span class="tombstone-text">portfolio</span>
        </div>
        
    </div>
    <div class="lightning" id="lightning"></div>
  </div>
</template>

<script>
export default {
  name: 'Graveyard',
  mounted() {
    setTimeout(() => {
      document.getElementById('lightning').classList.add('animate-lightning');
      setTimeout(() => {
        document.getElementById('text-1').innerText = 'dev';
      }, 600); // Change text after lightning animation
    }, 5000); 
  }
}
</script>

<style scoped>
.graveyard-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0a0a23;
  position: relative;
}

.tombstone {
  position: relative;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.tombstone-image {
  max-width: 100%;
  max-height: 100%;
}

.tombstone-text-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-65%, -20%);
    z-index: 2;
    text-align: center;
}
.tombstone-text {
  display: block;
  color: white;
  font-size: 0.4rem;
}

@media (min-width: 600px) {
  .tombstone-text {
    font-size: 0.7rem;
  }
}

.lightning {
  position: absolute;
  top: 0;
  left: 45%;
  width: 2px;
  height: 48%;
  background: white;
  opacity: 0;
  z-index: 3;
  transform: rotate(-12deg);
}

@keyframes lightning-strike {
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

.animate-lightning {
  animation: lightning-strike 0.5s ease-in-out;
}
</style>