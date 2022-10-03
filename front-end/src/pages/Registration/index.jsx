import React from 'react';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const validation = yup.object().shape({
  name: yup
    .string()
    .required('O nome é obrigatório')
    .max(80, 'O nome precisa ter menos de 80 caracteres.'),
  email: yup
    .string()
    .required('O email é obrigatório')
    .max(80, 'O email precisa ter menos de 80 caracteres.'),
  bday: yup
    .date()
    .required('A data é obrigatória')
    .max(new Date(), 'A data ser DD/MM/YYYY.'),
  phone: yup
    .string()
    .required('O telefone é obrigatório')
    .max(11, 'O telefone precisa ter menos de 11 caracteres.'),
});

const Registration = () => {
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  const addPost = (data) =>
    axios
      .post('http://localhost:3000/registration', data)
      .then(() => {
        console.log(data);
        console.log('Success');
        history.push('/');
      })
      .catch(() => {
        console.log(data);
        console.log('Deu ruim, chapa.');
      });

  return (
    <Body>
      <Container className="container">
        <Title className="registration-title">Cadastro</Title>

        <ContainerForm className="form-container">
          <Form onSubmit={handleSubmit(addPost)}>
            <Label className="control-label" htmlFor="name">
              Nome
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Fulano Beltrano de Oliveira"
                {...register('name')}
              />
              <p className="error-message">{errors.name?.message}</p>
            </Label>

            <Label className="control-label" htmlFor="email">
              E-mail
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="fulanobos@gmail.com"
                {...register('email')}
              />
              <p className="error-message">{errors.email?.message}</p>
            </Label>

            <Label className="control-label" htmlFor="bday">
              Nascimento
              <Input
                type="date"
                name="bday"
                id="bday"
                placeholder="dd/mm/yyyy"
                // date-format="DD MMMM YYYY"
                // value="01/03/1992"
                {...register('bday')}
              />
              <p className="error-message">{errors.bday?.message}</p>
            </Label>

            <Label className="control-label" htmlFor="phone">
              Telefone
              <Input
                type="text"
                name="phone"
                id="phone"
                placeholder="31 99974-0420"
                {...register('phone')}
              />
              <p className="error-message">{errors.phone?.message}</p>
            </Label>
            <Button type="submit">Cadastrar</Button>
          </Form>
        </ContainerForm>
      </Container>
    </Body>
  );
};

export default Registration;
