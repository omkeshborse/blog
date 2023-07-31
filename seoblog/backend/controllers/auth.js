const signup = (req ,res , next) => {
    const {name , email ,password} = req.body ;
    res.json({
        user : {name , email ,password,} 

    })
}

module.exports = {signup}