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

  var threads=[
      {
          id:1,
          title:"Thread 1",
          author:"Aaron",
          date:Date.now(),
          content:"Thread Contend",
          comments:
          [
              {
                  author:"EcoUser",
                  date:Date.now(),
                  content:"Hey there"

              },
              {
                  author:"EcoUser",
                  date:Date.now(),
                  content:"Hey There"
              }
          ]
      },
      {
        id:2,
        title:"Thread 2",
        author:"Aaron",
        date:Date.now(),
        content:"Thread Contend",
        comments:
        [
            {
                author:"EcoUser",
                date:Date.now(),
                content:"Hey there"

            },
            {
                author:"EcoUser",
                date:Date.now(),
                content:"Hey There"
            }
        ]
    }

  ]