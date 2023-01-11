export default function search() {
  const searchBar = document.createElement('input');
  searchBar.classList.add('search-bar');

  const button = document.createElement('button');
  button.classList.add('button');

  return { searchBar, button };
}
