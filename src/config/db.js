// YE KYA KRR RHA HAI BASICALLY MERE APPLICATION KO DATABASE SE CONNECT KRR RHA HAI 

const mongoose = require('mongoose')

async function main(){
    // console.log("DB:", process.env.DB_CONNECT_STRING);
    await mongoose.connect(process.env.DB_CONNECT_STRING)

}
module.exports = main;