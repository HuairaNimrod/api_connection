const awesomeFunction = (req, res, next) =>{
    res.json('Keyla Rosales');
};

const returnAnotherPerson = (req, res, next) =>{
    res.json('Super Awesome person');
};

module.exports = {awesomeFunction, returnAnotherPerson};