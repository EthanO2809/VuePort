const {connection} = require('../config/index')

class Information{
    fetchInformation(req, res) {
        const query = `
        SELECT * 
        FROM Information
        `;
        connection.query(query, (err, data) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results: data,
            });
        });
    }
    addInformation(req, res){
        const query = `
            INSERT INTO Information SET ?
        `
        connection.query(query, [req.body], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Information inserted successfully"
            })
        })
    }
}

module.exports = {
    Information,
};