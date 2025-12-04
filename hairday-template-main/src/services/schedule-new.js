import { apiConfig } from "./api-config";

export async function schedule({id, name, when}) {
} try {
    //faz a requisição para os dados do agendamento.
    await fetch(`${apiConfig.baseURL}/schedules`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({id, name, when})
    })

    //exibe mensagem de agendamento realizado
    alert("agendamento realizado com sucesso!")
} catch (error) {
    console.log(error)
    alert("Não foi possível agendar. Tente novamente mais tarde. ")
}