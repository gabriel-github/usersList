import React, { useState } from "react";
import Comentarios from "./components/Comentarios";
import { Container } from "./components/AppStyle/style";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    date: ""
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value, date: new Date() });
  };

  const removeItem = (item) => {
    const newList = list.filter((i) => i !== item);
    setList(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, input]);
    setInput({ name: "", email: "" });
  };

  return (
    <Container>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
          placeholder="name"
          required
          autoFocus
        />

        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
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
            name={item.name}
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
