const usersGet = (req, res) => {
    const query = req.query
    res.json({
      msg:'back surveys',
      query
    }) 
  }
  
  const userPost = (req, res) => {
    const data = req.body
    res.json({
      msg:'info creada',
      data
    }) 
  }
  
  const userPut = (req, res) => {
    const id = req.params.id
    res.json({
      msg:'info actualizada',
      id
    }) 
  }

  const userDelete = (req, res) => {
    const id = req.params.id
    res.json({
      msg:'info borrada',
      id
    }) 
  }

  module.exports={
    usersGet,
    userPost,
    userPut,
    userDelete
  }