import React, { useState } from "react";
import Comentarios from "./components/Comentarios";
import { Container } from "./components/AppStyle/style";

function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const removeItem = (item) => {
    const newList = list.filter((i) => i !== item);
    setList(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, { first_name: name, email: email }]);

    setName('')
    setEmail('')
  };

  return (
    <Container>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          required
          autoFocus
        />

        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
          autoFocus
        />

        <div>
        <button type="submit">submeter</button>
        </div>
      </form>

      <div>
        {list.map((item, index) => (
          <Comentarios
            key={index}
            id={index}
            name={item.first_name}
            email={item.email}
            date={item.date}
            remove={removeItem.bind(this, item)}
          />
        ))}
      </div>
    </Container>
  );
}

export default App;
