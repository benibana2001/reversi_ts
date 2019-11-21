import ResourceManager from '../ResourceManager/ResourceManager'
import { CanvasObj} from 'src/ts/Util'
import ReversiMain from './ReversiMain'
import Editor from '../Editor/Editor'

export default class ReversiCanvas {
    private rMain: ReversiMain = new ReversiMain()
    private rm: ResourceManager = null
    private editor: Editor = new Editor()
    //
    public canvas: CanvasObj
    public context: CanvasRenderingContext2D
    private squareSize: number = null
    private defautlFontFamily: string = 'meiryo'
    public layout: any = {
        squareSize: 0,
        boardX: 0, boardY: 0,
        boardW: 0, boardH: 0,
        playerScore: [
            { x: 0, y: 0, w: 0, align: 'left' },// Player 1
            { x: 0, y: 0, w: 0, align: 'right' }// Player 2
        ],
        fontSize: 0,
        fontFamily: this.defautlFontFamily
    }
    //----------------------------------------
    //
    constructor(rm: ResourceManager) {
        this.rm = rm
    }

    public initCanvas (font: string = this.defautlFontFamily): void {
        this.initCanvasObject()
        this.initCanvasLayout(font)
        this.drawBackground()
    }

    private initCanvasObject (): void {
        let sz = this.editor.egb.getFitSz(10, 11)
        let scale = 1
        // if (sz.w <= 600) scale = 2
        this.canvas = this.editor.ec.initCanvas('reversi', sz.w, sz.h, scale)
        this.context = this.canvas.context
    }

    private initCanvasLayout (font: string): void {
        // 1マスのサイズ
        this.layout.squareSize = (this.canvas.w * 0.1) | 0
        // 版のサイズ
        this.layout.boardW = this.layout.squareSize * this.rMain.w
        this.layout.boardH = this.layout.squareSize * this.rMain.h
        // 版の位置 左上すみをベースに計算
        this.layout.boardX = ((this.canvas.w - this.layout.boardW) / 2) | 0
        this.layout.boardY = this.layout.squareSize * 2// PlayerScore表示のために少し下げる
        // console.log(`this.layout.boardW: ${this.layout.boardW}`)
        // console.log(`this.layout.boardH: ${this.layout.boardH}`)
        // console.log(`this.layout.boardX: ${this.layout.boardX}`)
        // console.log(`this.layout.boardY: ${this.layout.boardY}`)
        // 
        this.layout.playerScore[0].x = this.layout.boardX
        this.layout.playerScore[1].x = this.layout.boardX + this.layout.boardW
        this.layout.playerScore[0].y = this.layout.playerScore[1].y = this.layout.squareSize * 1
        this.layout.playerScore[0].w = this.layout.playerScore[1].w = this.layout.boardW * 0.35
        //
        this.layout.fontSize = this.layout.squareSize * 0.9
        this.layout.fontFamily = font
        // setSquareSize
        this.squareSize = this.layout.squareSize
    }

    public drawBackground (): void {
        this.context.fillStyle = '#afa'
        this.context.fillRect(0, 0, this.canvas.w, this.canvas.h)
    }

    public drawSquareAll (): void {
        this.context.fillStyle = '#0000ee'
        this.editor.ec.fillMarginRect(this.context, this.layout.boardX, this.layout.boardY, this.layout.boardW, this.layout.boardH, -2)
        this.rMain.scanBoard((i: number, x: number, y: number) => {
            this.drawSquare(x, y)
        })
    }

    public drawSquare (x: number, y: number) {
        let r: any = this.xyToReal(x, y)
        let marginOut: number = 1
        let marginIn: number = 2
        // draw Square
        this.context.fillStyle = '#000'
        this.context.fillRect(r.x, r.y, this.squareSize, this.squareSize)
        //
        // this.context.fillStyle = "#ffb900"
        this.context.fillStyle = '#1e90ff'
        this.editor.ec.fillMarginRect(this.context, r.x, r.y, this.squareSize, this.squareSize, marginOut)
        //
        // this.context.fillStyle = "#fff05b"
        this.context.fillStyle = '#1e90ff'
        this.editor.ec.fillMarginRect(this.context, r.x, r.y, this.squareSize - marginIn, this.squareSize - marginIn, marginOut)
        //
        // this.context.fillStyle = "#086319"
        this.context.fillStyle = '#aacdff'
        // let rect: any = this.editor.ec.fillMarginRect(this.context, r.x, r.y, this.squareSize, this.squareSize, marginOut + marginIn)
        // let w: any = rect.w
        // let h: any = rect.h
    }

    /**
     * drawEnableSquaresAll
     */
    public drawEnableSquaresAll ():  void {
        let squares: { x: number, y: number }[] = this.rMain.enableSquares
        let l: number = squares.length
        for(let i = 0; i < l; i++) {
            this.drawEnableSquare(squares[i].x, squares[i].y)
        }
    }

    /**
     * drawEnableSquare
     * Add Effect To Square Where You Can Put Token.
     */
    public drawEnableSquare (x: number, y:number):  void {
        let r: {x: number, y: number} = this.xyToReal(x, y)
        this.context.save()
        this.context.fillStyle = '#f00'
        this.context.globalAlpha = 0.7
        this.editor.ec.fillMarginRect(this.context, r.x, r.y, this.squareSize, this.squareSize, 2)
        this.context.restore()
    }

    private xyToReal (x: number, y: number): any {
        let realX: number = this.layout.boardX + this.squareSize * x
        let realY: number = this.layout.boardY + this.squareSize * y
        return { x: realX, y: realY }
    }

    public resizeToken (): void {
        for (let i = 0; i < 2; i++) {
            let token = this.rm.imgs['tkn' + i]
            // console.log(`token: ${token}`)
            this.rm.imgs['tkn' + i] = this.editor.ec.getScaledImg(
                token, 0, 0, token.width, token.height, this.squareSize, this.squareSize
            )
        }
    }

    /**
     * drawToken
     * This Function Check Which Player Occuping Each Square And Draw Token If Each Player Occupy That Square.
     * @param x 
     * @param y 
     * @param p 
     */
    public drawToken (x: number, y: number, p: number) {// p: EachPlayer
        if (p < 0 || 1 < p) return
        //
        let r = this.xyToReal(x, y)
        // console.log(this.rm.imgs["tkn" + p].elem) => undefinedになる
        // console.log(this.rm.imgs)
        this.context.drawImage(this.rm.imgs['tkn' + p], r.x, r.y)
    }

    /**
     * drawTokenAll
     */
    public drawTokenAll (board: number[]):  void {
        this.rMain.scanBoard((i: number, x: number, y: number) => {
            this.drawToken(x, y, board[i])
        })
    }

    private drowPlayerScore (player: number, score: number):void {
        let sscore: string = ('0' + String(score)).substr(-2)
        let l = this.layout
        let lScore = l.playerScore[player]
        // TODO: check playerType
        let name = ['MAN', 'COM'][player]
        //
        this.context.textAlign = lScore.align
        this.context.textBaseline = 'middle'
        this.context.fillStyle = '#000'
        this.context.font = l.fontSize + 'px \'' + l.fontFamily + '\''
        this.context.fillText(name + sscore, lScore.x, lScore.y, lScore.w)
        console.log(this.context.font)
    }

    public drowPlayerScores (): void {
        this.drowPlayerScore(0, this.rMain.score[0])
        this.drowPlayerScore(1, this.rMain.score[1])
    }
}