import Reversi from '../ts/Reversi/Reversi'
import ResourceManager from '../ts/ResourceManager/ResourceManager'

let rm: ResourceManager = new ResourceManager()
let r: Reversi = new Reversi(rm)

// Only Test For Working Of JEST.
test('basic', () => {
    expect(r.testJest(3)).toBe(6)
})

