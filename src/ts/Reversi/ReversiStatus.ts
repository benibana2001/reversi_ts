export default class ReversiStatus {
    private static status = new ReversiStatus()
    private constructor () {
        console.log('Status Instance Was Created.')
    }
    /**
     * getInstance
     */
    public static getInstance (): ReversiStatus {
        return this.status
    }
}