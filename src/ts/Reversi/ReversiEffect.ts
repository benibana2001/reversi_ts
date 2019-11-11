import EditorAnimation from "../Editor/EditorAnimation";
import ReversiMain from "./ReversiMain";
import ReversiCanvas from "./ReversiCanvas";
import ResourceManager from "../ResourceManager/ResourceManager";

export default class ReversiEffect {
    private rm: ResourceManager = new ResourceManager()
    private ea: EditorAnimation = new EditorAnimation()
    private rMain: ReversiMain = new ReversiMain()
    private rc: ReversiCanvas = new ReversiCanvas(this.rm)
    //
    public message = async (text: string): Promise<any> => {
        let timeMax: number = 750
        let name: string = 'message'
        //
        let context = this.rc.context
        let l = this.rc.layout
        let w = this.rc.canvas.w
        let h = this.rc.canvas.h
        let cX = w / 2
        let cY = h / 2
        // 初期化
        let timeStart = this.ea.time.sum
        return new Promise((resolve: Function, reject: Function) => {
            this.ea.add(name, () => {
                let timeDiff = this.ea.time.sum - timeStart
                let rtX = timeDiff * 3 > timeMax ? 0 : 1 - (timeDiff * 3 / timeMax)
                let rtA = Math.sin(Math.PI * timeDiff / timeMax)
                //
                if (timeDiff < timeMax) {
                    this.rc.context.save()
                    this.rc.context.textAlign = "center"
                    this.rc.context.textBaseline = "middle"
                    this.rc.context.strokeStyle = "#fff"
                    this.rc.context.fillStyle = "#000"
                    this.rc.context.lineWidth = this.rc.layout.fontSize / 10
                    this.rc.context.font = this.rc.layout.fontSize * 2 + "px '" + this.rc.layout.fontFamily + "'"
                    //
                    this.rc.context.globalAlpha = rtA
                    for (let i = -1; i <= i; i += 2) {
                        this.rc.context.strokeText(text, cX + w * rtX * i, cY)
                        this.rc.context.fillText(text, cX + w * rtX * i, cY)
                    }
                    this.rc.context.restore()
                } else {
                    this.ea.remove(name)
                    resolve()
                }
            })
        })
    }

}