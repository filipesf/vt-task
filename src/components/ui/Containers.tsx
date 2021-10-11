import styled from 'styled-components';
import theme from 'components/ui/theme';

export const AddNewTeamForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing(3)};
`;

export const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${theme.spacing(3)};
  width: 100%;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${theme.spacing(8)};
  align-items: flex-start;
  width: 100%;
  padding: ${theme.spacing(3)} ${theme.spacing(8)};
`;
