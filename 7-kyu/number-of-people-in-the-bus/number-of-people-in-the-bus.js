var number = function(busStops){
// firt item is the number of people who get off the bus
// second is the number of people who get on
​
let whoIsOnTheBus = 0 
​
  whoIsOnTheBus = (busStops.reduce((acc ,[on ,off]) => acc + on -off ,0))
  return whoIsOnTheBus
}