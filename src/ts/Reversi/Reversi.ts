import ReversiCanvas from './ReversiCanvas'
import ReversiCore from './ReversiCore'
import ReversiEffect from './ReversiEffect'
import ReversiMain from './ReversiMain'
import ResourceManager from '../ResourceManager/ResourceManager'
export default class Reversi {
    public rcanvas: ReversiCanvas
    public rcore: ReversiCore
    public re: ReversiEffect
    public rm: ReversiMain
    private rmngr: ResourceManager
    //
    constructor(rmngr: ResourceManager) {
        this.rmngr = rmngr
        this.rcanvas = new ReversiCanvas(this.rmngr)
        this.rcore = new ReversiCore()
        this.re = new ReversiEffect(this.rmngr, this.rcanvas)
        this.rm = new ReversiMain()
    }
    //
    /**
     * testJest
     */
    public testJest(num: number): number {
        let result: number = num * 2
        console.log(`${num} * 2 = ${result}`)
        return result
    }
}