import { listaCandidatos } from "../../../dados/candidatos"

export default function ExibirPropostas(props){

    function exibirPropostas(candidato){
        return <p>{candidato.propostas}</p>;
    }

    {
        props.listaCandidatos?.map((candidato) => {
            exibirPropostas(candidato);
         })
    }

}