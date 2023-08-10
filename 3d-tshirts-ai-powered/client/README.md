# Build and Deploy an AI-Powered 3D Website Using React | 2023 Three JS Course Tutorial for Beginners

![3D Website](https://i.ibb.co/Krk39Cf/Thumbnali.png)

## Introduction

Many large corporations already use 3D graphics to showcase their products. Learn how to build your own ThreeJS 3D product website and infuse it with the power of artificial intelligence!

In this course, you'll learn the following:

- ThreeJS - a powerful 3D graphics library for rendering and animating the 3D model
- React Three Fiber - a popular library for creating 3D graphics with ThreeJS in React
- TailwindCSS - a popular utility-first CSS styling framework
- Framer Motion - the most popular library used to bring your React website to life with animations

You'll also learn how to:

- Load, create and customize stunning 3D models and geometries with various lights, as well as understand the 3D world with a camera and positioning of an object in space.
- Make your code reusable and scalable using Higher Order Components (HOCs) and other industry-standard best practices
- Add custom color and file support.
- Generate and use images through DALLE AI
- Download the resulting t-shirt model image
- Ensure responsiveness across all devices and improve your site's performance

## Development

```sh
mkdir -p 3d-tshirts-ai-powered/client
cd 3d-tshirts-ai-powered/client
npm create vite@latest ./ -- --template react-ts
```

### install dependencies for this project

```sh
npm install \
  three \
  @react-three/fiber \
  @react-three/drei \
  maath \
  valtio \
  react-color \
  framer-motion

npm install -D @types/react-color
```

### Tailwind CSS

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### Eslint

```sh
# without eslint-config-prettier, eslint fails
npm install -D \
  eslint \
  eslint-config-prettier \
  eslint-plugin-prettier \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser

# for a test
# npm install -D eslint-plugin-react # this one is too much
npm install -D eslint-plugin-react-hooks
npm install -D eslint-plugin-valtio
```

### (X) Husky & commitlint

> ❌ - as this project doens't have .git: I will try it for the other project

```sh
# commit lint
npm install -D @commitlint/{cli,config-conventional}

# echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
echo 'export default { extends: ["@commitlint/config-conventional"] };' > commitlint.config.js
```

```sh
# husky
```

```sh
npm uninstall -D @commitlint/{cli,config-conventional} husky
```

### Deployment

```sh
npm run build
```
