export default class {
  constructor(root) {
    this.root = root;
  }

  //clear existing data in the table and replace with new data.

  update(data, headerColumns = []) {
    this.clear();
    this.setHeader(headerColumns);
    this.setBody(data);
  }

  // clear the data including the header
  clear() {
    this.root.innerHTML = "";
  }

  //  set the table header

  setHeader(headerColumns) {
    this.root.insertAdjacentHTML(
      "afterbegin",
      `<thead>
      <tr>
           ${headerColumns.map((text) => `<th>${text}</th>`).join("")}
       </tr>
    </thead>`
    );
  }

  // set the table body

  setBody(data) {
    const rowsHtml = data.map((row) => {
      return `<tr>
               ${row.map((text) => `<td>${text}</td>`).join("")}
              </tr>`;
    });
    this.root.insertAdjacentHTML(
      "beforeend",
      `<tbody>${rowsHtml.join("")}</tbody>`
    );
  }
}
