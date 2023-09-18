const {connection} = require('../config/index')

class Information{
    fetchInformation(req, res) {
        const query = `
        SELECT * FROM information
        `;
        connection.query(query, (err, data) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results: data,
            });
        });
    }
}

module.exports = {
    Information,
};