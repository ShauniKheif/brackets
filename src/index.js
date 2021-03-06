module.exports = function check(str, bracketsConfig) {
  // your solution
  str = str.split('');
  let stack = [];
  if (str.length % 2) return false;

  for (let a = 0; a < str.length; a++) {
    for (let i=0; i < bracketsConfig.length; i++) {
      if  ((str[a] == bracketsConfig[i][1]) && (stack[stack.length-1] == bracketsConfig[i][0])) {
        stack.pop();
        continue;
      }
      
      if  (str[a] == bracketsConfig[i][0]) {
        stack.push(str[a]);
      } 
    }
  }
  return stack.length == 0 ? true : false; 
 }
}
