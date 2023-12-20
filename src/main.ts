(function () {
    type form = {
        name: HTMLInputElement,
        surname: HTMLInputElement,
        email: HTMLInputElement,
    }
    const formFields: form = {
        name: document.querySelector("form input#name") as HTMLInputElement,
        surname: document.querySelector("form input#surname") as HTMLInputElement,
        email: document.querySelector("form input#email") as HTMLInputElement
    }

    const handleValidation = (): boolean => {
        let isNameValid = !/[0-9]/.test(formFields.name.value) && formFields.name.value.trim() !== "";
        let isSurnameValid = !/[0-9]/.test(formFields.surname.value) && formFields.surname.value.trim() !== "";
        let isEmailValid = /\@/.test(formFields.email.value) && formFields.email.value.trim() !== "";

        formFields.name.style.borderBottom = isNameValid ? '2px solid #078080' : '2px solid #f45d48'
        formFields.surname.style.borderBottom = isSurnameValid ? '2px solid #078080' : '2px solid #f45d48'
        formFields.email.style.borderBottom = isEmailValid ? '2px solid #078080' : '2px solid #f45d48'

        let isFormValid = isNameValid && isSurnameValid && isEmailValid
        return isFormValid;
    };

    document.querySelector("form")!.addEventListener("submit", (evt) => {
        evt.preventDefault();
        if (handleValidation()) {
            let user = {
                name: (formFields.name as HTMLInputElement).value,
                surname: (formFields.surname as HTMLInputElement).value,
                email: (formFields.email as HTMLInputElement).value,
            };
            const formData: Array<typeof user> = [];
            formData.push(user);
            localStorage.setItem("formData", JSON.stringify(formData));
            (document.querySelector("section") as HTMLElement)!.innerHTML = `<div class="success w-[80vw] m-auto text-center"> 
    <img src="/public/checkmark.png" class="m-auto z-[-1]" width="60" height="60" alt="Success! Your registration is complete">
    <h2 class="text-detail my-[3vw] mx-0">Success! Your registration is complete</h2>
    <p>Hello ${formFields.name.value} ${formFields.surname.value}</p>
  </div>`;
        } else {
            (document.querySelector(".error-message")! as HTMLElement).textContent =
                "Correct inputs to sign in properly";
        }

    });

})()
