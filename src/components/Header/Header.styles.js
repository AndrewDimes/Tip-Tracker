import styled from 'styled-components';
import { flex } from '../../styles/mixins';
import { size } from '../../styles/mediaQueries';

export const Wrapper = styled.section`
  width: 100vw;
  height: 10vh;
  ${flex};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: ${({ showHeader }) =>
    showHeader ? 'rgba(8, 10, 17, 0.95)' : 'rgba(8, 10, 17, 0)'};
  transition: background-color 0.5s ease;
`;

export const HeaderContainer = styled.div`
  width: 400px;
  ${flex}
  @media (max-width: ${size.mobileL}) {
    width: 300px;
  }
`;

export const Button = styled.div`
  padding: 0.5rem 0rem;
  font-size: 1.5rem;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.3s ease;
  background-color: transparent;
  &:hover {
    color: ${({ theme }) => theme.colors.moneyRose};
  }
`;
