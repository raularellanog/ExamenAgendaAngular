const { Router }=require('express');

const router= Router();

const User=require('../models/User');

const jwt=require('jsonwebtoken');//requerimiennto de token para saber si se inicio sesion
const { restart } = require('nodemon');

router.get('/',(req,res) =>{
    return res.send('hello word')
})
router.post('/sigup',async (req,res) =>{//registrar un usuario por metodo post 
    //console.log(req.body);//ver lo que se envia en post como json
    //convertirlo a un formato para base de datos 
    const { email, pass}=req.body;
    //console.log(email,pass);//visualizar dato como variable 
    const   newUser= new User({email:email,password:pass});
    await newUser.save();//guardar dato y hacer otra accion para no tardar por metodo asincrono
    // return res.send('Esta registrado');//prueba de registro 
    const token= jwt.sign({_id: newUser._id},'secretkey');//guardar token en varible para uso 
    res.status(200).json({token});
})
router.post('/signin',async(req,res) =>{
    const { email, pass}=req.body;
    const user=await User.findOne({email});
    if(!user)return res.status(401).send('el correo no existe');//verificar si el usuario existe 
    if(user.password !== pass)return res.status(401).send('Error de  Contraseña');//verificar contraseña 

    const token = jwt.sign({_id: user._id},'secretkey');//obtener token para iniciar sesion
    return res.status(200).json({token});
});
router.get('/task',(req,res) =>{//tareas de para mostrar
    res.json([{
        _id:1,
        name:'tarea 1',
        description:'lorem ipsum',
        date:'2020-11-3'
    },{
        _id:2,
        name:'tarea 12',
        description:'lorem ipsum',
        date:'2020-11-3'
    },{
        _id:3,
        name:'tarea 3',
        description:'lorem ipsum',
        date:'2020-11-3'
    },{
        _id:4,
        name:'tarea 4',
        description:'lorem ipsum',
        date:'2020-11-3'
    }
])
})
router.get('/private-task',verifytoken, (req,res) =>{//tareas de para mostrar
    res.json([{
        _id:1,
        name:'tarea 1',
        description:'lorem ipsum',
        date:'2020-11-3'
    },{
        _id:2,
        name:'tarea 12',
        description:'lorem ipsum',
        date:'2020-11-3'
    },{
        _id:3,
        name:'tarea 3',
        description:'lorem ipsum',
        date:'2020-11-3'
    },{
        _id:4,
        name:'tarea 4',
        description:'lorem ipsum',
        date:'2020-11-3'
    }
])
})
router.get('/profile',verifytoken, (req,res) =>{
    res.send(req.userId);//optener id para perfil
})
module.exports=router;//exportacion de metodos para uso de url

//verificacion de token 
function verifytoken(req,res,next ){
    if(!req.headers.authorization)//verificar autorizacion
    {
        return res.status(401).send('no existe autorizacion');
    }
    const token= req.headers.authorization.split(' ')[1]
    if(token==='null')
    {
        return res.status(401).send('no existe autorizacion');
    }
    const data=jwt.verify(token,'secretkey');
    req.userId=data._id;//obtener el id del token 
    next();
}