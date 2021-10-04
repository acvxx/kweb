const fs = require('fs');
const path = require('path');
const util = require('util');

const readDir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

const func = async dir => {
    try{
        const files = await readDir(dir);
        files.forEach( async filename => {
            const paths = path.join(dir, filename);
            const stats = await stat(paths);
            const isDir = stats.isDirectory();
            if (isDir){
                func(paths);
            }
            else {
                const ext = path.extname(paths);
                if(ext ==='.js'){
                    console.log(paths);
                }
            }
        })
    } catch (err){
        console.error(err);
    }
};

func('test');