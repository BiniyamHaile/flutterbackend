const { Translate } = require('@google-cloud/translate').v2;

// Instantiates a client
const translate = new Translate({ key: 'AIzaSyD1fe-bwXE5gRpWsIvl_nBg8MGEGOMFZ-A' });

 async function translateText(text, targetLanguage) {
  try {
    // Translates the text
    const [translation] = await translate.translate(text, targetLanguage);
    return translation;
  } catch (error) {
    console.error('Translation error:', error); 
  }
}

// Example usage
// const textToTranslate = "Hello, how are you?";
// const targetLanguage = "am"; // Amharic

// translateText(textToTranslate, targetLanguage)
//   .then(translatedText => {
//     console.log('Translated text:', translatedText);
//   })
//   .catch(error => {
//     console.error('Translation error:', error);
//   });
module.exports = translateText