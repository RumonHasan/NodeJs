// global name sharing with module exports 
const john = 'john';
const rumon = 'rumon';

// local name 
const testName = 'SecretName';

// console.log(module); // within modules various components can be exported 

module.exports = {john, rumon};
// exporting the variables as objects when there are multiple values... single values can be imported without objects