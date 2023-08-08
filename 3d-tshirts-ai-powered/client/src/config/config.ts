const config = {
  development: {
    backendUrl: "http://localhost:8080/api/v1/dalle",
  },
  production: {
    backendUrl: "https://<my-deployment-url>.onrender.com/api/v1/dalle",
  },
};

export default config;
