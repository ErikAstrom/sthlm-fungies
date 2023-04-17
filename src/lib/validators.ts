import { FormWithValidField } from '../data/types';

export function emailValidator(testString: string) {
    const email = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    return email.test(testString);
}

export function isFormValid(form: FormWithValidField): boolean {
    return Object.values(form).every((field) => field.valid);
}