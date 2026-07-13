async function loadPDFs() {
  const response = await fetch("data.json");
  const pdfs = await response.json();

  const container = document.getElementById("pdf-list");
  if (!container) return;

  container.innerHTML = "";

  pdfs.forEach(pdf => {
    container.innerHTML += `
      <div class="card">
        <h3>${pdf.title}</h3>
        <p>Category: ${pdf.category}</p>
        <a href="${pdf.view}" target="_blank">
          <button>View PDF</button>
        </a>
        <a href="${pdf.download}">
          <button>Download</button>
        </a>
      </div>
    `;
  });
}

loadPDFs();
