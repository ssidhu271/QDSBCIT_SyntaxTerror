function graphRevenue() {
    getData();
    async function getData() {
      const response = await fetch('./archive/Game_data_Top5.json');
      const data = await response.json();
      //console.log(data);
      //length = data.data.length;
      //console.log(data.length);
      labels = [];
      values = [];
      for (i = 0; i < data.length; i++) {
       
         labels.push(data[i].Game);
         values.push(data[i].Revenue);
         
      }
      console.log(data[4].Revenue);
      new Chart(document.getElementById("bar-chart"), {
         type: 'bar',
         data: {
            labels: labels,
            datasets: [
              {
                label: "Population (millions)",
                backgroundColor: [
                  "#3a90cd",
                  "#8e5ea2",
                  "#3bba9f",
                  "#e8c3b9",
                  "#c45850",
                  "#8e5ea2",
                  "#40E0D0",
                ],
                data: values,
              },
            ],
          },
          options: {
            legend: { display: false },
            title: {
              display: true,
              text: "U.S population",
            },
            scales: {
              yAxes: [
                {
                  display: true,
                  ticks: {
                    suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                  
                  },
                },
              ],
            },
          },
        });
      }
}

function graphGenre() {
    getData();
    async function getData() {
      const response = await fetch('./archive/Game_data.json');
      const data = await response.json();
      //console.log(data);
      //length = data.data.length;
      //console.log(data.length);
      labels = [];
      values = [];

      for (i = 0; i < data.length; i++) {
         // Check to see if Genre exists within labels array
         if (!labels.includes(data[i].Genre)) {
            labels.push(data[i].Genre);
            let sum = data[i].Revenue;
            // Add all similar genre revenues together
            for (j = 0; j < data.length; j++) {
               if (data[i].Genre == data[j].Genre) {
                  sum += data[i].Revenue;
               }
            }
            values.push(sum);
         }
      }

      // sort array desceneding
      for (i = 0; i < values.length; i++) {
         for (j = i + 1; j < values.length; j++) {
            if (values[i] < values[j]) {
               let tempDate = labels[i];
               let tempVal = values[i];
               labels[i] = labels[j];
               labels[j] = tempDate;
               values[i] = values[j];
               values[j] = tempVal;
            }
         }
      }

      
      //console.log(data[4].Revenue);
      new Chart(document.getElementById("bar-chart"), {
         type: 'bar',
         data: {
            labels: labels,
            datasets: [
               {
                  label: "Revenue (millions)",
                  backgroundColor: ["#3a90cd",
                     "#8e5ea2",
                     "#3bba9f",
                     "#e8c3b9",
                     "#c45850",
                     "#CD9C5C",
                     "#40E0D0"],
                  data: values
               }
            ]
         },
         options: {
            legend: { display: false },
            title: {
               display: true,
               text: 'Genre Sort'
            }
         }
      });
   }
}

function graphYear() {
    getData();
    async function getData() {
      const response = await fetch('./archive/Game_data_nomonth.json');
      const data = await response.json();
      //console.log(data);
      //length = data.data.length;
      //console.log(data.length);
      labels = [];
      values = [];

      for (i = 0; i < data.length; i++) {
         // Check to see if entry exists within labels array
         if (!labels.includes(data[i].Initial_release)) {
            labels.push(data[i].Initial_release);
            let sum = data[i].Revenue;
            // Add all similar revenues together
            for (j = 0; j < data.length; j++) {
               if (data[i].Initial_release == data[j].Initial_release) {
                  sum += data[i].Revenue;
               }
            }
            values.push(sum);
         }
      }

      // sort array desceneding
      for (i = 0; i < values.length; i++) {
         for (j = i + 1; j < values.length; j++) {
            if (values[i] < values[j]) {
               let tempDate = labels[i];
               let tempVal = values[i];
               labels[i] = labels[j];
               labels[j] = tempDate;
               values[i] = values[j];
               values[j] = tempVal;
            }
         }
      }

      
      //console.log(data[4].Revenue);
      new Chart(document.getElementById("bar-chart"), {
         type: 'bar',
         data: {
            labels: labels,
            datasets: [
               {
                  label: "Revenue (millions)",
                  backgroundColor: ["#3a90cd",
                     "#8e5ea2",
                     "#3bba9f",
                     "#e8c3b9",
                     "#c45850",
                     "#CD9C5C",
                     "#40E0D0"],
                  data: values
               }
            ]
         },
         options: {
            legend: { display: false },
            title: {
               display: true,
               text: 'Initial Release Date Sort'
            }
         }
      });
   }
}