import { atom } from "recoil";


export class ActiveNav {
    constructor() {
        this.active= null
    }
    getActive() {
        return this.active
    }
    setAcitve(a) {
        this.active=a
    }
}