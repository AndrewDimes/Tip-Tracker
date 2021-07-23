import styled from 'styled-components';
import { flex } from '../../styles/mixins';

export const Wrap = styled.div`
  ${flex}
  position: relative;
  width: ${({ width }) => (width ? width : '50vw')};
  height: 100vh;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '')};
`;

export const VectorImage = styled.img`
  height: 28rem;
  width: 28rem;
  position: absolute;
  top: -2rem;
  right: 20rem;
`;
