# Form Validation
The provided code is a TypeScript implementation of a simple form validation for a web application. It ensures that the entered data meets specific criteria before submitting the form. Additionally, it features styling adjustments based on the validation results and stores valid form data locally.

## Validation Logic
The handleValidation function checks the validity of the form fields based on specific criteria. It returns a boolean indicating whether the form is valid. The criteria include:

 - `name`: Should not contain numbers and must not be empty.
 - `surname`: Should not contain numbers and must not be empty.
 - `email`: Should contain the "@" symbol and must not be empty.

The applyBorderStyle function dynamically adjusts the border style of the input fields based on their validity.

## Data Storage
The `imitSendingData` function simulates sending form data by storing it in the local storage under a specified key.


## Dependencies
- TypeScript: `^5.3.3`
- Tailwindcss: `^3.4.0`
- Jest: `^29.7.0`

## Authors
Gabriela Godek