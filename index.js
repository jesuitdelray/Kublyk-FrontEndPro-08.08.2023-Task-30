function redirectToURL(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "http://" + url
    }
    window.location.href = url
}

document.getElementById("httpButton").addEventListener("click", function () {
    redirectToURL("www.example.com")
})

document.getElementById("httpsButton").addEventListener("click", function () {
    redirectToURL("https://www.example.com")
})
