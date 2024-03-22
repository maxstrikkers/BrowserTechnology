# THIS IS A SCHOOL PROJECT

## Week 1
In de eerste week stortte ik me volledig op de structuur van de HTML. Het was belangrijk dat het formulier van begin af aan goed in elkaar zat. Daarom zorgde ik ervoor dat de basis van het formulier semantisch correct was, gebruikmakend van elementen zoals <form>, <fieldset>, <legend>, en <label>. Dit hielp niet alleen voor de toegankelijkheid, maar ook om alles netjes georganiseerd te houden.

```
<form action="vraag2.html">
            <section> <!-- VRAAG 1 SECTION -->
                <h2>1. Gegevens van de overledene 💀</h2>
                <fieldset> <!-- FIELDSET VRAAG 1 -->
                    <fieldset> <!-- VRAAG 1A -->
                        <legend><span>1a</span>Vul hier de gegevens in van de overledene.</legend>
                        <label>Voorletter(s)
                            <input type="text" id="voorLetters" name="voorLettersOverledene" required title="Vul de voorletters van de overledene in, gescheiden door punten (bijv. A.B.C.)." pattern="^[a-zA-Z](?:\.[a-zA-Z])*[.]$">
                            <!-- Pattern uitleg: Moet beginnen met precies één letter (hoofdletters of kleine letters), gevolgd door nul of meer groepen bestaande uit een punt gevolgd door precies één letter. De string moet eindigen met een punt. Voorbeeld: A., B., A.B., a.b.c. -->
                            <span class="errorMessage" style="display: none;">Vul de voorletters van de overledene in, gescheiden door punten (bijv. A.B.C.).</span>
                        </label>
                        <label>Tussenvoegsel(s)
                            <input type="text" id="tussenVoegsel" name="tussenVoegselOverledene" pattern="^[a-z\s]+$" title="Gebruik alleen kleine letters en spaties.">
                            <!-- Pattern uitleg: Alleen kleine letters en spaties zijn toegestaan. -->
                            <span class="errorMessage" style="display: none;">Gebruik alleen kleine letters en spaties.</span>
                        </label>
                        <label>Achternaam
                            <input type="text" id="achterNaam" name="achterNaamOverledene" required pattern="^[a-zA-Z\s\-']+$" title="Gebruik alleen letters, spaties, apostrofs of koppeltekens.">
                            <!-- Pattern uitleg: Accepteert letters, spaties, apostrofs ('), en koppeltekens (-). -->
                            <span class="errorMessage" style="display: none;">Gebruik alleen letters, spaties, apostrofs of koppeltekens.</span>
                        </label>
                        <label>Overlijdensdatum
                            <input type="date" id="overlijdensDatum" name="overlijdensDatum" required title="Selecteer de overlijdensdatum.">
                            <span class="errorMessage" style="display: none;" >Selecteer de overlijdensdatum.</span>
                        </label>
                    </fieldset> <!--EINDE VRAAG 1A-->
                    
                    <fieldset> <!-- VRAAG 1B -->
                        <legend><span>1b</span>Was de overledene getrouwd of had de overledene een geregistreerd partner op het moment van overlijden?</legend>
                        <fieldset>
                            <label>
                                <input type="radio" class="showConditionalContent" name="partnerStatus" value="ja"  required title="Vul deze vraag in" data-show-hide="conditionalVraag1b">
                                Ja
                            </label>
                            <label>
                                <input type="radio" class="hideConditionalContent" name="partnerStatus" value="nee" required title="Vul deze vraag in" data-show-hide="conditionalVraag1b">
                                Nee. Ga verder met vraag 1c.
                            </label> 
                        </fieldset>
                        <div class="hiddenContent" id="conditionalVraag1b"> <!-- CONDITIONAL VRAGEN ALLEEN ZICHTBAAR ALS 1b (1E VRAAG) JA IS (HEEFT JAVASCRIPT NODIG) -->
                            <fieldset> <!-- CONDITIONAL VRAAG 1-->
                                <legend>Hadden de overledene en diens echtgenoot of geregistreerd partner huwelijkse of partnerschapsvoorwaarden laten vastleggen in een notariële akte?</legend>
                                <label>
                                    <input type="radio" class="showConditionalContent" name="voorwaardenNotarieelVastgelegd" value="ja" data-show-hide="condtionalUpload1b">
                                    Ja. Stuur een kopie van de akte mee met de aangifte.
                                </label>
                                <label>
                                    <input type="radio" class="hideConditionalContent" name="voorwaardenNotarieelVastgelegd" value="nee" data-show-hide="condtionalUpload1b">
                                    Nee
                                </label>
                                <fieldset class="hiddenContent" id="condtionalUpload1b"> <!--CONDITIONAL FILE UPLOAD ALLEEN ZICHTBAAR ALS DE VORIGE VRAAG JA IS (HEEFT JAVASCRIPT NODIG)-->
                                    <label>
                                        Upload akte
                                        <input type="file" name="uploadAkte">
                                    </label>
                                </fieldset>
                            </fieldset>
                            <fieldset> <!-- CONDITIONAL VRAAG 2-->
                                <legend>Hadden de overledene en diens partner een finaal verrekenbeding?</legend>
                                <label>
                                    <input type="radio" id="finaalVerrekenbedingJa" name="finaalVerrekenbeding" value="ja">
                                    Ja
                                </label>
                                <label>
                                    <input type="radio" id="finaalVerrekenbedingNee" name="finaalVerrekenbeding" value="nee">
                                    Nee
                                </label>
                            </fieldset>
                            <label> <!-- CONDITIONAL VRAAG 3-->
                                Datum huwelijkse of partnerschapsvoorwaarden
                                <input type="date" name="datumVoorwaardenHuwelijkPartner">
                            </label>
                        </div>
                    </fieldset> <!--EINDE VRAAG 1B-->
                    <fieldset> <!--VRAAG 1C-->
                        <legend><span>1c</span>Had de overledene kinderen?</legend>
                        <fieldset>
                            <label>
                                <input class="showConditionalContent" type="radio" name="overledenKinderenStatus" value="ja" data-show-hide="conditionalVraag1c">
                                Ja
                            </label>
                            <label>
                                <input class="hideConditionalContent" type="radio" name="overledenKinderenStatus" value="nee" data-show-hide="conditionalVraag1c">
                                Nee. Ga verder met vraag 1d.
                            </label>
                            <!-- CONDITIONAL VRAGEN ALLEEN ZICHTBAAR ALS 1C (1E VRAAG) JA IS (HEEFT JAVASCRIPT NODIG) -->
                            <fieldset class="hiddenContent" id="conditionalVraag1c">
                                <legend>Is 1 van deze kinderen eerder overleden dan de overledene voor wie u nu aangifte doet?</legend>
                                <label>
                                    <input class="showConditionalContent" type="radio" class="showContent" name="overledenKinderenStatus2" value="ja" data-show-hide="conditionalVraag1c.1">
                                    Ja
                                </label>
                                <label>
                                    <input class="hideConditionalContent" type="radio" name="overledenKinderenStatus2" value="nee" data-show-hide="conditionalVraag1c.1">
                                    Nee. Ga verder met vraag 1d.
                                </label>
                                <!-- CONDITIONAL VRAAG ALLEEN ZICHTBAAR EEN VAN DE KINDEREN EERDER IS OVERLEDEN (HEEFT JAVASCRIPT NODIG) -->
                                <fieldset class="hiddenContent" id="conditionalVraag1c.1">
                                    <legend>Had dit overleden kind zelf kinderen?</legend>
                                    <label>
                                        <input type="radio" class="showContent" name="overledenKinderenStatus3" value="ja">
                                        Ja
                                    </label>
                                    <label>
                                        <input type="radio" name="overledenKinderenStatus3" value="nee">
                                        Nee
                                    </label>  
                                </fieldset>
                            </fieldset>
                        </fieldset>
                    </fieldset> <!--EINDE VRAAG 1C-->
                    <fieldset> <!-- VRAAG 1D -->
                        <legend><span>1d</span>Had de overledene een testament?</legend>
                        <fieldset>
                            <label>
                                <input class="showConditionalContent" type="radio" name="overledenKinderenStatus4" value="ja" data-show-hide="conditionalVraag1d">
                                Ja
                            </label>
                            <label>
                                <input class="hideConditionalContent" type="radio" name="overledenKinderenStatus4" value="nee" data-show-hide="conditionalVraag1d">
                                Nee. Ga verder met vraag 2.
                            </label>
                            <!-- CONDITIONAL VELDEN ALLEEN ZICHTBAAR ALS 1D (1E VRAAG) JA IS (HEEFT JAVASCRIPT NODIG) -->
                            <fieldset class="hiddenContent" id="conditionalVraag1d">
                                <legend>Vul de gegevens in van de notaris die het testament heeft opgemaakt en de datum van het testament.</legend>
                                <label>
                                    Protocolnummer notaris
                                    <input type="text" name="protocolNummerNotaris" pattern="^\d{6}$" title="Voer alstublieft 6 cijfers in">
                                    <span class="errorMessage" style="display: none;">Voer alstublieft 6 cijfers in</span>
                                    <!-- Pattern uitleg: 6 cijfers -->
                                    <label>Voorletter(s)
                                        <input type="text" id="voorLettersNotaris" name="voorLetters" title="Vul de voorletters van de overledene in, gescheiden door punten (bijv. A.B.C.)." pattern="^[a-zA-Z](?:\.[a-zA-Z])*$">
                                        <!-- Pattern uitleg: Moet beginnen met precies één letter (hoofdletters of kleine letters), gevolgd door nul of meer groepen bestaande uit een punt gevolgd door precies één letter. De string mag niet beginnen met een punt en mag ook niet eindigen met een punt. Voorbeeld: A, B, A.B, a.b.c, A.b -->
                                        <span class="errorMessage" style="display: none;">Vul de voorletters van de overledene in, gescheiden door punten (bijv. A.B.C.).</span>
                                    </label>
                                    <label>Tussenvoegsel(s)
                                        <input type="text" id="tussenVoegselNotaris" name="tussenVoegsel" pattern="^[a-z\s]+$" title="Gebruik alleen kleine letters en spaties.">
                                        <!-- Pattern uitleg: Alleen kleine letters en spaties zijn toegestaan. -->
                                        <span class="errorMessage" style="display: none;">Gebruik alleen kleine letters en spaties.</span>
                                    </label>
                                    <label>Achternaam
                                        <input type="text" id="achterNaamNotaris" name="achterNaam" pattern="^[a-zA-Z\s\-']+$" title="Gebruik alleen letters, spaties, apostrofs of koppeltekens.">
                                        <!-- Pattern uitleg: Accepteert letters, spaties, apostrofs ('), en koppeltekens (-). -->
                                        <span class="errorMessage" style="display: none;">Gebruik alleen letters, spaties, apostrofs of koppeltekens.</span>
                                    </label>
                                <label>
                                    Vestigingsplaats
                                    <input type="text" name="vestigingsPlaatsNotaris">
                                </label>
                                <label>
                                    Datum van het testament of van de laatste wijziging
                                    <input type="date">
                                </label>
                            </fieldset>
                        </fieldset>
                    </fieldset> <!--EINDE VRAAG 1D-->
                </fieldset> <!--EINDE VRAAG 1-->
            </section> <!--EINDE VRAAG 1 SECTION-->
            <input class="button" type="submit" value="Volgende"> <!--VOLGENDE BUTTON-->
        </form>

```

