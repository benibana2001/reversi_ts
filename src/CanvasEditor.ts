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

    public fillMarginRect = (context: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, m: number): any => {
        let rect: any = {
            x: x + m,
            y: y + m,
            w: w - m * 2,
            h: h - m * 2
        }
        context.fillRect(rect.x, rect.y, rect.w, rect.h)
        return rect
    }
}