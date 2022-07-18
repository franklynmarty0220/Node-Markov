/** Command-line tool to generate Markov text. */

const fs = require('fs');
const markov = require('./markov');
const axios = require('axios');
const process = require('process');

function generateText(text){
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText(text));
}

function makeText(path){
    fs.readFile(path, 'utf8', function(err,data){
        if(err){
            console.log(`${path} Can't read file: ${err}`);
            process.exit(1);
        }
        else{
            generateText(data);
        }
    })
}

async function makeUrl(url){
    let res;

    try{
        res = await axios.get(url);
    }
    catch(err){
        console.error(`Cannot read url: ${err}, ${url}`);
        process.exit(1);
    }
    generateText(res.data)
}

let [method, path] = process.argv.slice(2);

if(method === "file"){
    makeText(path);
}

else if (method === "url"){
    makeUrl(path);
}

else{
    console.error(`Unknown method: ${method}`);
    process.exit(1);
}