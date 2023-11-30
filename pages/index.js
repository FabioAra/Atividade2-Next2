export default function Home() {
    return (
      <div>
        <h2>Viva Santana!</h2>
      </div>
    )
  }
  
  export  function Principal() {

    return (

        <div>

            <h1>Nova Página 1</h1>

            <MariaPrea msg="Vou tomar café"/>

        </div>

    )

}

export function MariaPrea(props) {

    return (
        <div>
       <h2>Maria é uma mulher forte, come rapadura!</h2>
       
       <h3> { props.msg }</h3>
       </div>
    )

}
