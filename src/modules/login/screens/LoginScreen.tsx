import { useState } from 'react';

import Button from '../../../shared/components/buttons/Button';
import SVGLogo from '../../../shared/components/icons/SVGLogo';
import Input from '../../../shared/components/inputs/input/Input';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';
import { UserType } from '../types/UserType';

const LoginScreen = () => {
  const { accessToken, setAccessToken } = useGlobalContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { postRequest, loading } = useRequests();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const user = await postRequest<UserType>('http://localhost:8080/auth', {
      email,
      password,
    });

    setAccessToken(user?.accessToken || '');
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo></SVGLogo>
          <TitleLogin level={2} type="secondary">
            LOGIN {accessToken}
          </TitleLogin>
          <Input title="E-MAIL:" margin="16px 0px 0px" onChange={handleEmail} value={email}></Input>
          <Input
            title="PASSWORD:"
            margin="16px 0px 0px"
            type="password"
            onChange={handlePassword}
            value={password}
          ></Input>
          <Button type="primary" margin="32px 0px 16px 0px" onClick={handleLogin} loading={loading}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
