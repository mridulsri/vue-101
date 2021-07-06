<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld tag="h1" />
  </div>
</template> -- -->

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  // components: {
  //   HelloWorld,
  // },
  render(createElement) {
    return createElement(
      "div",
      {
        attrs: {
          class: "home",
        },
        style: {
          display: "block",
        },
        on: {
          click: () => alert("I was clicked...!"),
        },
      },
      [
        createElement(HelloWorld, {
          props: {
            tag: "h1",
          },
        }),
      ]
    );
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
