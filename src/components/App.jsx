import { useState } from 'react';
import FeadbackOptions from './FeadbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';
import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    bad: 'red',
    good: 'green',
    neutral: 'blue',
  },
  spacing(n, size) {
    return `${n * 4}${size}`;
  },
};

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, bad, neutral };

  const onLeaveFeedback = type => {
    console.log(type);
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(2);
  };

  return (
    <ThemeProvider theme={theme}>
      <Section titleText="Please leave feedback" title="h1">
        <FeadbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys(state)}
        />
      </Section>

      <Section titleText="Statistics" title="h2">
        {countTotalFeedback() ? (
          <Statistics
            totalFeadback={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
            data={state}
          />
        ) : (
          <Notification message={'There is no statistics yet'} />
        )}
      </Section>
    </ThemeProvider>
  );
}
