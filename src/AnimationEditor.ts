import { AnimationObj, Time } from './Util'
export default class AnimationEditor {
    private updateArr: AnimationObj[] = []
    private animationID: number | null = null 
    private time: Time = {
        sum: 0,
        old: null,
        now: null,
        diff: 0
    }
    public add = (name: string, func: Function): void => {
        let anmObj: AnimationObj = {
            name: name,
            func: func
        }
        this.updateArr.push(anmObj)
    }
    public remove = (name: string): void => {
        for(let i = 0; i < this.updateArr.length; i++) {
            if (name === this.updateArr[i].name) this.updateArr.splice(i, 1)
        }
    }
    private update = (): void => {
        // TODO: sum, diff が0になる
        this.time.now = new Date()
        this.time.diff = this.time.old === null ? 0 : (this.time.now.getDate() - this.time.old.getDate())
        this.time.sum += this.time.diff
        this.time.old = this.time.now
        for (let i = 0; i < this.updateArr.length; i++) {
            this.updateArr[i].func(this.time)
            console.log(this.time)
        }
    }
    public start = (): void => {
        let animationFunc = (): void => {
            this.update()
            this.animationID = this.rqstAnmFrm(animationFunc)
        }
        animationFunc()
    }
    public stop = (): void => {
        if (this.animationID === null) return
        this.cnclAnmFrm(this.animationID)
    }
    private rqstAnmFrm = (cb: FrameRequestCallback): number => {
        let id: number = (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (cb: Function) {
                return window.setTimeout(cb, 1000 / 60)
            }
        )(cb)
        return id
    }
    private cnclAnmFrm = (id: number): void => {
        (
            window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.clearTimeout
        )(id)
    }
}
