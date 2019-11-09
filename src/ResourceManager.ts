import { ResourceImage } from './Util'
export default class ResourceManager {
    public imgs: { [key: string]: ResourceImage } = {}
    public load = (name: string, url: string): Promise<boolean> => {
        let func = (resolve: Function, reject: Function) => {
            console.log(name)
            let image: ResourceImage = {
                elem: new Image(),
                src: url//TODO: 使わない
            }
            this.imgs[name] = image
            this.imgs[name].elem.src = url
            console.log(this.imgs[name].elem)
            this.imgs[name].elem.onload = (() => {
                let msg: string = `DONE Loading: ${name}`
                console.log(msg)
                resolve(true)
            })
        }
        return new Promise(func)
    }
}
