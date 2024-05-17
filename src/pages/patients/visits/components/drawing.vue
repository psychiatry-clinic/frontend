<script>
  import { fabric } from 'fabric'

  export default {
    data() {
      return {
        canvas: null,
        isDrawingMode: false,
        drawingColor: '#03a900',
        drawingShadowColor: '#000000',
        drawingLineWidth: 4,
        drawingShadowWidth: 0,
        drawingShadowOffset: 0,
        selectedBrush: 'square',
        canvasWidth: 0, // Default width, will be updated with image size
        canvasHeight: 0, // Default height, will be updated with image size
        imageUrl: '/denver2.png', // URL of the uploaded image
      }
    },
    methods: {
      initializeCanvas() {
        this.canvas = new fabric.Canvas('c', {
          isDrawingMode: true,
        })
        fabric.Object.prototype.transparentCorners = false
        this.updateBrush()
      },
      toggleDrawingMode() {
        this.isDrawingMode = !this.isDrawingMode
        this.canvas.isDrawingMode = this.isDrawingMode
        document.getElementById('drawing-mode').innerHTML = this.isDrawingMode
          ? 'Cancel drawing mode'
          : 'Enter drawing mode'
      },
      updateBrush() {
        const brush = this.canvas.freeDrawingBrush
        brush.color = this.drawingColor
        brush.width = parseInt(this.drawingLineWidth, 10) || 1
        brush.shadow = new fabric.Shadow({
          blur: parseInt(this.drawingShadowWidth, 10) || 0,
          offsetX: parseInt(this.drawingShadowOffset, 10) || 0,
          offsetY: parseInt(this.drawingShadowOffset, 10) || 0,
          affectStroke: true,
          color: this.drawingShadowColor,
        })
        if (brush.getPatternSrc) {
          brush.source = brush.getPatternSrc.call(brush)
        }
      },
      changeBrush() {
        let brush
        if (this.selectedBrush === 'hline') {
          brush = new fabric.PatternBrush(this.canvas)
          brush.getPatternSrc = function () {
            const patternCanvas = fabric.document.createElement('canvas')
            patternCanvas.width = patternCanvas.height = 10
            const ctx = patternCanvas.getContext('2d')
            ctx.strokeStyle = this.color
            ctx.lineWidth = 5
            ctx.beginPath()
            ctx.moveTo(0, 5)
            ctx.lineTo(10, 5)
            ctx.closePath()
            ctx.stroke()
            return patternCanvas
          }
        } else if (this.selectedBrush === 'vline') {
          brush = new fabric.PatternBrush(this.canvas)
          brush.getPatternSrc = function () {
            const patternCanvas = fabric.document.createElement('canvas')
            patternCanvas.width = patternCanvas.height = 10
            const ctx = patternCanvas.getContext('2d')
            ctx.strokeStyle = this.color
            ctx.lineWidth = 5
            ctx.beginPath()
            ctx.moveTo(5, 0)
            ctx.lineTo(5, 10)
            ctx.closePath()
            ctx.stroke()
            return patternCanvas
          }
        } else if (this.selectedBrush === 'square') {
          brush = new fabric.PatternBrush(this.canvas)
          brush.getPatternSrc = function () {
            const squareWidth = 10,
              squareDistance = 2
            const patternCanvas = fabric.document.createElement('canvas')
            patternCanvas.width = patternCanvas.height =
              squareWidth + squareDistance
            const ctx = patternCanvas.getContext('2d')
            ctx.fillStyle = this.color
            ctx.fillRect(0, 0, squareWidth, squareWidth)
            return patternCanvas
          }
        } else if (this.selectedBrush === 'diamond') {
          brush = new fabric.PatternBrush(this.canvas)
          brush.getPatternSrc = function () {
            const squareWidth = 10,
              squareDistance = 5
            const patternCanvas = fabric.document.createElement('canvas')
            const rect = new fabric.Rect({
              width: squareWidth,
              height: squareWidth,
              angle: 45,
              fill: this.color,
            })
            const canvasWidth = rect.getBoundingRect().width
            patternCanvas.width = patternCanvas.height =
              canvasWidth + squareDistance
            rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 })
            const ctx = patternCanvas.getContext('2d')
            rect.render(ctx)
            return patternCanvas
          }
        } else if (this.selectedBrush === 'texture') {
          const img = new Image()
          img.src = '../assets/honey_im_subtle.png'
          brush = new fabric.PatternBrush(this.canvas)
          brush.source = img
        } else {
          brush = new fabric[this.selectedBrush + 'Brush'](this.canvas)
        }
        this.canvas.freeDrawingBrush = brush
        this.updateBrush()
      },
      clearCanvas() {
        this.canvas.clear()
      },
      loadImage(event) {
        const file = event.target.files[0]
        if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            this.imageUrl = e.target.result
          }
          reader.readAsDataURL(file)
        }
      },
      adjustCanvasSize() {
        const img = this.$refs.image
        if (!img) return
        this.canvasWidth = img.width
        this.canvasHeight = img.height
        this.canvas.setWidth(this.canvasWidth)
        this.canvas.setHeight(this.canvasHeight)
        this.canvas.renderAll()
      },
      saveCanvas() {
        const dataUrl = this.canvas.toDataURL()
        localStorage.setItem('savedCanvas', dataUrl)
      },
      loadCanvas() {
        const dataUrl = localStorage.getItem('savedCanvas')
        if (dataUrl) {
          fabric.Image.fromURL(dataUrl, (img) => {
            this.canvas.clear()
            this.canvas.add(img)
            this.canvas.renderAll()
          })
        }
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.initializeCanvas()
      })
    },
  }
