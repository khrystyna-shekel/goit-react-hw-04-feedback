import React from 'react';

export class Statistics extends React.Component {
  render() {
    // if (this.props.total === 0) {
    //   return <p>No feedback given!</p>;
    // }
    return (
      <div>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        <p>Total: {this.props.total}</p>
        <p>Positive feedback: {this.props.positivePercentage}</p>
      </div>
    );
  }
}
