const catalog = [
  { 
    type: 'book', 
    title: 'Medical Microbiology', 
    author: 'Jawetz', 
    year: 2022,
    url: 'https://en.wikipedia.org/wiki/Medical_microbiology'
  },
  { 
    type: 'book', 
    title: 'Pharmacology Essentials', 
    author: 'Katzung', 
    year: 2021,
    url: 'https://en.pdfdrive.to/book/essentials-of-medical-pharmacology-5'
  },
  { 
    type: 'journal', 
    title: 'Ethiopian Journal of Health Sciences', 
    author: 'Ethiopian Universities', 
    year: 2023,
    url: 'https://www.ajol.info/index.php/ejhs'
  },
  { 
    type: 'thesis', 
    title: 'Malaria Research in Ethiopia', 
    author: 'Alemayehu Tadesse', 
    year: 2020,
    url: 'https://sites.uci.edu/yanlab/ethiopiaicemr/'
  },
  { 
    type: 'eresource', 
    title: 'PubMed Database', 
    author: 'N/A', 
    year: 2025,
    url: 'https://pubmed.ncbi.nlm.nih.gov'
  },
  { 
    type: 'e-resource', 
    title: 'Google search', 
    url: 'https://www.google.com'
  },
  { 
    type: 'e-resource', 
    title: 'Youtube search', 
    url: 'https://www.youtube.com'
  }
];
function performSearch() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const type = document.getElementById('resourceType').value;
  const resultsDiv = document.getElementById('results');
  const filtered = catalog.filter(item => {
    const matchType = type === '' || item.type === type;
    const matchText =
      item.title.toLowerCase().includes(input) ||
      item.author.toLowerCase().includes(input);
    return matchType && matchText;
  });
  resultsDiv.innerHTML = '';
  if (filtered.length === 0) {
    resultsDiv.innerHTML = '<p>No results found.</p>';
    return;
  }
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'result-card';

    card.innerHTML = `
      <h3>
        <a href="${item.url}" target="_blank">
          ${item.title}
        </a>
      </h3>
      <p><strong>Author/Publisher:</strong> ${item.author}</p>
      <p><strong>Type:</strong> ${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
      <p><strong>Year:</strong> ${item.year}</p>
    `;
    resultsDiv.appendChild(card);
  });
}
