import styled from 'styled-components';

export const SectionPart = styled.section`
  padding: 16px 40px;
  text-align: center;
  background: #f7f7f6;
  color: #252123;
  width: 400px;
  margin: auto;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const SectionTitle = styled.h2`
  margin: 0 0 16px 0;
  font-size: ${props => props.theme.spacing(4)};
  font-weight: 700;
  line-height: 1.5;
`;
