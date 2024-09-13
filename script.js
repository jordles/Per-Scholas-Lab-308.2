
/* -------------------------------------------------------------------------- */
/*                            PART 1: GROWING PAINS                           */
/* -------------------------------------------------------------------------- */
console.group("Part 1: Growing Pains");
/* Using this information, your objectives are to:
Predict the plant growth after a specific number of weeks.
Implement control flow to make decisions on whether the plants should be:
Pruned, to stop them from exceeding the capacity of the garden.
This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
Monitored, if they are growing at an acceptable rate.
This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
Planted, if there is room to plant more plants.
This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs. */

//We are under the assumption that the plants only double at the end of the week. 


const pi = 3.1415;
let radius = 5;
let area = Math.floor(pi * radius * radius);
const maxGardenArea = Math.floor(area * 0.8); //before we start pruning
let weeks = 0;
const spacePerPlant= 0.8;
const plantRate = 2;
let plants = 20 * Math.pow(plantRate, weeks);
let plantArea = plants * spacePerPlant;
let maxPlants = (area * 0.8) / spacePerPlant; //plants * space per plant == area of garden (80% of that area, to take account of pruning)

console.log(`The max plants we can have are: ${maxPlants}`);

console.group(`Week ${weeks + 1}`);
if( plantArea > area * 0.8){
  console.log("Pruned - exceeding the capacity of the garden")
}
else if(plantArea >= area * 0.5 && plantArea <= area * 0.8){
  console.log("Monitored - growing at an acceptable rate")
}
else{
  console.log("Planted - room to plant more plants")
}
console.log(`Total Plants: ${plants}`);
console.log(`Space needed for plants: ${plantArea} square meters`);
console.log(`Max Garden Area: ${maxGardenArea} square meters`);
console.log(`Max plants we can have: ${maxPlants}`);
console.groupEnd();

weeks = 1;
plants = (20 * Math.pow(plantRate, weeks))
plantArea = plants * spacePerPlant;
console.group(`Week ${weeks + 1}`);
if( plantArea > area * 0.8){
  console.log("Pruned - exceeding the capacity of the garden")
}
else if(plantArea >= area * 0.5 && plantArea <= area * 0.8){
  console.log("Monitored - growing at an acceptable rate")
}
else{
  console.log("Planted - room to plant more plants")
}
console.log(`Total Plants: ${plants}`);
console.log(`Space needed for plants: ${plantArea} square meters`);
console.log(`Max Garden Area: ${maxGardenArea} square meters`);
console.log(`Max plants we can have: ${maxPlants}`);
console.groupEnd();

weeks = 2;
plants = (20 * Math.pow(plantRate, weeks))
plantArea = plants * spacePerPlant;
console.group(`Week ${weeks + 1}`);
if( plantArea > area * 0.8){
  console.log("Pruned - exceeding the capacity of the garden")
}
else if(plantArea >= area * 0.5 && plantArea <= area * 0.8){
  console.log("Monitored - growing at an acceptable rate")
}
else{
  console.log("Planted - room to plant more plants")
}
console.log(`Total Plants: ${plants}`);
console.log(`Space needed for plants: ${plantArea} square meters`);
console.log(`Max Garden Area: ${maxGardenArea} square meters`);
console.log(`Max plants we can have: ${maxPlants}`);
console.groupEnd();
console.groupEnd();
/* -------------------------------------------------------------------------- */
/*                           PART 2: THINKING BIGGER                          */
/* -------------------------------------------------------------------------- */

console.group("Part 2: Thinking Bigger");
/* Using the logic you have already created, determine:
The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
If the space remained circular, what would be the radius of this expanded garden? */
weeks = 9;
plants = (100 * Math.pow(plantRate, weeks))
plantArea = plants * spacePerPlant;
console.log(`Max Plants we can have: ${maxPlants}, Current Plant Count: ${plants}`);
console.log(`Space needed for plants: ${plantArea} square meters`);
/* area = plantArea; */

let newArea = plantArea;
radius = Math.floor(Math.sqrt(newArea/pi));
console.log(`Our new area would need to be ${newArea} square meters compared to the original area of ${area} square meters` );
console.log(`Our new radius is ${radius} meters`);
console.log(`The amount of additional space/area we would need is ${newArea - area} square meters`);
console.groupEnd();


/* -------------------------------------------------------------------------- */
/*                         PART 3: ERRORS IN JUDGEMENT                        */
/* -------------------------------------------------------------------------- */

console.group("Part 3: Errors in Judgement");
/* The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message. */


weeks = 0;
plants = (100 * Math.pow(plantRate, weeks));
plantArea = plants * spacePerPlant;


try{
  if( plantArea > area * 0.8){
    console.log("Pruned - exceeding the capacity of the garden")
    throw "Error: Please Prune - TOO MANY PLANTSS!!!!!";
  }
  else if(plantArea >= area * 0.5 && plantArea <= area * 0.8){
    console.log("Monitored - growing at an acceptable rate")
  }
  else{
    console.log("Planted - room to plant more plants")
  }
}
catch(err){
  console.log(err);
}
console.log(`Max Plants the area can hold: ${maxPlants}, Current Plant Count: ${plants}`);
