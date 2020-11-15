const convertToJSON = (data) => {
  return data.split('\n').map(entry => {
    return JSON.parse(entry);
  });
  
}

export default convertToJSON;