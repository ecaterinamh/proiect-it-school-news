export function getNewsList(apiResponse) {
  if (!apiResponse || !apiResponse.response) {
    return [];
  }

  const newsListItems = apiResponse.response.results;

  const newsItemDetails = newsListItems.map((news) => {
    return {
      id: news.id,
      thumbnail: news.fields.thumbnail,
      title: news.fields.headline,
      description: news.fields.trailText,
    };
  });

  return newsItemDetails;
}

export function getNewsDetails(apiResponse) {
  if (!apiResponse || !apiResponse.response) {
    return [];
  }

  const newsItemDetails = apiResponse.response.content;

  const newsDetailsList = {
    date: newsItemDetails.webPublicationDate,
    title: newsItemDetails.fields.headline,
    description: newsItemDetails.fields.trailText,
    image: newsItemDetails.fields.main,
    content: newsItemDetails.fields.body,
    author: newsItemDetails.fields.byline,
    thumbnail: newsItemDetails.fields.thumbnail,
  };

  return newsDetailsList;
}
