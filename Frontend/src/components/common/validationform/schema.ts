import { z, ZodType } from 'zod';
import { mapLocaleToMeaningfulFormat } from "../../utils/i18n";

export interface FormData {
    FirstName?: string;
    LastName?:string;
    Email?: string;
    phone?: string;
    Password?: string
};

let cardType = mapLocaleToMeaningfulFormat().unknown;
export const UserSchema: ZodType<FormData> = z.object({
    FirstName: z
        .string()
        .min(1, { message: mapLocaleToMeaningfulFormat().emptyFirstNameErrorMessage })
        .max(40, { message: 'Max 40 characters' })
        .regex(/^[a-zA-Z0-9][a-zA-Z0-9\s'-]*[a-zA-Z0-9]?\s*$/, { message: 'Please enter valid first name' })
        .refine((value) => value.replace(/[^0-9a-zA-Z\s'-]/g, ''), { message: 'Invalid character' })
        .transform((value) => value.trim())
        .optional(),

    LastName: z
        .string()
        .min(1, { message: mapLocaleToMeaningfulFormat().emptyLastNameErrorMessage })
        .max(40, { message: 'Max 40 characters' })
        .regex(/^[a-zA-Z0-9][a-zA-Z0-9\s'-]*[a-zA-Z0-9]?\s*$/, { message: 'Please enter valid last name' })
        .refine((value) => value.replace(/[^0-9a-zA-Z\s'-]/g, ''), { message: 'Invalid character' })
        .transform((value) => value.trim())
        .optional(),

    Email: z
        .string()
        .min(1, { message: mapLocaleToMeaningfulFormat().emptyEmailErrorMessage })
        .email('Please enter a valid email address')
        .optional(),

    Password: z
        .string()
        .min(8, { message: 'Please enter a valid password' })
        .regex(/\d/g, { message: 'Need a digit' })
        .regex(/[a-zA-Z]/g, {
            message: 'Need a letter',
        })
        .optional(),

})
