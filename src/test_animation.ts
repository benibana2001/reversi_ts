import './scss/style.scss'
import { CanvasObj, Time } from './ts/Util'
import Editor from './ts/Editor/Editor'
//
let id: string = 'reversi'
//
const editor: Editor = new Editor()
let sz: { w: number, h: number } = editor.egb.getFitSz(10, 11)
let c: CanvasObj = editor.ec.initCanvas(id, sz.w, sz.h, null)
//
editor.ea.add("bg", (time: Time) => {
    c.context.fillStyle = "#faa"
    c.context.fillRect(0, 0, c.w, c.h)
})
editor.ea.add("rct01", (time: Time) => {
    c.context.fillStyle = "#aaf";
    c.context.fillRect(
        time.sum % c.w, time.sum % c.w,
        c.w * 0.2, c.h * 0.2);
})
editor.ea.add("rct02", (time: Time) => {
    c.context.fillStyle = "#afa";
    c.context.fillRect(
        time.sum * 0.5 % c.w, time.sum * 0.5 % c.w,
        c.w * 0.15, c.h * 0.15);
})
editor.ea.start()
setTimeout(() => { editor.ea.remove("rct02") }, 1000)
setTimeout(() => { editor.ea.stop() }, 2000)