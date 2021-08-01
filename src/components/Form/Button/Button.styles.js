import styled from 'styled-components';

export const Button = styled.button`
  width: ${({ width }) => (width ? width : '100%')};
  padding: 1rem 3rem;
  border: none;
  background-color: ${({ theme, primary, color }) =>
    primary ? theme.colors.primary : color};
  border-radius: 10px;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAlt};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.primaryAlt};
    border: 1px solid white;
  }
`;
