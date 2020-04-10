<template>
  <footer
    class="footer"
    :class="{
      [`footer-${type}`]: type,
      [`footer-${size}`]: size
    }"
    :data-background-color="backgroundColor"
  >
    <template>
      <div class="container">
        <nav>
          <ul>
            <li>
              <a href="#/">
                Ducis Alfa
              </a>
            </li>
            <li>
              <a href="#/about-us">
                About Us
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                Blog?
              </a>
            </li>
          </ul>
        </nav>
        <div class="copyright">
          &copy; {{ year }}, 
          <a
            href="javascript:void(0)"
            target="_blank"
          >_</a>
        </div>
      </div>
    </template>

  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
    size: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
