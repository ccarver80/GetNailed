var express = require('express');
var router = express.Router();
const fileUpload = require('express-fileupload')
const app = express();
var bodyParser = require('body-parser')




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const nails = require('../models').Nails

router.use(express.json());
app.use(fileUpload())



//POST ROUTE FOR NAILS
router.post('/nails', async(req, res) => {
    try{
       
               
             const NewNails = await nails.create({picture: req.files.picture.data, title: req.body.title, description: req.body.description })
           res.json(NewNails.id);
           res.status(201);
}catch(err) {
        console.log(err)
}
})

router.put('/nails/:id', async(req, res) => {
    try{
        const EditNails = await nails.update({picture: req.files.picture.data, title: req.body.title, description: req.body.description }, {
            where: {
                id: req.params.id
            }
        })
    }catch(err) {
        console.log(err)
    }
})

router.delete('/nails/:id', async(req, res) => {
    try{
        const DestroyNails = await nails.destroy({
            where: {
                id: req.params.id
            }
        })
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
        })
       
        res.end(nailList[0].picture)
        
    }catch(err){
        console.log(err)
    }
})


router.get('/nails', async(req, res) => {
    try{
        const nailList = await nails.findAll(); 
        res.send(nailList).status(200)
    }catch(err) {
        console.log(err)
    }
})


router.get('/nail-set/:id', async(req, res) => {
    try{
        const singleNailSet = await nails.findAll({
            where: {
                id: req.params.id
            }
        })

        res.send(singleNailSet).status(200)
    }catch(err) {
        console.log(err)
    }
})

module.exports = router;    