//Adds event listeners to all the images on the webpage and calls the addOpacity and removeOpacity functions when the user hovers over or moves away from the image.//

function configureListeners() {
    let images = document.getElementsByTagName('img')


    for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i].id).addEventListener('mouseover',addOpacity,false);
        document.getElementById(images[i].id).addEventListener('mouseout',removeOpacity,true);            
    } 
}
//Adds the 'dim' class to the image and calls the getProductInfo function with the id of the image hovered over.//
function addOpacity(event) {
    this.classList.add('dim');
    getProductInfo(event.target.id);     
}
//Removes the 'dim' class from the image and clears the price and color name displayed.//
function removeOpacity(event) {
    this.classList.remove('dim');
    let element = document.getElementById('color-price');
    element.textContent = '';
        
    let color = document.getElementById('color-name');
    color.textContent = ''; 
}

//Retrieves the price and color name for the selected paint color and updates the price and color name displayed.//
function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':
            price = '$14.99';
            colorName ='Lime Green';
            updatePrice(colorName,price)                
            break;           
        case 'pn2':
            price = '$11.14';
            colorName ='Medium Brown';
            updatePrice(colorName,price)
            break;            
        case 'pn3':
            price = '$22.99';
            colorName ='Royal Blue';
            updatePrice(colorName,price)
            break;   
        case 'pn4':
            price = '$13.42';
            colorName ='Solid Red';
            updatePrice(colorName,price)
            break;   
        case 'pn5':
            price = '$21.98';
            colorName ='Solid White';
            updatePrice(colorName,price)
            break;   
        case 'pn6':
            price = '$4.99';
            colorName ='Solid Black'
            updatePrice(colorName,price)        
            break;   
        case 'pn7':
            price = '$8.22';
            colorName ='Solid Cyan';
            updatePrice(colorName,price) 
            break;   
        case 'pn8':
            price = '$11.99';
            colorName ='Solid Purple ';
            updatePrice(colorName,price)   
            break;   
        case 'pn9':
            price = '$14.99';
            colorName ='Solid Yellow';
            updatePrice(colorName,price)
            
            break;   
        default:              
    }

//Updates the price and color name displayed on the webpage.

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price')
        colorPrice.textContent = price;
        
        let color = document.getElementById('color-name');
        color.textContent = colorName
    }
    
}
