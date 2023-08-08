# Build and Deploy an AI-Powered 3D Website Using React | 2023 Three JS Course Tutorial for Beginners

![3D Website](https://i.ibb.co/Krk39Cf/Thumbnali.png)

## Server

```sh
mkdir server
cd server
npm init -y

npm install cloudinary cors dotenv express mongoose openai
npm install -D typescript @types/node @types/cors @types/express
npm install -D nodemon concurrently

npx tsc --init
# Created a new tsconfig.json with:
#                                                                                                                      TS
#   target: es2016
#   module: commonjs
#   strict: true
#   esModuleInterop: true
#   skipLibCheck: true
#   forceConsistentCasingInFileNames: true

# You can learn more at https://aka.ms/tsconfig
```

### Deployment

1. Prepare github repo
   - the repo has both client and server
   - delete `package-lock.json`
   - delete `mongoose`, not using and conflict
   - change the scripts in `pakcage.json`
   ```json
   {
     "scripts": {
       "start:build": "tsc -w",
       "start": "node dist/index.js"
     }
   }
   ```
   - build with `npm run start:build`
   - push all changes
2. Create an account on render.com
   - New Web Service
   - Select my github repo
   - Root directory: `server`
   - add env variable: `OPENAI_API_KEY`

I've tested it from my local frontend to the deployed backend server. Works good! 🎉

(and changed env variable, OPENAI_API_KEY in case)
