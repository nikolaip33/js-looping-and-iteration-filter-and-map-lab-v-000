// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newDrivers = driversWithRevenueOver(drivers, revenue);
  return newDrivers.map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, attr) {
  key = Object.keys(attr)[0];
  return drivers.map(function(driver) {

    console.log(`${driver[key]} and ${attr[key]}`);
    driver[key] === attr[key];
  });
}
