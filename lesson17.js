var fs = require("fs");
var filename ="abc.txt"
fs.unlink(filename,function(error){
    if (error !=null)
    {
        console.log('file cod not be deleted')

    }
    else
    {
        console.log('file has been deleted successfully');
    }
})