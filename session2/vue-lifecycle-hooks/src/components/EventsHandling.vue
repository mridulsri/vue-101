<template>
  <div>
    <h1>Method event handlers</h1>
    <hr />
    <br />

    <h3>Counter: {{ counter }}</h3>
    <h2>Inline event handlers</h2>
    <div>
      <input
        type="button"
        class="btn"
        value="Increase"
        v-on:click="counter += 1"
      />
      <input
        type="button"
        class="btn"
        value="Decrease"
        v-on:click="counter -= 1"
      />
    </div>

    <h2>Method event handlers</h2>
    <div>
      <input type="button" class="btn" value="Increase" v-on:click="increase" />
      <input type="button" class="btn" value="Decrease" v-on:click="decrease" />
    </div>
    <h1>Event handler arguments</h1>
    <h2>Simple javascript argument function</h2>
    <div>
      <input
        type="button"
        class="btn"
        value="Increase"
        v-on:click="updateCounter(1)"
      />
      <input
        type="button"
        class="btn"
        value="Decrease"
        v-on:click="updateCounter(-1)"
      />
    </div>
    <h2>Implicit event argument</h2>
    <div>
      <input
        type="button"
        class="btn"
        value="Increase"
        v-on:click="updateCounterImplicit"
      />
      <input
        type="button"
        class="btn"
        value="Decrease"
        v-on:click="updateCounterImplicit"
      />
    </div>
    <h2>Explicit event argument</h2>
    <div>
      <input
        type="button"
        class="btn"
        value="Increase"
        v-on:click="updateCounterExplicit(1, $event)"
      />
      <input
        type="button"
        class="btn"
        value="Decrease"
        v-on:click="updateCounterExplicit(-1, $event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase() {
      this.counter += 1;
    },
    decrease() {
      this.counter -= 1;
    },
    updateCounter(val) {
      this.counter += val;
    },
    updateCounterImplecit(event) {
      this.counter += event.target.value === "Increase" ? 1 : -1;
    },
    updateCounterExplicit(val, event) {
      this.counter += val;
      console.log("event :>> ", event);
    },
  },
};
</script>

<style scoped>
.btn {
  display: inline-block;
  margin: 10px;
  padding: 12px;
  font-size: 13px;
  font-weight: 700;
  background-color: rgb(63, 63, 219);
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 4px;
}
</style>
