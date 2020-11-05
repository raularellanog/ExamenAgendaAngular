const{ Schema, model}=require('mongoose')///metodo de monsogose

const userSchema =new Schema({
    email: String,
    password: String
},//agregar fecha de creacion
{
    timestamps:true
});
module.exports= model('User',userSchema);//modelo con el cual puedo hacer consultas 