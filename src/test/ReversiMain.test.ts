import ReversiMain from '../ts/Reversi/ReversiMain'
let rMain: ReversiMain = new ReversiMain()
//
// Emulate The Board Status When Game Is Starting.
let board: number[] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, -1, -1, -1, -1, -1, -1, 1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
// Tesst scanLine()
test.each([
    [board, 0, 0, 1, 0, {
        pattern: 'BBBBBBB',
        ary: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]
    }],
    [board, 2, 2, 1, 1, {
        pattern: '00BBB',
        ary: [{ x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]
    }],
    [board, 2, 4, 1, 0, {
        pattern: '10BBB',
        ary: [{ x: 3, y: 4}, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 6, y: 4 }, { x: 7, y: 4 }]
    }],
])('rMain.ScanLine(%i, %i, %i, %i)', (board: number[], x: number, y: number, cX: number, cY: number, expected: any) => {
    expect(rMain.scanLine(board, x, y, cX, cY)).toMatchObject(expected)
})
//
/*test('basic', () => {
    expect(rMain.scanLine(board, 0, 0, 1, 0)).toMatchObject(
        {pattern: 'BBBBBBB',ary: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]}
    )
})*/

