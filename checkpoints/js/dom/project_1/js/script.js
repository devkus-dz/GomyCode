let hearts  = document.querySelectorAll('.fa-heart');
let trash   = document.querySelectorAll('.fa-trash-alt');
let like   = false;

// Ajust quantity - increment
document.querySelectorAll('div .fa-plus-circle').forEach(elem => {
    elem.addEventListener('click', function(){
        let unitPrice   = parseFloat(elem.parentNode.previousElementSibling.textContent.replace('$', '').trim());
        let quantity    = parseFloat(elem.nextElementSibling.textContent) + 1;
        let total       = parseFloat(document.querySelector('.total').textContent.replace('$', '').trim());

        elem.nextElementSibling.textContent = quantity;
        document.querySelector('.total').textContent = (total + unitPrice) + ' $';
    });
});

// Ajust quantity - decrement
document.querySelectorAll('div .fa-minus-circle').forEach(elem => {
    elem.addEventListener('click', function(){
        let unitPrice   = parseFloat(elem.parentNode.previousElementSibling.textContent.replace('$', '').trim());
        let quantity    = parseFloat(elem.previousElementSibling.textContent) - 1;
        let total       = parseFloat(document.querySelector('.total').textContent.replace('$', '').trim());

        elem.previousElementSibling.textContent = (quantity < 0) ? 0 : quantity;
        document.querySelector('.total').textContent = ((total - unitPrice) < 0) ? 0 + ' $' : (total - unitPrice) + ' $';
    });
});

// likes
hearts.forEach(elem => {
    elem.addEventListener('click', function() {
        if (like){
            elem.style.color = '#000';
            like = false;
        }else{
            elem.style.color = 'red';
            like = true;
        }
    });
});

// Remove Element
trash.forEach(elem => {
    elem.addEventListener('click', function () {
        let total       = parseFloat(document.querySelector('.total').textContent.replace('$', '').trim());
        let quantity    = parseFloat(elem.parentNode.previousElementSibling.querySelector('.quantity').textContent.replace('$', '').trim());
        let unitPrice   = parseFloat(elem.parentNode.parentNode.querySelector('.unit-price').textContent.replace('$', '').trim());
        
        elem.parentNode.parentNode.parentNode.remove();
        // we update the cart total after deleting element
        document.querySelector('.total').textContent = (total - (unitPrice*quantity)) + ' $';
    });
});