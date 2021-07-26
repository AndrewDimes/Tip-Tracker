import styled from 'styled-components';
import { flex } from '../../styles/mixins';

export const Wrapper = styled.div`
  ${flex}
  width: 75rem;
  height: 80vh;
  margin-top: 8vh;
`;

export const Container = styled.div`
  ${flex}
  width: 40rem;
  width: 350px;
  height: 200px;
  border-radius: 10px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #12151f;
  }
`;
