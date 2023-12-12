import React from 'react';
// import { nanoid } from 'nanoid';
import { BtnWrapper, StyledBtn } from './FeedbackOptions.styled';

export class FeedbackOptions extends React.Component {
  render() {
    return (
      <BtnWrapper>
        {this.props.options.map(option => (
          <StyledBtn
            key={option.toLowerCase()}
            name={option.toLowerCase()}
            onClick={this.props.onLeaveFeedback}
          >
            {option}
          </StyledBtn>
        ))}
      </BtnWrapper>
    );
  }
}
