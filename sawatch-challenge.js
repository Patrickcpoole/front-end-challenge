// Fetch the vehicle data
const getVehicleData = async () => {
	try {
		const response = await fetch('https://api.sawatchlabs.com/models/13/2017');
		const jsonResponse = await response.json();
		const vehicleData = jsonResponse.data;
		sortVehicles(vehicleData);
	} catch (err) {
		console.log(`Error: ${err}`);
	}
};

// Sort vehicles alphabetically by the model
const sortVehicles = data => {
	let sorted = data.sort((a, b) =>
		a.vehicle_model > b.vehicle_model ? 1 : -1
	);

	const tableBody = document.getElementById('swt-table-body');

	// Map through each vehicle object and create a new row with specified data
	sorted.map(vehicle => {
		let vehicleRow = document.createElement('TR');

		const vehicleData = [
			'vehicle_year',
			'make',
			'vehicle_model',
			'displacement',
			'cylinders',
			'class'
		];

		// Loop through each piece of data we need and create a new table data node
		for (let i = 0; i < vehicleData.length; i++) {
			let dataNode = document.createElement('TD');
			let textNode = document.createTextNode(vehicle[vehicleData[i]]);
			dataNode.appendChild(textNode);
			vehicleRow.appendChild(dataNode);
		}

		tableBody.appendChild(vehicleRow);
	});
};

getVehicleData();
