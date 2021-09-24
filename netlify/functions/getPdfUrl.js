exports.handler = async function (event, context) {
	const Airtable = require('airtable');
	const apiKey = process.env.AIRTABLE_API_KEY;

	const base = new Airtable({ apiKey }).base('appnrc61rzosNVfmm');
	const code = JSON.parse(event.body).code;
	console.log('code', code);

	const result = await base('PDFs')
		.select({
			filterByFormula: `code = "${code}"`,
		})
		.firstPage();

	const url = result[0].fields.attachments[0].url;
	return {
		statusCode: 200,
		body: JSON.stringify(url),
	};
};
