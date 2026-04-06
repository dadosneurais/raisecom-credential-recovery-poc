
function pad(num, n) 
{
    var len = num.toString().length;
    while(len < n) {
        num = '0' + num;
        len++;
    }
    return num;
}
	
	
	
function encrypt(passwd)
{
//	var words = CryptoJS.enc.Utf8.parse(passwd); // WordArray object
//	var base64 = CryptoJS.enc.Base64.stringify(words);
	var rand = pad(parseInt(255 * Math.random()),3);
	var rand2 =  parseInt(7 * Math.random());
	var opt = (rand >> rand2);
	var passwdarr = passwd.split("");	
  
  for(var i = 0; i < passwdarr.length;i++){
		passwdarr[i] = (passwdarr[i].charCodeAt()) ^ opt;
  }
  
  var words = CryptoJS.enc.Utf8.parse(passwdarr); // WordArray object
  var base64 = CryptoJS.enc.Base64.stringify(words);
  var result = base64 + rand + rand2;	
	
 return result;	
};