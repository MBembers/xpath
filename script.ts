console.log(1);
var main = document.getElementById("amogus");
fetch("getXml.php")
  .then((response) => response.json())
  .then((data) => {
    console.log("data", data);
    for (let woj of data) {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      td.className = "clickable";
      td.innerText = woj[0];
      td.addEventListener("click", () => {
        for (let child of Array.from(main.children)) main.removeChild(child);
        main.innerHTML = "ładowanie...";
        fetch("getXml.php?woj=true&name=" + woj[0])
          .then((res) => res.json())
          .then((dt) => {
            main.innerHTML = "";
            console.log("dt", dt);
            for (let city of dt) {
              let trr = document.createElement("tr");
              let tdd = document.createElement("td");
              tdd.innerText = city[0];
              trr.appendChild(tdd);
              main.appendChild(trr);
            }
          });
      });
      tr.appendChild(td);
      main.appendChild(tr);
    }
  });
