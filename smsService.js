import axios from 'axios';

export class SmsService {

    constructor() {
        this.apiKey = process.env.API_KEY;
        this.apiPassword = process.env.API_PASSWORD;
        this.from = process.env.FROM;
        this.url = process.env.URL;
    }

    async sendMessage(props) {
        try {
            const result = await axios.post(this.url, null, {
                params: {
                key: this.apiKey,
                password: this.apiPassword,
                from: props.from,
                to: props.toPhoneNum,
                msg: `Hej ${props.fromName}! W tym roku kupujesz prezent ${props.toName} :)`
            }, });
            console.log(result.data);
        } catch (e) {
            console.error(e);
        }
    }
}