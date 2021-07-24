import styled from 'styled-components';
import { flex } from '../../styles/mixins';
import { size } from '../../styles/mediaQueries';

export const Wrapper = styled.div`
  ${flex}
  margin-bottom: 1rem;
  @media (max-width: ${size.mobileL}) {
    width: 100vw;
    padding: 0rem 2rem;
  }
`;

export const Delete = styled.div`
  background-color: crimson;
  border-radius: 10px;
  height: 10rem;
  width: 7.75rem;
  ${flex};
  margin-left: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.moneyRose};
  }
  @media (max-width: ${size.mobileL}) {
    width: 25rem;
    height: calc(10rem / 1.2);
    width: calc(7.75rem / 1.2);
  }
`;

export const JobContainer = styled.div`
  ${flex}
  width: 30rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  transform-origin: center;
  ${Delete}:hover & {
    background-color: red;
  }
  &:hover {
    background-color: #12151f;
  }
  @media (max-width: ${size.mobileL}) {
    width: 25rem;
    height: calc(10rem / 1.2);
    width: calc(30rem / 1.2);
  }
`;

export const Icon = styled.div`
  color: #fff;
  height: 24px;
  letter-spacing: 0.1rem;
  transition: 0.2s ease;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  transform-origin: center;
  transition: all 0.2s ease;

  ${JobContainer}:hover & {
    color: ${({ theme }) => theme.colors.tipGreen};
  }
`;

export const JobDetails = styled.div`
  ${flex};
  width: 100%;
  height: 60%;
`;

export const Detail = styled.div``;
