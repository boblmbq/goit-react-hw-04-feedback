import styled from '@emotion/styled';

const setBgColor = ({ type, theme }) => {
  switch (type) {
    case 'good':
      return theme.colors.good;
    case 'bad':
      return theme.colors.bad;
    default:
      return theme.colors.neutral;
  }
};
export const Button = styled.button`
  padding: ${props => props.theme.spacing(2, 'px')}
    ${props => props.theme.spacing(3, 'px')};
  margin-bottom: ${props => props.theme.spacing(2, 'px')};
  background-color: ${setBgColor};
  border: 1px solid;
  border-radius: ${props => props.theme.spacing(2, 'px')};
  cursor: pointer;
  transition: transform 250ms;
  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
