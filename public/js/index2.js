// // Module Revealing Pattern

// var api = function(){
//     let $submitBtn = $("#submit");

//      // Add event listeners to the submit and delete buttons
//      $submitBtn.on("click", searchForBooks);

//      function searchForBooks(event){

//         var search = $('#example-text').val();
//         var $exampleList = $("#example-list");

//         if(search != ''){
//             $.ajax({
//                 headers: {
//                 "Content-Type": "application/json"
//                 },
//                 type: "GET",
//                 url: "https://www.googleapis.com/books/v1/volumes?",
//                 data: {q: search}
//             }).done(function(data){
//                //console.log(data);
//                $exampleList.empty();

//                for(i=0;i < data.items.length;i++){

//                 // Write out data for debug
//                 console.log(data.items[i].volumeInfo);

//                 // Build a tag
//                 let a = "<a>" + data.items[i].authors + ':' + data.items[i].volumeInfo.title + "</a>"

//                 // Append to list
//                 $exampleList.append(a);

//                }

//                //exampleList.append(data);
//             })
//         }

//         return false;

//      }
//      return {
//          searchForBook: searchForBooks
//      }
//  }();

//  api.searchForBook();
