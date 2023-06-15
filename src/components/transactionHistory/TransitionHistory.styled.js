import { styled } from 'styled-components';

export const StyledTableRow = styled.tr`
  background-color: ${({ even }) => (even === 'true' ? '#787272' : '#e0e0e0')};
`;
