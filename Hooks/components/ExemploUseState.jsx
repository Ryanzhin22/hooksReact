import { useState } from "react"

function ExemploUseState(){

    // useState vai salvar o "Estado" do componente
    // Para o usuário visualizar na tela a mudança da variável o useState é NECESSÁRIO, pois é ele quem avisa o React para fazer a mudança
    // useState gerencia estados do componente / estados atomicos
    const [contador, setContador] = useState(0)
    let countNotHook = 0

    function increment(){
        setContador(contador => contador + 1)
        countNotHook = countNotHook + 1
        console.log(countNotHook)
        // Usuário não ve a atualização
    }

    return(
        <div>
            <h1>Contador</h1>
            <p>Contagem: {contador}</p>
            <p>Contagem sem usar Hook: {countNotHook}</p>
            <button onClick={increment}>Adicionar Valor</button>
        </div>
    )

}

export default ExemploUseState