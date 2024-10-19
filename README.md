

************************Anjali Task Manager App****************

Features

1. Add new tasks with title, description, and priority.
2. Edit existing tasks.
3. Delete tasks.
4. Mark tasks as completed.
5. Persistent task storage using localStorage.
6. Tasks are sorted by priority.

Setup Instructions
  1. Clone the repository  -- git clone https://github.com/anjalirana1/anjalitaskmanagerapp.git
  2. Create next app -- npx create-next-app@latest [project-name] 
  3. React Icon -- npm install react-icons --save
  4. Run the development server -- npm run dev

Approach for Sorting Tasks by Priority
1. Task Structure: Each task has a priority
2. Sorting Logic: When tasks are added or modified, they are inserted into the state array. The array is then sorted based on the priority attribute. This sorting is handled in the state management functions within the TaskProvider component.
3. Persistent Sorting: The sorted tasks are stored in localStorage to maintain the order across sessions. When the application loads, tasks are retrieved from localStorage and the sorting order is preserved.
4. Dynamic Updates: Any changes to the tasks, such as adding a new task or editing an existing one, will trigger a re-sort based on the priority to ensure the tasks remain sorted.


**********************************************************************













This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




