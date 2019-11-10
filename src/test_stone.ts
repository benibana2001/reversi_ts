import './scss/style.scss'
import { CanvasObj, Time, ResourceImage } from './Util'
import CanvasEditor from './CanvasEditor'
import GameBaseEditor from './GameBaseEditor'
import AnimationEditor from './AnimationEditor'
import ResourceManager from './ResourceManager'

import tkn0 from './img/icon_menherachan04_28.jpg'
import tkn1 from './img/icon_menherachan04_25.jpg'
import bgm01 from './snd/Jigsaw_Puzzle.mp3'
import ReversiCanvas from './Reversi/ReversiCanvas'
let id: string = 'reversi'
const canvasManager: CanvasEditor = new CanvasEditor()
const gameBase: GameBaseEditor = new GameBaseEditor()
const animationEditor: AnimationEditor = new AnimationEditor()
const rm: ResourceManager = new ResourceManager()
const rc: ReversiCanvas = new ReversiCanvas()
let r: Promise<any>[] = []
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

    // トークンを初期化

    // トークンの配置


})();