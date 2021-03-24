
var topic1 = document.getElementById("topic1");
var comment1 = document.getElementById("comment1");
var comment2 = document.getElementById("comment2");
topic1 = 0;
comment1 = 0;
comment2 = 0;

function postFunction() { 
    var text1 = document.getElementById("text1").value
    if (topic1 == 0) {
        document.getElementById("topic1").innerText = text1
        topic1 = text1
    }
    else if (comment1 == 0) {
        document.getElementById("comment1").innerText = text1
        comment1 = text1
    }
    else if (comment2 == 0) {
        document.getElementById("comment2").innerText = text1
        comment2 = text1
    }
}

function clearFunction() { 
    topic1 = 0;
    comment1 = 0;
    comment2 = 0;
    document.getElementById("topic1").innerText = "";
    document.getElementById("comment1").innerText = "";
    document.getElementById("comment2").innerText = "";
    document.getElementById("text1").value = "";
    alert("WOODZ COMEBACK  Single Album 'SET' ");
}
