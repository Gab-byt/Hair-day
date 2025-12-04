import dayjs from "dayjs"

import {openingHours} from "../../utils/openin-hours"

const hours = document.getElementById("hours")

export function hoursload() {
    const opening = openingHours.map((hour) => {
        const [scheduleHour] = hour.split(":")

        const isHourPast = dayjs(date).add(scheduleHour, "Hour").isbefore(daysjs())
        
        return {
            hour, 
            available: isHourPast, 
        }
    })

    opening.forEach(({hour, available }) =>{
        const li = document.createElement("li")

        li.classlist.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour
        hours.append(li)
    })
    
}