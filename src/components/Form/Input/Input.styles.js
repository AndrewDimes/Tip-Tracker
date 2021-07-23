import styled from 'styled-components';

export const Input = styled.input`
  width: ${({ width }) => (width ? width : '100%')};
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
