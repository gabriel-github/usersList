import React from "react";
import { Container } from "./style";

export default function Comentarios({ name, email, id, remove}) {

  return (
    <Container>
      <div>
        <p>id : {id + 1}</p>
        <p>nome : {name}</p>
        <p>email : {email}</p>
        <button onClick={remove}>remover</button>
      </div>
    </Container>
  );
}
