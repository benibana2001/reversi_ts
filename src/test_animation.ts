import './scss/style.scss'
import { CanvasObj, Time } from './ts/Util'
import EditorCanvas from './ts/Editor/EditorCanvas'
import EditorGameBase from './ts/Editor/EditorGameBase'
import EditorAnimation from './ts/Editor/EditorAnimation'

let id: string = 'reversi'

const canvasManager: EditorCanvas = new EditorCanvas()
const gameBase: EditorGameBase = new EditorGameBase()
const animationEditor: EditorAnimation = new EditorAnimation()
let sz: { w: number, h: number } = gameBase.getFitSz(10, 11)
let c: CanvasObj = canvasManager.initCanvas(id, sz.w, sz.h, null)
animationEditor.add("bg", (time: Time) => {
    c.context.fillStyle = "#faa"
    c.context.fillRect(0, 0, c.w, c.h)
})
animationEditor.add("rct01", (time: Time) => {
    c.context.fillStyle = "#aaf";
    c.context.fillRect(
        time.sum % c.w, time.sum % c.w,
        c.w * 0.2, c.h * 0.2);
})
animationEditor.add("rct02", (time: Time) => {
    c.context.fillStyle = "#afa";
    c.context.fillRect(
        time.sum * 0.5 % c.w, time.sum * 0.5 % c.w,
        c.w * 0.15, c.h * 0.15);
})
animationEditor.start()
setTimeout(() => { animationEditor.remove("rct02") }, 1000)
setTimeout(() => { animationEditor.stop() }, 2000)