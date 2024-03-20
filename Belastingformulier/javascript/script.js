const buttonsToShowContent = document.querySelectorAll(".showConditionalContent");
const buttonsToHideContent = document.querySelectorAll(".hideConditionalContent");
const buttonsToShowAndHideContent = document.querySelectorAll(".showAndHideConditionalContent")


document.documentElement.style.setProperty('--display-state', 'none'); // ZET DE DISPLAY VAN ALLE HIDDEN ELEMENTS OP NONE


//LOOPT DOOR ELKE BUTTON HEEN OM ITEMS TE LATEN ZIEN EN KIJKT WELKE ER AANGEVINKT ZIJN EN ZET DE DISPLAY OP BLOCK
buttonsToShowContent.forEach(button => {
  if (button.checked) {
    showHideContent(button, 'block');
  }
});
buttonsToHideContent.forEach(button => {
  if (button.checked) {
    showHideContent(button, 'none');
  }
});
buttonsToShowAndHideContent.forEach(button =>{
  if (button.checked){
    showAndHideContent(button);
  }
});

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

// FUNCTIE OM CONDITIONAL ITEMS TE LATEN ZIEN EN ANDERE TE VERBERGEN DEZE FUNCTIE ZORGT ER DUS VOOR DAT ER EEN ITEMS GETOOND WORD EN EEN ANDER ITEM VERBORGEN WORD
function showAndHideContent(button){
  const idToHide = button.dataset.hide
  const idToShow = button.dataset.show
  // CHECKT OF ER EEN OF MEERDERE ITEMS VERBORGEN MOETEN WORDEN
  if (idToHide.includes(',')){
    const idToHideArray = idToHide.split(',');
    idToHideArray.forEach(id => {
      document.getElementById(id).style.display = 'none';
    });
  } else if (!idToHide.includes(',')){
    document.getElementById(idToHide).style.display = 'none'; 
  };
  //CHECKT OF ER EEN OF MEERDERE ITEMS GETOOND MOETEN WORDEN
  if (idToShow.includes(',')){
    const idToShowArray = idToShow.split(',');
    idToShowArray.forEach(id => {
      document.getElementById(id).style.display = 'block';
    });
  } else if (!idToShow.includes(',')){
    document.getElementById(idToShow).style.display = 'block';
  };
};

buttonsToHideContent.forEach(button => button.addEventListener('change', () => showHideContent(button, 'none')));

buttonsToShowContent.forEach(button => button.addEventListener('change', () => showHideContent(button, 'block')));

buttonsToShowAndHideContent.forEach(button => button.addEventListener('change',() => showAndHideContent(button)));
