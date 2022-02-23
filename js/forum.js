var defaultThreads=[
      {
          id:1,
          title:"EcoFarmThread 1",
          author:"EcoAuthor",
          date:Date.now(),
          content:"Thread Content 1",
          comments:
          [
              {
                  author:"EcoUser",
                  date:Date.now(),
                  content:"Eco park...."

              },
              {
                  author:"EcoUser",
                  date:Date.now(),
                  content:"Eco park....."
              }
          ]
      },
      {
        id:2,
        title:"EcoFarmThread 2",
        author:"EcoAuthor",
        date:Date.now(),
        content:"Thread Content 2",
        comments:
        [
            {
                author:"EcoUser",
                date:Date.now(),
                content:"Eco park...."

            },
            {
                author:"EcoUser",
                date:Date.now(),
                content:"Eco park....."
            }
        ]
    }

  ]

  var threads;
  if (localStorage && localStorage.getItem('threads')){
      threads = JSON.parse(localStorage.getItem('threads'));

  }
  else{
      threads=defaultThreads;
      localStorage.setItem('threads', JSON.stringify(defaultThreads));
  }