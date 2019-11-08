export default class ResourceManager {
    public imgs: ResourceImage[] = []
    public load = (name: string, url: string): Promise<boolean> => {
        let func = (resolve: Function, reject: Function) => {
            let img: HTMLImageElement = new Image()
            let newResource: ResourceImage = { name: img }
            this.imgs.push(newResource)
            img.onload = (() => {
                let msg: string = `DONE Loading: ${name}`
                console.log(msg)
                resolve(true)
            })
            img.src = url
        }
        return new Promise(func)
    }
}

interface ResourceImage {
    name: HTMLImageElement
}