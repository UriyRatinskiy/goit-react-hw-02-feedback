import { PropTypes } from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedback_table">
      {options.map(option => {
        return (
          <FeedbackButton
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackButton>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
