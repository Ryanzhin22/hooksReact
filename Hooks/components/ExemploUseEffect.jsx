import { useState, useEffect } from "react"

function ExemploUseEffect(){

    const [value, setValue] = useState("Valor iNicial")

    // useEffect é usado para gerenciamento do ciclo de vida de um componente
    // o ciclo de vida gira em torno da CRIAÇÃO, ATUALIZAÇÃO e DESTRUIÇÃO
    // Toda vez que o ciclo de vida mudar, terá um EFEITO colateral
    useEffect(()=>{
        console.log(value)
        return () => {
            console.log("Foi feito uma DESTRUIÇÃO")
        }
    }, [])
    // [value] => ATUALIZAÇÃO: Qualquer alteração será mostrada no console
    // [] => CRIAÇÃO: Apenas o valor inicial será mostrado no console
    // [] + return => DESTRUIÇÃO: Quando o valor for destruido, será mostrado no console

    return (
        <div>
            <h1>Exemplo useEffect</h1>
            <p>Escreva no input: </p>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
        </div>
    )

}

export default ExemploUseEffect