import { appState } from "../AppState.js";
import { homesService } from "../Services/HomesService.js";
import { setHTML } from "../Utils/Writer.js";



function _drawHomes() {
    const homes = appState.homes
    let template = ''
    homes.forEach(h => template += h.listTemplate)
    setHTML('listings', template)
}

export class HomesController {
    constructor() {

        appState.on('homes', _drawHomes)
        // this.getHomes()
    }

    async getHomes() {
        try {
            await homesService.getHomes()
        } catch (error) {
            // NOTE best catch alerts the user and logs the error
            Pop.error(error.message)
            console.error(error)
        }
    }



    showHomes() {
        _drawHomes()

    }
}