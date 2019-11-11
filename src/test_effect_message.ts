import './fnt/ArchivoBlack.css'
import './fnt/ArchivoBlack.woff'
import './scss/style.scss'
import ResourceManager from "./ts/ResourceManager/ResourceManager"
import ReversiCanvas from './ts/Reversi/ReversiCanvas'
import EditorAnimation from './ts/Editor/EditorAnimation'

const rm: ResourceManager = new ResourceManager()
const rc: ReversiCanvas = new ReversiCanvas(rm)
const ea: EditorAnimation = new EditorAnimation()

let r: Promise<any>[] = []
r.push(rm.loadFont("ArchivoBlack"))

Promise.all(r).then(()=> {
    console.log(`loaded font`)
    let b: HTMLElement = document.body
    b.style.fontFamily = "ArchivoBlack"
})