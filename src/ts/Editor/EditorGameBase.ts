export default class EditorGameBase {
    private getWinH = (): number => {
        return window.innerHeight
    }

    private getWinW = (): number => {
        return window.innerWidth
    }

    public getFitSz = (w: number, h: number): { w: number, h: number } => {
        let winH: number = this.getWinH()
        let winW: number = this.getWinW()
        let resW: number
        let resH: number

        // 縦横比を元に値を調整する
        if (w / h >= winW / winH) {
            resW = winW
            resH = (h * winW / w) | 0
        } else {
            resH = winH
            resW = (w * winH / h) | 0
        }
        return {
            w: resW,
            h: resH
        }
    }

    public inRange = (cX: number, cY: number, x: number, y: number, w: number, h: number): boolean => {
        if (cX < x || x + w <= cX) return false
        if (cY < y || y + h <= cY) return false
        return true
    }
}