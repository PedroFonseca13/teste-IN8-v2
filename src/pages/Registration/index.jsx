import React from 'react';
import {
  Body,
  Button,
  Container,
  ContainerForm,
  Form,
  Input,
  Label,
  Title,
} from './styles';

const Registration = () => {
  return (
    <Body>
      <Container className="container">
        <Title className="registration-title">Cadastro</Title>

        <ContainerForm className="form-container">
          <Form action="post">
            <Label className="control-label" htmlFor="name">
              Nome
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Fulano Beltrano de Oliveira da Silva"
              />
            </Label>

            <Label className="control-label" htmlFor="email">
              E-mail
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="fulanobos@gmail.com"
              />
            </Label>

            <Label className="control-label" htmlFor="bday">
              Nascimento
              <Input
                type="date"
                name="bday"
                id="bday"
                placeholder="01/03/1992"
              />
            </Label>

            <Label className="control-label" htmlFor="phone">
              Telefone
              <Input
                type="text"
                name="phone"
                id="phone"
                placeholder="(31) 9 9974-0420"
              />
            </Label>
          </Form>
          <Button>Cadastrar</Button>
        </ContainerForm>
      </Container>
    </Body>
  );
};

export default Registration;
