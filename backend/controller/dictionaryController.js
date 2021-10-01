const OwlBot = require("owlbot-js");

module.exports = class Dictionary {
    static async search(req, res) {
        try {
            //Primer argumento es el token, y el segundo es el tiempo de timeout.
            const cliente = OwlBot(process.env.OWL_TOKEN, 25000);

            const word = req.params.word;
            
            cliente.define(word)
                .then(result => res.status(200).json(result));
        } catch(err) {
            res.status(400).json({ "message": err.message });
        }
    }
}