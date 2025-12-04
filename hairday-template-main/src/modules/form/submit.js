import dayjs from "dayjs"

import {scheduleNew} from "../../services/schedule-new.js"
import {scheduleDay} from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementByid("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")

form.onsubmit = async (event) => {
    event.prventDefault()

    try {
        const name = clientName.value.trim()
        
        if (!name) {
            return alert("Informe o nome do cliente!")
        }
        const hourselected = document.querySelector(".Hour-selected")

        if(!hourselected) {
            return alert ("Selecione a hora. ")
        }

      const [hour] = hourselected.innerText.split(":")

      const when = dayjs(selectedDate.value).add(hour, "hour")

      await scheduleNew({
        id,
        name,
        when,
      })
      await scheduleDay()

      clientName.value = ""
    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }
}
