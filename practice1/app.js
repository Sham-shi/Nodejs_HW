const chalk = require('chalk').default; //.default - для "type": "commonjs"

const greet = require("./utils/message");
console.log(chalk.bold.italic.blueBright(greet.greeting()));
console.log(chalk.green('<! ---------------------------------------------------------------------------------- !>'));

console.log(chalk.bold.red('Версия node.js - ') + chalk.cyan(process.version));
console.log(chalk.green('<! ---------------------------------------------------------------------------------- !>'));

console.log(chalk.bold.red('Текущие время и дата: '), chalk.magenta(new Date().toLocaleString()));
console.log(chalk.green('<! ---------------------------------------------------------------------------------- !>'));

const path = require('path');
console.log(chalk.bold.red('Путь к текущей папке:'));
console.log(chalk.bold.rgb(158, 91, 4)(' - ("process.cwd()" => ') + chalk.blue.italic.underline(process.cwd()));
console.log(chalk.bold.rgb(158, 91, 4)(' - ("path.dirname(__filename)" => ') + chalk.blue.italic.underline(path.dirname(__filename)));
console.log(chalk.bold.rgb(158, 91, 4)(' - ("__dirname" => ') + chalk.blue.italic.underline(__dirname));
console.log(chalk.green('<! ---------------------------------------------------------------------------------- !>'));

console.log(chalk.bold.red('Путь к текущему файлу: ') + chalk.blue.italic.underline(__filename));
console.log(chalk.green('<! ---------------------------------------------------------------------------------- !>'));

const os = require('os');
console.log(chalk.bold.red('Имя ОС: '), chalk.bold.blue(os.type()));
console.log(chalk.green('<! ---------------------------------------------------------------------------------- !>'));