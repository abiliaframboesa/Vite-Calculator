import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Calculator from "./components/Calculator/Calculator.jsx";
import BMICalculator from "./components/BMICalculator/BMICalculator.jsx";

export const router = createBrowserRouter([ // criar a variavel router para criar as rotas
  {path: '/', element: <App />}, 
  {path: '/about', element: <About />},
  {path: '/contact', element: <Contact />},
  {path: '/calculator', element: <Calculator />},
  {path: '/bmi', element: <BMICalculator />},
]);
