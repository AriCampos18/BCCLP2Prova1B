import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function FormQuestionamento(props){

  const [questionamento, setQuestionamento]=useState(props.questionamentoSelecionado);
  const [formValidado, setFormValidado]=useState(false);

  function manipularSubmissao(evento){
    const form = evento.currentTarget;
    if(form.checkValidity()){
        props.setListaQuestionamento([...props.listaQuestionamento, questionamento]);
        props.setExibirTabela(true);
      }
    else{
      setFormValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();
  }

        return (
            <>
              <Form.Label htmlFor="inputPassword5">Comentário</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
              <Form.Text id="passwordHelpBlock" muted>
                Deixe seu questionamento.
              </Form.Text>
            </>
          );
}