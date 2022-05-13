const userEmail = document.querySelector('[name="email"]'); //элемент input с email
const btn = document.querySelector(".submit_button");       //элемент button
//------------------------------------------------------------------------------------------------------
//по клику на кнопку должен появиться alert с текстом
//------------------------------------------------------------------------------------------------------
btn.addEventListener("click", function () { alert(`В список рассылки добавлен: ${userEmail.value}`); });