import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementByid("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")

form.onsubmit = (event) => {
    event.prventDefault()

    console.log("ENVIADO!")
}
