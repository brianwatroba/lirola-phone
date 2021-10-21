# Liro.la: interactive, old-style phone portal

Built for Jesse Lirola

URL: https://www.liro.la

# Development

Instructions
1. Install Node.js
2. Create a .env file and include AIRTABLE_API_KEY. Jesse will have the key.
3. npm install
4. npm run dev
5. Open localhost:8888 in your browser

Other notes
1. Audio sprite + open graph image file are hosted in an S3 bucket. If you want to change these or use different hosting, change the file URLs directly in the code (PhoneBody.js component and index.html respectively)
