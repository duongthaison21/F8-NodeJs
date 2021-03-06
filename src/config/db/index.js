const mongoose = require('mongoose');

async function connect() {
    
    try {
        await mongoose.connect('mongodb://localhost:27017/f8-education-dev', { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connected');
    } catch (error) {
        console.log('connect failed')
    }
}

module.exports = { connect };
