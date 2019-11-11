import EditorAnimation from "./EditorAnimation";
import EditorCanvas from "./EditorCanvas";
import EditorGameBase from "./EditorGameBase";
import ResourceManager from "../ResourceManager/ResourceManager";

export default class Editor {
    public ea = new EditorAnimation()
    public ec = new EditorCanvas()
    public egb = new EditorGameBase()
    public mr = new ResourceManager()
}