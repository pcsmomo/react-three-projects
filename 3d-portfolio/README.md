# Build and Deploy a Fantastic 3D Portfolio Website with Three.js and React.js

![3D Portfolio](https://i.ibb.co/9ykhLtM/Thumbnail.png)

## Introduction

The most impressive websites in the world use 3D graphics and animations to bring their content to life. Learn how to build your own ThreeJS 3D Developer Portfolio today!

In this course, you'll learn the following:

- ThreeJS - a powerful 3D graphics library for rendering and animating the 3D model
- React Three Fiber - a popular library for creating 3D graphics with ThreeJS in React
- TailwindCSS - a popular utility-first CSS styling framework
- Framer Motion - the most popular library used to bring your React website to life with animations
  You'll also learn how to:
- Load, create and customize stunning 3D models and geometries with various lights, as well as understand the 3D world with a camera and positioning of an object in space.
- Make your code reusable and scalable using Higher Order Components (HOCs) and other industry-standard best practices
- Implement sending emails through a form on the website
- Ensure responsiveness across all devices and improve your site's performance using Suspense and Preload.

## Development

```sh
mkdir 3d-portfolio
cd 3d-portfolio
npm create vite@latest ./ -- --template react-ts
```

### basic packages for this project

```sh
npm install -D tailwindcss
npx tailwindcss init

npm install \
  @react-three/fiber \
  @react-three/drei \
  maath \
  react-tilt \
  react-vertical-timeline-component \
  @emailjs/browser \
  framer-motion \
  react-router-dom

npm install -D @types/react-vertical-timeline-component
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
```

### react-router-dom

```sh
npm install react-router-dom
```

## following the lecture

### 3. Navbar

[logo.com - Generate your logo](https://logo.com/)
