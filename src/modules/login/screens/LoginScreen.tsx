import Button from '../../../shared/buttons/button';
import Input from '../../../shared/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png"></LogoImage>
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="USER:" margin="16px 0px 0px"></Input>
          <Input title="PASSWORD:" margin="16px 0px 0px"></Input>
          <Button type="primary" margin="32px 0px 16px 0px">
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
