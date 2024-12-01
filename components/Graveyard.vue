<template>
  <div class="graveyard-container">
    <div class="tombstone">
        <img :src="image" alt="Tombstone" class="tombstone-image"/>
        <div class="tombstone-text-container">
            <span class="tombstone-text" id="text-1">architecture</span>
            <span class="tombstone-text">portfolio</span>
        </div>
        
    </div>
    <!-- <div class="lightning" id="lightning"></div> -->
  </div>
</template>

<script>
export default {
  name: 'Graveyard',
  props: {
    image: {
      type: String,
      required: true
    },
  },

  mounted() {
    setTimeout(() => {
      // document.getElementById('lightning').classList.add('animate-lightning');
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
}

.tombstone {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.tombstone-image {
  width: 100%;
  /* min-width: 500px; */
  /* height: auto; */
}

.tombstone-text-container {
  position: absolute;
  top: 55%;
  left: 49%;
  transform: translate(-55%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
}

.tombstone-text {
  color: white;
  font-size: 0.4rem;
  transform: rotate(3deg);
}

.light-theme .tombstone-text {
  color: black;
}

@media (min-width: 600px) {
  .tombstone-text {
    font-size: 0.7rem;
  }
}
@media (max-width: 1023px) {
  .tombstone-image {
    transform: scale(2.0); 
  }
}
</style>