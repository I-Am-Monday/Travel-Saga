const sequelize = require('../models/index');
const initModel = require('../models/init-models');
const model = initModel(sequelize);
const bcrypt = require('bcrypt')
const { successCode, errorCode, failCode } = require('../ulti/response');

const signup = async (req, res) => {
    try {
        const { last_name, first_name, email, password } = req.body;

        let object = {
            last_name,
            first_name,
            email,
            password:bcrypt.hashSync(password, 10),
            profile_img:'/public/img/266033.png',
        };

        

        const checkEmail = await model.users.findAll({
            where: {
                email: email
            }
        });

        if (checkEmail.length > 0) {
            errorCode(res, "Email đã tồn tại");
        } else {
            const data = await model.users.create(object);

            if (data)
                successCode(res, "Đăng ký thành công");
            else
                errorCode(res, "Đăng ký thất bại");
        }
    } catch (error) {
        console.error(error);
        failCode(res);
    }
};

const login = async(req, res) =>{

    try{    
        let {email,password} =req.body;
        let object ={
            email,password   
        }


        let checkAccount =await model.users.findOne({
            where:{
                email,       
            },  
          
        })
        if(checkAccount){
            let checkPass =bcrypt.compareSync(password,checkAccount.password)
           
            if(checkPass){  
                
                successCode(res,checkAccount)
                
            }else{
                failCode(res,object,"Sai mật khẩu!!!")
            }
        }
        else {
            failCode(res, object, "Tài khoản không tồn tại!!!")
        }
    }catch(err){
        failCode(res,object,"Lỗi!!!")
    }
}


module.exports = {
    signup,
    login
};