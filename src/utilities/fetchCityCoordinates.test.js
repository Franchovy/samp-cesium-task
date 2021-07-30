import fetchCityCoordinates from './fetchCityCoordinates';
import fetchMock from 'jest-fetch-mock';

// Functionality testing

describe("Data handling based on API calls", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("get coordinates for city", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([{ lat: "41.8933203", lon: "12.4829321" }])
    );

    const response = await fetchCityCoordinates("Rome");

    expect(response.coords).toEqual({latitude: 41.8933203, longitude: 12.4829321});
  });

  it("no matches found for city", async () => {
    fetchMock.mockResponseOnce(JSON.stringify([]));

    const response = await fetchCityCoordinates("Rome");

    expect(response).toEqual({ error: { message: "no match found" } });
  });
});
