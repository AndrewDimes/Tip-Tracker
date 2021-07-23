import styled from 'styled-components';

export const Header1 = styled.h1`
  font-size: ${({ theme, fontSize }) =>
    fontSize ? fontSize : theme.fontSize.hero};
  color: ${({ color }) => (color ? color : '#ffffff')};
  font-weight: ${({ weight }) => (weight ? weight : '')};
  text-align: ${({ align }) => (align ? align : '')};
  margin: 0rem;
`;
export const Header2 = styled.h2`
  font-size: ${({ theme, fontSize }) =>
    fontSize ? fontSize : theme.fontSize.header};
  color: ${({ color }) => (color ? color : '#ffffff')};
  font-weight: ${({ weight }) => (weight ? weight : '')};
  text-align: ${({ align }) => (align ? align : '')};
  margin: 0rem;
`;
export const Header3 = styled.h3`
  font-size: ${({ theme, fontSize }) =>
    fontSize ? fontSize : theme.fontSize.subHeader};
  color: ${({ color }) => (color ? color : '#ffffff')};
  font-weight: ${({ weight }) => (weight ? weight : '')};
  text-align: ${({ align }) => (align ? align : '')};
  margin: 0rem;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme, fontSize }) =>
    fontSize ? fontSize : theme.fontSize.body};
  color: ${({ color }) => (color ? color : '#ffffff')};
  font-weight: ${({ weight }) => (weight ? weight : '')};
  text-align: ${({ align }) => (align ? align : '')};
  margin: 0rem;
`;

export const Small = styled.small`
  font-size: ${({ theme, fontSize }) =>
    fontSize ? fontSize : theme.fontSize.small};
  color: ${({ color }) => (color ? color : '#ffffff')};
  font-weight: ${({ weight }) => (weight ? weight : '')};
  text-align: ${({ align }) => (align ? align : '')};
  margin: 0rem;
`;
