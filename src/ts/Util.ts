export { CanvasObj, AnimationObj, Time, ResourceSound }
interface CanvasObj {
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
    w: number,
    h: number
}

interface AnimationObj {
    name: string,
    func: Function
}

interface Time {
    sum: number | null,
    old: Date | null,
    now: Date | null,
    diff: number | null
}

interface ResourceSound {
    audio: HTMLAudioElement | null,
    seNow: number | null
}