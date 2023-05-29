import styled from 'styled-components';

export const FeedbackButton = styled.button`
  padding: 4px 16px;
  margin: 0;
  background: ghostwhite;
  border-radius: 4px;
  border: 1px solid #6f6c6d;
  color: #6f6c6d;
  font-size: ${props => props.theme.spacing(2)};
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    border-color 0.25s ease-in-out;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  &:not(:last-child) {
    margin-right: 32px;
  }

  &:hover,
  &:focus {
    background: #d1cbcb;
    color: #080808;
    border: 1px solid #080808;
  }
`;
