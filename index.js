document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#input');
    const translateBtn = document.querySelector('#translateBtn');
    const output = document.querySelector('#output');

    async function translateText() {
        const text = input.value;
        const data = encodeURIComponent(text);

        const response = await fetch(`https://api.mymemory.translated.net/get?q=${data}&langpair=uk|en`);
        console.log(response);
        const result = await response.json();
        console.log(result)

        output.textContent = result.responseData.translatedText;
    }
    
    translateBtn.addEventListener('click', translateText)
});