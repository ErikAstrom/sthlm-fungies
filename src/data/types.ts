import { FromToProps } from "sanity";

export interface SubmitAlert {
    show: boolean;
    message: string;
    severity: 'success' | 'error';
}

export type FormWithValidField = Record<any, FormField>

interface FormField {
    value: string;
    validated: boolean;
    valid: boolean;
}

export interface IconProps {
    color: string;
    size: number;
    iconId: string;
    rounded?: boolean;
}


export type ContactForm = {
    name: FormField;
    subject: FormField;
    email: FormField;
    message: FormField;
}
