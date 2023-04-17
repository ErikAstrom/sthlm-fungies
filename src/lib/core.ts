import { ContactForm, SubmitAlert } from '../data/types';

export function getEmptyContactFormType(): ContactForm {
    return {
        name: {
            value: '',
            validated: false,
            valid: false
        },
        subject: {
            value: '',
            validated: false,
            valid: false
        },
        email: {
            value: '',
            validated: false,
            valid: false
        },
        message: {
            value: '',
            validated: false,
            valid: false
        }
    };
}


export function getEmptySubmitAlertType(): SubmitAlert {
    return {
        show: false,
        message: '',
        severity: 'success'
    };
}