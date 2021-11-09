var oldPicture;
var oldTarget = 0;
function restorePicture() {
    if (oldTarget == 1) {
        document.getElementById("Sejal1").src = "https://i.pinimg.com/236x/02/6a/cc/026acca08fb7beea6bd4ecd430e312bd.jpg";
    }
    if (oldTarget == 2) {
        document.getElementById("Bhakti1").src = "https://i.pinimg.com/564x/40/e6/29/40e629ddb31aedacdf2c5e94cfc7e23a.jpg";
    }
    if (oldTarget == 3) {
        document.getElementById("Sruthi1").src = "https://www.nicepng.com/png/full/161-1615668_super-mario-sunshine-princess-peach.png";
}
function toggleVis(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function changeSejal(event) {
    event.target.src = "2nd pic link";
    restorePicture();
    oldTarget = 1;
    document.getElementById("sejaldescription").innerHTML = "";
}

document.getElementById("Sejal1").addEventListener("click", changesejal);

function changeBhakti(event) {
    event.target.src = "https://onmyojiguide.com/wp-content/uploads/2017/01/Glowing-Grass-Onmyoji-Shikigami-Icon-2-1.png";
    restorePicture();
    oldTarget = 2;
    document.getElementById("bhaktidescription").innerHTML = "Bhakti <strong>loves<strong> Brown Sugar Bubble tea ^_^";
}

document.getElementById("Bhakti1").addEventListener("click", changeBhakti);

function changeSruthi(event) {
    event.target.src = "";
    restorePicture();
    oldTarget = 3;
    document.getElementById("sruthidescription").innerHTML = "";
}

document.getElementById("Sruthi1").addEventListener("click", changeSruthi);



function reset() {
    document.getElementById("laura").src = "https://media-exp1.licdn.com/dms/image/C4D03AQFQn78PrzwV7A/profile-displayphoto-shrink_400_400/0/1602724956102?e=1641427200&v=beta&t=yGmQPYrBhmyzFesoQ8OCQYMMYLlhGH9YFfzOQqwAoHc";
    document.getElementById("lauradescription").innerHTML = "";

    document.getElementById("mia").src = "https://i.pinimg.com/280x280_RS/15/a0/b0/15a0b09c9b2bf5f1e20f2fd168bada70.jpg";
    document.getElementById("miadescription").innerHTML = "";

    document.getElementById("indira").src = "https://media-exp1.licdn.com/dms/image/C4D03AQEyNoDRpqX4fA/profile-displayphoto-shrink_800_800/0/1567534037035?e=1641427200&v=beta&t=CEsCPTqKLUcWeGr6UhaPihByjicVuqsAt84elXFWl7I";
    document.getElementById("indiradescription").innerHTML = "";

    document.getElementById("evan").src = "https://media-exp1.licdn.com/dms/image/C5603AQHQHUa8_o0dZg/profile-displayphoto-shrink_800_800/0/1566932666557?e=1641427200&v=beta&t=0E5ARGpYMw0xmG8OfDrXP6MLE7qsvFsM4Y9lmpa-Wy0";
    document.getElementById("evandescription").innerHTML = "";
}
document.getElementById("reset").addEventListener("click", reset);
