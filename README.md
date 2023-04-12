# airbnb Clone

- Demo: <https://airbnb-with-nextjs-gamma.vercel.app/>

### Project goal

```shell

이 프로젝트는 nextjs13을 통해 Airbnb를 단순화한 클론 코딩입니다.

저는 이 프로젝트를 통해 Next.js를 비롯한 React 프레임워크와 Tailwind CSS 같은 CSS 프레임워크, React Hook Form과 Zustand 같은 상태 관리 라이브러리, MongoDB와 Prisma 같은 데이터베이스 도구를 사용해 보았습니다.
또한, NextAuth를 이용하여 구글 및 깃허브를 통한 인증 시스템을 구현하였습니다.

저의 목표는 이 프로젝트를 통해 다양한 기술 스택을 경험하고, 이를 활용하여 웹 개발을 더욱 효율적으로 수행할 수 있는 능력을 키우는 것입니다. 또한, 이 프로젝트를 통해 기술적으로 성장하며, 후에 다른 프로젝트에 적용하는 것이 궁극적인 목표 입니다.

이 프로젝트를 진행하면서 공부하고 느낀점을 블로그에 작성하도록 하겠습니다 !

```

### TODO's

- [x] Tailwind design
- [x] Tailwind animations and effects
- [x] Full responsiveness
- [x] Credential authentication
- [x] Google authentication
- [x] Github authentication
- [x] Image upload using Cloudinary CDN
- [x] Client form validation and handling using react-hook-form
- [x] Server error handling using react-toast
- [x] Calendars with react-date-range
- [x] Page loading state
- [x] Page empty state
- [x] Booking / Reservation system
- [x] Guest reservation cancellation
- [x] Owner reservation cancellation
- [x] Creation and deletion of properties
- [x] Pricing calculation
- [x] Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
- [x] For example we will filter out properties that have a reservation in your desired date range to travel
- [x] Favorites system
- [x] Shareable URL filters
- [x] Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results
- [x] How to write POST and DELETE routes in route handlers (app/api)
- [x] How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- [x] How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling
- [x] How to handle relations between Server and Child components!
- [x] Implement Not Found page styles

### Tools used

- NextJs 13
- Axios
- React
- React Hook Form
- Tailwind
- NextAuth
- Zustand
- MongoDB
- Prisma

### Install packages

```shell
npm i

or

yarn
```

### Setup .env file

```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev

or

yarn dev
```
