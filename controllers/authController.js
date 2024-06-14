const Cliente = require("../models/cliente");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

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

        const validarPassword = bcrypt.compare(req.body.password, cliente.password);
        console.log(validarPassword);
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

const registro = async (req, res) => {
    try {
        const { nome, email, password } = req.body;

        // Validação simples de campos
        if (!nome || !email || !password) {
            return res.status(400).json({
                statusCode: 400,
                message: "Por favor, forneça nome, email e senha"
            });
        }

        // Verifica se o cliente já existe
        const clienteExistente = await Cliente.findOne({ email });
        if (clienteExistente == true) {
            return res.status(400).json({
                statusCode: 400,
                message: "O Cliente já existe"
            });
        }

        // Criptografa a senha
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Cria um novo cliente
        const novoCliente = new Cliente({
            nome,
            email,
            password: hashedPassword
        });

        // Salva o cliente no banco de dados
        await novoCliente.save();

        // Gera um token JWT para o novo cliente
        const token = jwt.sign({ nome: novoCliente.nome }, SECRET);

        res.status(201).json({
            statusCode: 201,
            message: "Registro realizado com sucesso",
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

module.exports = { login, registro };
