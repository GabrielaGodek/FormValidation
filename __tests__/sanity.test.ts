import { it, expect } from "vitest";

it('should always be true', () => {
    expect(true).toBe(true);
});


// import fs from 'fs';
// import path from 'path';
// import { Window } from 'happy-dom'
// import { describe, it, expect, vi } from 'vitest'
// import { handleValidation, Form } from '../src/main.ts';

// const formPath = path.join(process.cwd(), 'index.html');
// const formDocument = fs.readFileSync(formPath, 'utf-8').toString();

// const window = new Window()
// const document = window.document
// document.write(formDocument)
// vi.stubGlobal('document', document)


// describe('handleValidation()', () => {
//     it('should return true when all inputs are correctly fields', async () => {
//         console.log(document)
//     });
// });