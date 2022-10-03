import styled from 'styled-components';

export const Body = styled.body`
  background: #29abe2;
  height: 100vh;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  padding-top: 3rem;
  text-align: center;
  color: #fff;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  /* width: 50%; */
  align-items: flex-start;
  padding: 0 10px;

  @media screen and (min-width: 1024px) {
    padding: 0 50px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 75px;
  }
`;

export const Label = styled.label`
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  text-align: left;
  margin-bottom: 0;
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  background: none;
  color: #fff;
  padding-top: 0.5rem;
  border-bottom: 1px solid #fff;
  font-size: 1.2rem;

  &::placeholder {
    color: #fff;
  }

  &:focus {
    outline: 0;
  }
`;

export const ContainerForm = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 2rem;
`;

export const Button = styled.button`
  background: #012d51;
  border: none;
  color: #29abe2;
  padding: 10px 40px;
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  margin-top: 5rem;
  font-weight: 200;
`;
