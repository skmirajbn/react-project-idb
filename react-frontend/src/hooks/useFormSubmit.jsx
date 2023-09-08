import { useEffect, useRef, useState } from "react";
import environment from "../environment/environment";

const useFormSubmit = function ({ required, email, phone }, formRef) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [formValues, setformValues] = useState({});
  const photoRender = useRef();
  const photoInput = useRef();
  // Validator states

  const [isValid, setIsValid] = useState(false);

  const [errorMessage, setErrorMessage] = useState({});

  //   Changing isValid true or false
  useEffect(() => {
    setIsValid(Object.keys(errorMessage).length === 0);
  }, [errorMessage]);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    // Showing the file to the placeholder
    const reader = new FileReader();
    reader.onload = function (e) {
      photoRender.current.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleInput = (e) => {
    // Removing Initial Error of Form
    setErrorMessage((prev) => {
      let errorMessage = { ...prev };
      delete errorMessage.error;
      return errorMessage;
    });

    let name = e.target.name;
    let value = e.target.value;
    setformValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    // FormValidation Verification
    // Validating Requireds
    required.forEach((requiredFieldname) => {
      if (requiredFieldname == name) {
        validateRequired(requiredFieldname, value);
      }
    });
    // Validating Email
    email.forEach((emailFieldname) => {
      if (emailFieldname == name) {
        validateEmail(emailFieldname, value);
      }
    });
    // Validating Phone
    phone.forEach((phoneFieldname) => {
      if (phoneFieldname == name) {
        validatePhone(phoneFieldname, value);
      }
    });
  };

  //   Form Validation Functions

  //   Required Validation
  const validateRequired = (inputName, value) => {
    if (value == "") {
      setErrorMessage((prev) => {
        return {
          ...prev,
          [inputName]: `${inputName} is * required`,
        };
      });
    } else {
      setErrorMessage((prev) => {
        let errorMessageCopy = { ...prev };
        delete errorMessageCopy[inputName];
        return errorMessageCopy;
      });
    }
  };

  // Email Validation
  const validateEmail = (inputName, value) => {
    let reg = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!reg.test(value)) {
      setErrorMessage((prev) => {
        return {
          ...prev,
          [inputName]: `your input "${value}" is not Valid Email`,
        };
      });
    } else {
      setErrorMessage((prev) => {
        let errorMessageCopy = { ...prev };
        delete errorMessageCopy[inputName];
        return errorMessageCopy;
      });
    }
  };

  // Bd Phone Number Validation
  const validatePhone = (inputName, value) => {
    let reg = /^(?:\+?8801|01)[3456789]\d{8}$/;
    if (!reg.test(value)) {
      setErrorMessage((prev) => {
        return {
          ...prev,
          [inputName]: `your input "${value}" number not a valid Phone number`,
        };
      });
    } else {
      setErrorMessage((prev) => {
        let errorMessageCopy = { ...prev };
        delete errorMessageCopy[inputName];
        return errorMessageCopy;
      });
    }
  };

  console.log(errorMessage);
  const formData = new FormData();
  const submitForm = (e) => {
    e.preventDefault();
    console.log("isValid is " + isValid);
    if (!isValid) {
      setMessage("Form is Not Valid");
      return;
    }
    setMessage(null);
    setIsLoading(true);

    Object.keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });
    // Appending the image file
    const file = photoInput.current.files[0];
    formData.append("photo", file);

    // Calling the api
    fetch(environment.apiUrl + "users/createAccount.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Netowrk respose was not ok");
        }
        return response.text();
      })
      .then((data) => {
        setIsLoading(false);
        setMessage(data);
      });
  };
  return { submitForm, handleInput, handlePhotoChange, photoRender, photoInput, isLoading, message, formValues, isValid, errorMessage };
};

// class FormValidator {
//   constructor(formData) {
//     this.errorMessage = {};
//     for (const [key, value] of formData.entries()) {
//       this[key] = value;
//     }
//   }
//   validateRequired(name) {
//     const nameInputValue = this[name];
//     if (nameInputValue == "") {
//       this.errorMessage[name] = `${name} is required`;
//     } else {
//       delete this.errorMessage[name];
//     }
//   }

//   isFormValid() {
//     if (this.errorMessage === {}) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   getErrorMessage() {
//     return this.errorMessage;
//   }
// }

export default useFormSubmit;
