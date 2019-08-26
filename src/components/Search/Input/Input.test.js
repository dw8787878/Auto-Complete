import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});


describe('Input Component', () => {
  it('should respond to change event and change the state of the Input Component', () => {
    const wrapper = shallow(<Input />);

  })
})

