import ReversiCanvas from './ReversiCanvas'
import ResourceManager from '../ResourceManager/ResourceManager'
import ReversiEffect from './ReversiEffect'
import tkn0 from '../../img/icon_menherachan04_28.jpg'
import tkn1 from '../../img/icon_menherachan04_25.jpg'
import bgm01 from '../../snd/Jigsaw_Puzzle.mp3'
import ReversiMain from './ReversiMain'

export default class ReversiCore {
    public rmngr = new ResourceManager()
    public rmain = new ReversiMain()
    public rc = new ReversiCanvas(this.rmngr)
    public re = new ReversiEffect(this.rmngr, this.rc)
    //----------------------------------------
    public init(): void {
    	console.log('INITIALIZE GAME')
    	// Load Resources
    	let r: Promise<any>[] = []
    	r.push(this.rmngr.loadImage('tkn0', tkn0))
    	r.push(this.rmngr.loadImage('tkn1', tkn1))
    	r.push(this.rmngr.loadAudio('bgm01', bgm01))
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
    	this.rmain.init()
    	// Update Canvas

    	// Unlock Click Locking

    	// Play BGM <= ?????
    }
    //
    private updateCanvas(): void {

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

	//

}