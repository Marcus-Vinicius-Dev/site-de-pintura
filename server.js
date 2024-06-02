const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Middleware para processar os dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configura o transportador do nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'marcus.vini.dev@gmail.com', // substitua pelo seu e-mail
        pass: 'Page123@' // substitua pela sua senha
    }
});

app.post('/send-email', (req, res) => {
    const { nome, telefone, email, mensagem } = req.body;

    const mailOptions = {
        from: 'marcus.vini.dev@gmail.com', // substitua pelo seu e-mail
        to: 'marcus.vini.dev@gmail.com',
        subject: 'Novo contato de cliente',
        text: `Nome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}\nMensagem: ${mensagem}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('E-mail enviado com sucesso!');
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
