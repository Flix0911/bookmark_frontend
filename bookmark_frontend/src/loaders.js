const URL = process.env.REACT_APP_URL;

export const allOfTheBooksLoader = async () => {
    const response = await fetch(`${URL}/bookmarks`);
    const allOfTheBooks = await response.json();
    return allOfTheBooks;
}

export const bookLoader = async ({params}) => {
    const response = await fetch(`${URL}/bookmarks/${params.id}`);
    const book = await response.json();
    return book;
}