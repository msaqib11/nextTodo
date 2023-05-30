This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## API Endpoints
-------------

- **GET /api/tasks**

  Retrieves all tasks from the database.

- **POST /api/tasks**

  Creates a new task.
  
  Request body should be a JSON object with the following properties:
  
  - `title` (string, required): The title of the task.
  - `status` (boolean, optional): The status of the task (defaults to true if not provided).

- **DELETE /api/tasks?taskId=<taskId>**

  Deletes a task with the specified taskId.
  
  The taskId query parameter is required and should be a valid task ID.

## Error Handling
--------------

In case of any errors during API operations, appropriate error messages will be returned as JSON responses.

## Contributing
------------

Contributions are welcome! If you find any issues or have suggestions for improvements, please submit a pull request.

## License
-------

This project is licensed under the MIT License.
