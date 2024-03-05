console.log('bobbyhadz.com');

const form = document.getElementById('my-form');

// ✅ Get all form elements
const formElements = Array.from(form.elements);

formElements.forEach(element => {
  console.log(element);
});

console.log('--------------------------');

// ✅ Get only the input elements in a form
const onlyInputs = document.querySelectorAll('#my-form input');

onlyInputs.forEach(input => {
  console.log(input);
});
