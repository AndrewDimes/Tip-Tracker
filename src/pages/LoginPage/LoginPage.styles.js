import styled from 'styled-components';
//flex
import { flex } from '../../styles/mixins';
//media queries
import { size } from '../../styles/mediaQueries';

export const Wrapper = styled.section`
  ${flex}
`;

export const Container = styled.div`
  ${flex}
  width: ${({ width }) => (width ? width : '')};
  position: relative;
  a {
    &:hover {
      color: ${({ theme }) => theme.colors.moneyRose};
    }
  }
`;

export const LogoContainer = styled.div`
  ${flex}
`;

export const Image = styled.img`
  height: 2rem;
`;

export const Form = styled.form`
  ${flex}
  width: 28rem;
  padding: 2rem;
  border-radius: 1rem;
  //media query
  @media (max-width: ${size.mobileM}) {
    width: 25rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  outline: none;
  background-color: white;
  &::placeholder {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
`;

export const SignUp = styled.small`
  font-size: 1rem;
  margin-right: 0.5rem;
`;
