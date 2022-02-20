//Hiding function

function showComments() {
    var commentArea = document.getElementById("comments");
    if (commentArea.style.display === "none") {
        commentArea.style.display = "block";
    } else {
        commentArea.style.display = "none";
    }
  }

function showReplies() {
    var replyArea = document.getElementById("replies");
    if (replyArea.style.display === "none") {
        replyArea.style.display = "block";
    } else {
        replyArea.style.display = "none";
    }
  }