var currentTab;
var version = "1.0";
var results;
var data_arr;
var exclude_list = ["ATTD", "MYROOM"];

var test_env = false;
function getNow() {
    if(test_env) {
        return new Date("11 Sep 2020");
    } else {
        return new Date(Date.now());
    }
}

function onAttach(tabId) {
    chrome.debugger.sendCommand({ //first enable the Network
        tabId: tabId
    }, "Network.enable");

    chrome.debugger.onEvent.addListener(allEventHandler);
    // setTimeout(function(){ chrome.debugger.detach({tabId: tabId}, null); }, 10000);
}


function allEventHandler(debuggeeId, message, params) {
    if (currentTab.id != debuggeeId.tabId) {
        return;
    }
    if (message == "Network.responseReceived") { //response return 
        chrome.debugger.sendCommand({
            tabId: debuggeeId.tabId
        }, "Network.searchInResponseBody", {
            "requestId": params.requestId,
            "query": "close"
        }, function(res) {
            if (res && res.result && res.result.length > 0) {
                try {
                    var arr = JSON.parse(res.result[0].lineContent);
                    data_arr = arr; 
                }
                catch(error) {
                    return
                }
                // chrome.debugger.detach({tabId: currentTab.id});
                // setTimeout(function(){ chrome.debugger.detach({tabId: debuggeeId.tabId}, null); }, 5000);
            }
        });
    }
    
}   

function updateTable(arr) {
    $('#taskTable').bootstrapTable('load', arr);
}

function formatDate(dt) {
    var d = new Date(Date.parse(dt));
    d = new Date(d.setMonth(d.getMonth()+1));
    mydate = ('0' + d.getDate()).slice(-2) + "-" + ('0' + (d.getMonth())).slice(-2) + "-" + d.getFullYear();
    mytime = ('0' + d.getHours()).slice(-2) + ":" + ('0' + d.getMinutes()).slice(-2);
    return mydate + " " + mytime; // 09-10-2020 23:59
}

function compareDates(a,b) {
    a = formatDate(a).split(' ')[0].split('-').reverse().join("");
    b = formatDate(b).split(' ')[0].split('-').reverse().join("");
    // b is after a
    return a < b;
}

function withinMonth(d) {
    var lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    return compareDates(lastMonth, d);
}

function formatDisplayDate(d) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                        ];
    var d_arr = formatDate(d).split('-');
    d_arr[1] = monthNames[parseInt(d_arr[1])-1];
    return d_arr.join('-'); // 09-Oct-2020 23:59
}

function defaultSort(sortName, sortOrder, data) {
    return data.sort();
}

function formatStatus(status, row) {
    if (status === 'submitted') {
        return status;
    } else {
        if (compareDates(row.closeAt, getNow())) {
            return 'closed';
        } else if (status === 'not_attempted') {
            return 'not attempted';
        } else {
            return status; // attempting
        }
    }
}

function formatType(type, row) {
    if (type === 'sidequest') {
        return 'Quest';
    } else {
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
}

function rowStyle(row, index) {
    var today = getNow();
    var tmr = getNow();
    tmr.setDate(today.getDate() + 1);
    if (row.status === 'submitted' || row.status === 'closed') {
        return { classes: 'bg-green' }
    } else if (compareDates(today, row.openAt)){
        return { classes: 'bg-blue'}
    } else if (compareDates(row.closeAt, tmr)){
        if(row.status === 'attempting') {
            return { classes: 'bg-orange'}
        } else {
            return { classes: 'bg-red'}
        }
    } else {
        return { classes: 'bg-yellow'}
    }
}

$(function(){
    $('#dateNow').html(formatDisplayDate(getNow()));

    chrome.storage.sync.get('tasks', function(mydata){
        if(mydata.tasks) {
            updateTable(mydata.tasks);
        }
        
        // default: show todo only
        $('#todo').click();
    });
    $('#todo').click(function(){
        const asc = $('#taskTable').bootstrapTable('getData', {unfiltered: true}).sort((a,b) => (a.closeAt > b.closeAt) ? 1 : ((b.closeAt > a.closeAt) ? -1 : 0));
        updateTable(asc);
        $('#taskTable').bootstrapTable('filterBy', {status: ['attempting', 'not_attempted']});
        $('#all').removeClass("btn-warning");
        $('#all').addClass("btn-secondary");
        $('#todo').removeClass("btn-secondary");
        $('#todo').addClass("btn-warning");
    });

    $('#all').click(function(){
        const desc = $('#taskTable').bootstrapTable('getData', {unfiltered: true}).sort((a,b) => (a.closeAt < b.closeAt) ? 1 : ((b.closeAt < a.closeAt) ? -1 : 0));
        updateTable(desc);
        $('#taskTable').bootstrapTable('filterBy', {});

        $('#todo').removeClass("btn-warning");
        $('#todo').addClass("btn-secondary");
        $('#all').removeClass("btn-secondary");
        $('#all').addClass("btn-warning");
        

    });

    $('#scrape').click(function(){
        chrome.tabs.query({url: "https://sourceacademy.nus.edu.sg/academy/*", active: true, currentWindow: true}, function(tabs){
            if(tabs) {
                currentTab = tabs[0];
                chrome.debugger.attach({ //debug at current tab
                    tabId: currentTab.id
                }, version, onAttach.bind(null, currentTab.id));
                chrome.tabs.sendMessage(tabs[0].id, {action: "clickScrape"});
                
                
                setTimeout(function(){ chrome.tabs.reload(currentTab.id); }, 1000);
                // setTimeout(function(){ chrome.debugger.detach({tabId: currentTab.id}, null); }, 10000);

                setTimeout(function(){ 
                    var now = getNow()
                    var data = data_arr
                        .filter(entry => !exclude_list.includes(entry.number))
                        .filter(entry => withinMonth(entry.closeAt))
                        .map(entry=> {
                            return {
                                title: entry.number + ": " + entry.title, 
                                type: entry.type,
                                status: entry.status !== 'submitted' && compareDates(entry.closeAt, now)
                                            ? 'closed'
                                            : entry.status,
                                openAt: entry.openAt,
                                closeAt: entry.closeAt,
                                xp: entry.xp + "/" + entry.maxXp,
                            };
                        })
                        
                    chrome.storage.sync.set({'tasks': data});
                 }, 7000);
            }
        });
    });
    
    $('#test').click(function(){
        console.log(testData);
        const now = new Date("1 Sep 2020");
        var data = testData
            .filter(entry => !exclude_list.includes(entry.number))
            .filter(entry => withinMonth(entry.closeAt))
            .map(entry=> {
                return {
                    title: entry.number + ": " + entry.title, 
                    type: entry.type,
                    status: entry.status !== 'submitted' && compareDates(entry.closeAt, now)
                                ? 'closed'
                                : entry.status,
                    openAt: entry.openAt,
                    closeAt: entry.closeAt,
                    xp: entry.xp + "/" + entry.maxXp,
                };
            })
        
        chrome.storage.sync.set({'tasks': data});
    });

    $('#reset').click(function(){
        chrome.storage.sync.set({'tasks': []});
    })
});

chrome.storage.onChanged.addListener(function(changes, storageName){
    console.log('storage changed', changes.tasks.newValue);
    if($.isArray(changes.tasks.newValue)) { 
        return updateTable(changes.tasks.newValue);
    }
});


