const time = document.getElementById("time")

setTimeout(async () => { 
    let now = await fetch("http://localhost:3000/time");
    let data = await now.json();
    time.innerText = `CZAS: \n${data.message}`;
 }, 3000)