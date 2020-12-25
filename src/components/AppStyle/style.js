import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      width: 80%;
      height: 40px;
      background: #a8dadc;
      outline-color: #457b9d;
      border: none;
      border-radius: 0.3rem;
      font-size: 16px;
      padding-left: 10px;

      &::placeholder {
        padding-left: 10px;
        font-size: 16px;
      }
    }

    textarea {
      width: 80%;
      height: 100px;
      resize: none;
      background: #a8dadc;
      border: none;
      outline-color: #457b9d;
      border-radius: 0.3rem;
      font-size: 16px;
      padding-left: 10px;
      font-family: sans-serif;

      &::placeholder {
        padding-left: 10px;
        font-size: 16px;
      }
    }

    div {
      width: 81%;
      display: flex;
      justify-content: flex-start;

      button {
        background: #e63946;
        border: none;
        color: #fff;
        padding: 10px 20px;
        outline: none;
        cursor: pointer;
        border-radius: 0.2rem;

        transition: all 0.3s ease-in-out;

        &:hover {
          background: #e71d36;
        }
      }
    }

    input,
    textarea,
    button {
      margin-top: 10px;
    }
  }
`;
