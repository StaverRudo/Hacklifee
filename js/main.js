$(document).ready(function() {
    const mMenuBtn = $(".m-menu-button");
    const mMenu = $(".m-menu");
    mMenuBtn.on("click", function() {
        mMenu.toggleClass("active");
    });
});




jQuery(document).on( 'click', '.test', function() {  
    jQuery('.test').removeClass("active-button");
  jQuery(this).addClass("active-button");
});