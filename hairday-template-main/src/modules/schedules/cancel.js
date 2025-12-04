import {scheduleDay} from ".load.js"
import { scheduleCancel } from "../../services/schedule-cancel"

const periods = document.querySelectorAll(".period")

periods.forEach((periods) => {
    periods.addEventListener("click", async (event) => {
        if(event.target.classlist.contains("cancel-icon")){
            
            const item = event.target.closest("li")

            const { id } = item.dataset

            if (id) {
                const isConfirm = confirm (
                    "tem certeza que deseja cancelar o agendamento?"
                )
                if (isConfirm) {
                    await scheduleCancel ({id})
                    scheduleDay()
                }
            }
        }
    })
}) 