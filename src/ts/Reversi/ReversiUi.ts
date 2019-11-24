import ReversiCanvas from './ReversiCanvas'
import ReversiEffect from './ReversiEffect'

export default class ReversiUi {
    public rcanvas: ReversiCanvas
    public reffect: ReversiEffect
    // Function Related UI. Generally Assuming Is Like A Button Function Which Added By addEventlistner().
    public uiFuncs: { [key: string]: (e: MouseEvent) => any } = {}
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
            // Stroke Button's Outer Line
            context.fillStyle = isHover ? '#222' : '#000'
            this.reffect.editor.ec.pathArcRect(context, x, y, w, h, m)
            context.fill()
            // Fill Button Color
            context.fillStyle = isHover ? '#888' : '#fff'
            this.reffect.editor.ec.pathArcRect(context, x + 2, y + 2, w - 4, h - 4, m - 2)
            context.fill()
            // Write Text Message
            context.fillStyle = isHover ? '#fff' : '#000'
            context.textAlign = 'center'
            context.textBaseline = 'middle'
            context.font = fontSize + 'px ' + this.rcanvas.layout.fontFamily
            // context.font = '60.3px ArchivoBlack'
            context.fillText(text, x + w * 0.5, y + h * 0.5, w - m * 2)
            //
            context.restore()
        })

        let functionClick = (e: MouseEvent) => {
            if (this.reffect.editor.egb.inRange(e.offsetX * scale, e.offsetY * scale, x, y, w, h)) {
                cb()
            }
        }
        //
        let functionMouseMove = (e: MouseEvent) => {
            isHover = this.reffect.editor.egb.inRange(e.offsetX * scale, e.offsetY * scale, x, y, w, h)
        }
        //
        let functionMouseLeave = () => {
            isHover = false
        }
        //
        this.rcanvas.canvas.canvas.addEventListener('click', functionClick)
        this.rcanvas.canvas.canvas.addEventListener('mouseleave', functionMouseLeave)
        this.rcanvas.canvas.canvas.addEventListener('mousemove', functionMouseMove)
        // Add Function To Object for Which Can Remove.
        this.uiFuncs[name + ':click'] = functionClick
        this.uiFuncs[name + ':mouseleave'] = functionMouseLeave
        this.uiFuncs[name + ':mousemove'] = functionMouseMove
    }
    /**
     * removeButton
     */
    public removeButton(name: string): void {
        this.reffect.animRemove(name)
        //
        this.rcanvas.canvas.canvas.removeEventListener('click', this.uiFuncs[name + ':click'])
        this.rcanvas.canvas.canvas.removeEventListener('mouseleave', this.uiFuncs[name + ':mouseleave'])
        this.rcanvas.canvas.canvas.removeEventListener('mousemove', this.uiFuncs[name + ':mousemove'])
        //
        delete this.uiFuncs[name + ':click']
        delete this.uiFuncs[name + ':mousemove']
        delete this.uiFuncs[name + ':mouseleave']
    }
}