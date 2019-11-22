import EditorAnimation from './EditorAnimation'
import EditorCanvas from './EditorCanvas'
import EditorGameBase from './EditorGameBase'
//
export default class Editor {
    // TODO: Instanciate as a Singleton 
    public ea = new EditorAnimation()
    public ec = new EditorCanvas()
    public egb = new EditorGameBase()
    //
    public animStart(): void {
        this.ea.start()
    }
    //
    public animAdd(name: string, func: Function): void {
        this.ea.add(name, func)
    }
}
