import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import{ hoursload } from "../form/hours-load.js"
import {scheduleShow} from "../schedules/show.js"

const selectedDate = document.getElementById("date")

export async function scheduleDay() {
    const date = selectedDate.value


    const dailySchedules = await scheduleFetchByDay({ date })
    
    scheduleShow({dailySchedules})


  hoursload({date, dailySchedules})  
}