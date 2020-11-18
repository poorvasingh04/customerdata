import distanceFromDublinOffice from '../src/utils/DistanceCalculator';

describe('--Test DistanceCalculator--', () => {

  it('calculates distance correctly', () => {
    const distance = distanceFromDublinOffice({
      latitude: "53.521111",
      longitude: "-9.831111"
    });

    expect(distance).toEqual(237.84220525282984);
  });

});