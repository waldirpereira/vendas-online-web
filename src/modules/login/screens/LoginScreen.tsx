import axios from 'axios';
import { useState } from 'react';

import Button from '../../../shared/buttons/Button';
import SVGLogo from '../../../shared/icons/SVGLogo';
import Input from '../../../shared/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const returnObject = await axios({
      method: 'post',
      url: 'http://localhost:8080/auth',
      data: {
        email,
        password,
      },
    })
      .then((result) => {
        alert(`Fez login. Access token: ${result.data.accessToken}`);
        return result.data;
      })
      .catch(() => {
        alert('Authentication failed!');
      });
    console.log('returnObject', returnObject);
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo></SVGLogo>
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="E-MAIL:" margin="16px 0px 0px" onChange={handleEmail} value={email}></Input>
          <Input
            title="PASSWORD:"
            margin="16px 0px 0px"
            type="password"
            onChange={handlePassword}
            value={password}
          ></Input>
          <Button type="primary" margin="32px 0px 16px 0px" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
