import fs from 'fs';
import path from 'path';
// // import { Window } from 'happy-dom'
import { describe, it, expect, vi } from 'vitest'
import { handleValidation, Form, imitSendingData } from '../src/main.ts';

const formPath = path.join(process.cwd(), 'src/index.html');
const formDocument = fs.readFileSync(formPath, 'utf-8').toString();

const window = new Window()
const document = window.document
document.write(formDocument)
vi.stubGlobal('document', document)


describe('handleValidation()', () => {
    const correctFormFields: Form = {
        name: { value: 'John', style: { borderBottom: '' } } as HTMLInputElement,
        surname: { value: 'Doe', style: { borderBottom: '' } } as HTMLInputElement,
        email: { value: 'john.doe@example.com', style: { borderBottom: '' } } as HTMLInputElement,
    };
    const incorrectFormFields: Form = {
        name: { value: '', style: { borderBottom: '' } } as HTMLInputElement,
        surname: { value: '', style: { borderBottom: '' } } as HTMLInputElement,
        email: { value: '', style: { borderBottom: '' } } as HTMLInputElement,
    };

    it('should have 2px solid #078080 border when data is correct', async () => {
        const isValid = handleValidation(correctFormFields);

        expect(isValid).toBe(true);
        expect(correctFormFields.name.style.borderBottom).toBe('2px solid #078080');
        expect(correctFormFields.surname.style.borderBottom).toBe('2px solid #078080');
        expect(correctFormFields.email.style.borderBottom).toBe('2px solid #078080');

    });
    it('should have 2px solid #f45d48 border when data is correct', async () => {
        const isValid = handleValidation(incorrectFormFields);

        expect(isValid).toBe(false);
        expect(incorrectFormFields.name.style.borderBottom).toBe('2px solid #f45d48');
        expect(incorrectFormFields.surname.style.borderBottom).toBe('2px solid #f45d48');
        expect(incorrectFormFields.email.style.borderBottom).toBe('2px solid #f45d48');

    });

    it('write given data in local storage', () => {
        const id: string = 'formData'
        const formInputs = [{ name: 'John', surname: 'Doe', email: 'john.doe@example.com' }]
        imitSendingData(id, formInputs)

        expect(localStorage.getItem(id)).toEqual(
            JSON.stringify(formInputs)
        );
        // expect(document.querySelector('.success')).toBeInTheDocument();
    })
});

