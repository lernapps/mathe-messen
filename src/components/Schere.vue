<script setup lang="ts">
// "Schere": learners cut a parallelogram along its height and move the triangle to the other side. A rectangle is
// left, with the same area. It is no exercise: it shows the idea. Buttons work with the keyboard; every step has a text.
import { computed, ref } from "vue";
import { next, shapes, viewBox, type Point, type Step } from "./Schere.ts";

const props = defineProps<{
  /** Base g of the parallelogram. */
  base: number;
  /** Height h. */
  height: number;
  /** How far the top side is shifted to the right, between 1 and base. */
  shift: number;
  /** Labels of the buttons. */
  cutLabel: string;
  moveLabel: string;
  resetLabel: string;
  /** The text for each step; it is also the description of the figure. */
  statusStart: string;
  statusCut: string;
  statusMove: string;
}>();

const step = ref<Step>(0);
const sh = computed(() => shapes(step.value, props.base, props.height, props.shift));
const box = computed(() => viewBox(props.base, props.height, props.shift));
const unit = 36;
const status = computed(() =>
  step.value === 0 ? props.statusStart : step.value === 1 ? props.statusCut : props.statusMove,
);

function pts(points: Point[]): string {
  return points.map((p) => `${p.x * unit},${p.y * unit}`).join(" ");
}

function cut() {
  step.value = 1;
}
function move() {
  step.value = next(step.value);
}
function reset() {
  step.value = 0;
}
</script>

<template>
  <div class="schere">
    <svg
      class="schere-figure"
      role="img"
      :aria-label="status"
      :viewBox="`${box.x * unit} ${box.y * unit} ${box.w * unit} ${box.h * unit}`"
    >
      <polygon class="schere-body" :points="pts(sh.body)" />
      <polygon v-if="sh.triangle.length" class="schere-triangle" :points="pts(sh.triangle)" />
      <polyline v-if="sh.cut.length" class="schere-cut" :points="pts(sh.cut)" />
    </svg>
    <div class="schere-buttons">
      <button type="button" :disabled="step !== 0" @click="cut">{{ cutLabel }}</button>
      <button type="button" :disabled="step !== 1" @click="move">{{ moveLabel }}</button>
      <button type="button" :disabled="step === 0" @click="reset">{{ resetLabel }}</button>
    </div>
    <p class="schere-status" aria-live="polite">{{ status }}</p>
  </div>
</template>

<style scoped>
.schere {
  margin: 1rem 0;
}

.schere-figure {
  display: block;
  width: 100%;
  max-width: 28rem;
  height: auto;
}

.schere-body {
  fill: var(--page-surface);
  stroke: var(--page-text);
  stroke-width: 3;
}

.schere-triangle {
  fill: var(--page-surface);
  stroke: var(--page-accent);
  stroke-width: 3;
  stroke-dasharray: 8 5;
}

.schere-cut {
  fill: none;
  stroke: var(--page-accent);
  stroke-width: 3;
  stroke-dasharray: 3 4;
}

.schere-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.schere-buttons button {
  min-height: 44px;
  padding: 0 1rem;
  border: 1px solid var(--page-border);
  border-radius: 0.4rem;
  background: var(--page-accent);
  color: var(--page-on-accent);
  font: inherit;
  cursor: pointer;
}

.schere-buttons button:disabled {
  background: var(--page-surface);
  color: var(--page-muted);
  cursor: not-allowed;
}

.schere-status {
  margin: 0.5rem 0 0;
  min-height: 3rem;
}
</style>
