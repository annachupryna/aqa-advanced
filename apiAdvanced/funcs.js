`
Завдання 1

Напишіть функцію за допомогою Axios, яка навмисно надсилає запит на неправильну URL-адресу, 
викликаючи помилку. Потім за допомогою Jest напишіть тест, який перевіряє, 
чи правильно обробляється помилка та чи повертається належне повідомлення про помилку.
`
const axios = require('axios');
async function requestToWrongUrl() {
    try {
        await axios.get('https://httpbin.org/notValidUrl', { params: { random: 5 } });
    } catch (error) {
        console.error('Error fetching data:', error);
        return error.response.status; //Error fetching data: AxiosError: Request failed with status code 404
    }
}

//module.exports = { requestToWrongUrl };

`
Завдання 2

Назва: Testing Request Headers and Params Складність: середній
Створіть функцію за допомогою Axios, щоб зробити запит, який містить 
кастомні хедери та параметри URL-адреси. Напишіть тест Jest, щоб переконатися, 
що заголовки та параметри правильно включені в запит.
`
async function customHeadersAndUrlParams(headers, params) {
    const response = await axios.get(
        "https://httpbin.org/get",
        {
            headers,
            params
        }
    );
    return response.data;

}



async function fakeCustomHeadersAndUrlParams(headers, params) {
    const response = await axios.get("https://fake-url.com", {
        headers,
        params
    });

    return response.data;
}

module.exports = { requestToWrongUrl, customHeadersAndUrlParams, fakeCustomHeadersAndUrlParams };