import './fnt/ArchivoBlack.css'
import './fnt/ArchivoBlack.woff'
import './scss/style.scss'
import ResourceManager from "./ts/ResourceManager/ResourceManager"

const rm: ResourceManager = new ResourceManager()
let r: Promise<any>[] = []
r.push(rm.loadFont("ArchivoBlack"))

Promise.all(r).then(()=> {
    console.log(`loaded font`)
    let b: HTMLElement = document.body
    b.style.fontFamily = "ArchivoBlack"
})