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
  console.log(Object.keys(attr))
  return drivers.filter(function(driver) {

  });
}
