import data from "../../data/courses.json";

const numItems = data.length;
const dataTest = data[0].title;
const data2 = ["React Native", "React"];

//numbers
test("Number of items = 12", () => {
  expect(numItems).toBe(12);
});

test("Number of items to be greater than or equal to 12", () => {
  expect(numItems).toBeGreaterThanOrEqual(9);
});

//strings
test("There is a JS in this title", () => {
  expect(dataTest).toMatch(/JS/);
});

test("The title contains React", () => {
  expect(dataTest).toContain("MeteorJS");
});

//arrays
test("The list of courses contains React Native and React", () => {
    expect(["React Native", "React", "MeteorJS"]).toEqual(
    expect.arrayContaining(data2)
  );
});

//Objects
test("The first course to have a property title", () => {
    expect(data[0]).toHaveProperty("title");
});

test("The first course to have a property title and the value of 31,266", () => {
    expect(data[0]).toHaveProperty("views", "31,266");
});
