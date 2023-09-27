import SVGLogo from '../icons/SVGLogo';
import { CompanyName, ContainerLogoName, ContainerMenu, LogoMenu } from './menu.style';

const Menu = () => {
  return (
    <ContainerMenu>
      <ContainerLogoName>
        <LogoMenu></LogoMenu>
        <CompanyName>Online sales</CompanyName>
      </ContainerLogoName>
    </ContainerMenu>
  );
};

export default Menu;
