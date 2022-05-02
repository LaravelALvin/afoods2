"user strict";

fetch("/uploads/popularfood.js")
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    console.log(data);
  })
