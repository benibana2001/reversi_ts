import ReversiCanvas from './ReversiCanvas'
import ReversiEffect from './ReversiEffect'
import tkn0 from '../../img/icon_menherachan04_28.jpg'
import tkn1 from '../../img/icon_menherachan04_25.jpg'
import bgm01 from '../../snd/Jigsaw_Puzzle.mp3'
import Base from './ReversiBase'

export default class ReversiCore extends Base{
    public rc = new ReversiCanvas()
    public re = new ReversiEffect(this.rc)
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

    		// Init UI

    		// Set Button

    		// Play BGM

    	})
    }
    //
    private start(): void {
    	// Init Board
        // Update Canvas
        this.updateCanvas(true)

    	// Unlock Click Locking

    	// Play BGM <= ?????
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
    private buttonStart(): void {

    }
    //
    private initClick(): void {

    }
    //
    private clickBoard(): void {

    }
}