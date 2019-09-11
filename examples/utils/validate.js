/* 是否是公司邮箱*/
export function isWscnEmail(str) {
  const reg = /^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@wallstreetcn\.com$/i
  return reg.test(str.trim())
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 数字*/
export function isNumber(str) {
  const reg = /^[0-9]+$/
  return reg.test(str)
}

/* 小数*/
export function isFloat(str) {
  const reg = /^[0-9.]+$/
  return reg.test(str)
}

/* 正小数*/
export function isPositiveFloat(str) {
  const reg = /^\d+\.\d+$/
  return reg.test(str)
}

/* 保留两位小数的正小数*/
export function isPositiveFloat2(str) {
  const reg = /^\d+\.?\d{0,2}$/
  return reg.test(str)
}

/* 验证key*/
export function validateKey(str) {
  const reg = /^[a-z_\-:]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/* 手机号码是否合法 */
export function validatePhone(str) {
  const reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/
  return reg.test(str)
}

/* 固定电话是否合法 */
export function validateLandline(str) {
  const reg = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/
  return reg.test(str)
}

/* 6-16位任何字符包括下划线的密码正则 */
export function validatePassword(str) {
  const reg = /^\w{6,16}$/
  return reg.test(str)
}

/* 判断输入字符串是否为空或者全部都是空格 */
export function isNull(str) {
  if (str === null) return true
  if (str === '' || str === undefined) return true
  var regu = '^[ ]+$'
  var re = new RegExp(regu)
  return re.test(str)
}

/* 判断输入字符是否是字母或中文或下划线组成 */
export function isName(str) {
  const reg = /^[a-zA-Z_\u4e00-\u9fa5]+$/
  return reg.test(str)
}

/* 判断输入字符是否是字母或数字或下划线组成 */
export function isUserName(str) {
  const reg = /^[a-zA-Z_0-9]+$/
  return reg.test(str)
}

/* 判断输入字符是否是字母或数字组成 */
export function isLetterOrNumber(str) {
  const reg = /^[a-zA-Z0-9]+$/
  return reg.test(str)
}

/** 不能携带特殊字符 **/
export function isok(str) {
  const reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
  return reg.test(str)
}

