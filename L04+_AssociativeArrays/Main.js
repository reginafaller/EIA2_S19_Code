var L04_AssocArraysAndExport;
(function (L04_AssocArraysAndExport) {
    window.addEventListener("load", init);
    function init(_event) {
        // alle Daten in der Konsole ausgeben. Bitte dort zuerst mal nachschauen!
        console.log(L04_AssocArraysAndExport.data);
        // von den Datensätzen, die unter dem Schlüssel "reverse" zu finden sind, den zweiten im DOM darstellen
        displayHeteroPredef(L04_AssocArraysAndExport.data["reverse"][1]);
        // das hier ist uninteressant, nur eine horizontale Linie zur optischen Trennung
        document.body.appendChild(document.createElement("hr"));
        // alle Daten im DOM darstellen
        displayHomoVar(L04_AssocArraysAndExport.data);
        // Listener für Click installieren
        document.addEventListener("click", handleClick);
    }
    function displayHomoVar(_homoVar) {
        // mit diesem Schleifenkonstrukt wird über alle Schlüssel iteriert (Typannotation ist hier nicht erlaubt)
        for (let key in _homoVar) {
            // zwischenspeichern des Werts, der mit dem Schlüssel assoziiert ist
            let value = _homoVar[key];
            // hübsche Sachen, die man mit der Konsole noch machen kann
            console.group(key);
            console.dir(value);
            console.groupEnd();
            // der Wert ist ein Array, also wird noch darüber iteriert
            for (let i = 0; i < value.length; i++)
                // und die einzelnen Datensätze darin angezeigt
                displayHeteroPredef(value[i]);
        }
    }
    function displayHeteroPredef(_heteroPredef) {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        // was unter dem Schlüssel text abgelegt ist, wird für die Fieldset-Legende genommen
        legend.innerText = _heteroPredef.text;
        // ...was unter words zu finden ist, als Inhalt...
        fieldset.innerText = _heteroPredef.words.toString();
        // ... und was als value eingetragen wird soll das Attribut "result" werden
        fieldset.setAttribute("result", _heteroPredef.value.toString());
        // und wenn truth wahr ist, soll der Text rot dargestellt werden
        if (_heteroPredef.truth)
            fieldset.style.color = "red";
        fieldset.appendChild(legend);
        document.body.appendChild(fieldset);
    }
    function handleClick(_event) {
        let target = _event.target;
        if (target.tagName != "fieldset")
            alert(target.getAttribute("result"));
    }
})(L04_AssocArraysAndExport || (L04_AssocArraysAndExport = {}));
//# sourceMappingURL=Main.js.map