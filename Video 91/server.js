import fs from "fs/promises"
import fsn from "fs"
import path from "path"

let files = await fs.readdir("//Users//ayush//Desktop//Code files//Web Dev//Web Development//Video 91")

const basepath = "//Users//ayush//Desktop//Code files//Web Dev//Web Development//Video 91"
for (const item of files) {
    let ext = item.split(".")[item.split(".").length-1] //splitting the words before "." starting from -1
    console.log(ext)
    if (ext != 'js' && ext != 'json' && item.split('.').length>1){ 
        if (fsn.existsSync(path.join(basepath, ext))){ //check wether the file xists or not
        // moving the files to this directory if its not a js or json file
        fs.rename(path.join(basepath, item), path.join(basepath, ext, item))  //fs.rename(oldpath, newpath) is used to move files from one dir to another dir
    }
        else{
        fs.mkdir(ext)
        fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
    }}
    
   
    
    console.log(item)
}

