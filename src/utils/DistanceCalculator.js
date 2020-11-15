import AppConstants from '../constants/AppConstants';

const distanceFromDublinOffice = (fromLocation) => {

  const userLocationInRadians = locationInRadians(fromLocation);
  const dublinOfficeLocation = locationInRadians(AppConstants.DUBLIN_OFFICE_LOCATION);

  const {
    latitude: firstLatitude,
    longitude: firstLongitude,
  } = dublinOfficeLocation;

  const {
    latitude: secondLatitude,
    longitude: secondLongitude,
  } = userLocationInRadians;

  const deltaLongitude = Math.abs(firstLongitude - secondLongitude);

  const deltaSigma = Math.acos(
    (Math.sin(firstLatitude) * Math.sin(secondLatitude)) +
    (Math.cos(firstLatitude) * Math.cos(secondLatitude) * Math.cos(deltaLongitude)) 
  );

  return AppConstants.EARTH_RADIUS * deltaSigma;
};

const locationInRadians = ({ latitude, longitude}) => {
  return {
    latitude: degreeToRadians(parseFloat(latitude)),
    longitude: degreeToRadians(parseFloat(longitude)),
  };
}

const degreeToRadians = (degrees) => {
  return degrees * AppConstants.PI/180;
}

export default distanceFromDublinOffice;