import React from "react";
import { formatRelative } from 'date-fns'
import { pt } from 'date-fns/locale'
import { Container } from "./style";

export default function Comentarios({ name, email, id, date , remove}) {

  return (
    <Container>
      <div>
        <p>id : {id + 1}</p>
        <p>nome : {name}</p>
        <p>email : {email}</p>
        <p>{formatRelative(date, new Date(), { locale: pt })}</p>
        <button onClick={remove}>remover</button>
      </div>
    </Container>
  );
}
