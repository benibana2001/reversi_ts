import Status from './ReversiStatus'
import ResourceManager from '../ResourceManager/ResourceManager'
export default class ReversiBase {
    public status: Status
    public resources: ResourceManager
    constructor() {
        // Set Member As A Singleton Class.
        this.status = Status.getInstance()
        this.resources = ResourceManager.getInstance()
    }
}