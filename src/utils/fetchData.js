export const exerciseOptions = {
  method: 'GET',
  params: { limit: '10' },
  headers: {
    'X-RapidAPI-Key': '889a5e324emsh034dcc74403f406p1bf523jsn93cfe6475a4b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '889a5e324emsh034dcc74403f406p1bf523jsn93cfe6475a4b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
