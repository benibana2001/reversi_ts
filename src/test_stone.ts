import './scss/style.scss'
import { CanvasObj, Time, ResourceImage } from './ts/Util'
import EditorCanvas from './ts/Editor/EditorCanvas'
import EditorGameBase from './ts/Editor/EditorGameBase'
import EditorAnimation from './ts/Editor/EditorAnimation'
import ManagerResource from './ts/Editor/ManagerResource'

import tkn0 from './img/icon_menherachan04_28.jpg'
import tkn1 from './img/icon_menherachan04_25.jpg'
import bgm01 from './snd/Jigsaw_Puzzle.mp3'
import ReversiCanvas from './ts/Reversi/ReversiCanvas'
let id: string = 'reversi'
const canvasManager: EditorCanvas = new EditorCanvas()
const gameBase: EditorGameBase = new EditorGameBase()
const animationEditor: EditorAnimation = new EditorAnimation()
const rm: ManagerResource = new ManagerResource()
const rc: ReversiCanvas = new ReversiCanvas()
let r: Promise<any>[] = []

let body: HTMLElement = document.body
let elem: HTMLElement = document.createElement('div')
elem.setAttribute('id', 'reversi')
body.appendChild(elem)


r.push(rm.loadImage("tkn0", tkn0))
r.push(rm.loadImage("tkn1", tkn1))

let parallel = async (): Promise<any> => {
    await Promise.all(r)
}

(async (): Promise<any> => {
    await parallel()
    let elReversi = document.getElementById('reversi')
    for (let key in rm.imgs) {
        // let elBody = document.body
        let elImg: HTMLImageElement = document.createElement('img');
        elImg.src = rm.imgs[key].src
        // elReversi.appendChild(elImg)
    }
    // キャンパスの初期化
    rc.initCanvas()
    // マスを描画
    rc.drowSquareAll()
    // トークンを初期化

    // トークンの配置


})();