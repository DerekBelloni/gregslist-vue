import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class HousesService {

  async getAll() {
    const res = await api.get('api/houses')
    logger.log('[get all houses', res.data)
    AppState.houses = res.data
  }

  async getById(id) {
    const res = await api.get('api/houses/' + id)
    logger.log('[get house by id', res.data)
    AppState.activeHouse = res.data
  }
  async create(rawData) {
    const res = await api.post('api/houses', rawData)
    // logger.log(res.data)
    AppState.houses.push(res.data)
  }

  async update(houseData) {
    const res = await api.put('api/houses/' + houseData.id, houseData)
    logger.log('[update house]', res.data)
    AppState.activeHouse = res.data
  }
}

export const housesService = new HousesService();