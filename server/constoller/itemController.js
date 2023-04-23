const items = require('../models/itemSchema')

//add
exports.additems = async (req, res) => {
    try {
        const { title,date, description } = req.body
        console.log(req.body)
        switch(true){
            case !title:
                return res.status(500).send({error:"title is required"})
            case !date:
                return res.status(500).send({error:"data is required"})        
        }
        const item = new items({
            title,
            date,
            description
         })

        await item.save({})
        res.status(200).send({
            success:true,
            message:"successfully added",
            item,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message: 'item not added'
        })
    }
}

//delete
exports.deleteItem = async (req,res)=>{
    try{
        await items.findByIdAndDelete(req.params.id)
        console.log(req.params)
        res.status(200).send({
            success:true,
            message:"successfull deleted"
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'delete failed'
        })
    }
}

//update
exports.updateItems = async (req,res)=>{
    try{
     const updateditem =   await items.findByIdAndUpdate(req.params.id,
        {...req.body},
        {new:true}
        )
        switch(true){
            case !title:
                return res.status(500).send({error:"title is required"})
            case !date:
                return res.status(500).send({error:"data is required"})        
        }
        res.status(200).send({
            success:true,
            message:"successfully updated",
            updateditem
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error while updating"
        })
    }
}
//get all item

exports.getitems = async (req,res)=>{
    try{
        const getItem = await items.find({})
        res.status(200).send({
            success:true,
            message:"Successfull",
            counTotal: getItem.length,
            getItem
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error while getting product"
        })
    }
}