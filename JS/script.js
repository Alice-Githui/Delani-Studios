
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