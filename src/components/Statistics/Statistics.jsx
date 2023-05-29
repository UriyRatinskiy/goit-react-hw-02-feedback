import { PropTypes } from 'prop-types';
import { StatisticsPart, StatisticsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsPart>
      <StatisticsItem>
        Good: <span>{good}</span>
      </StatisticsItem>
      <StatisticsItem>
        Neutral: <span>{neutral}</span>
      </StatisticsItem>
      <StatisticsItem>
        Bad: <span>{bad}</span>
      </StatisticsItem>
      <StatisticsItem>
        Total: <span>{total}</span>
      </StatisticsItem>
      <StatisticsItem>
        Positive feedback: <span>{positivePercentage}%</span>
      </StatisticsItem>
    </StatisticsPart>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
