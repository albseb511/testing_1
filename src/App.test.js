import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import {store} from "./Redux/store"
import {Provider} from "react-redux"

beforeEach(() => {
  render(<Provider store={store}><App /></Provider>);
})

afterEach(()=>cleanup())

test('renders Count', () => {
  const linkElement = screen.getByText(/Count/i);
  expect(linkElement).toBeInTheDocument();
});

it("should have add and reduce button, and default value of Count is 0",()=>{
  const { getAllByTestId, getByTestId } = screen
  const [add,reduce] = getAllByTestId('button')
  const counter = getByTestId('counter')
  expect(counter).toHaveTextContent('0')
  expect(add).toHaveTextContent('ADD')
  expect(reduce).toHaveTextContent('REDUCE')
})


it("on click of add count should increment by 1",()=>{
  const { getByTestId,getAllByTestId} = screen
  const [add,reduce] = getAllByTestId('button')
  const counter = getByTestId('counter')

  fireEvent.click(add)
  expect(counter).toHaveTextContent('1')

})
it("on click reduce should decrement by 1",()=>{
  const { getByTestId,getAllByTestId} = screen
  const [add,reduce] = getAllByTestId('button')
  const counter = getByTestId('counter')

  fireEvent.click(reduce)
  expect(counter).toHaveTextContent('0')
})

it("on add and remove buttons should work",()=>{
  const { getByTestId,getAllByTestId} = screen
  const [add,reduce] = getAllByTestId('button')
  const counter = getByTestId('counter')

  fireEvent.click(add)
  fireEvent.click(add)
  fireEvent.click(add)
  fireEvent.click(add)
  fireEvent.click(reduce)
  expect(counter).toHaveTextContent('3')

  fireEvent.click(reduce)
  fireEvent.click(reduce)
  fireEvent.click(reduce)

  expect(counter).toHaveTextContent('0')

  fireEvent.click(reduce)

  expect(counter).toHaveTextContent('-1')

})