const { request } = require("express");
const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const Medicine = require("./models/medicine_model")
const cors = require("cors");
// const bodyParser = require('body-parser');
const { fstat } = require("fs");
// const unique_id = require("uuid").v4();
const fs = require("fs");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: true }));
// app.use(cors);

const Port=process.env.PORT||4000; 
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME;

const connectDB = async () => {
    try {
    const url = `mongodb+srv://${db_username}:${db_password}@todolist.izk0v8w.mongodb.net/${db_name}?retryWrites=true&w=majority`;
    const conn = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }


const shop_data = JSON.parse(fs.readFileSync("./Data/Shop.json", { encoding: "utf-8" }));

app.get("/", function (req, res) {
    res.status(201).json({ message: "Welcome to DocHub" })
});

app.get("/Autocomplete",async function(req,res){
    const Data = req.query.MediName;
    let Final_data=[]
    let Medi_data=await Medicine.find({ BrandName1: {$regex:Data, $options: 'i'  }})
    if(Medi_data!=0){
        for(var i=0;i<Medi_data.length;i++){
                Final_data.push(Medi_data[i]["BrandName1"]);

        }
    }
    Medi_data=await Medicine.find({ BrandName2: {$regex:Data, $options: 'i'  }})
    if(Medi_data!=0){
        for(var i=0;i<Medi_data.length;i++){
                Final_data.push(Medi_data[i]["BrandName2"]);
        }
    }
    Medi_data=await Medicine.find({ BrandName3: {$regex:Data, $options: 'i'  }})
    if(Medi_data!=0){
        for(var i=0;i<Medi_data.length;i++){
                Final_data.push(Medi_data[i]["BrandName3"]);

        }
    }
    
    res.send(Final_data);
})

app.get("/Get_Medicine", async function (req, res) {
    const Data = req.query.MediName;
    Medicine.findOne({ $or: [{ BrandName1: Data }, { BrandName2: Data }, { BrandName3: Data }, { GenericName: Data }] })
        .then(async (answer) => {
            if (answer == null) {
                res.status(400).json({ message: "Medicine is not Found in DataBase" });
            }
            else {
                let result = {};
                if (answer.GenericName == Data) {
                    answer.GenericName = "Already a Genric Name";
                }
                let counter = 0;
                for (const key in answer) {
                    if (key.includes("CountAddress")) {
                        counter += 1;
                        let medi_count = answer[key];
                        let shop_name = shop_data[counter - 1][key];
                        let newKey = `MedicalShop${counter}`;
                        let newValue = {
                            // MedicineCount: medi_count,
                            JanAushadhiKendra: shop_name
                        };
                        result[newKey] = newValue;
                    }
                }
                // console.log(answer);
                const combinedObject = {
                    Medicines: answer,
                    Shops: result
                };
                for (let key in combinedObject.Medicines) {
                    if (key.includes("CountAddress")) {
                        delete combinedObject.Medicines[key];
                    }
                }
                res.status(201).send(combinedObject);
            }
        })
        .catch((err) => {
            return res.status(500).json({ message: "Internal server error" });
        });
})

app.get("*", function (request, response) {
    response.status(404).json({ message: "Page not Found" })
})


connectDB().then(() => {
    app.listen(Port, () => { console.log(`Server is running at ${Port}....`) });

})
// app.listen(Port, () => { console.log(`Server is running at ${Port}....`) });
