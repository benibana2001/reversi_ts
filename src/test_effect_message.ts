import './fnt/ArchivoBlack.css'
import './fnt/ArchivoBlack.woff'
import './scss/style.scss'
import ResourceManager from "./ts/ResourceManager/ResourceManager"
import Reversi from './ts/Reversi/Reversi'

let body: HTMLElement = document.body
let elem: HTMLElement = document.createElement('div')
elem.setAttribute("id", "reversi")
body.appendChild(elem)

const rmngr: ResourceManager = new ResourceManager()
const reversi: Reversi = new Reversi(rmngr)

let rpAry: Promise<any>[] = []
rpAry.push(rmngr.loadFont("ArchivoBlack"))

Promise.all(rpAry).then(()=> {
    console.log(`loaded font`)
    let b: HTMLElement = document.body
    b.style.fontFamily = "ArchivoBlack"
    // TODO: Resource Managerを単一で管理できるよう引数で渡す構造とする
    // TODO: フォントが適用されない
    reversi.re.ea.start()
    reversi.re.ea.add('bg', ()=> {
        reversi.re.rc.drawBackground()
    })
    reversi.re.message("Msg1").then(()=> {
        console.log("DONE Msg1")
    })
})