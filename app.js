function runCSS(codeFrom, toApply) {
    const text = document.getElementById(codeFrom);
    const output = document.getElementById(toApply);
    var code = "{" + text.value + "}";


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