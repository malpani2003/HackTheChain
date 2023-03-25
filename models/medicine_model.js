const express=require("express")
const mongoose=require("mongoose")

const MedicineSchema=new mongoose.Schema({
    GenericName:{
        type: String,
        required: true,
    },
    BrandName1:{
        type: String,
        required: true,
    },
    BrandName2:{ 
        type: String,
        required: true,
    },
    BrandName3:{ 
        type: String,
        required: true,
    },
    Bprice1:{
        type:Number,
        required:true
    },
    Bprice2: {
        type:Number,
        required:true
    },
    Bprice3:{
        type:Number,
        required:true
    },
    Gprice:{
        type:Number,
        required:true
    },
    CountAddress1:{
        type:Number,
        required:true
    },
    CountAddress2:{
        type:Number,
        required:true
    },
    CountAddress3:{
        type:Number,
        required:true
    },
    CountAddress4:{
        type:Number,
        required:true
    },
    CountAddress5:{
        type:Number,
        required:true
    },
    CountAddress6:{
        type:Number,
        required:true
    },
    CountAddress7:{
        type:Number,
        required:true
    }
});

const Medicine=new mongoose.model("Medicine",MedicineSchema);

module.exports=Medicine;

