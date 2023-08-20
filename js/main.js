//navbar scroll
window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 10) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

//API Status
fetch("https://api.mevisual.top/getLightZoneStatus")
    .then(response => response.json())
    .then(data => {
        var status = document.getElementById("server-status-status");
        var online = document.getElementById("server-status-online");
        var max = document.getElementById("server-status-max");
        var version = document.getElementById("server-status-version");
        var latency = document.getElementById("server-status-latency");
        status.innerHTML = data.status;
        online.innerHTML = data.online;
        max.innerHTML = data.max;
        version.innerHTML = data.version;
        latency.innerHTML = data.latency + "s";
    })
    .catch(error => {
        var status = document.getElementById("server-status-status");
        var online = document.getElementById("server-status-online");
        var max = document.getElementById("server-status-max");
        var version = document.getElementById("server-status-version");
        var latency = document.getElementById("server-status-latency");
        status.innerHTML = "请求超时";
        online.innerHTML = "Null";
        max.innerHTML = "Null";
        version.innerHTML = "请求超时";
        latency.innerHTML = "请求超时";
    });

setTimeout(() => {
    var status = document.getElementById("server-status-status");
    var online = document.getElementById("server-status-online");
    var max = document.getElementById("server-status-max");
    var version = document.getElementById("server-status-version");
    var latency = document.getElementById("server-status-latency");
    if (status.innerHTML === "") {
        status.innerHTML = "请求超时";
    }
    if (online.innerHTML === "") {
        online.innerHTML = "Null";
    }
    if (max.innerHTML === "") {
        max.innerHTML = "Null";
    }
    if (version.innerHTML === "") {
        version.innerHTML = "请求超时";
    }
    if (latency.innerHTML === "") {
        latency.innerHTML = "请求超时";
    }
}, 8000);
