import styled from 'styled-components';
import { flex } from '../../styles/mixins';

export const Container = styled.div`
  ${flex}
  width: 100%;
`;

export const Form = styled.form`
  ${flex}
  width: ${({ width }) => (width ? width : '28rem')};
  padding: 2rem;
  border-radius: 1rem;
`;
