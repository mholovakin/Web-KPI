const key = '';
const f1 = 'https://cloud.iexapis.com/v1/stock/market/batch?symbols=MA,MHK,MLR,WBS,ZBH,F,RACE,XIACF,TOYOF,AASL,AAPL,UBSFY,ROCK,IBM,SAENF,UKR&types=quote&filter=symbol,companyName,latestPrice,latestUpdate&token=' + key;
const f2 = 'https://cloud.iexapis.com/v1/stock/market/batch?symbols=MA,MHK,MLR,WBS,ZBH,F,RACE,XIACF,TOYOF,AASL,AAPL,UBSFY,ROCK,IBM,SAENF,UKR&types=quote&filter=latestPrice,latestUpdate&token=' + key;
let timeUpdate = 0;

let req = new XMLHttpRequest();
req.open('GET', f1);


function buildTable(data) {
    let tbody = document.createElement('tbody');

    let nextTimeUpdate = document.createElement('span');
    nextTimeUpdate.id = 'updateTime';
    document.getElementById('Caption').appendChild(nextTimeUpdate);

    for (i in data) {
        let tr = document.createElement('tr');
        tr.id = i;
        for (j in data[i].quote) {
            let td = document.createElement('td');
            td.id = j;
            td.textContent = data[i].quote[j];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    document.getElementById('MainTable').appendChild(tbody);
}


req.onreadystatechange = function() {
    if (req.readyState === 4 && req.status === 200) {
        buildTable(calculateLatestUpdate(JSON.parse(req.responseText)));
        timeUpdate = Date.now();
    }
}

req.send('');

function updateTable(data) {
    for (i in data) {
        for (j in data[i].quote) {
            document.getElementById('MainTable').querySelector('#' + i + '> #' + j).textContent = data[i].quote[j];
        }
    }
}

function calculateLatestUpdate(data) {
    let temp = Date.now();
    for (i in data) {
        data[i].quote.latestUpdate = Math.round((data[i].quote.latestUpdate - temp) / 10) / 100;
    }
    return data;
}

let interval$ = rxjs.interval(20000)
    .subscribe(() => {
        req.open('GET', f2);
        req.onreadystatechange = function() {
            if (req.readyState === 4 && req.status === 200) {
                updateTable(calculateLatestUpdate(JSON.parse(req.responseText)));
                timeUpdate = Date.now();
            }
        }

        req.send('');
    });

let updateTime$ = rxjs.interval(100)
    .subscribe(() => {
        if (timeUpdate != 0) {
            document.getElementById('updateTime').textContent = Math.round((Date.now() - timeUpdate) / 100) / 10;
        }
    });