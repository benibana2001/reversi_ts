import ReversiCanvas from './ReversiCanvas'

export default class ReversiUi {
    public rcanvas: ReversiCanvas
    //----------------------------------------
    constructor(rcanvas: ReversiCanvas){
        this.rcanvas = rcanvas
    }
    /**
     * init
     */
    public init ():  void {
        console.log('Reversi Canvas init()')
    }
    /**
     * addButton
     */
    public addButton (name: string, text: string, x: number, y: number, w: number, h: number, cb: Function):  void {
        let m: number = w * 0.05
        m = m <4 ? 4:m

    }
    /**
     * removeButton
     */
    public removeButton (name: string):  void {
    
    }
}