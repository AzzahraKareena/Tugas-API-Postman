const data = require('./mahasiswa.json')

function getAllStudents(){
    return data;
}

function getOneStudents(id){
    const result = data.data.filter(mahasiswa => mahasiswa.id == id)
    return result;
}


module.exports = {
    getAllStudents,
    getOneStudents,
}
    