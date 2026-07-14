let allPDFs = [];

async function loadPDFs() {
  const response = await fetch("data.json");
  allPDFs = await response.json();
  displayPDFs(allPDFs);
}

function displayPDFs(pdfs) {
  const container = document.getElementById("pdf-list");
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

document.addEventListener("input", function(e) {
  if (e.target.id === "search") {
    const text = e.target.value.toLowerCase();

    const result = allPDFs.filter(pdf =>
      pdf.title.toLowerCase().includes(text)
    );

    displayPDFs(result);
  }
});

loadPDFs();
document.getElementById("categoryFilter").addEventListener("change", function () {

    const category = this.value;

    if (category === "All") {
        displayPDFs(allPDFs);
    } else {
        const filtered = allPDFs.filter(pdf => pdf.category === category);
        displayPDFs(filtered);
    }

});
