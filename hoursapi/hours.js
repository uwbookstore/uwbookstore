async function fetchCSV(url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    Papa.parse(data, {
      header: true,
      complete: function (results) {
        const { data } = results;
        console.log({ data });
      },
    });
  } catch (error) {
    console.error('Error fetching CSV: ', error);
  }
}
