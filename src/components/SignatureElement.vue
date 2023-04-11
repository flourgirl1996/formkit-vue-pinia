<template>
    <canvas ref="canvas" @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing"></canvas>
</template>

<script setup>

import { reactive, ref } from 'vue';
import  { useFormStore } from '../stores/formStore.js';

const formStore = useFormStore();

const state = reactive({
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    lineWidth: 2,
    strokeStyle: '#000',
});

const canvas = ref(null);

function startDrawing(event) {
    state.isDrawing = true;
    const rect = canvas.value.getBoundingClientRect();
    state.lastX = event.clientX - rect.left;
    state.lastY = event.clientY - rect.top;
}

function draw(event) {
    if (!state.isDrawing) return;
    const rect = canvas.value.getBoundingClientRect();
    const ctx = canvas.value.getContext('2d');
    ctx.beginPath();
    ctx.lineWidth = state.lineWidth;
    ctx.strokeStyle = state.strokeStyle;
    ctx.moveTo(state.lastX, state.lastY);
    ctx.lineTo(event.clientX - rect.left, event.clientY - rect.top);
    ctx.stroke();
    state.lastX = event.clientX - rect.left;
    state.lastY = event.clientY - rect.top;
}

function stopDrawing() {
    state.isDrawing = false;
    const imageData = canvas.value.toDataURL();
    formStore.signature.setSignature(imageData);
}
</script>

<style scoped>
canvas {
    border: 1px solid #000;
    background-color: white;
}
</style>
