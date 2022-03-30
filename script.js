console.log(1);
var main = document.getElementById("amogus");
fetch("getXml.php")
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.log("data", data);
    var i = 1;
    var _loop_1 = function (woj) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.className = "clickable";
        td.innerText = woj[0];
        var k = i;
        td.addEventListener("click", function () {
            for (var _i = 0, _a = Array.from(main.children); _i < _a.length; _i++) {
                var child = _a[_i];
                main.removeChild(child);
            }
            main.innerHTML = "ładowanie...";
            var j = k;
            fetch("getXml.php?woj=true&number=" + String(j * 2))
                .then(function (res) { return res.json(); })
                .then(function (dt) {
                main.innerHTML = "";
                console.log("dt", dt);
                for (var _i = 0, dt_1 = dt; _i < dt_1.length; _i++) {
                    var city = dt_1[_i];
                    var trr = document.createElement("tr");
                    var tdd = document.createElement("td");
                    tdd.innerText = city[0];
                    trr.appendChild(tdd);
                    main.appendChild(trr);
                }
            });
        });
        tr.appendChild(td);
        main.appendChild(tr);
        i++;
    };
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var woj = data_1[_i];
        _loop_1(woj);
    }
});
