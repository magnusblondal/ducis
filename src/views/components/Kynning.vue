<template>
  <div class="wrapper">
    <div id="buttons">
      <div class="title">
        <h3>
          Titill <br>
          <small>Undirtitill</small>
        </h3>
      </div>

      
      <div class="tim-typo">        
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit velit, iaculis sit amet ante sed, tempus dignissim velit. Aenean sit amet accumsan odio. Aenean laoreet elit felis, vel posuere tellus laoreet et. Donec laoreet orci lectus, faucibus dapibus massa feugiat vel. Curabitur semper laoreet elit, eu ultricies lorem efficitur sed. Phasellus convallis, lectus vel iaculis convallis, ex tortor dictum eros, vel tempor odio nisi sed lectus. Suspendisse potenti. Sed sollicitudin ipsum tincidunt luctus faucibus. Phasellus mollis risus eu vestibulum volutpat. Praesent sagittis, dolor sit amet consequat auctor, enim urna aliquam elit, a gravida arcu purus sed augue. Sed luctus dolor vitae neque luctus porttitor ac id magna. 
        </p>
      </div>


      <div class="tim-typo">
        <span class="tim-note"></span>
        <div class="blockquote undefined">
          <p>
            I will be the leader of a company that ends up being worth
            billions of dollars, because I got the answers. I understand
            culture. I am the nucleus. I think that&#x2019;s a
            responsibility that I have, to push possibilities, to show
            people, this is the level that things could be at.
          </p>
          <small>
            Kanye West, Musician
          </small>
        </div>
      </div>
    </div> 

    <div class="space-50" />

    <div class="md-layout">
      <div
        class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto"
        :class="{ 'text-center': responsive }"
      >
        <img
          :src="image"
          alt="Thumbnail Image"
          class="img-raised rounded-circle"
          :class="{ 'responsive-image': responsive }"
        >
      </div>

      <div
        class="md-layout-item md-size-10 md-xsmall-size-100 ml-auto"
        :class="{ 'text-center': responsive }"
      >
      </div>

      <div
        class="md-layout-item md-size-70 md-xsmall-size-100 ml-auto"
        :class="{ 'text-center': responsive }"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit velit, iaculis sit amet ante sed, tempus dignissim velit. Aenean sit amet accumsan odio. Aenean laoreet elit felis, vel posuere tellus laoreet et. Donec laoreet orci lectus, faucibus dapibus massa feugiat vel. Curabitur semper laoreet elit, eu ultricies lorem efficitur sed. Phasellus convallis, lectus vel iaculis convallis, ex tortor dictum eros, vel tempor odio nisi sed lectus. Suspendisse potenti. Sed sollicitudin ipsum tincidunt luctus faucibus. Phasellus mollis risus eu vestibulum volutpat. Praesent sagittis, dolor sit amet consequat auctor, enim urna aliquam elit, a gravida arcu purus sed augue. Sed luctus dolor vitae neque luctus porttitor ac id magna. 
        </p>
      </div>
    </div>    
    <div class="space-50" />

  </div>
</template>

<script>
export default {  
  data() {
    return {
      image: require("@/assets/img/faces/avatar.jpg"),
      responsive: false
    };
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  methods: {
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
