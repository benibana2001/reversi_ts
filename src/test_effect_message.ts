import './fnt/ArchivoBlack.css'
import './fnt/ArchivoBlack.woff'
import './scss/style.scss'
import ResourceManager from "./ts/ResourceManager/ResourceManager"
import ReversiEffect from './ts/Reversi/ReversiEffect'

let body: HTMLElement = document.body
let elem: HTMLElement = document.createElement('div')
elem.setAttribute("id", "reversi")
body.appendChild(elem)

const rm: ResourceManager = new ResourceManager()
const re: ReversiEffect = new ReversiEffect()

let r: Promise<any>[] = []
r.push(rm.loadFont("ArchivoBlack"))

Promise.all(r).then(()=> {
    console.log(`loaded font`)
    let b: HTMLElement = document.body
    b.style.fontFamily = "ArchivoBlack"
    // TODO: Resource Managerを単一で管理できるよう引数で渡す構造とする
    re.ea.start()
    re.ea.add('bg', ()=> {
        re.rc.drawBackground()
    })
    re.message("Msg1").then(()=> {
        console.log("DONE Msg1")
    })
})