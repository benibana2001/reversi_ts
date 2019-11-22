import ReversiCanvas from './ReversiCanvas'
import ReversiEffect from './ReversiEffect'
import ReversiUi from './ReversiUi'
import tkn0 from '../../img/icon_menherachan04_28.jpg'
import tkn1 from '../../img/icon_menherachan04_25.jpg'
import bgm01 from '../../snd/Jigsaw_Puzzle.mp3'
import Base from './ReversiBase'

export default class ReversiCore extends Base{
    public rc = new ReversiCanvas()
    public re = new ReversiEffect(this.rc)
    public rui = new ReversiUi(this.rc)
    private isLock = false
    //----------------------------------------
    constructor(){
        super()
    }
    //
    public init(): void {
    	console.log('INITIALIZE GAME')
    	// Load Resources
    	let r: Promise<any>[] = []
    	r.push(this.resources.loadImage('tkn0', tkn0))
    	r.push(this.resources.loadImage('tkn1', tkn1))
    	r.push(this.resources.loadAudio('bgm01', bgm01))
    	//
    	Promise.all(r).then(() => {

    		// Init Canvas
    		this.rc.initCanvas()
    		// Risize Token
    		this.rc.resizeToken()
    		// Start
    		this.start()
            // Set Animation
            this.re.animStart()
            this.re.animAdd('updateCanvas', ()=> {
                // this.updateCanvas(true)
            })
    		// Init UI
            this.rui.init()
    		// Set Button
            this.buttonStart('start')
    		// Play BGM

    	})
    }
    //
    private start(): void {
    	// Init Board
        // Update Canvas
        this.updateCanvas(true)
    	// Unlock Click Locking
        this.isLock = false
        // Play BGM <= ?????
        // TODO: Set Audio Auto Play
        // this.resources.playAudio('bgm01')
    }
    //
    private updateCanvas(needUpdate: boolean): void {
        if (needUpdate) {
            // Re Render
            this.rc.drawBackground()
            this.rc.drawSquareAll()
            this.rc.drawTokenAll(this.status.board)
            this.rc.drawEnableSquaresAll()
        } else {
            // Draw From Cache
        }
    }
    //
    /**
     * Create Start Button.
     * @param text 
     */
    private buttonStart(text: string): void {
        let name: string = 'buttonStart'
        let w: number = this.rc.canvas.w
        let h: number = this.rc.canvas.h
        let buttonW: number = this.rc.layout.squareSize * 4 * 1.2
        let buttonH: number = this.rc.layout.squareSize * 1.3
        let buttonX: number = (w - buttonW) / 2
        let buttonY: number = (h - buttonH) / 2
        //
        this.rui.addButton(name, text, buttonX, buttonY, buttonW, buttonH, () => {
            this.rui.removeButton(name)
            this.start()
        })
    }
    //
    private initClick(): void {

    }
    //
    private clickBoard(): void {

    }
}