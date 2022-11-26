import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";
import { useState } from "react";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Sua senha deve conter no mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {

  const [disable, setDisable] = useState(false);

  const {
    control,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  if (isValid === true) {
    console.log("entrou")
  } else {
    console.log("não entrou")
  }

  function handleLogin() {
    setDisable(true);
  }


  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="E-mail"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          <Button disabled={disable} title="Entrar" onClick={() => handleLogin()}/>
          </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
