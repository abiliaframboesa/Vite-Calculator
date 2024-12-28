
//////////////////////////
/////////////FUNCIONA no server com este codigo: http://localhost:8080/api/calculate-imc?weight=50&height=1.70
//////////////////////////

// const express = require("express"); // definir o backend framework
// const app = express(); // definir que a nossa app vai usar o express
// const cors = require("cors"); // definir cors. usar cors para dar fetch dos dados do frontend para o backend
// const path =require("path");
// const corsOptions = {
//     origin: ["http://localhost:5173"], // definir corsOptions. definição do port onde estão as infos do frontend 
// };

// app.use(express.urlencoded({extended: false}))
// app.use(express.json()); // json para armazenar os cálculos de bmi
// app.use(cors(corsOptions)); // cors: frontend --> backend

// // Rota para calcular o IMC
// app.get("/api/calculate-imc", (req, res) => { // p iniciar a nossa app tem de ter uma rota para a nossa backend api ("/api") --> rota
//     const { weight, height } = req.query;

//     if (!weight || !height) {
//         return res.status(400).json({ error: "Weight and height are required" });
//     }

//     const bmi = (weight / (height * height)).toFixed(2);
    
//     let category;
//     if (bmi < 18.5) category = "Underweight";
//     else if (bmi < 24.9) category = "Normal weight";
//     else if (bmi < 29.9) category = "Overweight";
//     else category = "Obesity";

//     const data = { weight, height, bmi, category, date: new Date() };

//     res.json({ bmi, category });

// });

    
// app.listen(8080, () => {
//     console.log(`Server started on port 8080`);
// });



/////////////////////////////
/////////tentativa com post a dar fetch dos dados do frontend
////////////////////////////

const express = require("express"); // definir o backend framework
const app = express(); // definir que a nossa app vai usar o express
const cors = require("cors"); // definir cors. usar cors para dar fetch dos dados do frontend para o backend
const path =require("path");
const corsOptions = {
    origin: ["http://localhost:5173"], // definir corsOptions. definição do port onde estão as infos do frontend 
};

app.use(express.urlencoded({extended: false}))
app.use(express.json()); // json para armazenar os cálculos de bmi
app.use(cors(corsOptions)); // cors: frontend --> backend

// Rota para calcular o BMI
app.post("/api/calculate-bmi", (req, res) => { // p iniciar a nossa app tem de ter uma rota para a nossa backend api ("/api") --> rota
    const { weight, height } = req.body;

    if (!weight || !height) {
        return res.status(400).json({ error: "Weight and height are required" });
    }

    const bmi = (weight / (height * height)).toFixed(2);
    
    let category;
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obesity";

    const data = { weight, height, bmi, category, date: new Date() };

    res.json({ bmi, category });

});
    
app.listen(8080, () => {
    console.log(`Server started on port 8080`);
});

