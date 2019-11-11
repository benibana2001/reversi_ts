import { ResourceSound } from '../Util'
export default class ResourceManager {
    public imgs: { [key: string]: HTMLImageElement } = {}
    public sounds: { [key: string]: ResourceSound } = {}
    public loadImage = (name: string, url: string): Promise<boolean> => {
        let func = (resolve: Function, reject: Function) => {
            let image: HTMLImageElement = new Image()
            this.imgs[name] = image
            this.imgs[name].src = url
            this.imgs[name].onload = (() => {
                let msg: string = `DONE Loading: ${name}`
                resolve(true)
            })
        }
        return new Promise(func)
    }

    public loadAudio = async (name: string, url: string, type: string = 'bgm'): Promise<any> => {
        this.initAudio()
        if (type === 'se') {
            await this.loadAudioSE(name, url)
        } else {
            await this.loadAudioBGM(name, url)
        }
    }
    private loadAudioBGM = async (name: string, url: string): Promise<any> => {
        // not implmented yet
        return new Promise(
            (resolve: Function, reject: Function) => {
                console.log(name, url)
                let sound: ResourceSound = {
                    audio: new Audio(""),
                    seNow: null
                }
                sound.audio.preload = "auto"
                sound.audio.src = url
                this.sounds[name] = sound

                this.sounds[name].audio.addEventListener("canplaythrough", () => {
                    console.log(`load sound: ${name}`)
                    resolve()
                })

                this.sounds[name].audio.addEventListener("error", (e) => {
                    console.log(`err sound: ${name}`)
                    console.log(e)
                    reject()
                })
            }
        )
    }
    private loadAudioSE = async (name: string, url: string): Promise<any> => {
        // not implmented yet
        // SEの場合は、SEが重複再生可能なように複数読み込んでおく
        return new Promise(
            (resolve: Function, reject: Function) => {
                console.log(name, url)
                resolve()
            }
        )
    }
    private initAudio = () => {
        // not implmented yet
        // Audioの使用可否をチェック
        // 
    }
    public playAudio = (name: string) => {
        this.sounds[name].audio.play()
    }
}