import { MariaPrea } from "./index"



export default function Principal() {

   return (

      <div>

         <h1>Eita Lasqueira, que lá vem a página 2</h1>

         <JosePrea msg="O nordeste é uma lugar maravilhoso"/>

         <MariaPrea msg="E caicó, é um lugar arretado.!"/>

      </div>

   )

}

export function JosePrea(props) {

   return (
      <div>
         <h2>O sol que faz em caicó é de rachar o quengo</h2>

         <h3> {props.msg}</h3>
      </div>
   )

}