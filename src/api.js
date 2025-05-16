const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9816876905msh4e3d99d3bf83b12p12f157jsnf3725b388ebd',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}