function Flights() {
	function calculateNumberOfFlights(passengerQty, capacity) {
		if (passengerQty < 0 || !Number.isInteger(passengerQty)) {
			throw new Error(
				"The number of passengers must be a positive integer value"
			);
		}
		if (capacity < 0 || !Number.isInteger(capacity)) {
			throw new Error(
				"The capacity of the plane must be a positive integer value"
			);
		}

		return Math.ceil(passengerQty / capacity);
	}

	function checkAircraftRevision(distanceLimit, distancesArray) {
		const totalDistance = distancesArray.reduce(
			(total, current) => total + current
		);
		if (totalDistance <= distanceLimit / 2) {
			return "The revision needs to be done within the next 3 months";
		}
		if (totalDistance <= distanceLimit * 0.75) {
			return "The revision needs to be done within the next 2 months";
		}
		if (totalDistance <= distanceLimit) {
			return "The revision needs to be done within the next month";
		}
		throw new Error("Total distance has exceeded the distance limit");
	}

	return { calculateNumberOfFlights, checkAircraftRevision };
}

module.exports = Flights();
