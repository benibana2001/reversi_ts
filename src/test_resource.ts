import './scss/style.scss'
import ResourceManager from './ts/ResourceManager/ResourceManager'

import tkn0 from './img/icon_menherachan04_28.jpg'
import tkn1 from './img/icon_menherachan04_25.jpg'
import bgm01 from './snd/Jigsaw_Puzzle.mp3'

let rm: ResourceManager = new ResourceManager()
let r: Promise<any>[] = []
r.push(rm.loadImage("tkn0", tkn0))
r.push(rm.loadImage("tkn1", tkn1));

let parallel = async (): Promise<any> => {
    await Promise.all(r)
}

(async (): Promise<any> => {
    await parallel()
    console.log("Load image DONE")
    for (let key in rm.imgs) {
        let elReversi = document.getElementById('reversi')
        let elImg: HTMLImageElement = document.createElement('img');
        elImg.src = rm.imgs[key].src
        elReversi.appendChild(elImg)
    }
})();

let ra: Promise<any>[] = []
ra.push(rm.loadAudio("bgm01", bgm01));
console.log(ra)
console.log(bgm01)

let parallesAudio = async():Promise<any> => {
    console.log("wait audio loading")
    await Promise.all(ra)
}

let createBtn = (name: string, cb: Function): void => {
    let elBtn: HTMLButtonElement | null = document.createElement('button')
    let parent: HTMLElement = document.body
    elBtn.textContent = name
    elBtn.addEventListener('click', ()=> {cb()})
    parent.appendChild(elBtn)
}

(async(): Promise<any> => {
    await parallesAudio()
    console.log("Load audio DONE")
    createBtn("Start", ()=> {
        rm.playAudio("bgm01")
    })
})();