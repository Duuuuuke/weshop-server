const mysql = require('think-model-mysql');
const isDev = think.env === 'development';
module.exports = {
  handle: mysql,
  database: 'wetrip',
  prefix: 'wetrip_',
  encoding: 'utf8mb4',
  host: isDev ? '127.0.0.1' : 'obbedutnxoxu.mysql.sae.sina.com.cn',
  port: isDev ? '3306' : '10215',
  user: isDev ? 'root' : 'wetrip',
  password: isDev ? 'Zcm199335' : 'Zcm199335',
  dateStrings: true
};
