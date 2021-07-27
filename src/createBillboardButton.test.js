import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import CreateBillboardButton, {fetchCityCoordinates} from './createBillboardButton'
import fetchMock from 'jest-fetch-mock';

describe("UI functionality check", () => {
it('calls onButtonPressed once button has been clicked', () => {
  const onClick = jest.fn();
  const { getByText } = render(<CreateBillboardButton onButtonPressed={onClick}/>);

  fireEvent.click(getByText(/Enter/i));
  
  expect(onClick).toHaveBeenCalled();
});
});
describe("Data handling based on API calls", () => {

beforeEach(() => {
  fetchMock.resetMocks();
});

it("get coordinates for city", async () => {
  
  fetchMock.mockResponseOnce(JSON.stringify(
    [{"lat": "41.8933203",
    "lon": "12.4829321"}] 
  ));

  const response = await fetchCityCoordinates("Rome");

  expect(response.coordinates).toEqual((41.8933203, 12.4829321));
  expect(fetchCityCoordinates).toHaveBeenCalledTimes(1);
});

it("no matches found for city", async () => {
  
  fetchMock.mockResponseOnce(JSON.stringify(
    []
  ));

  const response = await fetchCityCoordinates("Rome");

  expect(response.error).toEqual("No city found that matches that name.");
  expect(fetchCityCoordinates).toHaveBeenCalledTimes(1);
});

});