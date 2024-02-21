const URL = process.env.REACT_APP_URL;

export const allOfTheBooksLoader = async () => {
  // changed the response URL from /bookmarks to /bookmark 
  const response = await fetch(`${URL}/bookmark`);
  const allOfTheBooks = await response.json();
  console.log(allOfTheBooks)
  return allOfTheBooks;
};

export const bookLoader = async ({ params }) => {
  // changed the same / route as above to be able to render the show page
  const response = await fetch(`${URL}/bookmark/${params.id}`);
  const book = await response.json();
  return book;
};
