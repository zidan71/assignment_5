


function getInputValueById(id){

    const getValue = document.getElementById(id).value;
    const getValueFinal = parseFloat(getValue);
    return getValueFinal;

}


function getTextValueById(id){

    const text = document.getElementById(id).innerText;
    const   textValue = parseFloat(text);
    return textValue;

};


function toggleButton(id){

    document.getElementById('show-history').classList.add('hidden');
    document.getElementById('history-hide').classList.add('hidden');


    const find = document.getElementById(id).classList.remove('hidden');
    return find;


}