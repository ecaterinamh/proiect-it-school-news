const API_KEY = "ad31281f-6a65-4ba0-8193-21b6aaba3ca5";

export function getNewsSectionsEndpoint(
  sectionId,
  currentPage = 1,
  pageSize = 21
) {
  return `https://content.guardianapis.com/search?api-key=${API_KEY}&section=${sectionId}&show-fields=all&page-size=${pageSize}&page=${currentPage}`;
}

export function getNewsDetailsEndpoint(newsId) {
  return `https://content.guardianapis.com/${newsId}?api-key=${API_KEY}&show-fields=all`;
}
