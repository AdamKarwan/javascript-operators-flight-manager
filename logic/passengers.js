function Passengers() {
	function checkFlightCapacity(capacity, passengersArray) {
		const totalPassengers = passengersArray.reduce(
			(total, current) => total + current
		);
		if (totalPassengers > capacity) {
			throw new Error("The capacity of the plane is exceeded");
		}
		return totalPassengers;
	}

	function distributeAllSeatsToAllPassengers(
		vipPassengers,
		regularPassengers,
		flightQty,
		businessSeats,
		economySeats
	) {
		let remainingBusinessSeats = businessSeats * flightQty;
		let remainingRegularSeats = economySeats * flightQty;
		let vipBusinessSeats = 0;
		let vipEconomySeats = 0;
		let regularBusinessSeats = 0;
		let regularEconomySeats = 0;

		//first we distribute the business seats to the vip passengers
		if (vipPassengers <= remainingBusinessSeats) {
			vipBusinessSeats = vipPassengers;
			remainingBusinessSeats -= vipPassengers;
		} else {
			vipBusinessSeats = remainingBusinessSeats;
			remainingBusinessSeats = 0;
		}
		vipPassengers -= vipBusinessSeats;

		//then we distribute the regular seats to the remaining vip passengers
		if (vipPassengers > 0) {
			if (vipPassengers <= remainingRegularSeats) {
				vipEconomySeats = vipPassengers;
				remainingRegularSeats -= vipPassengers;
			} else {
				vipEconomySeats = remainingRegularSeats;
				remainingRegularSeats = 0;
			}
			vipPassengers -= vipEconomySeats;
		}
		//now we distribute the leftover business seats to the regular passengers
		if (remainingBusinessSeats > 0) {
			if (regularPassengers <= remainingBusinessSeats) {
				regularBusinessSeats = regularPassengers;
				remainingBusinessSeats -= regularPassengers;
			} else {
				regularBusinessSeats = remainingBusinessSeats;
				remainingBusinessSeats = 0;
			}
			regularPassengers -= regularBusinessSeats;
		}
		//now we distribute the leftover regular seats to the regular passengers
		if (remainingRegularSeats > 0) {
			if (regularPassengers <= remainingRegularSeats) {
				regularEconomySeats = regularPassengers;
				remainingRegularSeats -= regularPassengers;
			} else {
				regularEconomySeats = remainingRegularSeats;
				remainingRegularSeats = 0;
			}
			regularPassengers -= regularEconomySeats;
		}
		return {
			vipPassengersWithBusinessSeats: vipBusinessSeats,
			vipPassengersWithEconomySeats: vipEconomySeats,
			regularPassengersWithBusinessSeats: regularBusinessSeats,
			regularPassengersWithEconomySeats: regularEconomySeats,
		};
	}

	return { checkFlightCapacity, distributeAllSeatsToAllPassengers };
}

module.exports = Passengers();
