$("#searchBtn").click(function() {
    let query = $("#searchBox").val();
    let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`;

    $.getJSON(url, function(data) {
      $('#results").empty();

      data.items.forEach(book => {
        let title = book.volumeInfo.title;
        let id = book.id;
        let img = book.volumeInfo.imageLinks?.thumbnail || ";

        $("#results").append(`
            <div>
                <img src="${img}">
                <a href='details.html?id=${id}">${title}</a>
            </div>
              `);
      });
    });
});
