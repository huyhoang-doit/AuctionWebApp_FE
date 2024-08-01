# ⚖️ Jewelry Auction System - Capstone Project SWP391 - FPT University HCM - SUMMER 2024

<img src="./screenshot/1.png" width="100%" height="auto" />&nbsp;

## 🌟🌟🌟
- [About](#beginner-about)
- [Key Features](#memo-key-features)
- [Technology](#wrench-technology)
- [LiveDemo](#link-demo)
- [Contributors](#ok_man-contributors)
- [License](#key-license)

---


## :beginner: About

 - 💸 This web app is out capstone project of semester 5 in FPT University 📘📙📗
 - 💸 The online jewelry auction web app allows users to participate in auctions for unique jewelry items. Users can register, view a list of items up for auction, place bids, and follow auctions in real-time. Additionally, users can submit their own jewelry for auction on the platform.

---

## :memo: Key Features

**1. Registration and Login:**<br>
- Users can create an account using their email and password.
- Security with JWT (JSON Web Tokens) for authentication and bcrypt for password encryption.
<br><br>
<img src="./screenshot/2.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/3.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<br>

**2. Jewelry Listings**<br>
- Display of jewelry items currently up for auction, including images, detailed descriptions, starting bids, and auction end times.
- Search and filter features for jewelry type, price, date and auction status (ongoing, waiting, finished).
<br><br>
<img src="./screenshot/4.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/5.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/6.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/7.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<br>

**3. Bidding:**<br>
- Users can place bids on their registered auction with favorite jewelry items.
- The system automatically updates the highest bid and notifies users of changes in bidding.
Support for real-time bidding with auto-refresh functionality.
<br><br>
<img src="./screenshot/8.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/9.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/10.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/11.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<br>


**4. Submit Jewelry for Auction:**<br>
- Users can register to submit their jewelry items for auction.
- Functionality to upload images, provide detailed descriptions, set buy now price,...
- Staff, admin approval process to ensure the quality and authenticity of submitted jewelry.
- Sellers can track the progress of the jewelry in their profile.
<br><br>
<img src="./screenshot/12.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/13.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/14.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/15.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<br>

**5. Notifications:**<br>
- Notifications in-app alerts when a higher bid is placed or when an auction is nearing its end.
- Notifications via email when active new account, process of jewelry.
- Alerts for important activities such as change status jewelry, register auction success or password changes.
<br><br>
<img src="./screenshot/17.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/16.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<br>

**6. Account Management:**<br>
- Users can manage their personal information, auction history, and jewelries items.
- Admin dashboard to add, verify, edit, and delete accounts.
<br><br>
<img src="./screenshot/18.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/19.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<br>

**7. Dashboard:**<br>
- Manager dashboard to edit, and delete jewelries, manage submit jewelries from sellers, manage transactions, manage auctions.
- Admin dashboard to to add, verify, edit, and delete accounts.
<br><br>
<img src="./screenshot/20.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/21.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/22.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/23.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/24.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<img src="./screenshot/25.png" style="border-radius:4%" width="49%" height="49%" />&nbsp;
<br>
<br>


---

## :wrench: Technology

**1. Frontend:**  
- React.js with TypeScript, i18next for internationalization, Ckeditor for rich text editing in descriptions, Firebase for storing images and UI libraries like React-Bootstrap, SweetAlert for user-friendly alert dialogs.<br><br>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>&nbsp;<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black"/>&nbsp;

**2. Backend**
- Spring Boot with Hibernate for building the API, SQL Server for data storage.<br><br>
<img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot"/>&nbsp;<img src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white"/>&nbsp;

**3. Realtime**
- Socket.io, Websocket for real-time bidding functionality.<br><br>
<img src="https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white"/>

**4. Security**
- JWT for authentication and bcrypt for password encryption.<br><br>
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white"/>

**5. Deployment**
- Use Vercel and Railway for deployment.<br><br>
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white"/>&nbsp;


## :link: Demo
🌐 <a href="https://website-auction-production.vercel.app/" target="_blank">Jewelry Auction Web</a>

## :ok_man: Contributors

<a href="https://contrib.rocks/image?repo=huyhoang-doit/AuctionWebApp_FE/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=huyhoang-doit/AuctionWebApp_FE"/>
</a>

---

## :key: License
© 2024 Licensed under the <a href="https://github.com/huyhoang-doit/AuctionWebApp_FE/blob/master/LICENSE" target="_blank">MIT License</a>

> 💁 Feel free to use my repository and star it if you find something interesting 🤘