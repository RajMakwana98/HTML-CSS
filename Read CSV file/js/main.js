import TableCSV from "./TableCSV.js";

const tableRoot = document.querySelector("#csvRoot");
const csvFile = document.querySelector("#csvFile");
const tableCSV = new TableCSV(tableRoot);

csvFile.addEventListener("change", (e) => {
  Papa.parse(csvFile.files[0], {
    delimiter: ",",
    skipEmptyLines: true,
    complete: (results) => {
      tableCSV.update(results.data.slice(1), results.data[0]);
    },
  });
});
