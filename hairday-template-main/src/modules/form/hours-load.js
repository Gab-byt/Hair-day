import dayjs from "dayjs"

import {openingHours} from "../../utils/openin-hours"

const hours = document.getElementById("hours")

export function hoursload(date, dailySchedules) {
    hours.innerHTMl = ""
    const unavailable = dailySchedules.map((schedule) => 
        dayjs(schedule.when).format("HH:mm")
    )

    const opening = openingHours.map((hour) => {
        const [scheduleHour] = hour.split(":")

        const isHourPast = dayjs(date).add(scheduleHour, "Hour").isbefore(daysjs())

        const available = !unavailableHours.includes(hour) || !sHourPast
        
        return {
            hour, 
            available 
        }
    })

    opening.forEach(({hour, available }) =>{
        const li = document.createElement("li")

        hoursClick()

        li.classlist.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour
        if (hour === "9:00"){
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })   
}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}