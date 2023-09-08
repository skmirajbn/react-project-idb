import { useRef, useState } from "react";
import environment from "../environment/environment";

const useFormSubmit = function () {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [formValues, setformValues] = useState({});
  const photoRender = useRef();
  const photoInput = useRef();
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
    let name = e.target.name;
    let value = e.target.value;
    setformValues({
      ...formValues,
      [name]: value,
    });
  };

  const formData = new FormData();
  const submitForm = (e) => {
    setMessage(null);
    setIsLoading(true);
    e.preventDefault();
    Object.keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });
    // Appending the image file
    const file = photoInput.current.files[0];
    formData.append("photo", file);

    console.log(formData);
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
        console.log(data);
        setIsLoading(false);
        setMessage(data);
      });
  };
  return { submitForm, handleInput, handlePhotoChange, photoRender, photoInput, isLoading, message, formValues };
};

export default useFormSubmit;
