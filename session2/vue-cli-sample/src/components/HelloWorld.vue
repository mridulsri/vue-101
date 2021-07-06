<!-- <template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template> -->

<script>
export default {
  name: "HelloWorld",
  props: {
    tag: String,
  },
  data() {
    return {
      names: ["Mridul", "Rohan", "Gaurav"],
    };
  },
  render(createElement) {
    // createElement(this.tag, {}, "Hello world");

    // with multiple
    return createElement("div", {}, [
      createElement(
        this.tag,
        {
          attrs: {
            class: "header",
          },
          style: {
            fontSize: "40px",
          },
        },
        "Hello world"
      ),
      createElement(
        "ul",
        {},
        this.names.map((name) => createElement("li", {}, `${name}`))
      ),
    ]);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  color: blue;
}
</style>
