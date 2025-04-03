function fetchDataPromise() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const mockData = { id: 1, name: "Sample Data", message: "This is mock data" };
          resolve(mockData);
      }, 2000);
  });
}

export default fetchDataPromise;

fetchDataPromise()
  .then(data => {
      console.log("Mock Data Received:", data);
  })
  .catch(error => {
      console.error("Error fetching data:", error);
  });
