exports.handler = async function () {
	const Airtable = require('airtable');
	const apiKey = 'keyd2zE3ij6iK5H3r';

	const base = new Airtable({ apiKey }).base('appnrc61rzosNVfmm');

	const result = await base('PDFs')
		.select({
			filterByFormula: `code = "${4726697}"`,
		})
		.firstPage();

	const url = result[0].fields.attachments[0].url;
	console.log(url);
	return {
		statusCode: 200,
		body: JSON.stringify(url),
	};
};
