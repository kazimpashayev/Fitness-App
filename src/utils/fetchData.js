export const exerciseOptions = {
  method: 'GET',
  params: { limit: '10' },
  headers: {
    'X-RapidAPI-Key': 'de3d3f2136msh3314e5f838fa39bp149f84jsn3f632aa8e8cb',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'de3d3f2136msh3314e5f838fa39bp149f84jsn3f632aa8e8cb',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
