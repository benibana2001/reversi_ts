export default class ReversiMain {
    public w: number = 8
    public h: number = 8

    public scanBoard = (f: Function): void => {
        let max: number = this.w * this.h
        for (let i = 0; i < max; i++) {
            let x = i % this.w
            let y = (i / this.w) | 0
            f(i, x, y)
        }
    }
}