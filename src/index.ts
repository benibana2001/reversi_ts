import './scss/style.scss'
import { CanvasObj, Time, ResourceImage } from './Util'
import CanvasEditor from './CanvasEditor'
import GameBaseEditor from './GameBaseEditor'
import AnimationEditor from './AnimationEditor'
import ResourceManager from './ResourceManager'

let id: string = 'reversi'

const canvasManager: CanvasEditor = new CanvasEditor()
const gameBase: GameBaseEditor = new GameBaseEditor()
const animationEditor: AnimationEditor = new AnimationEditor()
let sz: { w: number, h: number } = gameBase.getFitSz(10, 11)
let c: CanvasObj = canvasManager.initCanvas(id, sz.w, sz.h, null)
/*
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
*/

// TODO: webpack 画像のバインディング
let rm: ResourceManager = new ResourceManager()
let r: Promise<any>[] = []
r.push(rm.load("tkn0", "./img/icon_menherachan04_28.jpg"))
r.push(rm.load("tkn1", "./img/icon_menherachan04_25.jpg"));
console.log(r)

let parallel = async (): Promise<any> => {
    await Promise.all(r)
    console.log(r)
}

(async (): Promise<any> => {
    await parallel()
    for (let key in rm.imgs) {
        let elBody = document.body
        let elImg: HTMLImageElement = document.createElement('img');
        elImg.src = rm.imgs[key].src
        elBody.appendChild(elImg)
    }

})()

