import ReversiCanvas from './ReversiCanvas'
import ReversiEffect from './ReversiEffect'

export default class ReversiUi {
    public rcanvas: ReversiCanvas
    public reffect: ReversiEffect
    //----------------------------------------
    constructor(rcanvas: ReversiCanvas, reffect: ReversiEffect) {
        this.rcanvas = rcanvas
        this.reffect = reffect
    }
    /**
     * init
     */
    public init(): void {
        console.log('Reversi Canvas init()')
    }
    /**
     * addButton
     */
    public addButton(name: string, text: string, x: number, y: number, w: number, h: number, cb: Function): void {
        let m: number = w * 0.05
        m = m < 4 ? 4 : m
        let fontSize: number = (h - m * 2) | 0
        let isHover: boolean = false
        // TODO: Set Precise Scale
        let scale: number = 1
        // Add Button
        this.reffect.animAdd(name, () => {
            let context: CanvasRenderingContext2D = this.rcanvas.context
            context.save()
            //
            context.fillStyle = isHover ? '#222' : '#000'
            this.reffect.editor.ec.pathArcRect(context, x + 2, y + 2, w - 4, h - 4, m - 2)
            context.fill
            //
            context.fillStyle = isHover ? '#fff' : '#000'
            context.textAlign = 'center'
            context.textBaseline = 'middle'
            context.font = fontSize + 'px "' + this.rcanvas.layout.fontFamily + '"j'
            context.fillText(text, x + w * 0.5, y + h * 0.5, w - m * 2)
            //
            context.restore()
        })

    }
    /**
     * removeButton
     */
    public removeButton(name: string): void {

    }
}