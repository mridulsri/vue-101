<template>
  <div>
    <h2>Interpolations</h2>
    <h3>Text:</h3>
    <div>Message: {{ message }}</div>
    <h3>Raw-HTML:</h3>
    <div>
      <p>Using mustaches: {{ rawHtml }}</p>
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </div>

    <h3>Attributes</h3>
    <div>
      <a v-bind:href="link" target="_blank" rel="noopener noreferrer"
        >Go To Google</a
      >
      <br />
      <a :href="link" target="_blank" rel="noopener noreferrer">Go To Google</a>
      <br />
      <img :src="src" alt="" />
    </div>
    <h3>Using JavaScript Expressions</h3>
    <div>
      <h2>{{ flag ? "😀 Happy" : "😟 Un-Happy" }}</h2>
      <br />
      <input
        type="button"
        :value="flag ? 'Make me Un-happy' : 'Make me Happy'"
        @click="flag = !flag"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "interpolations",
  data() {
    return {
      message: "Hello world!",
      rawHtml: "<span>this is row html content</span>",
      link: "https://google.com/",
      src: "https://image.shutterstock.com/image-photo/hand-flipping-wooden-cubes-change-260nw-1549738514.jpg",
      flag: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
