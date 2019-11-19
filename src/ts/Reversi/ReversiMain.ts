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
    //----------------------------------------
    // 
    /**
     * init
     */
    public init ():  void {
    
    }

    /**
     * XYToI
     * XY座標から要素の位置を求める
     */
    public XYToI ():  void {
    
    }

    /**
     * calcScore
     */
    public calcScore ():  void {
    
    }

    /**
     * scanLine
     * 1列走査
     */
    public scanLine ():  void {
    
    }

    /**
     * getEnableSquares
     * 配置可能マス配列の取得
     */
    public getEnableSquares ():  void {
    
    }

    /**
     * putToken
     */
    public putToken ():  void {
    
    }

    /**
     * next
     * 進行処理
     */
    public next ():  void {
    
    }

    /**
     * execReverse
     */
    public execReverse ():  void {
    
    }

    /**
     * skip
     */
    public skip ():  void {
    
    }

    /**
     * getPlayerType
     */
    public getPlayerType ():  void {
    
    }

    public scanBoard (f: Function): void {
        let max: number = this.w * this.h
        for (let i = 0; i < max; i++) {
            let x = i % this.w
            let y = (i / this.w) | 0
            f(i, x, y)
        }
    }
}