const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation
  })
  return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation
  })
  return result
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
    return journey.transport === transport
  })
  return result
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return journey.distance >= minDistance
  })
  return result
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal += journey.distance
  }, 0)
  return result
};

// for (const dinosaur of this.dinosaurs) {
//     if (numberOfDinosaursByDiet[dinosaur.diet]) {
//       numberOfDinosaursByDiet[dinosaur.diet] += 1;
//     }
//     else {
//       numberOfDinosaursByDiet[dinosaur.diet] = 1;
//     }
//   }
//
//   return numberOfDinosaursByDiet;
// }

Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqueTransport = {};

  for (const journey of this.journeys) {
    if (uniqueTransport[journey.transport]) {
      uniqueTransport[journey.transport] += 1;
    }
    else {
      uniqueTransport[journey.transport] = 1
    }
  }
  return Object.keys(uniqueTransport)
};


module.exports = Traveller;
