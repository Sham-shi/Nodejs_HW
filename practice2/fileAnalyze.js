const fs = require("fs");
const chalk = require('chalk').default; //.default - для "type": "commonjs"

const header = chalk.bold.red;
const separator = chalk.green('<! ---------------------------------------------------------------------------------- !>');
const countHeader = chalk.bold.rgb(158, 91, 4);
const textColor = chalk.bgGray.magenta;
const wordsColor = chalk.bgGrey.cyan;

async function dataAnalyzeAsync() {
    try {
        const text = await fs.promises.readFile("data.txt", "utf-8");

        if (!text) {
            console.log("Файл пуст");
            return;
        }

        const lines = text.split("\n");
        const words = text.toLowerCase().match(/[\p{L}\p{M}-]+/gu).sort() || [];
        
        console.log(header("Текст файла"));
        console.log(textColor(text));
        console.log(separator);

        console.log(countHeader("Количество строк: "), lines.length);
        console.log(separator);

        console.log(countHeader("Количество слов: "), words.length);
        console.log(separator);

        console.log(header("Слова:"));
        console.log(wordsColor(...words));
        console.log(separator);

        console.log(countHeader("Количество символов: "), text.length);
    }
    catch (error) {
        console.error(error);
    }
}

module.exports = {dataAnalyzeAsync};