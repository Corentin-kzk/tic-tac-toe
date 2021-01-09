var pos_alredy_cliked = "";
var player = "X";

/**
 * 
 * @param {event} event
 * @returns {number} 
 */
function who_is_cliked(event) {
    const id_selection = event.target.getAttribute('id');
    return id_selection;
}
/**
 * 
 * @param {String} id_x 
 */
function draw_X(id_x) {
    var img = document.createElement("img");
    img.src = "../images/croix.png";

    var div = document.getElementById(id_x);
    div.appendChild(img);
}
/**
 * dra
 * @param {String} id_x 
 */
function draw_O(id_o) {
    var img = document.createElement("img");
    img.src = "../images/rond.png";

    var div = document.getElementById(id_o);
    div.appendChild(img);
}

/**
 * put the X or the O on the right place
 * @param {Number} position 
 * @param {Array} tab 
 */
function put_X_or_O(position, tab) {
    if (tab[position] != "") return tab;
    if (player == "X") {
        player = "O"
        tab[position] = "X";
        draw_X(position);
        return (tab);
    }
    if (player == "O") {
        player = "X"
        tab[position] = "O";
        draw_O(position);
        return (tab);
    }
}
/**
 * 
 * @param {Array} result
 * check the good place for win X. 
 */
function win_x(result) {
    if (result[0] == "X" && result[4] == "X" && result[8] == "X") {
        return true;
    }
    if (result[2] == "X"  && result[4] == "X" && result[6] == "X") {
        return true;
    }
    if (result[0] == "X" && result[1] == "X" && result[2] == "X") {
        return true
    }
    if (result[3] == "X" && result[4] == "X" && result[5] == "X") {
        return true
    }
    if (result[6] == "X" && result[7] == "X" && result[8] == "X") {
        return true
    }
    if (result[0] == "X" && result[3] == "X" && result[6] == "X") {
        return true
    }
    if (result[1] == "X" && result[4] == "X" && result[7] == "X") {
        return true
    }
    if (result[2] == "X" && result[5] == "X" && result[8] == "X") {
        return true
    }
    return false;
}
/**
 * 
 * @param {Array} result
 * check the good place for win O. 
 */
function win_o(result) {
    if (result[0] == "O" && result[4] == "O" && result[8] == "O") {
        return true;
    }
    else if (result[2] == "O" && result[4] == "O" && result[6] == "O") {
        return true;
    }
    else if (result[0] == "O" && result[1] == "O" && result[2] == "O") {
        return true;
    }
    else if (result[3] == "O" && result[4] == "O" && result[5] == "O") {
        return true;
    }
    else if (result[6] == "O" && result[7] == "O" && result[8] == "O") {
        return true;
    }
    else if (result[0] == "O" && result[3] == "O" && result[6] == "O") {
        return true;
    }
    else if (result[1] == "O" && result[4] == "O" && result[7] == "O") {
        return true;
    }
    else if (result[2] == "O" && result[5] == "O" && result[8] == "O") {
        return true;
    }
    return false;
}
function draw_win_popin(tab_of_res){
    if (win_x(tab_of_res)) {
        var pop_in = document.getElementById("win");
        pop_in.style.display = "block";
        var title = document.getElementById("title");
        title.textContent = "X player WIN"
    }
    if (win_o(tab_of_res)) {
        var pop_in = document.getElementById("win");
        pop_in.style.display = "block";
        var title = document.getElementById("title");
        title.textContent = "O player WIN"
    }
    if (tab_of_res.indexOf("") == -1) {
        var pop_in = document.getElementById("win");
        pop_in.style.display = "block";
        var title = document.getElementById("title");
        title.textContent = "nobody WIN"
    }
}
/**
 * game launcher
 */
function play() {
    var tab_of_res = ["", "", "", "", "", "", "", "", ""];

    const parent = document.querySelector('section');
    parent.addEventListener('click', (event) => {
        pos_alredy_cliked = who_is_cliked(event);
        setTimeout(function() {tab_of_res = put_X_or_O(pos_alredy_cliked, tab_of_res);}, 200);
        setTimeout(function () {
            draw_win_popin(tab_of_res);
            var btnClose = document.getElementById('btn_close');
            btnClose.addEventListener('click', (closed) => {
                document.location.reload();
            });
        }, 500);
    });
}

play();