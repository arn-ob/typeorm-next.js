# TypeORM + Next.js example

TypeORM 0.3 + Next 15

People say it is hard, and it is, but it is possible.

Steps:
1. `npm install`
1. `docker compose up`
2. `npm run migration:run`
3. `npm run dev`
4. It will build if you do `npm run build` 


Example details:
- both client rendering and serverside rendering examples on same page
- relations between tables work
- in `dataSource.ts` you need to manually specify every `Entity` and `Migration` - this is sad, but all other attempts failed 
- for simplicity no auth in example
- if you will need auth, you will not be able to use middleware for that - middleware is retarted comparing to other parts of next.js
- Bonus: Some Mantine + Tailwind CSS

You can do better than that? Great! Please create PR, let's make it easier for people.
