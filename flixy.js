// Variables
var flixyVersion = '0.1';

// Prototypes
Object.prototype.getFlixy = function(){
    return this.getAttribute('data-flixy');
};

// Functions
function getFlixyElements()
{
    return document.querySelectorAll('[data-flixy]');
}

function adaptForSmartphone(isSmartphone)
{
    var smartphoneElements = getFlixyElements();
    smartphoneElements.forEach(function(smartElem){
        let dir = smartElem.style.flexDirection;
        let fli = smartElem.getFlixy();
        let forColumn = fli == 'r to c';
        let forRow = fli == 'c to r';
        if(
            (forColumn && dir != 'column' && isSmartphone) ||
            (forRow && dir == 'row' && !isSmartphone)
        )
            smartElem.style.flexDirection = 'column';
        else if(
            (forRow && dir != 'row' && isSmartphone) ||
            (forColumn && dir == 'column' && !isSmartphone)
        )
            smartElem.style.flexDirection = 'row';
    });
}

function testResponsive()
{
    if(window.innerWidth <= 768)
    {
        adaptForSmartphone(true);
    }
    else
    {
        adaptForSmartphone(false);
    }
}

// Events
window.addEventListener('resize', testResponsive);
testResponsive();
