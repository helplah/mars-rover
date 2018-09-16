test("Test Mars map input size", () => {
  const dimension = "5 5";
  const width = parseInt(dimension.split(" ")[0]);
  const height = parseInt(dimension.split(" ")[1]);
  expect(width > 0 && height > 0).toBe(true);
});

test("Test initial location", () => {
  const initialLocation = "1 2";
  const xCoordinate = initialLocation.split(" ")[0];
  const yCoordinate = initialLocation.split(" ")[1];
  expect(xCoordinate > 0 && yCoordinate > 0).toBe(true);
});

test("Test initial direction", () => {
  const initialDirection = "N";
  const direction = initialDirection.split(" ")[0];
  expect(typeof direction).toBe("string");
  expect(direction).toMatch(/N|E|S|W/gi);
});

test("Test commands", () => {
  const commands = " F";
  //const command = commands.split(" ")[0];
  expect(typeof commands).toBe("string");
  expect(commands).toMatch(/F|B|L|R/gi);
});
