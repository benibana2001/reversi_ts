import { CanvasObj } from '../Util'
export default class EditorCanvas {
    private _scale: number = 1
    public generateCanvas = (w: number, h: number, scale: number = 1): CanvasObj => {
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

    // 元画像 s, 作る画像 d (cf: http://www.htmq.com/canvas/drawImage_s.shtml)
    public getScaledImg = (image:HTMLElement, sx: number, sy: number, sw: number, sh: number, dw: number, dh: number): any => {
        let ratioX: number = dw / sw
        let ratioY: number = dh / sh
        let imgElem: HTMLImageElement = <HTMLImageElement>image
        // 50%以下に圧縮する際は画像が荒れるので、段階的に圧縮をかける
        if (ratioX >= 0.5 && ratioY >= 0.5) {
            let c = this.generateCanvas(dw, dh)
            c.context.drawImage(imgElem, sx, sy, sw, sh, 0, 0, dw, dh)
            return c.canvas
        } else {
            let w2: number = (ratioX < 0.5) ? Math.ceil(sw * 0.5) : dw
            let h2: number = (ratioY < 0.5) ? Math.ceil(sh * 0.5) : dh
            //
            let c = this.generateCanvas(w2, h2)
            c.context.drawImage(imgElem, sx, sy, sw, sh, 0, 0, w2, h2)
            let newImage = this.getScaledImg(c.canvas, 0, 0, w2, h2, dw, dh)
            return newImage
        }
    }
}