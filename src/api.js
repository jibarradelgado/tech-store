const PRODUCTS = [
  {
    id: 1,
    title: "Cellphone",
    description: "An Apple brand cell phone",
    price: 8000
  },
  {
    id: 2,
    title: "TV 65 inches",
    description: "TV 65 inches, curved Samsung",
    price: 10000
  },
  {
    id: 3,
    title: "Keyboard",
    description: "A Logitech keyboard",
    price: 900
  },
  {
    id: 4,
    title: "Webcam",
    description: "A simple HD Webcam",
    price: 400
  },
  {
    id: 5,
    title: "Fan",
    description: "A fan to keep you cool",
    price: 200
  }
];

const api = {
  search: (query) => {
    let results = PRODUCTS;

    if (query) {
      results = results.filter((product) => {
        return product.title.toLowerCase().includes(query.toLowerCase());
      });
    }
    return new Promise((resolve) => setTimeout(() => resolve(results), 1000));
  },
  order: (orderBy) => {
    let results = PRODUCTS;

    if (orderBy === "name") {
      results.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    } else {
      results.sort((a, b) => {
        return a.price - b.price;
      });
    }
    return new Promise((resolve) => setTimeout(() => resolve(results), 1000));
  }
};

export default api;
