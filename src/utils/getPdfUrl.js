const axios = require("axios").default;

const getPdfUrl = async (code) => {
  const response = await axios.post(`/.netlify/functions/getPdfUrl`, {
    code,
  });
  return response.data;
};

export default getPdfUrl;
