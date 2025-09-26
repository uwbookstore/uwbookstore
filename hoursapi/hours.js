async function fetchCSV(url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    Papa.parse(data, {
      header: true,
      complete: function (results) {
        const { data } = results;
        // console.log({ data });
        const groupByLocation = {};

        for (const item of data) {
          const location = item.location;
          if (groupByLocation[location]) {
            groupByLocation[location].push(item);
          } else {
            groupByLocation[location] = [item];
          }
        }

        const stores = groupByLocation;
        Object.keys(stores).forEach((store) => {
          console.log(store);
        });
        Object.values(stores).forEach((value) => {
          console.log(value);
        });
      },
    });
  } catch (error) {
    console.error('Error fetching CSV: ', error);
  }
}
