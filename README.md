**Routes**

  

  confix server.js (process.env.PORT ||  3000)

- [GET] "/api/[Model Name]"

    	Output {
			   status:Number,
			   data:Array[Object] 
    	}

- [POST] "/api/[Model Name]"

    	Input {
			   name:String        
    	}

    	Output {
			   status:Number,
			   data:Object 
    	}

- [PUT] "/api/[Model Name]/[id]"

    	Input {
			   name:String        
    	}

    	Output {
			   status:Number,
			   data:Object 
    	}

- [DELETE] "/api/[Model Name]/[id]"

    	Output {
			   status:Number,
			   data:Object 
    	}#   r a b u - p r o d u c t s - a p i 
 
 