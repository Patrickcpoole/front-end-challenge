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

const sortVehicles = data => {
	let sorted = data.sort((a, b) =>
		a.vehicle_model > b.vehicle_model ? 1 : -1
	);

	const tableBody = document.getElementById('swt-table-body');

	sorted.map(vehicle => {
		let vehicleRow = document.createElement('TR');

		let yearData = document.createElement('TD');
		let yearText = document.createTextNode(vehicle.vehicle_year);
		yearData.appendChild(yearText);
		vehicleRow.appendChild(yearData);

		let makeData = document.createElement('TD');
		let makeText = document.createTextNode(vehicle.make);
		makeData.appendChild(makeText);
		vehicleRow.appendChild(makeData);

		let modelData = document.createElement('TD');
		let modelText = document.createTextNode(vehicle.vehicle_model);
		modelData.appendChild(modelText);
		vehicleRow.appendChild(modelData);

		let displacementData = document.createElement('TD');
		let displacementText = document.createTextNode(vehicle.displacement);
		displacementData.appendChild(displacementText);
		vehicleRow.appendChild(displacementData);

		let cylinderData = document.createElement('TD');
		let cylinderText = document.createTextNode(vehicle.cylinders);
		cylinderData.appendChild(cylinderText);
		vehicleRow.appendChild(cylinderData);

		let classData = document.createElement('TD');
		let classText = document.createTextNode(vehicle.class);
		classData.appendChild(classText);
		vehicleRow.appendChild(classData);

		tableBody.appendChild(vehicleRow);
	});
};

getVehicleData();
