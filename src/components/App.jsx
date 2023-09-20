import { Component } from 'react';
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

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = elem => {
    return this.setState(prev => ({
      [elem]: prev[elem] + 1,
    }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item);
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return `${Math.floor((good / this.countTotalFeedback()) * 100)}%`;
  };

  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Section titleText="Please leave feedback" title="h1">
            <FeadbackOptions
              onLeaveFeedback={this.onLeaveFeedback}
              options={Object.keys(this.state)}
            />
          </Section>

          <Section titleText="Statistics" title="h2">
            {this.countTotalFeedback() ? (
              <Statistics
                totalFeadback={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
                data={this.state}
              />
            ) : (
              <Notification message={'There is no statistics yet'} />
            )}
          </Section>
        </ThemeProvider>
      </>
    );
  }
}
