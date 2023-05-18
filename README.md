# Lirola Phone 📱

Retro phone simulator.

Built for [Jesse Lirola](https://www.jesselirola.com) as an experimental portfolio site. Includes retro camera, special code links (try "DONDA" on the keypad), and other easter eggs.

App link: https://www.liro.la

<br>
<div style="display: flex;">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" height="20" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="20" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" height="20" />
  <img src="https://img.shields.io/badge/Airtable-18BFFF?style=for-the-badge&logo=Airtable&logoColor=white" height="20" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" height="20" />
</div>

---

<img src="https://res.cloudinary.com/dfuyisjqi/image/upload/v1684436720/Screenshot_2023-05-18_at_3.04.31_PM_ffl6a5.png" />

# Local access

Instructions

1. Install Node.js
2. Create a .env file and include AIRTABLE_API_KEY. Jesse will have the key.
3. npm install
4. npm run dev
5. Open localhost:8888 in your browser

Other notes

1. Audio sprite + open graph image file are hosted in an S3 bucket. If you want to change these or use different hosting, change the file URLs directly in the code (PhoneBody.js component and index.html respectively)
