
import expect from 'expect';
import React from 'react';
import Header from 'components/Header';

const { mount } = enzyme;

function setup() {
  const enzymeWrapper = mount(
    <Header />
  )

  return {
    enzymeWrapper
  }
}

describe('<Header />', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('header').length).toExist();
  });
});


