# Slack Clone

## Development guide

- Install postgresql
- change DATABASE_URL env in server/.env to your psql user and database
- make you're using the latest version of yarn to not get some unexpected behavior
- `cd server and yarn`
- `cd web and yarn`
- on the server folder launch
  - `npx prisma generate`
  - `npx prisma migrate dev`
- on web just launch `yarn start`

Implemented features:

- Auth(Login, Register, logout)
- Create Channel
- Join a private channel
- send message message to channel(**realtime**)
- send message to users (**realtime**)
- notification sound
