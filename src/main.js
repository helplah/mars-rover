/* eslint-disable no-console */

const { getUserInput, cleanUp } = require("./utils/readline-helper");

const main = async () => {
  const coordinatesRegex = /[1-9]/g;
  const charRegex = /[a-z]/gi;
  let flag = true;

  const validateCoordinates = coordinates => {
    const xCoordinate = coordinates.match(coordinatesRegex)[0];
    const yCoordinate = coordinates.match(coordinatesRegex)[1];

    if (xCoordinate !== null && yCoordinate !== null) {
      return { x: xCoordinate, y: yCoordinate };
    }
  };

  const validateChar = char => {

  };

  do {
    const dimension = await getUserInput(
      "Specify the size of the Mars map (e.g. 5 5):"
    );
    const coordinate = validateCoordinates(dimension);

    if (coordinate.x != null && coordinate.y != null) {
      console.log("the size of map is ", coordinate.x, coordinate.y);
      flag = false;
    }
  } while (flag);

  do {
    flag = true;
    const initialLocation = await getUserInput(
      "Specify the initial coordinates of the mars rover (e.g. 1 2):"
    );
    const location = validateCoordinates(initialLocation);

    if (location.x != null && location.y != null) {
      console.log("the initial location is ", location);
      flag = false;
    }
  } while (flag);

  const initialDirection = await getUserInput(
    "Specify the initial direction of the mars rover (e.g. N or S or W or E):"
  );

  const direction = initialDirection.split(" ")[0];

  console.log("the initial direction is ", initialDirection);

  const commands = await getUserInput(
    "Specify the commands to be sent for the mars rover (e.g. FBLR):"
  );
  console.log("the commands are ", commands);

  // TODO: include the functions that you've implemented for this kata

  console.log(
    "The final coordinates of the mars rover is: <replace with the output of your program>"
  );

  cleanUp();
};

main();
