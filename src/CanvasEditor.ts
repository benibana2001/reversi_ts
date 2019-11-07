import { CanvasObj } from './Util'
export default class CanvasEditor {
    private _scale: number = 1
    private generateCanvas = (w: number, h: number, scale: number): CanvasObj => {
        if (!scale) scale = 1
        let canvas: HTMLCanvasElement = document.createElement('canvas')
        canvas.width = w * scale
        canvas.height = h * scale
        // canvas.innerWidth = w
        // canvas.innerHeight = h
        let context = canvas.getContext('2d')
        let obj: CanvasObj = {
            canvas: canvas,
            context: context,
            w: w * scale,
            h: h * scale
        }
        return obj
    }

    public initCanvas = (id: string, w: number, h: number, scale: number): CanvasObj => {
        this._scale = scale
        let c: CanvasObj = this.generateCanvas(w, h, scale)
        let elem: HTMLElement = document.getElementById(id)
        elem.appendChild(c.canvas)
        return c
    }
}