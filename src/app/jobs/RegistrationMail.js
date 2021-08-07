import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    options: {
        //
    },
    async handle({ data }) {
        const { user } = data;

        await Mail.sendMail({
            from: 'Dio <contato@dio.cpm.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de Usuário',
            html: `Olá, ${user.name}, Bem-Vindo a DIO.`
        })
    }
}
