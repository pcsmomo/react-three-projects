# Build and Deploy a Fantastic 3D Portfolio Website with Three.js and React.js

![3D Portfolio](https://i.ibb.co/9ykhLtM/Thumbnail.png)

https://www.youtube.com/watch?v=0fYi8SGA20k

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
  three \
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

### other libraries

```sh
npm install react-router-dom
npm install framer-motion # animation and transition
npm install three
npm install @emailjs/browser
```

## following the lecture

### 3. Navbar

[logo.com - Generate your logo](https://logo.com/)

### 5. Hero - Introduction

```sh
npm install framer-motion
```

### 6. Hero - Computer (first 3d component)

- [React Three Fiber Documents](https://docs.pmnd.rs/react-three-fiber)
- [Sketchfab - 3d models download](https://sketchfab.com/)

```sh
npm install three
```

### 8. Hero-scroll and responsive model

[window.matchMedia() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)

### 9. About - introduction

[react-tilt](https://github.com/jonathandion/react-tilt)

### 11. Section Wrapper

- React Extension (ES7+ React/Redux/React-Native snippets):
  - type `rafce`: Creates a React Arrow Function Component with ES7 module system

### 16. Contact - form

```sh
npm install @emailjs/browser
```

### 19. emailjs

- dashboard.emailjs.com
  - Email Services -> Add New Service
    - Gmail -> connect account
  - Email Templates - Create new template
    - just use the default template
- Email Services - copy my `Service ID`
- Email Templates - Settings -> copy my `Template ID`
- Click my name -> copy my `Public Key`