## Week 2
Ik heb JavaScript gebruikt om ervoor te zorgen dat bepaalde vragen in het formulier alleen zichtbaar zijn als dat nodig is. Dit heb ik "conditional vragen" genoemd. Als je bijvoorbeeld aangeeft dat de overledene getrouwd was, verschijnen er extra vragen die relevant zijn. Als je 'nee' kiest, blijven die vragen verborgen.

Om dit te kunnen doen, heb ik gebruikgemaakt van data-attributen. Op die manier heb ik een systeem gecreëerd dat altijd werkt, mits de HTML correct is opgesteld. Ik heb drie soorten knoppen: één om content te tonen, één om content te verbergen, en één om content zowel te tonen als te verbergen. De knoppen krijgen allemaal een van deze classes: `showConditionalContent`, `hideConditionalContent`, `showAndHideConditionalContent`. Vervolgens geef ik data mee die aangeeft wat er moet gebeuren: tonen, verbergen, of beide. Dit doe ik bij het tonen of verbergen op de volgende manier: `data-show-hide="conditionalVraag1b"`. Hiermee geef ik aan dat het item met de ID `conditionalVraag1b` getoond of verborgen moet worden, afhankelijk van de class van de knop. In het geval van zowel tonen als verbergen, geef ik de data op de volgende manier mee: `data-show="beconNummerAdviseur"` `data-hide="bsnRsinGemachtigde,protocolNummerNotaris"`. Als er meerdere items getoond of verborgen moeten worden, worden de ID's van deze items gescheiden door een komma opgegeven.

