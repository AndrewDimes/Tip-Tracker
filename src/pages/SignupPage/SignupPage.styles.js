import styled from 'styled-components';
import { flex } from '../../styles/mixins';
import { size } from '../../styles/mediaQueries';
import { Header3, Header2, Header1, Paragraph } from '../../styles/type';

export const SUHeader1 = styled(Header1)`
  @media (max-width: ${size.laptop}) {
    font-size: ${2 * 1.68}rem;
  }
`;
export const SUHeader2 = styled(Header2)`
  @media (max-width: ${size.tablet}) {
    font-size: 1rem;
  }
  @media (max-width: ${size.laptopL}) {
    font-size: ${1 * 1.68}rem;
  }
`;
export const SUHeader3 = styled(Header3)``;

export const SUParagraph = styled(Paragraph)`
  margin-top: 2rem;
  font-size: 1.25rem;
`;

export const Wrap = styled.div`
  ${flex}
  position: relative;
  width: ${({ width }) => (width ? width : '')};
  height: 100vh;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '')};
  @media (max-width: ${size.laptop}) {
    ${({ noMobile }) => (noMobile ? 'display: none' : '')}

  }
  @media (max-width: ${size.tablet}) {
    ${({ noMobile }) => (noMobile ? 'display: none' : '')}
  }
`;

export const VectorImage = styled.img`
  height: 28rem;
  width: 28rem;
  position: absolute;
  top: -2rem;
  right: 20rem;
  @media (max-width: 2540px) {
    ${({ noMobile }) => (noMobile ? 'display: none' : '')}
  }
`;

export const Wrapper = styled.section`
  ${flex}
  @media (max-width: ${size.laptop}) {
    flex-direction: column;
  }
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
