const config = require('./config.json')
const a = require('prompt-sync')()

let b = a('Sign in   Sign up? > ') 

if (b === 'Sign in') {
     let z = a('What is your username? > ') 
     let x = a('What is your password? > ') 

     if (z === config.Username  || x === config.Pass) {
            console.log('Welcome, ' + z)
            console.log('')
                if (config.Profession === 'Crypto') {
                    console.log('Crypto')
                } else if (config.Profession === 'Oil') {
                    console.log('Oil')
                } else if (config.Profession === 'Bank') {
                    console.log('Bank')
                }else{
                console.log(
                    '\n' +
                    'Bank   Oil   Crypto'
                )
                }
        }else if (!z === config.Username  || !x === config.Pass); {
                console.log('Invalid password or username')
            } 
    
    }else (b === 'Sign up');{

    }

const Pro = () => {
    if (config.Profession === 'Crypto') {
        console.log('Crypto')
    } else if (config.Profession === 'Oil') {
        console.log('Oil')
    } else if (config.Profession === 'Bank') {
        console.log('Bank')
    }else{
    console.log(
        '\n' +
        'Bank   Oil   Crypto'
    )
    }
} 

