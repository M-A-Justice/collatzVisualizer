import React from 'react';
import RangeSlider from './RangeSlider';
import Graph from './Graph';
import MoreInfo from './MoreInfo';
import Modal from './Modal';
import IntegerSubmit from './IntegerSubmit';
import RandomButton from './RandomButton';
import {
  Container,
  InfoColumns,
  Rows,
  Header,
  SubHeader,
  InputColumns,
  OptionText,
} from '../styles/App.style';

const App = () => (
  <Container>
    <Modal />
    <InfoColumns>
      <RangeSlider />
      <Graph />
      <MoreInfo />
    </InfoColumns>
    <Rows>
      <Header>Collatz Conjecture</Header>
      <SubHeader>3x + 1</SubHeader>
      <InputColumns>
        <IntegerSubmit />
        <OptionText>or</OptionText>
        <RandomButton />
      </InputColumns>
    </Rows>
  </Container>
);

export default App;
