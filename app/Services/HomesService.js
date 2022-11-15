import { appState } from "../AppState.js"
import { Home } from "../Models/Home.js"
import { Pop } from "../Utils/Pop.js"


class HomesService {

    async getHomes() {
        const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/houses')
        console.log('[Got Homes]', res.data) //NOTE - REALLY import to check got data.
        appState.homes = res.data.map(h => new Home(h))
    }

    async removeHome(id) {
        const res = await axios.delete('https://bcw-sandbox.herokuapp.com/api/houses/' + id)
        console.log('[DELETE CAR]', res.data);
        Pop.toast(res.data, 'success')
        appState.homes = appState.homes.filter(h => h.id != id)
    }

}


export const homesService = new HomesService()