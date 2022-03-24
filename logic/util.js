function Util() {
	function calculateTotalDistributedPassengers(distributedSeats) {
		return Object.values(distributedSeats).reduce(
			(total, current) => total + current
		);
	}

	function calculateTotalNumberOfPassengers(passengersArray) {
		return passengersArray.reduce((total, current) => total + current);
	}

	return {
		calculateTotalDistributedPassengers,
		calculateTotalNumberOfPassengers,
	};
}

module.exports = Util();
