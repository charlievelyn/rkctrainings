/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

( e => {
const { [ 'sk' ]: { dictionary, getPluralForm } } = {"sk":{"dictionary":{"Words: %0":"Slov: %0","Characters: %0":"Znakov: %0","Widget toolbar":"Panel nástrojov ovládacieho prvku","Insert paragraph before block":"Vložiť odstavec pred blok","Insert paragraph after block":"Vložiť odstavec za blok","Press Enter to type after or press Shift + Enter to type before the widget":"Stlačte Enter, ak chcete písať po miniaplikácii, alebo stlačte Shift + Enter, ak chcete písať pred miniaplikáciou","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Klávesy, ktoré sa dajú použiť, keď je vybratý widget (napríklad obrázok alebo tabuľka)","Insert a new paragraph directly after a widget":"Vložiť nový odsek priamo za widgetom","Insert a new paragraph directly before a widget":"Vložiť nový odsek priamo pred widgetom","Move the caret to allow typing directly before a widget":"Presunúť striešku priamo pred widget, aby ste tam mohli písať","Move the caret to allow typing directly after a widget":"Presunúť striešku priamo za widget, aby ste tam mohli písať","Move focus from an editable area back to the parent widget":"Presuňte zameranie z upraviteľnej oblasti späť na rodičovskú miniaplikáciu","Upload in progress":"Prebieha nahrávanie","Undo":"Späť","Redo":"Znova","Rich Text Editor":"Editor s formátovaním","Edit block":"Upraviť odsek","Click to edit block":"Úprava bloku kliknutím","Drag to move":"Potiahnuť a presunúť","Next":"Ďalšie","Previous":"Predchádzajúce","Editor toolbar":"Panel nástrojov editora","Dropdown toolbar":"Panel nástrojov roletového menu","Dropdown menu":"Rozbaľovacia ponuka","Black":"Čierna","Dim grey":"Tmavosivá","Grey":"Sivá","Light grey":"Bledosivá","White":"Biela","Red":"Červená","Orange":"Oranžová","Yellow":"Žltá","Light green":"Bledozelená","Green":"Zelená","Aquamarine":"Akvamarínová","Turquoise":"Tyrkysová","Light blue":"Bledomodrá","Blue":"Modrá","Purple":"Fialová","Editor block content toolbar":"Panel s nástrojmi obsahu bloku editora","Editor contextual toolbar":"Kontextový panel nástrojov editora","HEX":"HEX","No results found":"Neboli nájdené žiadne výsledky","No searchable items":"Žiadne vyhľadávateľné položky","Editor dialog":"Dialóg editora","Close":"Zatvoriť","Help Contents. To close this dialog press ESC.":"Obsah pomocníka. Toto dialógové okno zavriete klávesom Esc.","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Nižšie nájdete zoznam klávesových skratiek, ktoré môžete používať v editore.","(may require <kbd>Fn</kbd>)":"(môže si vyžadovať stlačenie klávesu <kbd>Fn</kbd>)","Accessibility":"Dostupnosť","Accessibility help":"Pomoc so zjednodušením ovládania","Press %0 for help.":"Ak potrebujete pomoc, stlačte %0.","Move focus in and out of an active dialog window":"Presunúť zameranie z/do aktívneho dialógového okna","MENU_BAR_MENU_FILE":"Súbor","MENU_BAR_MENU_EDIT":"Upraviť","MENU_BAR_MENU_VIEW":"Zobraziť","MENU_BAR_MENU_INSERT":"Vložiť","MENU_BAR_MENU_FORMAT":"Formát","MENU_BAR_MENU_TOOLS":"Nástroje","MENU_BAR_MENU_HELP":"Pomoc","MENU_BAR_MENU_TEXT":"Text","MENU_BAR_MENU_FONT":"Font","Editor menu bar":"Lišta ponuky editora","Please enter a valid color (e.g. \"ff0000\").":"Zadajte platnú farbu (napr. „ff0000“).","Insert table":"Vložiť tabuľku","Header column":"Stĺpec hlavičky","Insert column left":"Vložiť stĺpec vľavo","Insert column right":"Vložiť stĺpec vpravo","Delete column":"Odstrániť stĺpec","Select column":"Vybrať stĺpec","Column":"Stĺpec","Header row":"Riadok hlavičky","Insert row below":"Vložiť riadok pod","Insert row above":"Vložiť riadok nad","Delete row":"Odstrániť riadok","Select row":"Vybrať riadok","Row":"Riadok","Merge cell up":"Zlúčiť bunku hore","Merge cell right":"Zlúčiť bunku vpravo","Merge cell down":"Zlúčiť bunku dole","Merge cell left":"Zlúčiť bunku vľavo","Split cell vertically":"Rozdeliť bunku zvislo","Split cell horizontally":"Rozdeliť bunku vodorovne","Merge cells":"Zlúčiť bunky","Table toolbar":"Panel nástrojov tabuľky","Table properties":"Vlastnosti tabuľky","Cell properties":"Vlastnosti bunky","Border":"Orámovanie","Style":"Štýl","Width":"Šírka","Height":"Výška","Color":"Farba","Background":"Pozadie","Padding":"Vnútorný okraj","Dimensions":"Rozmery","Table cell text alignment":"Zarovnanie textu v bunke","Alignment":"Zarovnanie","Horizontal text alignment toolbar":"Horizontálne zarovnanie textu v panely","Vertical text alignment toolbar":"Vertikálne zarovnanie textu v panely","Table alignment toolbar":"Panel zarovnania tabuľky","None":"Žiadna","Solid":"Plná","Dotted":"Bodkovaná","Dashed":"Čiarkovaná","Double":"Dvojitá","Groove":"Drážkovaná","Ridge":"Rámovaná","Inset":"Vložená z vnútra","Outset":"Vložená zvonku","Align cell text to the left":"Zarovnať text bunky doľava","Align cell text to the center":"Zarovnať text bunky na stred","Align cell text to the right":"Zarovnať text bunky doprava","Justify cell text":"Zarovnať text bunky z oboch strán","Align cell text to the top":"Zarovnať text bunky nahor","Align cell text to the middle":"Zarovnať text bunky na stred","Align cell text to the bottom":"Zarovnať text bunky nadol","Align table to the left":"Zarovnať tabuľku doľava","Center table":"Centrovať tabuľku","Align table to the right":"Zarovnať tabuľku doprava","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"Farba má nesprávny formát. Skúste \"#FF0000\", \"rgb(255,0,0)\" alebo \"red\".","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"Hodnota je nesprávna. Skúste \"10px\", \"2em\" alebo jednoducho \"2\".","Enter table caption":"Zadajte popis tabuľky","Keystrokes that can be used in a table cell":"Klávesy, ktoré sa dajú použiť v bunke tabuľky","Move the selection to the next cell":"Presunúť výber do nasledujúcej bunky","Move the selection to the previous cell":"Presunúť výber do predchádzajúcej bunky","Insert a new table row (when in the last cell of a table)":"Vložiť nový riadok tabuľky (keď je označená posledná bunka tabuľky)","Navigate through the table":"Prechádzať tabuľkou","Table":"Tabuľka","Special characters":"Špeciálne znaky","Category":"Kategória","All":"Všetko","Arrows":"Šípky","Currency":"Mena","Latin":"Latinský","Mathematical":"Matematický","Text":"Text","leftwards simple arrow":"jednoduchá šípka doľava","rightwards simple arrow":"jednoduchá šípka doprava","upwards simple arrow":"jednoduchá šípka nahor","downwards simple arrow":"jednoduchá šípka nadol","leftwards double arrow":"dvojitá šípka doľava","rightwards double arrow":"dvojitá šípka doprava","upwards double arrow":"dvojitá šípka nahor","downwards double arrow":"dvojitá šípka nadol","leftwards dashed arrow":"prerušovaná šípka doľava","rightwards dashed arrow":"čiarkovaná šípka doprava","upwards dashed arrow":"čiarkovaná šípka nahor","downwards dashed arrow":"prerušovaná šípka nadol","leftwards arrow to bar":"šípka doľava do zvislej čiary","rightwards arrow to bar":"šípka doprava do zvislej čiary","upwards arrow to bar":"šípka nahor do zvislej čiary","downwards arrow to bar":"šípka nadol do zvislej čiary","up down arrow with base":"Šípka hore-dole od základne","back with leftwards arrow above":"Šípka späť","end with leftwards arrow above":"Šípka koniec","on with exclamation mark with left right arrow above":"ON s výkričníkom so šípkou doľava doprava hore","soon with rightwards arrow above":"čoskoro so šípkou doprava hore","top with upwards arrow above":"TOP so šípkou hore","Dollar sign":"Znak Dolár","Euro sign":"Znak Euro","Yen sign":"Znak Jen","Pound sign":"Znak Libra","Cent sign":"Znak cent","Euro-currency sign":"Mena Euro","Colon sign":"Dvojbodka","Cruzeiro sign":"Mena Cruzeiro","French franc sign":"Mena Francúzsky Frank","Lira sign":"Mena Líra","Currency sign":"Znak meny","Bitcoin sign":"Mena Bitcoin","Mill sign":"Znak Mill","Naira sign":"Znak Naira","Peseta sign":"Znak Peseta","Rupee sign":"Znak Rupee","Won sign":"Znak Won","New sheqel sign":"Nový znak šekelu","Dong sign":"Znak Dong","Kip sign":"Znak Kip","Tugrik sign":"Znak Tugrik","Drachma sign":"Znak Drachma","German penny sign":"Nemecká penny","Peso sign":"Znak Peso","Guarani sign":"Znak Guarani","Austral sign":"Znak Austral","Hryvnia sign":"Znak Hryvnia","Cedi sign":"Znak Cedi","Livre tournois sign":"Znak Livre tournois","Spesmilo sign":"Znak Spesmilo","Tenge sign":"Znak Tenge","Indian rupee sign":"Znak Indická rupia","Turkish lira sign":"Znak Turecká líra","Nordic mark sign":"Znak Nórska marka","Manat sign":"Znak Manat","Ruble sign":"Znak Ruble","Latin capital letter a with macron":"Latinské veľké písmeno a s čiarou","Latin small letter a with macron":"Latinské malé písmeno a s čiarou","Latin capital letter a with breve":"Latinské veľké písmeno a s mäkčeňom","Latin small letter a with breve":"Latinské malé písmeno a s mäkčeňom","Latin capital letter a with ogonek":"Latinské veľké písmeno a s háčikom","Latin small letter a with ogonek":"Latinské malé písmeno a s háčikom","Latin capital letter c with acute":"Latinské veľké písmeno c s dĺžňom","Latin small letter c with acute":"Latinské malé písmeno c s dĺžňom","Latin capital letter c with circumflex":"Latinské veľké písmeno c s obráteným mäkčeňom","Latin small letter c with circumflex":"Latinské malé písmeno c s obráteným mäkčeňom","Latin capital letter c with dot above":"Latinské veľké písmeno c s bodkou nad znakom","Latin small letter c with dot above":"Latinské malé písmeno c s bodkou nad znakom","Latin capital letter c with caron":"Latinské veľké písmeno c s mäkčeňom","Latin small letter c with caron":"Latinské malé písmeno c s mäkčeňom","Latin capital letter d with caron":"Latinské veľké písmeno d s mäkčeňom","Latin small letter d with caron":"Latinské malé písmeno d s mäkčeňom","Latin capital letter d with stroke":"Latinské veľké písmeno d s prečiarknutím","Latin small letter d with stroke":"Latinské malé písmeno d s prečiarknutím","Latin capital letter e with macron":"Latinské veľké písmeno e s čiarou","Latin small letter e with macron":"Latinské malé písmeno e s čiarou","Latin capital letter e with breve":"Latinské veľké písmeno e s mäkčeňom","Latin small letter e with breve":"Latinské malé písmeno e s mäkčeňom","Latin capital letter e with dot above":"Latinské veľké písmeno e s bodkou nad znakom","Latin small letter e with dot above":"Latinské malé písmeno e s bodkou nad znakom","Latin capital letter e with ogonek":"Latinské veľké písmeno e s háčikom","Latin small letter e with ogonek":"Latinské malé písmeno e s háčikom","Latin capital letter e with caron":"Latinské veľké písmeno e s mäkčeňom","Latin small letter e with caron":"Latinské malé písmeno e s mäkčeňom","Latin capital letter g with circumflex":"Latinské veľké písmeno g s obráteným mäkčeňom","Latin small letter g with circumflex":"Latinské malé písmeno g s obráteným mäkčeňom","Latin capital letter g with breve":"Latinské veľké písmeno g s mäkčeňom","Latin small letter g with breve":"Latinské malé písmeno g s mäkčeňom","Latin capital letter g with dot above":"Latinské veľké písmeno g s bodkou nad znakom","Latin small letter g with dot above":"Latinské malé písmeno g s bodkou nad znakom","Latin capital letter g with cedilla":"Latinské veľké písmeno g s háčikom","Latin small letter g with cedilla":"Latinské malé písmeno g s háčikom","Latin capital letter h with circumflex":"Latinské veľké písmeno h s obráteným mäkčeňom","Latin small letter h with circumflex":"Latinské malé písmeno h s obráteným mäkčeňom","Latin capital letter h with stroke":"Latinské veľké písmeno h s prečiarknutím","Latin small letter h with stroke":"Latinské malé písmeno h s prečiarknutím","Latin capital letter i with tilde":"Latinské veľké písmeno i s vlnovkou","Latin small letter i with tilde":"Latinské malé písmeno i s vlnovkou","Latin capital letter i with macron":"Latinské veľké písmeno i s čiarou","Latin small letter i with macron":"Latinské malé písmeno i s čiarou","Latin capital letter i with breve":"Latinské veľké písmeno i s mäkčeňom","Latin small letter i with breve":"Latinské malé písmeno i s mäkčeňom","Latin capital letter i with ogonek":"Latinské veľké písmeno i s háčikom","Latin small letter i with ogonek":"Latinské malé písmeno i s háčikom","Latin capital letter i with dot above":"Latinské veľké písmeno i s bodkou nad znakom","Latin small letter dotless i":"Latinské malé písmeno i bez bodky","Latin capital ligature ij":"Latinský veľký znak ligatúry ij","Latin small ligature ij":"Latinský malý znak ligatúry ij","Latin capital letter j with circumflex":"Latinské veľké písmeno j s obráteným mäkčeňom","Latin small letter j with circumflex":"Latinské malé písmeno j s obráteným mäkčeňom","Latin capital letter k with cedilla":"Latinské veľké písmeno k s háčikom","Latin small letter k with cedilla":"Latinské malé písmeno k s háčikom","Latin small letter kra":"latinský malý znak Kra","Latin capital letter l with acute":"Latinské veľké písmeno l s dĺžňom","Latin small letter l with acute":"Latinské malé písmeno l s dĺžňom","Latin capital letter l with cedilla":"Latinské veľké písmeno l s háčikom","Latin small letter l with cedilla":"Latinské malé písmeno l s háčikom","Latin capital letter l with caron":"Latinské veľké písmeno l s mäkčeňom","Latin small letter l with caron":"Latinské malé písmeno l s mäkčeňom","Latin capital letter l with middle dot":"Latinské veľké písmeno l s bodkou uprostred","Latin small letter l with middle dot":"Latinské malé písmeno l s bodkou uprostred","Latin capital letter l with stroke":"Latinské veľké písmeno l s prečiarknutím","Latin small letter l with stroke":"Latinské malé písmeno l s prečiarknutím","Latin capital letter n with acute":"Latinské veľké písmeno n s dĺžňom","Latin small letter n with acute":"Latinské malé písmeno n s dĺžňom","Latin capital letter n with cedilla":"Latinské veľké písmeno n s háčikom","Latin small letter n with cedilla":"Latinské malé písmeno n s háčikom","Latin capital letter n with caron":"Latinské veľké písmeno n s mäkčeňom","Latin small letter n with caron":"Latinské malé písmeno n s mäkčeňom","Latin small letter n preceded by apostrophe":"Latinské malé písmeno n s apostrofom","Latin capital letter eng":"Latinské veľké písmeno Eng","Latin small letter eng":"Latinské malé písmeno Eng","Latin capital letter o with macron":"Latinské veľké písmeno o s čiarou","Latin small letter o with macron":"Latinské malé písmeno o s čiarou","Latin capital letter o with breve":"Latinské veľké písmeno o s mäkčeňom","Latin small letter o with breve":"Latinské malé písmeno o s mäkčeňom","Latin capital letter o with double acute":"Latinské veľké písmeno o s dĺžňom","Latin small letter o with double acute":"Latinské malé písmeno o s dĺžňom","Latin capital ligature oe":"Latinský veľký znak ligatúry oe","Latin small ligature oe":"Latinský malý znak ligatúry oe","Latin capital letter r with acute":"Latinské veľké písmeno r s dĺžňom","Latin small letter r with acute":"Latinské malé písmeno r s dĺžňom","Latin capital letter r with cedilla":"Latinské veľké písmeno r s háčikom","Latin small letter r with cedilla":"Latinské malé písmeno r s háčikom","Latin capital letter r with caron":"Latinské veľké písmeno r s mäkčeňom","Latin small letter r with caron":"Latinské malé písmeno r s mäkčeňom","Latin capital letter s with acute":"Latinské veľké písmeno s s dĺžňom","Latin small letter s with acute":"Latinské malé písmeno s s dĺžňom","Latin capital letter s with circumflex":"Latinské veľké písmeno s s obráteným mäkčeňom","Latin small letter s with circumflex":"Latinské malé písmeno s s obráteným mäkčeňom","Latin capital letter s with cedilla":"Latinské veľké písmeno s s háčikom","Latin small letter s with cedilla":"Latinské malé písmeno s s háčikom","Latin capital letter s with caron":"Latinské veľké písmeno s s mäkčeňom","Latin small letter s with caron":"Latinské malé písmeno s s mäkčeňom","Latin capital letter t with cedilla":"Latinské veľké písmeno t s háčikom","Latin small letter t with cedilla":"Latinské malé písmeno t s háčikom","Latin capital letter t with caron":"Latinské veľké písmeno t s mäkčeňom","Latin small letter t with caron":"Latinské malé písmeno t s mäkčeňom","Latin capital letter t with stroke":"Latinské veľké písmeno t s prečiarknutím","Latin small letter t with stroke":"Latinské malé písmeno t s prečiarknutím","Latin capital letter u with tilde":"Latinské veľké písmeno u s vlnovkou","Latin small letter u with tilde":"Latinské malé písmeno u s vlnovkou","Latin capital letter u with macron":"Latinské veľké písmeno u s čiarou","Latin small letter u with macron":"Latinské malé písmeno o s čiarou","Latin capital letter u with breve":"Latinské veľké písmeno u s mäkčeňom","Latin small letter u with breve":"Latinské malé písmeno u s mäkčeňom","Latin capital letter u with ring above":"Latinské veľké písmeno u s krúžkom nad znakom","Latin small letter u with ring above":"Latinské malé písmeno u s krúžkom nad znakom","Latin capital letter u with double acute":"Latinské veľké písmeno u s dvojitým dĺžňom","Latin small letter u with double acute":"Latinské malé písmeno u s dvojitým dĺžňom","Latin capital letter u with ogonek":"Latinské veľké písmeno u s háčikom","Latin small letter u with ogonek":"Latinské malé písmeno u s háčikom","Latin capital letter w with circumflex":"Latinské veľké písmeno w s obráteným mäkčeňom","Latin small letter w with circumflex":"Latinské malé písmeno w s obráteným mäkčeňom","Latin capital letter y with circumflex":"Latinské veľké písmeno y s obráteným mäkčeňom","Latin small letter y with circumflex":"Latinské malé písmeno y s obráteným mäkčeňom","Latin capital letter y with diaeresis":"Latinské veľké písmeno y s dvojbodkou nad znakom","Latin capital letter z with acute":"Latinské veľké písmeno z s dĺžňom","Latin small letter z with acute":"Latinské malé písmeno z s dĺžňom","Latin capital letter z with dot above":"Latinské veľké písmeno z s bodkou nad znakom","Latin small letter z with dot above":"Latinské malé písmeno z s bodkou nad znakom","Latin capital letter z with caron":"Latinské veľké písmeno z s mäkčeňom","Latin small letter z with caron":"Malé písmeno s z mäkčeňom","Latin small letter long s":"Malé dlhé písmeno s","Less-than sign":"Menší ako","Greater-than sign":"Väčší ako","Less-than or equal to":"Menší alebo rovný","Greater-than or equal to":"Väčší alebo rovný","En dash":"Pomĺčka","Em dash":"Dlhá pomĺčka","Macron":"Horná čiara","Overline":"Preškrtnutie","Degree sign":"Znak stupeň","Minus sign":"Znak mínus","Plus-minus sign":"Znak plus-mínus","Division sign":"Delenie","Fraction slash":"Lomítko / Delenie","Multiplication sign":"Násobenie","Latin small letter f with hook":"Funkcia","Integral":"Integrál","N-ary summation":"Znak cyklického sčítania","Infinity":"Nekonečno","Square root":"Odmocnina","Tilde operator":"Vlnovka","Approximately equal to":"Aproximácia","Almost equal to":"Čiastočne rovný","Not equal to":"Nerovná sa","Identical to":"Identický k","Element of":"Patrí / Je súčasťou","Not an element of":"Nepatrí / Nie je súčasťou","Contains as member":"Obsahuje prvok","N-ary product":"Znak cyklického násobenia","Logical and":"Logický AND","Logical or":"Logický OR","Not sign":"Nie je rovný","Intersection":"Priesečník / Prienik","Union":"Zjednotenie","Partial differential":"Parciálna diferencia","For all":"Pre všetky prvky v množine","There exists":"Existuje v množine","Empty set":"Prázdna množina","Nabla":"Nabla","Asterisk operator":"Hviezdička / násobenie","Proportional to":"Úmerný k","Angle":"Uhol","Vulgar fraction one quarter":"Jedna štvrtina","Vulgar fraction one half":"Polovica","Vulgar fraction three quarters":"Tri štvrtiny","Single left-pointing angle quotation mark":"Šípka ukazujúca doľava","Single right-pointing angle quotation mark":"Šípka ukazujúca doprava","Left-pointing double angle quotation mark":"Dvojitá šípka ukazujúca doľava","Right-pointing double angle quotation mark":"Dvojitá šípka ukazujúca doprava","Left single quotation mark":"Ľavá uvodzovka","Right single quotation mark":"Pravá uvodzovka","Left double quotation mark":"Ľavá dvojitá uvodzovka","Right double quotation mark":"Pravá dvojitá uvodzovka","Single low-9 quotation mark":"Spodná uvodzovka","Double low-9 quotation mark":"Dvojitá spodná uvodzovka","Inverted exclamation mark":"Obrátený výkričník","Inverted question mark":"Obrátený otáznik","Two dot leader":"Horizontálna dvojbodka","Horizontal ellipsis":"Trojbodka","Double dagger":"Dvojkríž","Per mille sign":"Promile","Per ten thousand sign":"Na desaťtisíc","Double exclamation mark":"Dvojitý výkričník","Question exclamation mark":"Otáznik a výkričník","Exclamation question mark":"Výkričník a otáznik","Double question mark":"Dvojitý otáznik","Copyright sign":"Copyright","Registered sign":"Registrovaný","Trade mark sign":"Ochranná známka","Section sign":"Sekcia","Paragraph sign":"Odsek","Reversed paragraph sign":"Obrátený znak odseku","Styles":"Štýly","Multiple styles":"Viacero štýlov","Block styles":"Štýly bloku","Text styles":"Štýly textu","Show blocks":"Zobraziť bloky","Select all":"Označiť všetko","Source":"Zdroj","Show source":"Zobraziť zdroj","Remove Format":"Vyčistiť formátovanie","Disable editing":"Vypnúť režim úprav","Enable editing":"Zapnúť režim úprav","Previous editable region":"Predchádzajúca oblasť úprav","Next editable region":"Nasledujúca oblasť úprav","Navigate editable regions":"Navigácia v oblasti úprav","Page break":"Zalomenie strany","media widget":"Nástroj pre médiá","Media URL":"URL média","Paste the media URL in the input.":"Vložte URL média.","Tip: Paste the URL into the content to embed faster.":"Tip: URL adresu média vložte do obsahu.","The URL must not be empty.":"Musíte zadať URL.","This media URL is not supported.":"URL média nie je podporovaná.","Insert media":"Vložiť média","Media":"Médiá","Media toolbar":"Nástroje pre médiá","Open media in new tab":"Otvoriť médiá na novej karte","Numbered List":"Číslovaný zoznam","Bulleted List":"Zoznam s odrážkami","To-do List":"To-do zoznam","Bulleted list styles toolbar":"Panel zoznamu s odrážkami","Numbered list styles toolbar":"Panel so štýlmi číslovaného zoznamu","Toggle the disc list style":"Prepnúť na zoznam s označením plného kruhu","Toggle the circle list style":"Prepnúť na zoznam s kruhovým označením","Toggle the square list style":"Prepnúť na zoznam so štvorcovým označením","Toggle the decimal list style":"Prepnúť na číselný zoznam","Toggle the decimal with leading zero list style":"Prepnúť na číselný zoznam s nulou na začiatku","Toggle the lower–roman list style":"Prepnúť na zoznam s malými rímskymi číslami","Toggle the upper–roman list style":"Prepnúť na zoznam s veľkými rímskymi číslami","Toggle the lower–latin list style":"Prepnúť na zoznam s malými písmenami","Toggle the upper–latin list style":"Prepnúť na zoznam s veľkými písmenami","Disc":"Plný kruh","Circle":"Kruh","Square":"Štvorec","Decimal":"Čísla","Decimal with leading zero":"Čísla s nulou na začiatku","Lower–roman":"Malé rímske čísla","Upper-roman":"Veľké rímske čísla","Lower-latin":"Malé písmená","Upper-latin":"Veľké písmená","List properties":"Vlastnosti zoznamu","Start at":"Prvá položka","Invalid start index value.":"Neplatná hodnota začiatočného indexu.","Start index must be greater than 0.":"Prvá položka musí mať index väčší ako 0.","Reversed order":"Obrátene poradie","Keystrokes that can be used in a list":"Klávesy, ktoré sa dajú použiť v zozname","Increase list item indent":"Zväčšiť odsadenie položiek v zozname","Decrease list item indent":"Zmenšiť odsadenie položiek v zozname","Entering a to-do list":"Príchod do zoznamu úloh","Leaving a to-do list":"Odchod zo zoznamu úloh","Unlink":"Zrušiť odkaz","Link":"Odkaz","Link URL":"URL adresa","Link URL must not be empty.":"Adresa odkazu URL nesmie byť prázdna.","Link image":"Adresa obrázku","Edit link":"Upraviť odkaz","Open link in new tab":"Otvoriť odkaz v novom okne","This link has no URL":"Tento odkaz nemá nastavenú URL adresu","Open in a new tab":"Otvoriť v novej záložke","Downloadable":"Na stiahnutie","Create link":"Vytvoriť odkaz","Move out of a link":"Presunúť sa mimo odkazu","Scroll to target":"Prejsť na cieľ","Language":"Jazyk","Choose language":"Vybrať jazyk","Remove language":"Odstrániť jazyk","Increase indent":"Zväčšiť odsadenie","Decrease indent":"Zmenšiť odsadenie","image widget":"widget obrázka","Wrap text":"Obtekanie textu","Break text":"Zalomenie textu","In line":"V riadku","Side image":"Bočný obrázok","Full size image":"Obrázok v plnej veľkosti","Left aligned image":"Zarovnať vľavo","Centered image":"Zarovnať na stred","Right aligned image":"Zarovnať vpravo","Change image text alternative":"Zmeňte alternatívny text obrázka","Text alternative":"Alternatívny text","Enter image caption":"Vložte popis obrázka","Insert image":"Vložiť obrázok","Replace image":"Nahradiť obrázok","Upload from computer":"Nahrať z počítača","Replace from computer":"Nahradiť z počítača","Upload image from computer":"Nahrať obrázok z počítača","Image from computer":"Obrázok z počítača","From computer":"Z počítača","Replace image from computer":"Nahradiť obrázok z počítača","Upload failed":"Nahrávanie zlyhalo","You have no image upload permissions.":"Nemáte žiadne povolenia na nahrávanie obrázkov.","Image toolbar":"Panel nástrojov obrázka","Resize image":"Zmeniť veľkosť obrázka","Resize image to %0":"Zmeniť veľkosť na %0","Resize image to the original size":"Zmeniť veľkosť na pôvodnú","Resize image (in %0)":"Zmeniť veľkosť obrázka (v %0)","Original":"Originál","Custom image size":"Vlastná veľkosť obrázka","Custom":"Vlastné","Image resize list":"Zoznam možností zmeny veľkosti","Insert image via URL":"Vložiť obrázok pomocou URL","Insert via URL":"Vložiť cez URL","Image via URL":"Obrázok cez URL","Via URL":"Cez URL","Update image URL":"Aktualizovať URL obrázka","Caption for the image":"Popis k obrázku","Caption for image: %0":"Popis k obrázku: %0","The value must not be empty.":"Hodnota nesmie byť prázdna.","The value should be a plain number.":"Hodnota by mala byť obyčajné číslo.","Uploading image":"Nahrávanie obrázka","Image upload complete":"Nahrávanie obrázka bolo dokončené","Error during image upload":"Chyba pri nahrávaní obrázka","Image":"Obrázok","HTML object":"HTML objekt","Insert HTML":"Vložiť kód HTML","HTML snippet":"Kód HTML","Paste raw HTML here...":"Sem vložte kód HTML...","Edit source":"Upraviť zdroj","Save changes":"Uložiť zmeny","No preview available":"Náhľad nie je k dispozícii","Empty snippet content":"Prázdny obsah kódu","Horizontal line":"Vodorovná čiara","Yellow marker":"Žltý zvýrazňovač","Green marker":"Zelený zvýrazňovač","Pink marker":"Ružový zvýrazňovač","Blue marker":"Modrý zvýrazňovač","Red pen":"Červené pero","Green pen":"Zelené pero","Remove highlight":"Odstrániť zvýraznenie","Highlight":"Zvýraznenie","Text highlight toolbar":"Panel nástrojov zvýraznenia textu","Heading":"Nadpis","Choose heading":"Vyberte nadpis","Heading 1":"Nadpis 1","Heading 2":"Nadpis 2","Heading 3":"Nadpis 3","Heading 4":"Nadpis 4","Heading 5":"Nadpis 5","Heading 6":"Nadpis 6","Type your title":"Vložte nadpis","Type or paste your content here.":"Vložte obsah","Font Size":"Veľkosť písma","Tiny":"Veľmi malé","Small":"Malé","Big":"Veľké","Huge":"Veľmi veľké","Font Family":"Názov písma","Default":"Predvolené","Font Color":"Farba písma","Font Background Color":"Farba zvýraznenia textu","Document colors":"Farby dokumentu","Find and replace":"Vyhľadať a nahradiť","Find in text…":"Vyhľadať v texte...","Find":"Vyhľadať","Previous result":"Predchádzajúci výsledok","Next result":"Nasledujúci výsledok","Replace":"Nahradiť","Replace all":"Nahradiť všetko","Match case":"Presná zhoda","Whole words only":"Iba celé slová","Replace with…":"Nahradiť za...","Text to find must not be empty.":"Text vyhľadávania nemôže byť prázdny.","Tip: Find some text first in order to replace it.":"Tip: Najskôr vyhľadajte text, ktorý následne môžete nahradiť.","Advanced options":"Pokročilé nastavenia","Find in the document":"Nájsť v dokumente","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Vložiť mäkkú medzeru (prvok <code>&lt;br&gt;</code>)","Insert a hard break (a new paragraph)":"Vložiť pevnú medzeru (nový odsek)","Cancel":"Zrušiť","Clear":"Vyčistiť","Remove color":"Zrušiť farbu","Restore default":"Obnoviť predvolené","Save":"Uložiť","Show more items":"Zobraziť viac položiek","%0 of %1":"%0 z %1","Cannot upload file:":"Nie je možné nahrať súbor:","Rich Text Editor. Editing area: %0":"Rich Text Editor. Oblasť úprav: %0","Insert with file manager":"Vložiť pomocou správcu súborov","Replace with file manager":"Nahradiť správcom súborov","Insert image with file manager":"Vložiť obrázok pomocou správcu súborov","Replace image with file manager":"Nahradiť obrázok pomocou správcu súborov","File":"Súbor","With file manager":"So správcom súborov","Toggle caption off":"Vypnúť titulok","Toggle caption on":"Zapnúť titulok","Content editing keystrokes":"Klávesy na úpravu obsahu","These keyboard shortcuts allow for quick access to content editing features.":"Tieto klávesové skratky vám poskytnú rýchly prístup k funkciám na úpravu obsahu.","User interface and content navigation keystrokes":"Používateľské rozhranie a klávesy na prechádzanie obsahom","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Nasledujúce klávesy vám umožnia jednoduchšie používanie používateľského rozhrania programu CKEditor 5.","Close contextual balloons, dropdowns, and dialogs":"Zatvoriť kontextové bubliny, rozbaľovacie ponuky a dialógové okná","Open the accessibility help dialog":"Otvoriť dialógové okno o zjednodušení ovládania","Move focus between form fields (inputs, buttons, etc.)":"Presunúť zameranie do ďalšieho prvku na zadávanie údajov (napríklad textové pole alebo tlačidlo)","Move focus to the menu bar, navigate between menu bars":"Presuňte pozornosť na panel ponuky, prechádzajte medzi panelmi ponuky","Move focus to the toolbar, navigate between toolbars":"Presunúť zameranie do panela nástrojov, presúvať sa medzi panelmi nástrojov","Navigate through the toolbar or menu bar":"Prechádzajte cpanelom nástrojov alebo panelom ponúk","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Vykonajte aktuálne zaostrené tlačidlo. Spustenie tlačidiel, ktoré interagujú s obsahom editora, presunie zameranie späť na obsah.","Accept":"Potvrdiť","Paragraph":"Odsek","Color picker":"Vybrať farbu","Insert code block":"Vložte blok kódu","Plain text":"Čistý text","Leaving %0 code snippet":"Opúšťanie %0 útržku kódu","Entering %0 code snippet":"Zadávanie %0 útržku kódu","Entering code snippet":"Zadávanie útržku kódu","Leaving code snippet":"Opúšťanie útržku kódu","Code block":"Blok kódu","Copy selected content":"Skopírovať vybraný obsah","Paste content":"Prilepiť obsah","Paste content as plain text":"Prilepiť obsah iba ako text","Insert image or file":"Vložiť obrázok alebo súbor","Could not obtain resized image URL.":"Nepodarilo sa získať URL adresu zmenšeného obrázka.","Selecting resized image failed":"Vybranie zmenšeného obrázka zlyhalo","Could not insert image at the current position.":"Obrázok nie je možné vložiť na vybranú pozíciu.","Inserting image failed":"Vloženie obrázka zlyhalo","Open file manager":"Otvoriť manažér súborov","Cannot determine a category for the uploaded file.":"Neznáma kategória pre nahratý súbor.","Cannot access default workspace.":"Nie je možné získať prístup k predvolenému pracovnému priestoru.","You have no image editing permissions.":"Nemáte žiadne povolenia na úpravu obrázkov.","Edit image":"Upraviť obrázok","Processing the edited image.":"Spracovanie upraveného obrázka.","Server failed to process the image.":"Serveru sa nepodarilo spracovať obrázok.","Failed to determine category of edited image.":"Nepodarilo sa určiť kategóriu upraveného obrázka.","Bookmark":"Záložka","Insert":"Vložiť","Update":"Aktualizovať","Edit bookmark":"Upraviť záložku","Remove bookmark":"Odstrániť záložku","Bookmark name":"Názov záložky","Enter the bookmark name without spaces.":"Zadajte názov záložky bez medzier.","Bookmark must not be empty.":"Záložka nesmie byť prázdna.","Bookmark name cannot contain space characters.":"Názov záložky nemôže obsahovať medzery.","Bookmark name already exists.":"Názov záložky už existuje.","bookmark widget":"widget pre záložky","Block quote":"Citát","Bold":"Tučné","Italic":"Kurzíva","Underline":"Podčiarknuté","Code":"Kód","Strikethrough":"Preškrtnuté","Subscript":"Dolný index","Superscript":"Horný index","Italic text":"Kurzíva","Move out of an inline code style":"Presunúť mimo vloženého kódu","Bold text":"Tučný text","Underline text":"Podčiarknutý text","Strikethrough text":"Prečiarknutý text","Saving changes":"Ukladám zmeny","Revert autoformatting action":"Vrátiť späť automatické formátovanie","Align left":"Zarovnať vľavo","Align right":"Zarovnať vpravo","Align center":"Zarovnať na stred","Justify":"Do bloku","Text alignment":"Zarovnanie textu","Text alignment toolbar":"Panel nástrojov zarovnania textu"},getPluralForm(n){return (n == 1 ? 0 : (n >= 2 && n <= 4) ? 1 : 2);}}};
e[ 'sk' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'sk' ].dictionary = Object.assign( e[ 'sk' ].dictionary, dictionary );
e[ 'sk' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
