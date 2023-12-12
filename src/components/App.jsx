import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = e => {
    const name = e.target.name;

    switch (name) {
      case 'good':
        this.setState(prevState => ({ good: this.state.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: this.state.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: this.state.bad + 1 }));
        break;
      default:
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    const percent = (this.state.good / this.countTotalFeedback()) * 100;
    return percent.toFixed(0) + '%';
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPerc = this.countPositiveFeedbackPercentage();
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '10px 50px',
          flexDirection: 'column',
          fontSize: 28,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={this.onBtnClick}
        />
        {this.countTotalFeedback() === 0 ? (
          <Notification message="No feedback given!" />
        ) : (
          <div>
            <Section title="Statistics" />
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPerc}
            />
          </div>
        )}
      </div>
    );
  }
}
