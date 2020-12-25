import styled from "styled-components";

export const Container = styled.div`
  width: 970px;
  max-width: 970px;
  height: 200px;
  background-color: #e71d36;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  border-radius: 0.5rem;
  padding: 30px;

  p {
    font-size: 18px;
    font-family: sans-serif;
    color: #f5f5f5;
  }

  button {
    background: #fff;
    border: none;
    color: #fff;
    padding: 10px 20px;
    outline: none;
    cursor: pointer;
    border-radius: 0.2rem;
    color: #F87060;
    font-weight: 600;

    transition: all 0.3s ease-in-out;

    &:hover {
      background: #F87060;
      color: #fff;
    }
  }
`;
