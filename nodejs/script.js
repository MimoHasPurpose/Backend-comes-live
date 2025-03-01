import fs from "node:fs"
fs.appendFile("hey.txt","mai to acha hu", function(err){
    if(err) console.log(err);
    else    console.log("done")
})