export default class ReversiMain {
    readonly BLANK: number = -1// 空白マス 石のあるマスはプレイヤー番号
    readonly PLAYERTYPE: { man: string, com: string } = { man: "MAN", com: "COM" }
    readonly DIRECTION: { x: number, y: number }[] = [
        { x: 0, y: -1 }, { x: 1, y: -1 }, { x: 1, y: 0 }, { x: 1, y: 1 },
        { x: 0, y: 1 }, { x: -1, y: 1 }, { x: -1, y: 0 }, { x: -1, y: -1 },]
    //
    public w: number = 8
    public h: number = 8
    /**
     * 'board' Indicats Each Square Status Like This.
     * [0, 0, 0
     *  0, 0, 0,
     *  0, 0, 0]
     */
    public board: number[] = []
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
     * At The TIme Board Is Like beneath,
     * [0, 0, 0
     *  0, 0, 0
     *  0, 1, 0]
     * If You Want To Get {x: line2, y: line3}, You Would Use 'ary[8].
     * But If You Don't Know '8', You Can't Get Precise Value. So, This Function Return 'i' from {x, y}.
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
     * So That, You Could Get RegExp Like This: /(You)(Enemy)+B/ 
     */
    public scanLine(board: number[], x: number, y: number, directionX: number, directionY: number): { pattern: string, ary: { x: number, y: number }[] } {
        // This indicate RegExp Pattern.
        let pattern: string = ""
        // This indicates Position Of Each Square Checked By This Process.
        let ary: { x: number, y: number }[] = []
        // Start Scan Line
        for (let m = 1; ; m++) {
            let currentX: number = x + directionX + m
            let currentY: number = y + directionY + m
            let i: number = this.XYToI(currentX, currentY)
            // If Out Of The Board, Process Should Be End. 
            // At The End Of Loop Sequence Finish, You Absolutely Reach To Here And Break Loop.
            if (i === undefined) break
            //
            let player: number = board[i]
            if (player === this.BLANK) {
                pattern += 'B'
            } else {
                pattern += player
            }
            ary.push({ x: currentY, y: currentY })
        }

        return { pattern: pattern, ary: ary }
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
                let line: { pattern: string, ary: { x: number, y: number }[] } = this.scanLine(board, x, y, this.DIRECTION[j].x, this.DIRECTION[j].y)
                let re: RegExp = new RegExp("^" + playerEnemy + "+" + player)
                if (line.pattern.match(re)) {
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