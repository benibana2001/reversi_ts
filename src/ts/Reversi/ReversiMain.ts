export default class ReversiMain {
    readonly BLANK: number = -1// 空白マス 石のあるマスはプレイヤー番号
    readonly PLAYERTYPE: { man: string, com: string } = { man: "MAN", com: "COM" }
    readonly DIRECTION: { x: number, y: number }[] = [
        { x: 0, y: -1 }, { x: 1, y: -1 }, { x: 1, y: 0 }, { x: 1, y: 1 },
        { x: 0, y: 1 }, { x: -1, y: 1 }, { x: -1, y: 0 }, { x: -1, y: -1 },]
    //
    public w: number = 8
    public h: number = 8
    public board: { x: number, y: number }[] = []// all squares state
    public player: number = 0
    public playerOld: number = 1
    // TODO: check playerType
    public playerType: string[] = [this.PLAYERTYPE.man, this.PLAYERTYPE.com]
    public put: {} = {}// 最終置き位置の座標
    public reverseTokens: number[] = []// 裏返った石配列
    //
    public score: number[] = [0, 0]
    public enableSquares: { x: number, y: number }[] = []
    public isEnd: boolean = false
    //----------------------------------------
    // 
    /**
     * init
     */
    public init(): void {
        // To Blank All Squares
        this.scanBoard((i: number) => {
            this.board[i] = this.BLANK
        })
        // Set Token x 4 (prepare for game start)
        this.board[this.XYToI(3, 3)] = this.board[this.XYToI(4, 4)] = 0
        this.board[this.XYToI(3, 4)] = this.board[this.XYToI(4, 3)] = 0
        // Decide Geme Over
        this.enableSquares = this.getEnableSquares(this.board, this.player)
        let enableSquares2 = this.getEnableSquares(this.board, 1 - this.player)

    }

    /**
     * XYToI
     * XY座標から要素の(配列表記上の)位置を求める
     */
    public XYToI(x: number, y: number): number {
        if (x < 0 || y < 0) return
        if (x >= this.w || y >= this.h) return
        return (x + y * this.w) | 0
    }

    /**
     * calcScore
     */
    public calcScore(): void {

    }

    /**
     * scanLine
     * 1列走査
     * This Function Return Regular Expression.
     * If You Can Put Token, It Means There Is A Blank Space Over Enemies Token.
     * - Example: This Pattern You Can Put Token => / (You) (Enemy) (Enemy) (Enemy) (Blank)/
     * - Example: This Pattern You Can't Put Token => / (You) (You) (Blank)/
     * This Function Returns RegExp For Check These Pattern.
     */
    public scanLine(board: {x: number, y: number}, x: number, y:number, directionX: {x: number, y: number}, directionY: {x: number, y: number}): { patern: string, ary: { x: number, y: number }[] } {
        let patern: string = ""
        let ary: { x: number, y: number }[] = []
        return { patern: patern, ary: ary }
    }

    /**
     * getEnableSquares
     * 配置可能マス配列の取得
     * Return All Squares Info-Array Which Could Be Put Token
     */
    public getEnableSquares(board: number[], player: number): { x: number, y: number }[] {
        let res: { x: number, y: number }[] = []
        let playerEnemy: number = 1 - player
        // Check All Squares
        this.scanBoard((i: number, x: number, y: number) => {
            // If Already Set Token, Don't Do Anything
            if (board[i] !== this.BLANK) return
            // About Each Square, If Can Put Token Return Square Info.
            let l: number = this.DIRECTION.length
            for (let j = 0; j < l; j++) {
                let line: { patern: string, ary: { x: number, y: number }[] } = this.scanLine(board, x, y, this.DIRECTION[j].x, this.DIRECTION[j].y)
                let re: RegExp = new RegExp("^" + playerEnemy + "+" + player)
                if (line.patern.match(re)) {
                    res.push({ x: x, y: y })
                    return
                }
            }
        })
        return res
    }

    /**
     * putToken
     */
    public putToken(): void {

    }

    /**
     * next
     * 進行処理
     */
    public next(): void {

    }

    /**
     * execReverse
     */
    public execReverse(): void {

    }

    /**
     * skip
     */
    public skip(): void {

    }

    /**
     * getPlayerType
     */
    public getPlayerType(): void {

    }
    /**
     * getPlayerType
     * Execute Function to All Squares
     */
    public scanBoard(f: Function): void {
        let max: number = this.w * this.h
        for (let i = 0; i < max; i++) {
            let x = i % this.w
            let y = (i / this.w) | 0
            f(i, x, y)
        }
    }
}