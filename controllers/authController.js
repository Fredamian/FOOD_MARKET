Cliente = require("../models/cliente.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dotenv =  require("dotenv");

dotenv.config();

const SECRET = process.env.SECRET;

const login = async (req, res) => {
    try {
        const cliente = await Cliente.findOne({ email: req.body.email });

        if (!cliente) {
            return res.status(401).json({
                statusCode: 500,
                message: "O Cliente nao foi encontrado",
                data: { email: req.body.email }
            });
        }

        const validarPassword = bcrypt.compareSync(req.body.password, cliente.password);

        if (!validarPassword) {
            return res.status(401).json({
                statusCode: 500,
                message: "O Cliente nao tem autorizacao"
            });
        }

        const token = jwt.sign({ nome: cliente.nome }, SECRET);

        res.status(200).json({
            statusCode: 200,
            message: "Login realizado com sucesso",
            data: { token }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            statusCode: 500,
            message: error.message
        });
    }
};

module.exports = login;
