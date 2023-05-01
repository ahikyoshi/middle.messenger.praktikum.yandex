const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Плагин для загрузки html в проект
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // подгрузка стилей в проект
const TerserPlugin = require("terser-webpack-plugin");

// Задает переменные режимов билда
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
// Имя файла в зависимости от режима билда, обычные названия или с хешем
const filename = (ext) => `[name].${ext}` 

module.exports = {
  context: path.resolve("./src"),          // Папка исходников
  mode: "development",                             // Режим сборки
  entry: path.resolve("./src/index.ts"),  // Входной файл сборки
  output: {                                        // Настройки сборки проекта
    filename: `./js/${filename("js")}`,          // Название основнова файла
    path: path.resolve("./app"),       // Папка с собранным проектом
    assetModuleFilename: isProd === true ? 'assets/[hash][ext][query]' : 'assets/[name][ext]', // Название файлов ассетов
    clean: true                                  // Очистка файлов старой сборки
  },
  devServer: {                                     // Hot сервер
    static: {                                    // Откуда брать статику
      directory: path.join("../src")
    },
    historyApiFallback: true,
    hot: true,                                   // Режим горячей перезагрузки
    port: 3000,                                  // Порт для сервера
    // https: true
  },
  devtool: isProd ? false : 'source-map', // карта при нажатии на f12
  plugins: [
    new HtmlWebpackPlugin({
      // favicon: './assets/icons/header/logotype.png', // иконка проекта
      template: './index.html', // указание основного html документа
      filename: 'index.html', // Назване основного html файла
      minify: { // Минифицирование html
        collapseWhitespace: isProd
      }
    }),
    new MiniCssExtractPlugin({ filename: `./styles/${filename('css')}` }),    // Формат имени файла css file
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, use: [{loader: "ts-loader", options: {configFile: path.resolve(__dirname, "./tsconfig.json")}}], exclude: /node_modules/, },
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] }, // правила для css
      { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }, // правила для scss
      { test: /\.(png|jpe?g|gif|svg|webp|ico)$/i, type: 'asset/inline' }, // правила для изображений
      { test: /\.(woff2?|eot|ttf|otf)$/i, type: 'asset/resource', }, // правила для шрифтов
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  performance: {
    maxEntrypointSize: 2000000,
    maxAssetSize: 2000000
  },
}
