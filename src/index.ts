import './scss/style.scss'
import { CanvasObj } from './Util'
import CanvasEditor from './CanvasEditor'

let id: string = 'reversi'

// TODO: implement: game.core.getFitSz(10, 11);z
// TODO: implement: game.canvas.initCnvs(id, sz.w, sz.h)

let getWinH = (): number => {
    return window.innerHeight
}

let getWinW = (): number => {
    return window.innerWidth
}

let getFitSz = (w: number, h: number): { w: number, h: number } => {
    let winH: number = getWinH()
    let winW: number = getWinW()
    let resW: number
    let resH: number

    // 縦横比を元に値を調整する
    if (w / h >= winW / winH) {
        resW = winW
        resH = (h * winW / w) | 0
    } else {
        resH = winH
        resW = (w * winH / h) | 0
    }
    return {
        w: resW,
        h: resH
    }
}
const canvasManager: CanvasEditor = new CanvasEditor()
let sz: { w: number, h: number } = getFitSz(10, 11)
let c: CanvasObj = canvasManager.initCanvas(id, sz.w, sz.h, null)

c.context.fillStyle = "#faa"
c.context.fillRect(0, 0, c.w, c.h)