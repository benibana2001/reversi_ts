import ReversiCanvas from './ReversiCanvas'
import ReversiCore from './ReversiCore'
import ReversiEffect from './ReversiEffect'
import ReversiUi from './ReversiUi'
import ReversiMain from './ReversiMain'
export default class Reversi {
    public rcanvas: ReversiCanvas
    public rcore: ReversiCore
    public re: ReversiEffect
    public rui: ReversiUi
    public rm: ReversiMain
    //
    constructor() {
        this.rcanvas = new ReversiCanvas()
        this.rcore = new ReversiCore()
        this.re = new ReversiEffect(this.rcanvas)
        this.rui = new ReversiUi(this.rcanvas)
        this.rm = new ReversiMain()
    }
}