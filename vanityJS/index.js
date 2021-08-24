var crypto = require('crypto');
const bs58 = require('bs58')
var md5sum = crypto.createHash('md5');
var randomWords = require('random-words');

async function generateB58() {
    const seed =  randomWords(12).toString(); // TODO:colocar o seed para ser gerado com 12 palavrasara ser
    const sha = crypto.createHash('sha256');  
    hash = sha.update(seed).digest('hex')
    const bytes = Buffer.from(hash, 'hex')
    const base58hash = bs58.encode(bytes)
    return {seed, base58hash}
}

let index = 0;
async function findVanity(stringArr){
    while(true){
        let {base58hash, seed} = await generateB58();
        stringArr.forEach(string =>{
            if(base58hash.includes(string)){
                index += 1;
                console.log(`#${index}`);
                console.log(`seed: ${seed}`);
                console.log(`string encontrada: ${string}`)
                console.log(`hash em base58: ${base58hash}`);     
            }
        })
    }    
}

const names = ['pedro', 'p3dro', 'p3dr0', 'pedr0', 'p3dr0', 'p3dru', 'pedru', 'buf0'];
findVanity(names);





