var express = require('express');
var router = express.Router();
const fileUpload = require('express-fileupload')
const app = express();

app.use(fileUpload())




const nails = require('../models').Nails

router.use(express.json());

router.post('/nails', async(req, res) => {
    try{
        console.log("files", req.files)
                
            const NewNails = await nails.create({picture: req.files.sampleFile.data})
            res.status(201)
}catch(err) {
        console.log(err)
}
})

router.get('/nails/:id', async(req, res) => {
    try{
        const nailList = await nails.findAll({
            where: {
                id: req.params.id
            }

            }
        )
        res.status(200)
        res.json(nailList); 
    }catch(err){
        console.log(err)
    }
})

module.exports = router;