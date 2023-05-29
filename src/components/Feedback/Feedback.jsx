import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCountGoodFeedbacks = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleCountNeutralFeedbacks = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleCountBadFeedbacks = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const positiveFeedbackPercentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return this.state.good ? positiveFeedbackPercentage : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="feedback">
        <h2 className="feedback_title">Please leave feedback</h2>
        <div className="feedback_table">
          <button type="button" onClick={this.handleCountGoodFeedbacks}>
            Good
          </button>
          <button type="button" onClick={this.handleCountNeutralFeedbacks}>
            Neutral
          </button>
          <button type="button" onClick={this.handleCountBadFeedbacks}>
            Bad
          </button>
        </div>
        <h2 className="feedback_title">Statistics</h2>
        <ul>
          <li>
            Good: <span>{good}</span>
          </li>
          <li>
            Neutral: <span>{neutral}</span>
          </li>
          <li>
            Bad: <span>{bad}</span>
          </li>
          <li>
            Total: <span>{this.countTotalFeedback()}</span>
          </li>
          <li>
            Positive feedback:{' '}
            <span>{this.countPositiveFeedbackPercentage()}%</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
