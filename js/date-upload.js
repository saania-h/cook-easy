const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleDateString("en-GB", {day: "2-digit", month: "short", year: "numeric"});
document.getElementById("upload-date").textContent = "Uploaded on: " + formattedDate;
