# Tomato (zomato clone)

**Live App Demo Link:** [Zomato Clone Live App Demo](https://zomatoclone.koushilmankali.in/)

Zomato is an online food ordering application. This project (Tomato) is a frontend clone of Zomato built with React JS and Vite. All page content is static/sample data inside the app; there is no backend API for orders, users, or restaurants.

### Project Demonstration Video:

[![Zomato clone demonistration video](https://img.youtube.com/vi/lNfS_8bJA5c/0.jpg)](https://www.youtube.com/watch?v=lNfS_8bJA5c)

## Pages Developed:

1. [Home Page](#home-page)
2. [Add a Restaurant Page](#add-restaurant-page)
3. [User Profile Page](#user-profile-page) (plus a user settings page)
4. Restaurant Home Page (overview)
5. [Restaurant Order Page](#hotel-order-page)
6. Restaurant Review Page
7. Restaurant Photos Page
8. Restaurant Menu Page
9. Restaurant "Meeting" (camera/mic live stream) and "Videos" (YouTube recipe videos) tabs
10. Get The App Page
11. [Order Page](#order-online-page)
12. Dinning Page
13. Nightlife Page

Login and Signup are implemented as modal forms opened from the navigation bar (UI only).

## Routes

Defined in `src/main.jsx`:

| Route | Page |
| ----- | ---- |
| `/` | Home |
| `/add-restaurant` | Add a restaurant |
| `/show-case?page=order-online` \| `dinning-out` \| `night-life` | Order online / Dining out / Nightlife listings |
| `/user/:userId`, `/user/:userId/:hashId` | User profile (tabs selected by `hashId`) |
| `/user/:userId/settings` | User settings |
| `/user/:userId/notifications`, `/network`, `/find-friends` | Placeholder ("skipped") pages |
| `/get-the-app` | Get the app |
| `/:city/:hotel` | Restaurant overview |
| `/:city/:hotel/:page` | Restaurant sub-page: `order`, `reviews`, `photos`, `menu`, `meeting`, `video` |
| `/test` | Test page |
| `*` | Error (404) page |

## Libraries Used:

| Library Name | Description |
| ------------ | ----------- |
| React Js     | Frontend Framework |
| React Slick  | For carousel's in the project |
| slick-carousel  | For carousel's in the project (used with React Slick) |
| React Router v6  | Routing library  |
| Formik  | Library for Forms |
| socket.io-client | Used by the restaurant "Meeting" (live stream) tab |
| Tailwind CSS / PostCSS / Autoprefixer | Styling tooling (alongside CSS modules) |

## Tools Used:

| Tool Name | Description |
| ----------- | ----------- |
| Vitejs    | Vitejs is a development environment tool |
| Yup   | Validation tool |
| Yarn   | Package Manager tool |

## Getting Started

Prerequisites: Node.js and Yarn (a `package-lock.json` is also committed, so npm works too).

### To start the project use commands: (After cloning the project)

1. `yarn`
2. `yarn run dev`

Other scripts from `package.json`:

| Command | Description |
| ------- | ----------- |
| `yarn run dev` | Start the Vite dev server |
| `yarn run build` | Production build |
| `yarn run preview` | Preview the production build locally |

There is no test script in this project.

### Optional: live stream (Meeting tab) server

`server.js` is a small Express + Socket.IO server that rebroadcasts `stream` events to all connected clients. The Meeting tab (`MeetingComponent.jsx`) connects to `http://localhost:3001` (hard-coded).

- Environment variable: `PORT` (optional, defaults to `3001`).
- `express` and `socket.io` are **not** listed in `package.json`, so install them before running: `yarn add express socket.io` (or `npm install express socket.io`), then `node server.js`.
- Note: the component emits a browser `MediaStream` object over Socket.IO, which cannot be serialized, so actual video sharing between clients is not functional as written (needs confirmation). The local camera preview works in the browser after granting camera/mic permission.

## ScreenShots

# Home Page:

<img src="Project Images/Home.png" />


# Add Restaurant Page:

<img src="Project Images/AddRestaurant.png" />


# Order Online Page:

<img src="Project Images/OrderOnlinePage.png" />


# User Profile Page:

<img src="Project Images/UserProfilePage.png" />


# Hotel Order Page:

<img src="Project Images/HotelOrderPage.png" />


### Project Started Date: june, 11, 2022

### Project Completed Date: july 19, 2022
