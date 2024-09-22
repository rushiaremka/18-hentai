document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    };
  });
  searchInput.addEventListener('input', handleSearch);

  function handleSearch() {
    const query = searchInput.value.trim();
    if(query) {
      console.log('Searching for ${query}');
    };
  };
});

document.addEventListener('DOMContentLoaded', function() {
  const containers = document.querySelectorAll('.hentaicontainer2');
  const scrollLefts = document.querySelectorAll('.scroll-left');
  const scrollRights = document.querySelectorAll('.scroll-right');
  const scrollAmount = 200;

  containers.forEach((container, index) => {
    const scrollLeft = scrollLefts[index];
    const scrollRight = scrollRights[index];

    container.addEventListener('wheel', (event) => {
      event.preventDefault();
      container.scrollLeft += event.deltaY * 2;
    });

    scrollLeft.addEventListener('click', () => {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });

    scrollRight.addEventListener('click', () => {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  });
});
