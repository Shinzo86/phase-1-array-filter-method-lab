// Code your solution here
function findMatching(drivers, match){
    const filterDrivers = drivers.filter(function (driver){
        return driver.toLowerCase() === match.toLowerCase()
    })
    return filterDrivers
}

function fuzzyMatch(drivers, match) {
    const filterDrivers = drivers.filter(function (driver){
        return driver.startsWith(match)
    })
    return filterDrivers
}

function matchName(drivers, match){
    const filterDrivers = drivers.filter(function (driver){
        return driver.name === match
    })
    return filterDrivers
}