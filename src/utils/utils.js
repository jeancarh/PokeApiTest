const bcrypt = require('bcrypt');

//Encoding passord
exports.encodePassword = async(password) => {
    const hash = await bcrypt.hash(password, 10)
    return hash
}

//Comparing passord
exports.comparePassword = async(password, hash) => {
    const result = await bcrypt.compare(password, hash)
    return result
}