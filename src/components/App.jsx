import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onBtnClick = e => {
    const name = e.target.name;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    const percent = (good / countTotalFeedback()) * 100;
    return percent.toFixed(0) + '%';
  };

  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPerc = countPositiveFeedbackPercentage();

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
        onLeaveFeedback={onBtnClick}
      />
      {countTotalFeedback() === 0 ? (
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
};
