import * as React from 'react';
import styled from 'styled-components';
import Logo from 'components/ui/Logo';
import theme from './theme';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <Logo />
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${theme.spacing(3)} ${theme.spacing(8)};
  box-shadow: 0 3px 26px 0 rgb(0 0 0 / 12%);
`;

export default Header;
