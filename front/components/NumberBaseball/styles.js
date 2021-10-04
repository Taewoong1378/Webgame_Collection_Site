import styled from 'styled-components';
import { Button } from 'antd';

// eslint-disable-next-line import/prefer-default-export
export const Div = styled.div`
  font-family: 'Jua', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: -50px;
  padding: 20px;
`;

export const ButtonWrapper = styled(Button)`
  margin-top: 10px;
`;
