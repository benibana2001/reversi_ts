import './scss/style.scss'
import ResourceManager from './ts/ResourceManager/ResourceManager'

import tkn0 from './img/icon_menherachan04_28.jpg'
import tkn1 from './img/icon_menherachan04_25.jpg'
import ReversiCanvas from './ts/Reversi/ReversiCanvas'
let id: string = 'reversi'
//
const rm: ResourceManager = new ResourceManager()
const rc: ReversiCanvas = new ReversiCanvas(rm)
//
let r: Promise<any>[] = []
//
let body: HTMLElement = document.body
let elem: HTMLElement = document.createElement('div')
elem.setAttribute('id', id)
body.appendChild(elem)
//
r.push(rm.loadImage("tkn0", tkn0))
r.push(rm.loadImage("tkn1", tkn1))

let parallel = async (): Promise<any> => {
    await Promise.all(r)
}

(async (): Promise<any> => {
    await parallel()
    let elReversi = document.getElementById(id)
    for (let key in rm.imgs) {
        let elImg: HTMLImageElement = document.createElement('img');
        elImg.src = rm.imgs[key].src
    }
    // キャンパスの初期化
    rc.initCanvas()
    // マスを描画
    rc.drawSquareAll()
    // トークンを初期化
    rc.resizeToken()
    // トークンの配置
    rc.drawToken(3, 3, 0)
    rc.drawToken(4, 4, 0)
    rc.drawToken(3, 4, 1)
    rc.drawToken(4, 3, 1)
})();