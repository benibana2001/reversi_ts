import CanvasEditor from '../CanvasEditor'
import GameBaseEditor from '../GameBaseEditor'
import AnimationEditor from '../AnimationEditor'
import ResourceManager from '../ResourceManager'
import { CanvasObj } from 'src/Util'
import ReversiMain from './ReversiMain'
const canvasManager: CanvasEditor = new CanvasEditor()
const gameBase: GameBaseEditor = new GameBaseEditor()
const animationEditor: AnimationEditor = new AnimationEditor()
const rm: ResourceManager = new ResourceManager()
const rMain: ReversiMain = new ReversiMain()

export default class ReversiCanvas {
    public canvas: CanvasObj
    public context: CanvasRenderingContext2D
    public squareSize: number = null
    private layout: any = {
        squareSize: 0,
        boardX: 0, boardY: 0,
        boardW: 0, boardH: 0,
        playerScore: [
            {x: 0, y: 0, w: 0, align: "left"},// Player 1
            {x: 0, y: 0, w: 0, align: "right"}// Player 2
        ],
        fontSize: 0,
        fontFamily: 'meiryo'
    }

    public initCanvas = (): void => {
        this.initCanvasObject()
        this.initCanvasLayout()
    }

    private initCanvasObject = (): void => {
        let sz = gameBase.getFitSz(10, 11)
        let scale = 1
        // if (sz.w <= 600) scale = 2
        this.canvas = canvasManager.initCanvas('reversi', sz.w, sz.h, scale)
        this.context = this.canvas.context
    }
    private initCanvasLayout = (): void => {
        // 1マスのサイズ
        this.layout.squareSize = (this.canvas.w * 0.1) | 0
        // 版のサイズ
        this.layout.boardW = this.layout.squareSize * rMain.w
        this.layout.boardH = this.layout.squareSize * rMain.h
        // 版の位置 左上すみをベースに計算
        this.layout.boardX = ((this.canvas.w = this.layout.boardW) / 2) | 0
        this.layout.boardY = this.layout.squareSize * 2// PlayerScore表示のために少し下げる
        // 
        this.layout.playerScore[0].x = this.layout.boardX
        this.layout.playerScore[1].x = this.layout.boardX + this.layout.boardW
        this.layout.playerScore[0].y = this.layout.playerScore[1].y = this.layout.squareSize * 1
        this.layout.playerScore[0].w = this.layout.playerScore[1].w = this.layout.boardW * 0.35
        //
        this.layout.fontSize = this.layout.squareSize * 0.9
        //
        this.squareSize = this.layout.squareSize
    }
}