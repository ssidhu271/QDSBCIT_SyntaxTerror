// Fetches the file of Game_data.json and will append into a child which is utilized by RawDataintotable.

fetch('../archive/Game_data.json')
  .then(response => response.json())
  .then(data => {
    // loop through the array of objects
    data.forEach(item => {
      // create a new row for each object
      let row = document.createElement('tr');
      // add the ID, name, and age cells to the row
      row.innerHTML = `<td>${item.Game}</td><td>${item.Revenue}</td><td>${item.Initial_release}</td><td>${item.Publisher}</td><td>${item.Genre}</td>`;
      // append the row to the table
      document.getElementById('myTable').appendChild(row);
    });
  });