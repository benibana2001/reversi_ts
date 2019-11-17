import ReversiCanvas from './ReversiCanvas'
import ReversiEffect from './ReversiEffect'
import ReversiMain from './ReversiMain'
import ResourceManager from '../ResourceManager/ResourceManager'
export default class Reversi {
    public rc: ReversiCanvas
    public re: ReversiEffect
    public rm: ReversiMain
    private rmngr: ResourceManager
    //
    constructor (rmngr: ResourceManager) {
        this.rmngr = rmngr
        this.rc = new ReversiCanvas(this.rmngr)
        this.re = new ReversiEffect(this.rmngr)
        this.rm = new ReversiMain()
    }
}