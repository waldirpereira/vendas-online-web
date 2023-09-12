import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

export const TitleText = styled(Text)`
  font-size: larger;
`;

export const TitleBox = styled.div`
  margin-bottom: 16px;
`;

export const ProductInsertContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
