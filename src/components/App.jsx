import { useReducer } from 'react';
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

function reducer(prevValue, action) {
  let arrType;
  if (action.type === 'good') {
    arrType = { good: prevValue.good + action.payload };
  } else if (action.type === 'bad') {
    arrType = { bad: prevValue.bad + action.payload };
  } else {
    arrType = { neutral: prevValue.neutral + action.payload };
  }
  return { ...prevValue, ...arrType };
}

export function App() {
  const [statistic, dispatch] = useReducer(reducer, {
    good: 0,
    bad: 0,
    neutral: 0,
  });
  const { good, bad, neutral } = statistic;

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  // я зробив це спочатку через useState але потім переписав на useReduce, попрошу вас більше про нього розповісти на уроці

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(2);
  };

  return (
    <ThemeProvider theme={theme}>
      <Section titleText="Please leave feedback" title="h1">
        <FeadbackOptions
          onLeaveFeedback={el => dispatch({ type: el, payload: 1 })}
          options={Object.keys(statistic)}
        />
      </Section>

      <Section titleText="Statistics" title="h2">
        {countTotalFeedback() ? (
          <Statistics
            totalFeadback={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
            data={statistic}
          />
        ) : (
          <Notification message={'There is no statistics yet'} />
        )}
      </Section>
    </ThemeProvider>
  );
}
