import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class JobsService {
  async getAllJobs() {
    const res = await api.get('api/jobs')
    logger.log('[get all jobs]', res.data)
    AppState.jobs = res.data
  }

  async getJobById() {
    const res = await api.get('api/houses/' + id)
    logger.log('[get job by id]', res.data)
    AppState.activeJobs = res.data
  }
}

export const jobsService = new JobsService();