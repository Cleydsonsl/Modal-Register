import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  margin-top: 80px;
  flex: 1;

`;

export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  align-items: center;

  button {
    align-content: center;
    width: 200px;
    height: 70px;
    border: 0;
    border-radius: 5px;
    background: #04d361;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')}
    }
  }
`;

export const RegisterForm = styled.div`
  margin: 0;
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    width: 100%;
    padding: 25px;
    display: block;
    text-decoration: none;
    margin-left: 16px;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    } 

    div {

      strong {
      font-size: 20px;
      color: #3D3D4D;
    }

      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 2px
      }
    }

    svg {
      margin-left: auto;
      color: red;

      &:hover {
        transform: translateX(-5px);
        transition: transform 0.2s;
      }
    }
  }
`;
