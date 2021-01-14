// chrome.runtime.sendMessage({todo: "showPageAction"});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo === "clickScrape") {
        console.log('clicked')
        // setTimeout(function(){ window.location.reload(); }, 3000);
        // window.location.reload()
        // var requestUrl = "https://api.sourceacademy.nus.edu.sg/v1/assessments";
        // // var auth = "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjYWRldCIsImV4cCI6MTU5NzgzOTE5NiwiaWF0IjoxNTk3ODM1NTk2LCJpc3MiOiJjYWRldCIsImp0aSI6Ijg2ODIzZTA4LTc5OGYtNGI1OC1iMjI3LWQ4ODkyMzc1MjZmYyIsIm5iZiI6MTU5NzgzNTU5NSwic3ViIjoiODUiLCJ0eXAiOiJhY2Nlc3MifQ.jWePzN9NdeBc-bPRxOnFn9g53ZiyzuEN1pHGaI6tmEA4wx3J60COZJ_taCzEJG2HxWWGNypfwzTWwsi1IpdVnA";
        // var auth = "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjYWRldCIsImV4cCI6MTU5Nzg0NTcyMCwiaWF0IjoxNTk3ODQyMTIwLCJpc3MiOiJjYWRldCIsImp0aSI6IjI5ODBjODliLWE1YTEtNDNjNy1hN2RjLWMzMDRjZDJmYThmMCIsIm5iZiI6MTU5Nzg0MjExOSwic3ViIjoiODUiLCJ0eXAiOiJhY2Nlc3MifQ.3_ODAoAljAsvmVPK4CZAtL9R7G2G989g3qhwBUpKJjcUlhSk2M3xSLHgSu01qvHHhEjD8ZvnBXPfY1CZ7wdp6g";
        // $.ajax({
        //     url: requestUrl,
        //     type: "GET",
        //     beforeSend: function (xhr) {
        //         xhr.setRequestHeader('Authorization', auth);
        //     },
        //     success: function(res) {
        //         const tasksData = $.map(res, function(d){
        //             return {
        //                 id: d.id,
        //                 number: d.number,
        //                 title: d.title,
        //                 openAt: d.openAt,
        //                 closeAt: d.closeAt
        //             }
        //         })
        //         console.log(res);
        //         console.log(tasksData);
        //         chrome.storage.sync.set({'tasks': tasksData});
        //     }
        // });
    }
});


