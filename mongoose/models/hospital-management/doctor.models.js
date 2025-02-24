import mongoose from 'mongoose';
const hospitalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYears:{
        type:Number,
        default:0
    },
    worksInHospitals:[
        {
            type:mongoose.Schema.Types.OBjectId,
            ref:"Hospital"
        }
    ]

},{timestamps:true});

export const Hospital=mongoose.model(
    'Hospital',
    MedicalRecordSchema
)