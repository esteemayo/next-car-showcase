import axios from 'axios';

export const fetchCars = async () => {
  const headers = {
    'X-RapidAPI-Key': '6ceafa54a4mshb8e5c3f1600592bp157895jsn05473b1433b6',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const res = await axios.get(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
      headers,
    }
  );

  return res.data;
};
