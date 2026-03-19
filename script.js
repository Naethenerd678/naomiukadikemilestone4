$("#searchBtn").click(function() {
    let query = $("#searchBox").val();
    if(!query) return; 

    let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`;

    $.getJSON(url, function(data) {
      $("#results").empty();

      data.items.forEach(book => {
        let title = book.volumeInfo.title;
        let id = book.id;
        let img = book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/128x192?text=No+Image";


        

        let authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(",")  : "Unknown author";
        let description = book.volumeInfo.description ? book.volumeInfo.description : "No description available.";
        $("#results").append(`
            <div class="book-item">
                <img src="${img}">
                <a href="details.html?id=${id}">${title}</a>
                <p><strong>Authors:</strong> ${authors}</p>
                <p>${description}</p>
            </div>
              `);
      });
    });
});
