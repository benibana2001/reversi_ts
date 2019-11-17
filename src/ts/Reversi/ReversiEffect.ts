import EditorAnimation from "../Editor/EditorAnimation";
import ReversiMain from "./ReversiMain";
import ReversiCanvas from "./ReversiCanvas";
import ResourceManager from "../ResourceManager/ResourceManager";

export default class ReversiEffect {
    private rm: ResourceManager
    public ea: EditorAnimation = new EditorAnimation()
    private rMain: ReversiMain = new ReversiMain()
    public rc: ReversiCanvas = new ReversiCanvas(this.rm)
    //
    constructor(rm: ResourceManager) {
        this.rm = rm
    }
    //
    public message = async (text: string): Promise<any> => {
        let timeMax: number = 750
        let name: string = 'message'
        //
        let context = this.rc.context
        let l = this.rc.layout
        let w = this.rc.canvas.w
        let h = this.rc.canvas.h
        let centerX = w / 2
        let centerY = h / 2
        // 初期化
        let timeStart = this.ea.time.sum
        return new Promise((resolve: Function, reject: Function) => {
            this.ea.add(name, () => {
                let timeDiff = this.ea.time.sum - timeStart
                let ratioX = timeDiff * 3 > timeMax ? 0 : 1 - (timeDiff * 3 / timeMax)// 横から出てきて中央で停止するために使用
                let ratioA = Math.sin(Math.PI * timeDiff / timeMax)
                console.log(timeDiff / timeMax)
                //
                if (timeDiff < timeMax) {
                    this.rc.context.save()
                    this.rc.context.textAlign = "center"
                    this.rc.context.textBaseline = "middle"
                    this.rc.context.strokeStyle = "#fff"
                    this.rc.context.fillStyle = "#000"
                    this.rc.context.lineWidth = this.rc.layout.fontSize / 10//描画する線の太さ
                    this.rc.context.font = this.rc.layout.fontSize * 2 + "px '" + this.rc.layout.fontFamily + "'"
                    // 以下、アニメーション部分
                    this.rc.context.globalAlpha = ratioA
                    for (let i = -1; i <= 1; i += 2) {// 2回描画 左から登場と右から登場するアニメーション
                        this.rc.context.strokeText(text, centerX + w * ratioX * i, centerY)// 文字の縁
                        this.rc.context.fillText(text, centerX + w * ratioX * i, centerY)// 文字の塗りつぶし
                    }
                    this.rc.context.restore()
                    console.log("do restore")
                } else {
                    this.ea.remove(name)
                    // console.log("resolve")
                    resolve()
                }
            })
        })
    }

}