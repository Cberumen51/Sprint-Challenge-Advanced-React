import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import {act} from "react-dom/test-utils"
import App from './App';
import Nav from './components/Nav'


it('renders without crashing', () => {
<<<<<<< HEAD
 render(<App />);
});

it('finds matching text', () => {
  const { getByText } = render(<App />);
  getByText(/Players/);
});



it("changes value when clicked", () => {
  const onChange = jest.fn();
  act(() => {
    render(<Nav onChange={onChange} />);
  });
  const div = document.querySelector("[data-testid=toggle]");
  expect(div).toBe("toggle");

  act(() => {
    div.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(div).toBe("toggle toggled");

  expect(onChange).toHaveBeenCalledTimes(6);
  expect(div).toBe("toggle");
});
=======
  ReactDOM.render(<App />, div);
});

describe('testing sum', () => {
  it('should add two numbers together', () => {
    let expected = 3;
    let firstNum = 1;
    let secondNum = 2;
  
    let acutal= sum(firstNum, secondNum);
  
    expected(acutal).ToBe(expected)
  })


})
>>>>>>> 547343374cf2ea2586aee8d2348dec41d09eaf6c
