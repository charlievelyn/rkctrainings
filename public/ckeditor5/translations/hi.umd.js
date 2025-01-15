/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

( e => {
const { [ 'hi' ]: { dictionary, getPluralForm } } = {"hi":{"dictionary":{"Words: %0":"Words: %0","Characters: %0":"Characters: %0","Widget toolbar":"Widget toolbar","Insert paragraph before block":"Insert paragraph before block","Insert paragraph after block":"Insert paragraph after block","Press Enter to type after or press Shift + Enter to type before the widget":"विजेट के बाद टाइप करने के लिए एंटर  दबाएं या पहले टाइप करने के लिए शिफ्ट+एंटर दबाएं","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"वे कीस्ट्रोक्स जिनका इस्तेमाल किसी विजेट के सेलेक्ट किए जाने पर किया जा सकता है (जैसे: इमेज, टेबल, आदि)","Insert a new paragraph directly after a widget":"किसी विजेट के ठीक आगे एक नया पैराग्राफ़ इंसर्ट करें","Insert a new paragraph directly before a widget":"किसी विजेट के ठीक पीछे एक नया पैराग्राफ़ इंसर्ट करें","Move the caret to allow typing directly before a widget":"किसी विजेट के ठीक पीछे टाइप करने के लिए कैरेट को मूव करें","Move the caret to allow typing directly after a widget":"किसी विजेट के ठीक आगे टाइप करने के लिए कैरेट को मूव करें","Move focus from an editable area back to the parent widget":"एक एडिटेबल एरिया से पेरेंट विजेट पर फ़ोकस वापिस लाएँ","Upload in progress":"Upload in progress","Undo":"Undo","Redo":"Redo","Rich Text Editor":"Rich Text Editor","Edit block":"Edit block","Click to edit block":"ब्लॉक एडिट करने के लिए क्लिक करें","Drag to move":"मूव करने के लिए ड्रैग करें","Next":"Next","Previous":"Previous","Editor toolbar":"Editor toolbar","Dropdown toolbar":"Dropdown toolbar","Dropdown menu":"ड्रापडाउन मेन्यू","Black":"Black","Dim grey":"Dim grey","Grey":"Grey","Light grey":"Light grey","White":"White","Red":"Red","Orange":"Orange","Yellow":"Yellow","Light green":"Light green","Green":"Green","Aquamarine":"Aquamarine","Turquoise":"Turquoise","Light blue":"Light blue","Blue":"Blue","Purple":"Purple","Editor block content toolbar":"एडीटर ब्लॉक कंटेंट टूलबार","Editor contextual toolbar":"एडीटर कॉन्टेक्स्टूअल टूलबार","HEX":"HEX","No results found":"कोई रिजल्ट नहीं","No searchable items":"कोई खोजने लायक आइटम नहीं","Editor dialog":"एडिटर डायलॉग","Close":"बंद करें","Help Contents. To close this dialog press ESC.":"हेल्प कॉन्टेंट्स. इस डायलॉग को बंद करने के लिए ESC दबाएँ.","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"नीचे, आप उन कीबोर्ड शॉर्टकट्स की एक लिस्ट देख सकते हैं जिनका इस्तेमाल एडिटर में किया जा सकता है.","(may require <kbd>Fn</kbd>)":"(इसके लिए <kbd>Fn</kbd> की ज़रूरत हो सकती है)","Accessibility":"पहुँच","Accessibility help":"एक्सेसिबिलिटी हेल्प","Press %0 for help.":"हेल्प के लिए %0 दबाएँ.","Move focus in and out of an active dialog window":"एक एक्टिव डायलॉग विंडो में फ़ोकस को अंदर और बाहर मूव करें","MENU_BAR_MENU_FILE":"फाइल","MENU_BAR_MENU_EDIT":"Edit","MENU_BAR_MENU_VIEW":"दृश्य","MENU_BAR_MENU_INSERT":"Insert","MENU_BAR_MENU_FORMAT":"फॉर्मेट","MENU_BAR_MENU_TOOLS":"टूल्स","MENU_BAR_MENU_HELP":"हेल्प","MENU_BAR_MENU_TEXT":"टेक्स्ट","MENU_BAR_MENU_FONT":"फ़ॉन्ट","Editor menu bar":"एडिटर मेनू बार","Please enter a valid color (e.g. \"ff0000\").":"कृपया एक वैध रंग दर्ज करें (उदाहरण के लिए \"ff0000\").","Insert table":"Insert table","Header column":"Header column","Insert column left":"Insert column left","Insert column right":"Insert column right","Delete column":"Delete column","Select column":"Select column","Column":"Column","Header row":"Header row","Insert row below":"Insert row below","Insert row above":"Insert row above","Delete row":"Delete row","Select row":"Select row","Row":"Row","Merge cell up":"Merge cell up","Merge cell right":"Merge cell right","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Split cell vertically":"Split cell vertically","Split cell horizontally":"Split cell horizontally","Merge cells":"Merge cells","Table toolbar":"Table toolbar","Table properties":"Table properties","Cell properties":"Cell properties","Border":"Border","Style":"Style","Width":"Width","Height":"Height","Color":"Color","Background":"Background","Padding":"Padding","Dimensions":"Dimensions","Table cell text alignment":"Table cell text alignment","Alignment":"Alignment","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Vertical text alignment toolbar":"Vertical text alignment toolbar","Table alignment toolbar":"Table alignment toolbar","None":"None","Solid":"Solid","Dotted":"Dotted","Dashed":"Dashed","Double":"Double","Groove":"Groove","Ridge":"Ridge","Inset":"Inset","Outset":"Outset","Align cell text to the left":"Align cell text to the left","Align cell text to the center":"Align cell text to the center","Align cell text to the right":"Align cell text to the right","Justify cell text":"Justify cell text","Align cell text to the top":"Align cell text to the top","Align cell text to the middle":"Align cell text to the middle","Align cell text to the bottom":"Align cell text to the bottom","Align table to the left":"Align table to the left","Center table":"Center table","Align table to the right":"Align table to the right","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".","Enter table caption":"टेबल कैप्शन एंटर करें","Keystrokes that can be used in a table cell":"वे कीस्ट्रोक्स जिनका इस्तेमाल एक टेबल सेल में किया जा सकता है","Move the selection to the next cell":"सेलेक्शन को अगले सेल में मूव करें","Move the selection to the previous cell":"सेलेक्शन को पिछले सेल में मूव करें","Insert a new table row (when in the last cell of a table)":"एक नई टेबल रो इंसर्ट करें (जब आप किसी टेबल के आख़िरी सेल में हों)","Navigate through the table":"टेबल में नैविगेट करें","Table":"टेबल","Special characters":"Special characters","Category":"केटेगरी","All":"सभी","Arrows":"एरोज","Currency":"करेंसी","Latin":"लैटिन","Mathematical":"मैथमैटिकल","Text":"टेक्स्ट","leftwards simple arrow":"सिम्पल ऐरो बाएं तरफ","rightwards simple arrow":"सिम्पल ऐरो दाएं तरफ","upwards simple arrow":"सिम्पल ऐरो ऊपर की तरफ","downwards simple arrow":"सिम्पल ऐरो नीचे की तरफ","leftwards double arrow":"leftwards double arrow","rightwards double arrow":"rightwards double arrow","upwards double arrow":"upwards double arrow","downwards double arrow":"downwards double arrow","leftwards dashed arrow":"leftwards dashed arrow","rightwards dashed arrow":"rightwards dashed arrow","upwards dashed arrow":"upwards dashed arrow","downwards dashed arrow":"downwards dashed arrow","leftwards arrow to bar":"leftwards arrow to bar","rightwards arrow to bar":"rightwards arrow to bar","upwards arrow to bar":"upwards arrow to bar","downwards arrow to bar":"downwards arrow to bar","up down arrow with base":"up down arrow with base","back with leftwards arrow above":"back with leftwards arrow above","end with leftwards arrow above":"end with leftwards arrow above","on with exclamation mark with left right arrow above":"on with exclamation mark with left right arrow above","soon with rightwards arrow above":"soon with rightwards arrow above","top with upwards arrow above":"top with upwards arrow above","Dollar sign":"Dollar sign","Euro sign":"Euro sign","Yen sign":"Yen sign","Pound sign":"Pound sign","Cent sign":"Cent sign","Euro-currency sign":"Euro-currency sign","Colon sign":"Colon sign","Cruzeiro sign":"Cruzeiro sign","French franc sign":"French franc sign","Lira sign":"Lira sign","Currency sign":"Currency sign","Bitcoin sign":"Bitcoin sign","Mill sign":"Mill sign","Naira sign":"Naira sign","Peseta sign":"Peseta sign","Rupee sign":"Rupee sign","Won sign":"Won sign","New sheqel sign":"New sheqel sign","Dong sign":"Dong sign","Kip sign":"Kip sign","Tugrik sign":"Tugrik sign","Drachma sign":"Drachma sign","German penny sign":"German penny sign","Peso sign":"Peso sign","Guarani sign":"Guarani sign","Austral sign":"Austral sign","Hryvnia sign":"Hryvnia sign","Cedi sign":"Cedi sign","Livre tournois sign":"Livre tournois sign","Spesmilo sign":"Spesmilo sign","Tenge sign":"Tenge sign","Indian rupee sign":"Indian rupee sign","Turkish lira sign":"Turkish lira sign","Nordic mark sign":"Nordic mark sign","Manat sign":"Manat sign","Ruble sign":"Ruble sign","Latin capital letter a with macron":"Latin capital letter a with macron","Latin small letter a with macron":"Latin small letter a with macron","Latin capital letter a with breve":"Latin capital letter a with breve","Latin small letter a with breve":"Latin small letter a with breve","Latin capital letter a with ogonek":"Latin capital letter a with ogonek","Latin small letter a with ogonek":"Latin small letter a with ogonek","Latin capital letter c with acute":"Latin capital letter c with acute","Latin small letter c with acute":"Latin small letter c with acute","Latin capital letter c with circumflex":"Latin capital letter c with circumflex","Latin small letter c with circumflex":"Latin small letter c with circumflex","Latin capital letter c with dot above":"Latin capital letter c with dot above","Latin small letter c with dot above":"Latin small letter c with dot above","Latin capital letter c with caron":"Latin capital letter c with caron","Latin small letter c with caron":"Latin small letter c with caron","Latin capital letter d with caron":"Latin capital letter d with caron","Latin small letter d with caron":"Latin small letter d with caron","Latin capital letter d with stroke":"Latin capital letter d with stroke","Latin small letter d with stroke":"Latin small letter d with stroke","Latin capital letter e with macron":"Latin capital letter e with macron","Latin small letter e with macron":"Latin small letter e with macron","Latin capital letter e with breve":"Latin capital letter e with breve","Latin small letter e with breve":"Latin small letter e with breve","Latin capital letter e with dot above":"Latin capital letter e with dot above","Latin small letter e with dot above":"Latin small letter e with dot above","Latin capital letter e with ogonek":"Latin capital letter e with ogonek","Latin small letter e with ogonek":"Latin small letter e with ogonek","Latin capital letter e with caron":"Latin capital letter e with caron","Latin small letter e with caron":"Latin small letter e with caron","Latin capital letter g with circumflex":"Latin capital letter g with circumflex","Latin small letter g with circumflex":"Latin small letter g with circumflex","Latin capital letter g with breve":"Latin capital letter g with breve","Latin small letter g with breve":"Latin small letter g with breve","Latin capital letter g with dot above":"Latin capital letter g with dot above","Latin small letter g with dot above":"Latin small letter g with dot above","Latin capital letter g with cedilla":"Latin capital letter g with cedilla","Latin small letter g with cedilla":"Latin small letter g with cedilla","Latin capital letter h with circumflex":"Latin capital letter h with circumflex","Latin small letter h with circumflex":"Latin small letter h with circumflex","Latin capital letter h with stroke":"Latin capital letter h with stroke","Latin small letter h with stroke":"Latin small letter h with stroke","Latin capital letter i with tilde":"Latin capital letter i with tilde","Latin small letter i with tilde":"Latin small letter i with tilde","Latin capital letter i with macron":"Latin capital letter i with macron","Latin small letter i with macron":"Latin small letter i with macron","Latin capital letter i with breve":"Latin capital letter i with breve","Latin small letter i with breve":"Latin small letter i with breve","Latin capital letter i with ogonek":"Latin capital letter i with ogonek","Latin small letter i with ogonek":"Latin small letter i with ogonek","Latin capital letter i with dot above":"Latin capital letter i with dot above","Latin small letter dotless i":"Latin small letter dotless i","Latin capital ligature ij":"Latin capital ligature ij","Latin small ligature ij":"Latin small ligature ij","Latin capital letter j with circumflex":"Latin capital letter j with circumflex","Latin small letter j with circumflex":"Latin small letter j with circumflex","Latin capital letter k with cedilla":"Latin capital letter k with cedilla","Latin small letter k with cedilla":"Latin small letter k with cedilla","Latin small letter kra":"Latin small letter kra","Latin capital letter l with acute":"Latin capital letter l with acute","Latin small letter l with acute":"Latin small letter l with acute","Latin capital letter l with cedilla":"Latin capital letter l with cedilla","Latin small letter l with cedilla":"Latin small letter l with cedilla","Latin capital letter l with caron":"Latin capital letter l with caron","Latin small letter l with caron":"Latin small letter l with caron","Latin capital letter l with middle dot":"Latin capital letter l with middle dot","Latin small letter l with middle dot":"Latin small letter l with middle dot","Latin capital letter l with stroke":"Latin capital letter l with stroke","Latin small letter l with stroke":"Latin small letter l with stroke","Latin capital letter n with acute":"Latin capital letter n with acute","Latin small letter n with acute":"Latin small letter n with acute","Latin capital letter n with cedilla":"Latin capital letter n with cedilla","Latin small letter n with cedilla":"Latin small letter n with cedilla","Latin capital letter n with caron":"Latin capital letter n with caron","Latin small letter n with caron":"Latin small letter n with caron","Latin small letter n preceded by apostrophe":"Latin small letter n preceded by apostrophe","Latin capital letter eng":"Latin capital letter eng","Latin small letter eng":"Latin small letter eng","Latin capital letter o with macron":"Latin capital letter o with macron","Latin small letter o with macron":"Latin small letter o with macron","Latin capital letter o with breve":"Latin capital letter o with breve","Latin small letter o with breve":"Latin small letter o with breve","Latin capital letter o with double acute":"Latin capital letter o with double acute","Latin small letter o with double acute":"Latin small letter o with double acute","Latin capital ligature oe":"Latin capital ligature oe","Latin small ligature oe":"Latin small ligature oe","Latin capital letter r with acute":"Latin capital letter r with acute","Latin small letter r with acute":"Latin small letter r with acute","Latin capital letter r with cedilla":"Latin capital letter r with cedilla","Latin small letter r with cedilla":"Latin small letter r with cedilla","Latin capital letter r with caron":"Latin capital letter r with caron","Latin small letter r with caron":"Latin small letter r with caron","Latin capital letter s with acute":"Latin capital letter s with acute","Latin small letter s with acute":"Latin small letter s with acute","Latin capital letter s with circumflex":"Latin capital letter s with circumflex","Latin small letter s with circumflex":"Latin small letter s with circumflex","Latin capital letter s with cedilla":"Latin capital letter s with cedilla","Latin small letter s with cedilla":"Latin small letter s with cedilla","Latin capital letter s with caron":"Latin capital letter s with caron","Latin small letter s with caron":"Latin small letter s with caron","Latin capital letter t with cedilla":"Latin capital letter t with cedilla","Latin small letter t with cedilla":"Latin small letter t with cedilla","Latin capital letter t with caron":"Latin capital letter t with caron","Latin small letter t with caron":"Latin small letter t with caron","Latin capital letter t with stroke":"Latin capital letter t with stroke","Latin small letter t with stroke":"Latin small letter t with stroke","Latin capital letter u with tilde":"Latin capital letter u with tilde","Latin small letter u with tilde":"Latin small letter u with tilde","Latin capital letter u with macron":"Latin capital letter u with macron","Latin small letter u with macron":"Latin small letter u with macron","Latin capital letter u with breve":"Latin capital letter u with breve","Latin small letter u with breve":"Latin small letter u with breve","Latin capital letter u with ring above":"Latin capital letter u with ring above","Latin small letter u with ring above":"Latin small letter u with ring above","Latin capital letter u with double acute":"Latin capital letter u with double acute","Latin small letter u with double acute":"Latin small letter u with double acute","Latin capital letter u with ogonek":"Latin capital letter u with ogonek","Latin small letter u with ogonek":"Latin small letter u with ogonek","Latin capital letter w with circumflex":"Latin capital letter w with circumflex","Latin small letter w with circumflex":"Latin small letter w with circumflex","Latin capital letter y with circumflex":"Latin capital letter y with circumflex","Latin small letter y with circumflex":"Latin small letter y with circumflex","Latin capital letter y with diaeresis":"Latin capital letter y with diaeresis","Latin capital letter z with acute":"Latin capital letter z with acute","Latin small letter z with acute":"Latin small letter z with acute","Latin capital letter z with dot above":"Latin capital letter z with dot above","Latin small letter z with dot above":"Latin small letter z with dot above","Latin capital letter z with caron":"Latin capital letter z with caron","Latin small letter z with caron":"Latin small letter z with caron","Latin small letter long s":"Latin small letter long s","Less-than sign":"Less-than sign","Greater-than sign":"Greater-than sign","Less-than or equal to":"Less-than or equal to","Greater-than or equal to":"Greater-than or equal to","En dash":"En dash","Em dash":"Em dash","Macron":"Macron","Overline":"Overline","Degree sign":"Degree sign","Minus sign":"Minus sign","Plus-minus sign":"Plus-minus sign","Division sign":"Division sign","Fraction slash":"Fraction slash","Multiplication sign":"Multiplication sign","Latin small letter f with hook":"Latin small letter f with hook","Integral":"Integral","N-ary summation":"N-ary summation","Infinity":"Infinity","Square root":"Square root","Tilde operator":"Tilde operator","Approximately equal to":"Approximately equal to","Almost equal to":"Almost equal to","Not equal to":"Not equal to","Identical to":"Identical to","Element of":"Element of","Not an element of":"Not an element of","Contains as member":"Contains as member","N-ary product":"N-ary product","Logical and":"Logical and","Logical or":"Logical or","Not sign":"Not sign","Intersection":"Intersection","Union":"Union","Partial differential":"Partial differential","For all":"For all","There exists":"There exists","Empty set":"Empty set","Nabla":"Nabla","Asterisk operator":"Asterisk operator","Proportional to":"Proportional to","Angle":"Angle","Vulgar fraction one quarter":"Vulgar fraction one quarter","Vulgar fraction one half":"Vulgar fraction one half","Vulgar fraction three quarters":"Vulgar fraction three quarters","Single left-pointing angle quotation mark":"Single left-pointing angle quotation mark","Single right-pointing angle quotation mark":"Single right-pointing angle quotation mark","Left-pointing double angle quotation mark":"Left-pointing double angle quotation mark","Right-pointing double angle quotation mark":"Right-pointing double angle quotation mark","Left single quotation mark":"Left single quotation mark","Right single quotation mark":"Right single quotation mark","Left double quotation mark":"Left double quotation mark","Right double quotation mark":"Right double quotation mark","Single low-9 quotation mark":"Single low-9 quotation mark","Double low-9 quotation mark":"Double low-9 quotation mark","Inverted exclamation mark":"Inverted exclamation mark","Inverted question mark":"Inverted question mark","Two dot leader":"Two dot leader","Horizontal ellipsis":"Horizontal ellipsis","Double dagger":"Double dagger","Per mille sign":"Per mille sign","Per ten thousand sign":"Per ten thousand sign","Double exclamation mark":"Double exclamation mark","Question exclamation mark":"Question exclamation mark","Exclamation question mark":"Exclamation question mark","Double question mark":"Double question mark","Copyright sign":"Copyright sign","Registered sign":"Registered sign","Trade mark sign":"Trade mark sign","Section sign":"Section sign","Paragraph sign":"Paragraph sign","Reversed paragraph sign":"Reversed paragraph sign","Styles":"स्टाइल्स","Multiple styles":"कई स्टाइल्स","Block styles":"ब्लॉक स्टाइल्स","Text styles":"टेक्स्ट स्टाइल्स","Show blocks":"ब्लॉक दिखाएं","Select all":"Select all","Source":"सोर्स","Show source":"सोर्स दिखाएं","Remove Format":"Remove Format","Disable editing":"Disable editing","Enable editing":"Enable editing","Previous editable region":"Previous editable region","Next editable region":"Next editable region","Navigate editable regions":"Navigate editable regions","Page break":"Page break","media widget":"media widget","Media URL":"Media URL","Paste the media URL in the input.":"Paste the media URL in the input.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","The URL must not be empty.":"The URL must not be empty.","This media URL is not supported.":"This media URL is not supported.","Insert media":"Insert media","Media":"मीडिया","Media toolbar":"Media toolbar","Open media in new tab":"नए टैब में मीडिया खोलें","Numbered List":"Numbered List","Bulleted List":"Bulleted List","To-do List":"To-do List","Bulleted list styles toolbar":"Bulleted list styles toolbar","Numbered list styles toolbar":"Numbered list styles toolbar","Toggle the disc list style":"Toggle the disc list style","Toggle the circle list style":"Toggle the circle list style","Toggle the square list style":"Toggle the square list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the upper–roman list style":"Toggle the upper–roman list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Disc":"Disc","Circle":"Circle","Square":"Square","Decimal":"Decimal","Decimal with leading zero":"Decimal with leading zero","Lower–roman":"Lower–roman","Upper-roman":"Upper-roman","Lower-latin":"Lower-latin","Upper-latin":"Upper-latin","List properties":"प्रॉपर्टीज़ को लिस्ट करें","Start at":"शुरू करे इस पर","Invalid start index value.":"इनवैलिड स्टार्ट इंडेक्स वैल्यू.","Start index must be greater than 0.":"स्टार्ट इंडेक्स 0 से अधिक होना चाहिए.","Reversed order":"रिवर्स किया गया क्रम","Keystrokes that can be used in a list":"वे कीस्ट्रोक्स जिनका इस्तेमाल किसी लिस्ट में किया जा सकता है","Increase list item indent":"लिस्ट आइटम इंडेंट को बढ़ाएँ","Decrease list item indent":"लिस्ट आइटम इंडेंट को घटाएँ","Entering a to-do list":"एक कार्य सूची में प्रवेश कर रहे हैं","Leaving a to-do list":"एक कार्य सूची छोड़ी जा रही है","Unlink":"Unlink","Link":"Link","Link URL":"Link URL","Link URL must not be empty.":"लिंक का URL रिक्त नहीं होना चाहिए.","Link image":"Link image","Edit link":"Edit link","Open link in new tab":"Open link in new tab","This link has no URL":"This link has no URL","Open in a new tab":"Open in a new tab","Downloadable":"Downloadable","Create link":"लिंक बनाएँ","Move out of a link":"लिंक के बाहर जाएँ","Scroll to target":"टारगेट तक स्क्रॉल करें","Language":"भाषा","Choose language":"भाषा चुनें","Remove language":"भाषा हटाएं","Increase indent":"Increase indent","Decrease indent":"Decrease indent","image widget":"image widget","Wrap text":"टेक्स्ट रैप करें","Break text":"टेक्स्ट तोड़ें","In line":"इन - लाइन","Side image":"Side image","Full size image":"Full size image","Left aligned image":"Left aligned image","Centered image":"Centered image","Right aligned image":"Right aligned image","Change image text alternative":"Change image text alternative","Text alternative":"Text alternative","Enter image caption":"Enter image caption","Insert image":"Insert image","Replace image":"इमेज बदलें","Upload from computer":"कंप्यूटर से अपलोड करे","Replace from computer":"कंप्यूटर से बदलें","Upload image from computer":"कंप्यूटर से इमेज अपलोड करें","Image from computer":"कंप्यूटर से इमेज","From computer":"कंप्यूटर से","Replace image from computer":"कंप्यूटर से इमेज बदलें","Upload failed":"Upload failed","You have no image upload permissions.":"आपके पास तस्वीर को अपलोड करने की अनुमति नहीं है.","Image toolbar":"Image toolbar","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Resize image (in %0)":"(%0 में) तस्वीर का साइज़ बदलें","Original":"Original","Custom image size":"तस्वीर का कस्टम साइज़","Custom":"कस्टम","Image resize list":"Image resize list","Insert image via URL":"Insert image via URL","Insert via URL":"URL के माध्यम से इंसर्ट करें","Image via URL":"URL के माध्यम से इमेज","Via URL":"URL के माध्यम से","Update image URL":"Update image URL","Caption for the image":"छवि के लिए कैप्शन","Caption for image: %0":"छवि के लिए कैप्शन: %0","The value must not be empty.":"वैल्यू रिक्त नहीं होना चाहिए.","The value should be a plain number.":"वैल्यू एक प्लेन नंबर होना चाहिए.","Uploading image":"तस्वीर अपलोड की जा रही है","Image upload complete":"तस्वीर का अपलोड पूरा हुआ","Error during image upload":"तस्वीर अपलोड के दौरान त्रुटि","Image":"इमेज","HTML object":"एचटीएमएल वस्तु","Insert HTML":"एचटीएमएल इन्सर्ट करें","HTML snippet":"एचटीएमएल स्निपेट","Paste raw HTML here...":"रॉ एचटीएमएल यहां पेस्ट करें...","Edit source":"सोर्स एडिट करें","Save changes":"चेंजेज़ को सेव करें","No preview available":"कोई प्रीव्यू उपलब्ध नहीं","Empty snippet content":"खाली स्निपेट कंटेंट","Horizontal line":"Horizontal line","Yellow marker":"Yellow marker","Green marker":"Green marker","Pink marker":"Pink marker","Blue marker":"Blue marker","Red pen":"Red pen","Green pen":"Green pen","Remove highlight":"Remove highlight","Highlight":"Highlight","Text highlight toolbar":"Text highlight toolbar","Heading":"Heading","Choose heading":"Choose heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Type your title":"Type your title","Type or paste your content here.":"Type or paste your content here.","Font Size":"Font Size","Tiny":"Tiny","Small":"Small","Big":"Big","Huge":"Huge","Font Family":"Font Family","Default":"Default","Font Color":"Font Color","Font Background Color":"Font Background Color","Document colors":"Document colors","Find and replace":"ढूँढें और बदलें","Find in text…":"टेक्स्ट में ढूंढें…","Find":"ढूँढें","Previous result":"पिछला रेज़ल्ट","Next result":"अगला रेज़ल्ट","Replace":"बदलें","Replace all":"सब बदल दें","Match case":"केस मैच करें","Whole words only":"केवल पूरे शब्द","Replace with…":"...के साथ बदलें","Text to find must not be empty.":"खोजने के लिए टेक्स्ट खाली नहीं होना चाहिए.","Tip: Find some text first in order to replace it.":"टिप:उसे बदलने के लिए पहले कुछ वह टेक्स्ट खोजें.","Advanced options":"एडवांस्ड विकल्प","Find in the document":"डॉक्युमेंट में खोजें","Insert a soft break (a <code>&lt;br&gt;</code> element)":"एक सॉफ़्ट ब्रेक इंसर्ट करें (एक <code>&lt;br&gt;</code> एलिमेंट)","Insert a hard break (a new paragraph)":"एक हार्ड ब्रेक इंसर्ट करें (एक नया पैराग्राफ़)","Cancel":"Cancel","Clear":"साफ़ करें","Remove color":"Remove color","Restore default":"डिफ़ॉल्ट रिस्टोर कर दें","Save":"Save","Show more items":"Show more items","%0 of %1":"%0 of %1","Cannot upload file:":"Cannot upload file:","Rich Text Editor. Editing area: %0":"रिच टेक्स्ट एडिटर। संपादन क्षेत्र: %0","Insert with file manager":"फ़ाइल मैनेजर से इन्सर्ट करें","Replace with file manager":"फ़ाइल मैनेजर से बदलें","Insert image with file manager":"फ़ाइल मैनेजर से इमेज इन्सर्ट करें","Replace image with file manager":"इमेज को फ़ाइल मैनेजर से बदलें","File":"फाइल","With file manager":"फ़ाइल मैनेजर के साथ","Toggle caption off":"कैप्शन को टॉगल बंद करें","Toggle caption on":"कैप्शन का टॉगल ऑन करें","Content editing keystrokes":"कॉन्टेंट एडिटिंग कीस्ट्रोक्स","These keyboard shortcuts allow for quick access to content editing features.":"ये कीबोर्ड शॉर्टकट्स कॉन्टेंट एडिटिंग फ़ीचर्स तक पहुँचना आसान बनाते हैं.","User interface and content navigation keystrokes":"यूज़र इंटरफ़ेस और कॉन्टेंट नैविगेशन कीस्ट्रोक्स","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"CKEditor 5 यूज़र इंटरफ़ेस में और बेहतरीन नैविगेशन के लिए इन कीस्ट्रोक्स का इस्तेमाल करें.","Close contextual balloons, dropdowns, and dialogs":"कॉन्टेक्सचुअल बलून्स, ड्रॉपडाउन्स और डायलॉग्स को बंद करें","Open the accessibility help dialog":"एक्सेसिबिलिटी हेल्प डायलॉग को खोलें","Move focus between form fields (inputs, buttons, etc.)":"फ़ॉर्म फ़ील्ड्स (इनपुट्स, बटन्स, आदि) के बीच फ़ोकस को मूव करें","Move focus to the menu bar, navigate between menu bars":"फ़ोकस को मेनू बार पर ले जाएँ, मेनू बार के बीच नेविगेट करें","Move focus to the toolbar, navigate between toolbars":"फ़ोकस को टूलबार पर ले जाएँ, टूलबार्स के बीच नैविगेट करें","Navigate through the toolbar or menu bar":"टूलबार या मेनू बार के माध्यम से नेविगेट करें","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"वर्तमान में फोकस्ड बटन दबाएँ. एडिटर के कंटेंट के साथ इंटरैक्ट करने वाले बटनों को दबाने से फोकस वापस कंटेंट पर आ जाता है.","Accept":"स्वीकार करें","Paragraph":"Paragraph","Color picker":"Color picker","Insert code block":"Insert code block","Plain text":"Plain text","Leaving %0 code snippet":"%0 कोड स्निपेट से बहार निकला जा रहा है","Entering %0 code snippet":"%0 कोड स्निपेट में प्रवेश किया जा रहा है","Entering code snippet":"कोड स्निपेट में प्रवेश किया जा रहा है","Leaving code snippet":"कोड स्निपेट में प्रवेश किया जा रहा है","Code block":"कोड ब्लॉक","Copy selected content":"सेलेक्ट किए गए कॉन्टेंट को कॉपी करें","Paste content":"कॉन्टेंट पेस्ट करें","Paste content as plain text":"कॉन्टेंट को प्लेन टेक्स्ट के रूप में पेस्ट करें","Insert image or file":"Insert image or file","Could not obtain resized image URL.":"Could not obtain resized image URL.","Selecting resized image failed":"Selecting resized image failed","Could not insert image at the current position.":"Could not insert image at the current position.","Inserting image failed":"Inserting image failed","Open file manager":"फाइल मैनेजर खोलें","Cannot determine a category for the uploaded file.":"अपलोड की गई फ़ाइल के लिए एक केटेगरी डिटर्माइन नहीं कर पा रहें.","Cannot access default workspace.":"डिफ़ॉल्ट वर्कस्पेस को ऐक्सेस नहीं किया जा सकता.","You have no image editing permissions.":"आपके पास तस्वीर को एडिट करने की अनुमति नहीं है.","Edit image":"इमेज एडिट करें","Processing the edited image.":"एडिट किए गए इमेज को प्रोसेस किया जा रहा है","Server failed to process the image.":"सर्वर इमेज प्रोसेस करने में विफल रहा.","Failed to determine category of edited image.":"एडिट किए गए इमेज की श्रेणी निर्धारित करने में विफल.","Bookmark":"बुकमार्क","Insert":"इंसर्ट","Update":"अपडेट","Edit bookmark":"बुकमार्क एडिट करें","Remove bookmark":"बुकमार्क हटाएं","Bookmark name":"बुकमार्क का नाम","Enter the bookmark name without spaces.":"बिना स्पेस के बुकमार्क का नाम लिखें.","Bookmark must not be empty.":"बुकमार्क खाली नहीं होना चाहिए.","Bookmark name cannot contain space characters.":"बुकमार्क नाम में स्पेस नहीं हो सकते.","Bookmark name already exists.":"बुकमार्क नाम पहले से मौजूद है.","bookmark widget":"बुकमार्क विजिट","Block quote":"Block quote","Bold":"Bold","Italic":"Italic","Underline":"Underline","Code":"Code","Strikethrough":"Strikethrough","Subscript":"Subscript","Superscript":"Superscript","Italic text":"इटैलिक टेक्स्ट","Move out of an inline code style":"इनलाइन कोड स्टाइल के बाहर जाएँ","Bold text":"टेक्स्ट को बोल्ड करें","Underline text":"टेक्स्ट को अंडरलाइन करें","Strikethrough text":"टेक्स्ट को स्ट्राइकथ्रू करें","Saving changes":"Saving changes","Revert autoformatting action":"ऑटोफ़ॉर्मैटिंग एक्शन को रिवर्ट करें","Align left":"Align left","Align right":"Align right","Align center":"Align center","Justify":"Justify","Text alignment":"Text alignment","Text alignment toolbar":"Text alignment toolbar"},getPluralForm(n){return (n != 1);}}};
e[ 'hi' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'hi' ].dictionary = Object.assign( e[ 'hi' ].dictionary, dictionary );
e[ 'hi' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
