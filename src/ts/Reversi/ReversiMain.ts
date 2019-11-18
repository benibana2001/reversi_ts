export default class ReversiMain {
    readonly BLANK: number = -1// 空白マス 石のあるマスはプレイヤー番号
    readonly PLAYERTYPE: { man: string, com: string } = { man: "MAN", com: "COM" }
    readonly DIRECTION: { x: number, y: number }[] = [
        { x: 0, y: -1 }, { x: 1, y: -1 }, { x: 1, y: 0 }, { x: 1, y: 1 },
        { x: 0, y: 1 }, { x: -1, y: 1 }, { x: -1, y: 0 }, { x: -1, y: -1 },]
    //
    public w: number = 8
    public h: number = 8
    public board: number[] = []// all squares state
    public player: number = 0
    public playerOld: number = 1
    // TODO: check playerType
    public playerType: string[] = [this.PLAYERTYPE.man, this.PLAYERTYPE.com]
    public put: {} = {}// 最終置き位置の座標
    public reverseTokens: number[] = []// 裏返った石配列
    //
    public score: number[] = [0, 0]
    public enableSquares: number[] = []
    public isEnd: boolean = false
    //
    public init = ():void => {
        console.log("START GAME")
        // 全てのマスを空に

        // 置石x4
    }
    //
    public scanBoard = (f: Function): void => {
        let max: number = this.w * this.h
        for (let i = 0; i < max; i++) {
            let x = i % this.w
            let y = (i / this.w) | 0
            f(i, x, y)
        }
    }
}