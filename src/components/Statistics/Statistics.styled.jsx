import styled from 'styled-components';

export const StatisticsPart = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  font-size: ${props => props.theme.spacing(3)};
  font-weight: 500;
  line-height: 1.5;
`;
