import './fnt/ArchivoBlack.css'
import './fnt/ArchivoBlack.woff'
import './scss/style.scss'
import ResourceManager from "./ts/ResourceManager/ResourceManager"
import EditorAnimation from './ts/Editor/EditorAnimation'
import ReversiEffect from './ts/Reversi/ReversiEffect'

let body: HTMLElement = document.body
let elem: HTMLElement = document.createElement('div')
elem.setAttribute("id", "reversi")
body.appendChild(elem)

const rm: ResourceManager = new ResourceManager()
const ea: EditorAnimation = new EditorAnimation()
const re: ReversiEffect = new ReversiEffect()

let r: Promise<any>[] = []
r.push(rm.loadFont("ArchivoBlack"))

Promise.all(r).then(()=> {
    console.log(`loaded font`)
    let b: HTMLElement = document.body
    b.style.fontFamily = "ArchivoBlack"
    //
    re.ea.start()
    re.message("Msg1").then(()=> {
        console.log("DONE Msg1")
    })
})