import CanvasEditor from '../CanvasEditor'
import GameBaseEditor from '../GameBaseEditor'
import AnimationEditor from '../AnimationEditor'
import ResourceManager from '../ResourceManager'
import { CanvasObj } from 'src/Util'
import ReversiMain from './ReversiMain'
const animationEditor: AnimationEditor = new AnimationEditor()
const rm: ResourceManager = new ResourceManager()

export default class ReversiCanvas {
    private rMain: ReversiMain = new ReversiMain()
    private ce: CanvasEditor = new CanvasEditor()
    private gameBase: GameBaseEditor = new GameBaseEditor()
    public canvas: CanvasObj
    public context: CanvasRenderingContext2D
    private squareSize: number = null
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

    // TODO: Constructorとする そうでないとプロパティがセットされない可能性がある
    public initCanvas = (): void => {
        this.initCanvasObject()
        this.initCanvasLayout()
        this.drowBackground()
    }

    private initCanvasObject = (): void => {
        let sz = this.gameBase.getFitSz(10, 11)
        let scale = 1
        // if (sz.w <= 600) scale = 2
        this.canvas = this.ce.initCanvas('reversi', sz.w, sz.h, scale)
        this.context = this.canvas.context
    }

    private initCanvasLayout = (): void => {
        // 1マスのサイズ
        this.layout.squareSize = (this.canvas.w * 0.1) | 0
        // 版のサイズ
        this.layout.boardW = this.layout.squareSize * this.rMain.w
        this.layout.boardH = this.layout.squareSize * this.rMain.h
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
        // setSquareSize
        this.squareSize = this.layout.squareSize
    }

    public drowBackground = (): void => {
        this.context.fillStyle = "#afa";
        this.context.fillRect(0, 0, this.canvas.w, this.canvas.h)
    }

    public drowSquareAll = (): void => {
        this.context.fillStyle = "#000"
        this.ce.fillMarginRect(this.context, this.layout.boardX, this.layout.boardY, this.layout.boardW, this.layout.boardH, -2)
        this.rMain.scanBoard((i: number, x: number, y: number) => {
            this.drowSquare(x, y)
        })
    }

    public drowSquare = (x: number, y: number) => {
        let r: any = this.xyToReal(x, y)
        let marginOut: number = 1
        let marginIn: number = 2
        // draw Square
        this.context.fillStyle = "#000"
        this.context.fillRect(r.x, r.y, this.squareSize, this.squareSize)
        //
        this.context.fillStyle = "#ffb900"
        this.ce.fillMarginRect(this.context, r.x, r.y, this.squareSize, this.squareSize, marginOut)
        //
        this.context.fillStyle = "#fff05b"
        this.ce.fillMarginRect(this.context, r.x, r.y, this.squareSize - marginIn, this.squareSize - marginIn, marginOut)
        //
        this.context.fillStyle = "#086319"
        let rect: any = this.ce.fillMarginRect(this.context, r.x, r.y, this.squareSize, this.squareSize, marginOut + marginIn)
        let w: any = rect.w
        let h: any = rect.h
        
    }

    private xyToReal = (x: number, y: number): any => {
        let realX: number = this.layout.boardX + this.squareSize * x
        let realY: number = this.layout.boardY + this.squareSize * y
        return { x: realX, y: realY }
    }
}