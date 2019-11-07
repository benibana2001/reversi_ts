import './scss/style.scss'
import { CanvasObj } from './Util'
import CanvasEditor from './CanvasEditor'
import GameBaseEditor from './GameBaseEditor'

let id: string = 'reversi'

const canvasManager: CanvasEditor = new CanvasEditor()
const gameBase: GameBaseEditor = new GameBaseEditor()
let sz: { w: number, h: number } = gameBase.getFitSz(10, 11)
let c: CanvasObj = canvasManager.initCanvas(id, sz.w, sz.h, null)

c.context.fillStyle = "#faa"
c.context.fillRect(0, 0, c.w, c.h)