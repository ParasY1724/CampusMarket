document.querySelectorAll('.smimg').forEach(function(element) {
    element.addEventListener('click', function(event) {
        var imgId = this.id;
        var link = this.src;
        
        document.querySelector('.image').src = link;
        console.log(link);
    });
});
