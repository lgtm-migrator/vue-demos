<script setup lang="ts">
const el = $ref<HTMLCanvasElement>()
const ctx = $computed(() => el!.getContext('2d')!)

const WIDTH = 450
const HEIGHT = 450

interface Point {
  x: number
  y: number
}

interface Branch {
  start: Point
  length: number
  angle: number
}

function line(s: Point, t: Point) {
  ctx.beginPath()
  ctx.moveTo(s.x, s.y)
  ctx.lineTo(t.x, t.y)
  ctx.stroke()
}

function drawBranch(b: Branch) {
  const end = getEndPoint(b)
  line(b.start, end)
}

function getEndPoint(b: Branch) {
  return {
    x: b.start.x + b.length * Math.cos(b.angle),
    y: b.start.y + b.length * Math.sin(b.angle),
  }
}

const pendingTasks: Function[] = []

function step(b: Branch, cnt: number): void {
  if (cnt === 8)
    return

  drawBranch(b)
  const end = getEndPoint(b)

  pendingTasks.push(() => step({
    start: end,
    length: b.length * 0.75,
    angle: b.angle + Math.random(),
  }, cnt + 1))

  pendingTasks.push(() => step({
    start: end,
    length: b.length * 0.75,
    angle: b.angle - Math.random(),
  }, cnt + 1))
}

function init() {
  ctx.strokeStyle = '#1D9A6C'
  const start = { x: WIDTH / 2, y: HEIGHT }
  step({
    start,
    length: 100,
    angle: -Math.PI / 2,
  }, 0)
}

function frame() {
  const tasks = [...pendingTasks]
  pendingTasks.length = 0
  tasks.forEach(task => task())
}

let framesCount = 0
function startFrame() {
  requestAnimationFrame(() => {
    framesCount += 1
    if (framesCount % 10 === 0)
      frame()
    startFrame()
  })
}
startFrame()

onMounted(() => {
  init()
})
</script>

<template>
  <div flex="~" flex-col items-center justify-center>
    <canvas ref="el" :width="WIDTH" :height="HEIGHT" border />
  </div>
</template>
