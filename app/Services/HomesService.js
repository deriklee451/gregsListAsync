import { appState } from "../AppState.js"
import { Home } from "../Models/Home.js"


class HomesService {

    async getHomes() {
        const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/houses')
        console.log('[Got Homes]', res.data) //NOTE - REALLY import to check got data.
        appState.homes = res.data.map(h => new Home(h))
    }

}


export const homesService = new HomesService()