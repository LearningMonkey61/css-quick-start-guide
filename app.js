function runCSS(codeFrom, toApply) {
     const re = new RegExp('^((\{)|(\}))+','g'); 

    const text = document.getElementById(codeFrom);
    const output = document.getElementById(toApply);
    var code = "{" + text.value + "}";

    if(text.value.match(re)){
        alert("CSS CODE INJECTION DETECTED, REMOVE { or } FROM THE CODE_AREA") ; 
        return 
    }

    var SHEET_ID_CHECK = document.getElementById(codeFrom + toApply + '-style');

    if (SHEET_ID_CHECK != null) {
        var sheetParent = SHEET_ID_CHECK.parentNode;
        sheetParent.removeChild(SHEET_ID_CHECK);
    }

    var sheet = document.createElement('style');
    sheet.type = 'text/css';
    sheet.id = codeFrom + toApply + '-style';
    sheet.innerHTML = "." + codeFrom + toApply + code;

    document.body.appendChild(sheet);
    output.classList.add(codeFrom + toApply);
}