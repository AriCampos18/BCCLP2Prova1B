import { useState } from "react";
import { Card } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import { Alert } from "react-bootstrap";
import ExibirPropostas from "./Propostas/ExibirPropostas";
import Form from 'react-bootstrap/Form';
import FormQuestionamento from "./Formulario/FormQuestionamento";

export default function TelaPropostas(props){

    return(
        <div>
          <Pagina>
              <Alert className="mt-02 mb-02 success text-center" variant="success">
                  <h2>
                        Proposta do Candidato 
                  </h2>
              </Alert>
              
            <FormQuestionamento/>
        </Pagina>
    </div>
  );        
}