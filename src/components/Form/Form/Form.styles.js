import styled from 'styled-components';
import { flex } from '../../../styles/mixins';
import { size } from '../../../styles/mediaQueries';

export const Form = styled.form`
  ${flex}
  width: ${({ width }) => (width ? width : '28rem')};
  padding: 2rem;
  border-radius: 1rem;
  //media query
  @media (max-width: ${size.mobileM}) {
    width: 25rem;
  }
`;
