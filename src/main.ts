// import ResourceManager from './ts/ResourceManager/ResourceManager'
import Reversi from './ts/Reversi/Reversi'
// import tkn0 from './img/icon_menherachan04_28.jpg'
// import tkn1 from './img/icon_menherachan04_25.jpg'
import './scss/style.scss'
import './fnt/ArchivoBlack.css'
import './fnt/ArchivoBlack.woff'
//----------------------------------
// Instanciate
// const rm: ResourceManager = new ResourceManager()
const reversi: Reversi = new Reversi()
// Initialize
let id: string = 'reversi'
let body: HTMLElement = document.body
let elem: HTMLElement = document.createElement('div')
elem.setAttribute('id', id)
body.appendChild(elem)
//----------------------------------
// Start
reversi.rcore.init()