In dit geval roep ik eerst alle knoppen op met de class voor het tonen of verbergen van content. Hierna loop ik door elke knop heen en voeg ik een eventlistener toe aan elke knop. In het geval van de verbergknop roep ik de `showHide`-functie op met de parameters `button` (de knop) en `none`. In het geval van de toonknop doe ik hetzelfde, maar dan met de parameter `block`.

```
buttonsToShowContent.forEach(button => button.addEventListener('change', () => showHideContent(button, 'block')));

// FUNCTIE OM CONDITIONAL ITEMS TE LATEN ZIEN OF TE HIDEN DEZE ZORGT ER VOOR DAT OF IETS GETOOND WORD OF IETS VERBORGEN WORD
function showHideContent(button, style){
  const idToShowHide = button.dataset.showHide;
  if (idToShowHide.includes(',')){
    const idToShowHideArray = idToShowHide.split(',');
    idToShowHideArray.forEach(id => {
      document.getElementById(id).style.display = style;
    });
  } else if (!idToShowHide.includes(',')){
      document.getElementById(idToShowHide).style.display = style;
    };
};

```

Tekst Vereenvoudigen

Ik heb ook de teksten naast de 'ja' en 'nee' opties simpeler gemaakt. Eerst stond er bij 'nee' soms iets als "Nee. Ga door naar vraag 2." Nu staat er alleen "Nee". Dit maakt het formulier duidelijker en minder rommelig.

```
const conditionalLabels = document.querySelectorAll('input.hideConditionalContent, input.showConditionalContent'); // HAALT ALLE LABELS OP MET BIJVOORBEELD NEE. GA DOOR NAAR VRAAG 1C
//ZORGT ERVOOR DAT ALLE TEXT ZOALS GA DOOR NAAR VRAAG 1C WEG GAAT ZODAT ER ALLEEN MAAR JA OF NEE STAAT
conditionalLabels.forEach(element => {
  innerText = element.parentNode.childNodes[2]
  if (innerText.textContent.includes("Nee")){
    innerText.textContent = "Nee";
  } else if (innerText.textContent.includes("Ja")){
    innerText.textContent = "Ja";
  }
});

```