</script>

<template>
  <div>
    <input type="file" @change="loadImage" />

    <button @click="loadCanvas" class="btn btn-primary mx-2">load</button>
    <button @click="saveCanvas" class="btn btn-primary mx-2">save</button>
    <button id="drawing-mode" @click="toggleDrawingMode">
      Enter drawing mode
    </button>
    <div id="drawing-mode-options" v-show="isDrawingMode">
      <label for="drawing-color">Drawing color</label>
      <input
        type="color"
        id="drawing-color"
        v-model="drawingColor"
        @change="updateBrush"
      />

      <label for="drawing-shadow-color">Shadow color</label>
      <input
        type="color"
        id="drawing-shadow-color"
        v-model="drawingShadowColor"
        @change="updateBrush"
      />

      <label for="drawing-line-width">Line width</label>
      <input
        type="range"
        id="drawing-line-width"
        min="1"
        max="100"
        v-model="drawingLineWidth"
        @input="updateBrush"
      />
      <span>{{ drawingLineWidth }}</span>

      <label for="drawing-shadow-width">Shadow width</label>
      <input
        type="range"
        id="drawing-shadow-width"
        min="0"
        max="50"
        v-model="drawingShadowWidth"
        @input="updateBrush"
      />
      <span>{{ drawingShadowWidth }}</span>

      <label for="drawing-shadow-offset">Shadow offset</label>
      <input
        type="range"
        id="drawing-shadow-offset"
        min="0"
        max="50"
        v-model="drawingShadowOffset"
        @input="updateBrush"
      />
      <span>{{ drawingShadowOffset }}</span>

      <select
        id="drawing-mode-selector"
        v-model="selectedBrush"
        @change="changeBrush"
      >
        <option value="Pencil">Pencil</option>
        <option value="hline">Horizontal Line</option>
        <option value="vline">Vertical Line</option>
        <option value="square">Square</option>
        <option value="diamond">Diamond</option>
        <option value="texture">Texture</option>
      </select>
    </div>
    <button id="clear-canvas" @click="clearCanvas">Clear</button>

    <div id="wrapper">
      <div v-if="imageUrl">
        <img :src="imageUrl" @load="adjustCanvasSize" ref="image" />
      </div>
      <canvas id="c" :width="canvasWidth" :height="canvasHeight"></canvas>
    </div>
  </div>
</template>

<style scoped>
  #c {
    border: 1px solid #03a900;
  }

  #wrapper {
    max-width: 1000px;
    min-width: 1000px;
  }

  img {
    position: absolute;
    top: 10;
    left: 0;
    width: 1000px;
  }
</style>
