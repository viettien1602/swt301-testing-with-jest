// DESCRIBE - kiểm tra class test nằm trong describe block
// Ví dụ bên cạnh CitiesDatabase chúng ta có thêm FoodDatabase

let cities = [];

function initializeCityDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cities.push({ name: "Hanoi" });
      cities.push({ name: "NewYork" });
      cities.push({ name: "London" });
      resolve();
    }, 100);
  });
}

function initializeFoodDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cities[0].foods = ["Pho"];
      cities[1].foods = ["Pizza"];
      cities[2].foods = ["Hambergur"];
      resolve();
    }, 100);
  });
}

function clearCityDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cities = [];
      resolve();
    }, 100);
  });
}

function isCity(name) {
  return cities.map((city) => city.name).includes(name);
}

function isValidCityFoodPair(name, food) {
  const city = cities.find((city) => city.name === name);

  if (!city || !city.foods) {
    return false;
  }

  return city.foods.includes(food);
}

beforeEach(() => {
  return initializeCityDatabase();
});

afterEach(() => {
  return clearCityDatabase();
});

test("city database has Hanoi", () => {
  expect(isCity("Hanoi")).toBeTruthy();
});

test("city database has New York", () => {
  expect(isCity("NewYork")).toBeTruthy();
});

test("city database has London", () => {
  expect(isCity("London")).toBeTruthy();
});

describe("matching cities to foods", () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test("Hanoi <3 Pho", () => {
    expect(isValidCityFoodPair("Hanoi", "Pho")).toBe(true);
  });

  test("New York <3 Pizza", () => {
    expect(isValidCityFoodPair("NewYork", "Pizza")).toBe(true);
  });

  test("London <3 Hambergur", () => {
    expect(isValidCityFoodPair("London", "Hambergur")).toBe(true);
  });
});
