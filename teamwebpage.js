var oldPicture;
var oldTarget = 0;
function restorePicture() {
    if (oldTarget == 1) {
        document.getElementById("laura").src = "https://media-exp1.licdn.com/dms/image/C4D03AQFQn78PrzwV7A/profile-displayphoto-shrink_400_400/0/1602724956102?e=1641427200&v=beta&t=yGmQPYrBhmyzFesoQ8OCQYMMYLlhGH9YFfzOQqwAoHc";
    }
    if (oldTarget == 2) {
        document.getElementById("mia").src = "https://i.pinimg.com/280x280_RS/15/a0/b0/15a0b09c9b2bf5f1e20f2fd168bada70.jpg";
    }
    if (oldTarget == 3) {
        document.getElementById("indira").src = "https://media-exp1.licdn.com/dms/image/C4D03AQEyNoDRpqX4fA/profile-displayphoto-shrink_800_800/0/1567534037035?e=1641427200&v=beta&t=CEsCPTqKLUcWeGr6UhaPihByjicVuqsAt84elXFWl7I";
    }
    if (oldTarget == 4) {
        document.getElementById("evan").src = "https://media-exp1.licdn.com/dms/image/C5603AQHQHUa8_o0dZg/profile-displayphoto-shrink_800_800/0/1566932666557?e=1641427200&v=beta&t=0E5ARGpYMw0xmG8OfDrXP6MLE7qsvFsM4Y9lmpa-Wy0";
    }
}
function toggleVis(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function changeLaura(event) {
    event.target.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.yuDZUz0vA0SpV5W9it8s_wHaFI%26pid%3DApi&f=1";
    restorePicture();
    oldTarget = 1;
    document.getElementById("lauradescription").innerHTML = "Laura is a <strong> senior </strong> majoring in BAIT.";
}

document.getElementById("laura").addEventListener("click", changeLaura);

function changeMia(event) {
    event.target.src = "https://media-exp1.licdn.com/dms/image/C4D03AQEHjRLpNieiJQ/profile-displayphoto-shrink_200_200/0/1572629093224?e=1641427200&v=beta&t=j3cj8JkvkXz8nycKfSNS0tfFyjmhE6c8NG8xD7X0Xxk";
    restorePicture();
    oldTarget = 2;
    document.getElementById("miadescription").innerHTML = "Mia is a <strong> senior </strong> majoring in Finance and BAIT.";
}

document.getElementById("mia").addEventListener("click", changeMia);

function changeIndira(event) {
    event.target.src = "https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/120244545_743584619834145_3286924671549926986_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-oqG4XqsOn4AX_vo0mr&_nc_ht=scontent-lga3-2.xx&oh=f9d428c1848d7caf8cca45f8ef05745f&oe=61A6010F";
    restorePicture();
    oldTarget = 3;
    document.getElementById("indiradescription").innerHTML = "Indira is a <strong> senior </strong> majoring in Finance and BAIT.";
}

document.getElementById("indira").addEventListener("click", changeIndira);

function changeEvan(event) {
    event.target.src = "https://miro.medium.com/max/1400/1*KhuDkpTeacAOIYPKjcN8wg.jpeg";
    restorePicture();
    oldTarget = 4;
    document.getElementById("evandescription").innerHTML = "Evan is a <strong> senior </strong> majorirng in BAIT and Supply Chain.";
}

document.getElementById("evan").addEventListener("click", changeEvan);



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
