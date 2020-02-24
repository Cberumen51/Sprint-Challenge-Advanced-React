import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import {act} from "react-dom/test-utils"
import App from './App';
import Nav from './components/Nav'

it('renders without crashing', () => {
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