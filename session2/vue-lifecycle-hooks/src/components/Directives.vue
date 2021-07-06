<template>
  <div>
    <h1>Directives:</h1>
    <h3># Arguments</h3>
    <div v-if="flag">{{ message }}</div>
    <input type="button" value="Click me" v-on:click="onClick">

    <br>
    <br>
    <h3># Dynamic Arguments</h3>
     <img :src="src" v-on:[eventName]="changeMe" alt="" />
    Dynamic Argument Expression Constraints

    <h3># Modifiers</h3>
    <form v-on:submit.prevent="onSubmit"> ... </form>
  </div>
</template>

<script>
export default {
  name: "directives",
  data() {
    return {
      message: "Hello world!",
      flag: true,
      src:"https://image.shutterstock.com/image-photo/british-shorthair-kitten-silver-color-260nw-1510641710.jpg",
      eventName: 'click'
    };
  },
 
  methods: {
      onClick() {
          this.message = "Adding new skill in my list"
      },
      changeMe()
      {
          if(this.src.includes('british-shorthair-kitten-silver-color-260nw-1510641710.jpg'))
          this.src= "https://i.pinimg.com/474x/fd/c7/ad/fdc7adeb3ef5a6050362d2aff9a5bff0.jpg"
          else
           this.src= "https://image.shutterstock.com/image-photo/british-shorthair-kitten-silver-color-260nw-1510641710.jpg"
      }
  },
};
</script>

<style lang="scss" scoped></style>
