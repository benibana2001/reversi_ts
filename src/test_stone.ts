import './scss/style.scss'
import ResourceManager from './ts/ResourceManager/ResourceManager'

import tkn0 from './img/icon_menherachan04_28.jpg'
import tkn1 from './img/icon_menherachan04_25.jpg'
import ReversiCanvas from './ts/Reversi/ReversiCanvas'
import Reversi from './ts/Reversi/Reversi'
//
let id: string = 'reversi'
let body: HTMLElement = document.body
let elem: HTMLElement = document.createElement('div')
elem.setAttribute('id', id)
body.appendChild(elem)
//
const rm: ResourceManager = new ResourceManager()
const reversi: Reversi = new Reversi(rm)
//
let r: Promise<any>[] = []
r.push(rm.loadImage("tkn0", tkn0))
r.push(rm.loadImage("tkn1", tkn1))

let parallel = async (): Promise<any> => {
    await Promise.all(r)
}
(async (): Promise<any> => {
    await parallel()
    for (let key in rm.imgs) {
        let elImg: HTMLImageElement = document.createElement('img');
        elImg.src = rm.imgs[key].src
    }
    // キャンパスの初期化
    reversi.rc.initCanvas()
    // マスを描画
    reversi.rc.drawSquareAll()
    // トークンを初期化
    reversi.rc.resizeToken()
    // トークンの配置
    reversi.rc.drawToken(3, 3, 0)
    reversi.rc.drawToken(4, 4, 0)
    reversi.rc.drawToken(3, 4, 1)
    reversi.rc.drawToken(4, 3, 1)
})();