exports.handler = async function (event, context) {
	const Airtable = require('airtable');
	const apiKey = process.env.AIRTABLE_API_KEY;

	const base = new Airtable({ apiKey }).base('appnrc61rzosNVfmm');
	const code = JSON.parse(event.body).code;

	try {
		const response = await base('PDFs')
			.select({
				filterByFormula: `code = "${code}"`,
			})
			.firstPage();

		if (response.length > 0) {
			const result = parseResponse(response);
			return {
				statusCode: 200,
				body: JSON.stringify(result),
			};
		} else {
			return {
				statusCode: 404,
				body: JSON.stringify({ message: 'invalid' }),
			};
		}
	} catch (error) {
		console.log(error);
		return {
			statusCode: 404,
			body: JSON.stringify({ message: 'invalid' }),
		};
	}
};

const parseResponse = (res) => {
	const fields = res[0].fields;
	if (fields.hasOwnProperty('attachments')) return fields.attachments[0].url;
	if (fields.hasOwnProperty('link')) return fields.link;
};
