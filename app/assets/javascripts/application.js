// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets

//= require rails-ujs
//= require activestorage
//= require jquery
//= require cocoon
//= require jquery.raty
//= require_tree .


$(function(){
 $('#restaurant_image').on('change', function (e) {
    var reader = new FileReader();
    reader.onload = function (e) {
        $("#preview").attr('src', e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
});
});

$(function(){
  $('.average-review-rating').raty({
    readOnly: true,
    path: '/assets/',
    score: function() {
      return $(this).attr('data-score')
    }
  });
});


$(function(){
  $('.rating_stars').raty({
    readOnly: true,
    score: function() {
      return $(this).attr('data-score');
    },
    path: '/assets/'
  });
});



$(function(){
 $('#recipe_recipe_images_images').on('change', function (e) {
    var reader = new FileReader();
    reader.onload = function (e) {
        $("#preview").attr('src', e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
});
});


  $('.average-review-rating-index').raty({
      readOnly: true,
      starOn: "<%= asset_path('star-on.png') %>",
      starOff: "<%= asset_path('star-off.png') %>",
      starHalf: "<%= asset_path('star-half.png') %>",
        score: function() {
        return $(this).attr('data-score')
        }
      });
});
