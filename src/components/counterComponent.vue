<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounnter }}</h3>

    <div>
      <button @click="increment">+1</button>
      <button @click="decremet">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps({
  value: { type: Number, required: true },
})

const counter = ref(props.value)

const increment = () => {
  counter.value++
}

const decremet = () => {
  counter.value--
}
const squareCounnter = computed(() => counter.value * counter.value)
</script>
