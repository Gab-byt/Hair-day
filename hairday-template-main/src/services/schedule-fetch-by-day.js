import dayjs from "dayjs"
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({date}){
    try {
        const response = awaitfetch(`${apiConfig.baseURL}/schedules`)

        const data = await response.json()

        const dailySchedules = data.filter((schedule) => 
            days(date).isSame(schedule.when, "day")
    )
    } catch (error) {
        console.log(error);
        alert("Não foi possível buscar os agendamentos do dia selecionado.")
    }
}