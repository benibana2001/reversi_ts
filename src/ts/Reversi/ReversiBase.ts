import Status from './ReversiStatus'
export default class ReversiBase {
    public status: Status
    constructor() {
        this.status = Status.getInstance()
    }
    // TODO: RsourceManagerをSingletomで持たせる
}