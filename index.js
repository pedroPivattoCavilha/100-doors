function getFinalOpenedDoors(numDoors) {
  let doors = [];
  
  //Creates the doors. False = closed door. -> [[0, false], [1, false], [2, false], ...]
  for(let i = 0; i < numDoors; i++) {
    doors.push([i, false]);
  }

  //Toggles the doors according to the logic proposed
  doors.forEach((element, index) => {
    for(let i = index; i < numDoors; i = i + 1 + index) {
      doors[i][1] = !doors[i][1];
    }
  })

  //Removes the closed doors
  doors = doors.filter((element) => {
    return element[1]
  })

  //Removes the open/closed status from the array
  doors.forEach((element, index) => {
    doors[index] = (element[0]+1)
  })

  return doors;
}
