# airbnb Clone

- Demo: <https://airbnb-with-nextjs-gamma.vercel.app/>

### Project goal

이 프로젝트는 nextjs13을 통해 Airbnb를 단순화한 클론 코딩입니다.

저는 이 프로젝트를 통해 Next.js를 비롯한 React 프레임워크와 Tailwind CSS 같은 CSS 프레임워크, React Hook Form과 Zustand 같은 상태 관리 라이브러리, MongoDB와 Prisma 같은 데이터베이스 도구를 사용해 보았습니다.
또한, NextAuth를 이용하여 구글 및 깃허브를 통한 인증 시스템을 구현하였습니다.

저의 목표는 이 프로젝트를 통해 다양한 기술 스택을 경험하고, 이를 활용하여 웹 개발을 더욱 효율적으로 수행할 수 있는 능력을 키우는 것입니다. 또한, 이 프로젝트를 통해 기술적으로 성장하며, 후에 다른 프로젝트에 적용하는 것이 궁극적인 목표 입니다.


### Study

이 프로젝트를 진행하면서 새롭게 알게 된 nextjs13 지식을 개인 블로그에 기록해보았습니다. 

1. Nextjs13의 app폴더 도입 - [Nextjs13의 app [Nextjs]](https://velog.io/@dlzagu/Nextjs13-%ED%8F%B4%EB%8D%94%EA%B5%AC%EC%A1%B0-Nextjs)

2. CSR과 SSR 그리고 Nextjs13의 Pre-rendering 장점 - [Nextjs13의 Pre-rendering의 장점](https://velog.io/@dlzagu/Nextjs13%EC%9D%98-Pre-rendering%EC%9D%98-%EC%9E%A5%EC%A0%90Nextjs)

3. 신세계를 경험한 next auth - [next-auth 란? [nextjs]](https://velog.io/@dlzagu/next-auth-%EB%9E%80-nextjs)

4. Nextjs에서 API 구현하는 가장 쉬운 방법 Prisma! - [Next.js에서 Prisma사용해 간단하게 API 구현하기 [Nextjs]](https://velog.io/@dlzagu/Next.js%EC%97%90%EC%84%9C-Prisma%EC%82%AC%EC%9A%A9%ED%95%B4-%EA%B0%84%EB%8B%A8%ED%95%98%EA%B2%8C-API-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-Nextjs)

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
