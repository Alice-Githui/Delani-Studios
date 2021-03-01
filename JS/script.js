
/*let number = 7
alert("this is a whole number"); */

//what we do hover effect
jQuery(".design").hover(function() {
        jQuery("#show-design").toggle();

 })

 jQuery(".development").hover(function() {
    jQuery("#show-development").toggle();

})

jQuery(".productmanagement").hover(function() {
    jQuery("#show-productmanagement").toggle();

})

//alert on submission of details
jQuery('#mc-embedded-submit').click(function(){
    alert('We have received your message. Thank you for reaching out to us!')
})

//show the projects name on hover
jQuery(".portfolio-logo").hover(function(){
        jQuery('.portfolio-name').toggle();

}) 

/*
jQuery("#res-img").hover(function(){
    jQuery("#restaurant").show();
})

jQuery("#burned-img").hover(function(){
    jQuery("#burned").toggle();
})

jQuery("#form-img").hover(function(){
    jQuery("#forminput").toggle();
})

jQuery("#elena-img").hover(function(){
    jQuery("#elena").toggle();
})

jQuery("#mic-img").hover(function(){
    jQuery("#micjarrey").toggle();
}) */