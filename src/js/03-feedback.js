import throttle from 'lodash.throttle';

const formTextArea = document.querySelector(`textarea`);
const form = document.querySelector(`form`);
const emailLabel = document.querySelector(`input`);
const STORAGE_KEY = `feedback-form-state`;
const formData = {};
//
const populateTextArea = evt => {
  const messageToSave = localStorage.getItem(STORAGE_KEY);
  const parcedMessage = JSON.parse(messageToSave);
  if (messageToSave) {
    formTextArea.value = parcedMessage.message;
  }
};
//
populateTextArea();
//
const saveData = evt => {
  const value = evt.target.value;
  const name = evt.target.name;
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const submitForm = evt => {
  evt.preventDefault();
  const {
    elements: { email },
  } = evt.currentTarget;
  if (email.value === '') {
    return alert(`Please fill all fields`);
  }
  console.log(formData);
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
};

form.addEventListener(`submit`, submitForm);
form.addEventListener(`input`, throttle(saveData, 500));
