import ReversiCanvas from './ReversiCanvas'
import ResourceManager from '../ResourceManager/ResourceManager'
import Editor from '../Editor/Editor'

export default class ReversiEffect {
    private rm: ResourceManager
    public editor: Editor = new Editor()
    // TODO: ReversiCanvasを引き剥がす
    public rc: ReversiCanvas
    //----------------------------------------
    //
    constructor(rm: ResourceManager, rc: ReversiCanvas) {
        this.rm = rm
        this.rc = rc
    }
    //
    public animStart() {
        this.editor.animStart()
    }
    //
    public animAdd(name: string, func: Function) {
        this.editor.animAdd(name, func)
    }
    //
    public async message (text: string): Promise<any> {
        let timeMax: number = 750
        let name: string = 'message'
        //
        let context = this.rc.context
        let l = this.rc.layout// Canvasのレイアウト(font)を適用
        let w = this.rc.canvas.w
        let h = this.rc.canvas.h
        let centerX = w / 2
        let centerY = h / 2
        // 初期化
        let timeStart = this.editor.ea.time.sum
        return new Promise((resolve: Function, reject: Function) => {
            this.editor.ea.add(name, () => {
                let timeDiff = this.editor.ea.time.sum - timeStart
                let ratioX = timeDiff * 3 > timeMax ? 0 : 1 - (timeDiff * 3 / timeMax)// 横から出てきて中央で停止するために使用
                let ratioA = Math.sin(Math.PI * timeDiff / timeMax)
                console.log(timeDiff / timeMax)
                //
                if (timeDiff < timeMax) {
                    context.save()
                    context.textAlign = 'center'
                    context.textBaseline = 'middle'
                    context.strokeStyle = '#fff'
                    context.fillStyle = '#000'
                    context.lineWidth = l.fontSize / 10//描画する線の太さ
                    context.font = l.fontSize * 2 + 'px \'' + l.fontFamily + '\''
                    // 以下、アニメーション部分
                    context.globalAlpha = ratioA
                    for (let i = -1; i <= 1; i += 2) {// 2回描画 左から登場と右から登場するアニメーション
                        context.strokeText(text, centerX + w * ratioX * i, centerY)// 文字の縁
                        context.fillText(text, centerX + w * ratioX * i, centerY)// 文字の塗りつぶし
                    }
                    context.restore()
                    console.log('do restore')
                } else {
                    this.editor.ea.remove(name)
                    // console.log("resolve")
                    resolve()
                }
            })
        })
    }

}