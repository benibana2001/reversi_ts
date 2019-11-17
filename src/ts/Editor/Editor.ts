import EditorAnimation from "./EditorAnimation";
import EditorCanvas from "./EditorCanvas";
import EditorGameBase from "./EditorGameBase";
import ResourceManager from "../ResourceManager/ResourceManager";
import { stringify } from "querystring";

export default class Editor {
    public ea = new EditorAnimation()
    public ec = new EditorCanvas()
    public egb = new EditorGameBase()
    public mr = new ResourceManager()
    //
    public animStart():void {
        this.ea.start()
    }
    //
    public animAdd(name: string, func: Function): void {
        this.ea.add(name, func)
    }
}
