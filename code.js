function pustoTu(dane) 
{
    if (dane.length == 0) 
    {
        return true;
    }
    else
    { 
        return false;
    }

}

function bialeZnaki(string)
{
    return string.trim().length === 0;    
}

function weryfikacja() 
{

    var formularz = document.forms["user_data"];
    komunikat = "Nie można zostawić pustego pola"; ;
    for (var i = 0; i < formularz.elements.length; i++) 
    {
        var element = formularz.elements[i];
        if(walidujNapis(element.value) == false)
            {
                walidujNapis(element.value, komunikat);
                return false;
            }    
    }
    return true;
}


function walidujNapis(string, komunikat)
{
    if(bialeZnaki(string))
    {
        alert(komunikat);
        return false;
    }
    else
    {
        return true;
    }
}


