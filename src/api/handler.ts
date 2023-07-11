type HandlersType = 'SAFE_TYPE' | 'WARNING_TYPE' | 'RISK_TYPE' | 'DANGEROUS_EXIT';

class Handler {
    public final_string_message: string = '';

    constructor(Message: string, Caption: string = 'No Caption Was Specified.', Code: HandlersType) {
        const DateConstructor: Date   = new Date();
        const dateString              = (EMOJI: string) => `[HH:${DateConstructor.getHours()}/MM:${DateConstructor.getMinutes()}/SS:${DateConstructor.getSeconds()}/DD:${DateConstructor.getDate()}/MARK: ${EMOJI}] `;

        switch(Code) {
            case 'SAFE_TYPE':
                var msgChar: string = ``;
                msgChar += `Safe Title: ${Caption.toString()}\n`;
                msgChar += Message.toString();
                var finalMessage: string = msgChar.split('\n').map((text) => `${dateString('✅')}${text.toString()}`).join('\n');
                this.final_string_message = finalMessage;
                console.log(finalMessage);
                break;
            case 'WARNING_TYPE':
                var msgChar: string = ``;
                msgChar += `Warning Title: ${Caption.toString()}\n`;
                msgChar += Message.toString();
                var finalMessage: string = msgChar.split('\n').map((text) => `${dateString('⚠️ ')}${text.toString()}`).join('\n');
                this.final_string_message = finalMessage;
                console.warn(finalMessage);
                break;
            case 'RISK_TYPE':
                var msgChar: string = ``;
                msgChar += `Risky Title: ${Caption.toString()}\n`;
                msgChar += Message.toString();
                var finalMessage: string = msgChar.split('\n').map((text) => `${dateString('🛑')}${text.toString()}`).join('\n');
                this.final_string_message = finalMessage;
                throw console.error(finalMessage);
            case 'DANGEROUS_EXIT':
                var msgChar: string = ``;
                msgChar += `Dangerous Title: ${Caption.toString()}\n`;
                msgChar += Message.toString();
                var finalMessage: string = msgChar.split('\n').map((text) => `${dateString('🛑')}${text.toString()}`).join('\n');
                this.final_string_message = finalMessage;
                console.error(finalMessage);
                process.exit();
        } 
    }
}

export {
    Handler,
    HandlersType
}