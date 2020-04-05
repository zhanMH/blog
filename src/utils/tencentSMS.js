const http = require('http');  
  
const qs = require('querystring');  
  
var post_data = {  
    a: 123,  
    time: new Date().getTime()};//这是需要提交的数据  
  
  
var content = qs.stringify(post_data);  
  
var options = {  
    hostname: '127.0.0.1',  
    port: 10086,  
    path: '/pay/pay_callback',  
    method: 'POST',  
    headers: {  
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
    }  
};  
  
var req = http.request(options, function (res) {  
    console.log('STATUS: ' + res.statusCode);  
    console.log('HEADERS: ' + JSON.stringify(res.headers));  
    res.setEncoding('utf8');  
    res.on('data', function (chunk) {  
        console.log('BODY: ' + chunk);  
    });  
});  
  
req.on('error', function (e) {  
    console.log('problem with request: ' + e.message);  
});  
  
// 将数据写入请求体
req.write(content);//注意这个地方  
  
req.end();

/**
 * 发送验证码
 * @param {string} phone 手机号
 * @param {string} code 验证码
 */
async function sendCode(phone,code){
  let reqData={
    
  }
  

  return data
}
module.exports = {
  sendCode
}