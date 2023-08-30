import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/Button';
import { RoutesEnum } from '../../../shared/enums/routes.enum';
import { ButtonsContainer, PageNotFoundContainer } from '../styles/pageNotFound.styles';

const PageNotFoundButtons = () => {
  const navigate = useNavigate();

  const handleGoToLogin = (): void => navigate(RoutesEnum.LOGIN);
  const handleGoToFirstScreen = (): void => navigate(RoutesEnum.ROOT);

  return (
    <ButtonsContainer>
      <Button type="default" onClick={handleGoToLogin}>
        Login page
      </Button>
      <Button type="primary" onClick={handleGoToFirstScreen}>
        Home page
      </Button>
    </ButtonsContainer>
  );
};

const PageNotFound = () => {
  return (
    <PageNotFoundContainer>
      <Result
        status="404"
        title="404"
        subTitle="Sorry! The page you are trying to reach does not exist."
        extra={<PageNotFoundButtons />}
      />
    </PageNotFoundContainer>
  );
};

export default PageNotFound;
