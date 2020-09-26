// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { render, getByPlaceholderText, fireEvent, getByText } from "@testing-library/react";
import App from "./App";
import SmurfForm from './components/SmurfForm';


test("renders App without crashing", () => {
  render(<App />);
})


test("Tests Form", async () => {

  const { getByPlaceholderText, getByLabelText , getByText} = render(<SmurfForm />);
  const name = getByPlaceholderText("name");
  const age  = getByPlaceholderText("age");
  const height = getByPlaceholderText("height");
  
    
  fireEvent.change(firstName, {
    target: {value: "Yasmani Castaneda"},

  })


  fireEvent.change(age, {
    target: "13"},
    //Why cant I use value in this field?

  )

  fireEvent.change(height, {
    target: "7"
  })
})

  