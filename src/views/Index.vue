<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter clear-filter"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <img
              v-show="leafShow"
              :src="leaf4"
              alt="leaf4"
              class="leaf4"
            >
            <img
              v-show="leafShow"
              :src="leaf3"
              alt="leaf3"
              class="leaf3"
            >
            <img
              v-show="leafShow"
              :src="leaf2"
              alt="leaf2"
              class="leaf2"
            >
            <img
              v-show="leafShow"
              :src="leaf1"
              alt="leaf1"
              class="leaf1"
            >
            <div class="brand">
              <h1>
                Lorem ipsum dolor sit amet
              </h1>
              <h3 class="title">
                Suspendisse quis ligula vestibulum, luctus eros et, dictum libero.
                <div>&nbsp;</div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div
      id="kynning"
      class="main main-raised"
    >
      <div
        id="kynning"
        class="cd-section section section-basic"
      >
        <div class="container">
          <div class="title">
            <h2>Kynning</h2>
          </div>
          <kynning />
        </div>
      </div>

    </div>
   </div>
</template>

<script>
import Kynning from "./components/Kynning";
import Mixins from "@/plugins/basicMixins";

export default {
  name: "Index",
  components: {
    Kynning,
 
    
  },
  mixins: [Mixins.VerticalNav, Mixins.HeaderImage],
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg")
    },
    leaf4: {
      type: String,
      default: require("@/assets/img/leaf4.png")
    },
    leaf3: {
      type: String,
      default: require("@/assets/img/leaf3.png")
    },
    leaf2: {
      type: String,
      default: require("@/assets/img/leaf2.png")
    },
    leaf1: {
      type: String,
      default: require("@/assets/img/leaf1.png")
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg")
    }
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false
    };
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
    document.removeEventListener("scroll", this.scrollListener);
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    }
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

.vertical-nav-active {
  display: block;
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
@media all and (max-width: 768px) {
  .vertical-nav-active {
    display: none;
  }
}

.mb-0 {
  padding-bottom: 0 !important;
}

#morphing-cards {
  padding-top: 70px;
}
</style>
