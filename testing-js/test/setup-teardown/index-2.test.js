//ONE TIME SETUP - khai báo 1 lần, dùng cho toàn bộ class test
//Chú ý afterAll() --> khi comment test vẫn đúng vì afterAll thực thi sau toàn bộ class test

let cities = [];

function initializeCityDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cities.push("Hanoi");
      cities.push("NewYork");
      cities.push("London");
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
  return cities.includes(name);
}

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  clearCityDatabase();
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

test("Has only 3 cities", () => {
  expect(cities.length).toBe(3);
});
