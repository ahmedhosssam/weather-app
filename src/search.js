export default function search() {
  const form = document.createElement('form');
  const searchBar = document.createElement('input');
  searchBar.classList.add('search-bar');
  searchBar.placeholder = 'Search For City';

  return { searchBar };
}
