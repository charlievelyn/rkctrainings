/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

( e => {
const { [ 'tr' ]: { dictionary, getPluralForm } } = {"tr":{"dictionary":{"Words: %0":"Kelimeler: %0","Characters: %0":"Karakterler: %0","Widget toolbar":"Bileşen araç çubuğu","Insert paragraph before block":"Bloktan önce paragraf ekle","Insert paragraph after block":"Bloktan sonra paragraf ekle","Press Enter to type after or press Shift + Enter to type before the widget":"Görsel bileşenden sonra yazmak için Enter'a basın ya da görsel bileşenden önce yazmak için Shift + Enter'a basın","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Bir araç takımı seçildiğinde kullanılabilecek tuş vuruşları (örnek: resim, tablo vb.)","Insert a new paragraph directly after a widget":"Araç takımının hemen sonrasına yeni bir paragraf ekle","Insert a new paragraph directly before a widget":"Araç takımının hemen öncesine yeni bir paragraf ekle","Move the caret to allow typing directly before a widget":"Bir araç takımından hemen önce yazmaya izin vermek için ekleme noktasını taşı","Move the caret to allow typing directly after a widget":"Bir araç takımından hemen sonra yazmaya izin vermek için ekleme noktasını taşı","Move focus from an editable area back to the parent widget":"Odağı düzenlenebilir bir alandan üst pencere öğesine geri taşıyın","Upload in progress":"Yükleme işlemi devam ediyor","Undo":"Geri al","Redo":"Tekrar yap","Rich Text Editor":"Zengin İçerik Editörü","Edit block":"Bloğu Düzenle","Click to edit block":"Bloğu düzenlemek için tıkla","Drag to move":"Taşımak için sürükle","Next":"Sonraki","Previous":"Önceki","Editor toolbar":"Düzenleme araç çubuğu","Dropdown toolbar":"Açılır araç çubuğu","Dropdown menu":"Aşağı açılır menü","Black":"Siyah","Dim grey":"Koyu Gri","Grey":"Gri","Light grey":"Açık Gri","White":"Beyaz","Red":"Kırmızı","Orange":"Turuncu","Yellow":"Sarı","Light green":"Açık Yeşil","Green":"Yeşil","Aquamarine":"Su Yeşili","Turquoise":"Turkuaz","Light blue":"Açık Mavi","Blue":"Mavi","Purple":"Mor","Editor block content toolbar":"Düzenleyici engelleme içerik araç çubuğu","Editor contextual toolbar":"Düzenleyici içeriksel araç çubuğu","HEX":"ONALTILIK","No results found":"Sonuç bulunamadı","No searchable items":"Aranabilir öge yok","Editor dialog":"Düzenleyici iletişim kutusu","Close":"Kapat","Help Contents. To close this dialog press ESC.":"Yardım İçerikleri. Bu iletişim kutusunu kapatmak için ESC tuşuna basın.","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Aşağıda editörde kullanılabilecek klavye kısayollarının bir listesini bulabilirsiniz.","(may require <kbd>Fn</kbd>)":"(<kbd>Fn</kbd> gerekebilir)","Accessibility":"Erişilebilirlik","Accessibility help":"Erişilebilirlik yardımı","Press %0 for help.":"Yardım için %0 tuşuna basın.","Move focus in and out of an active dialog window":"Odağı etkin iletişim penceresinin içine ve dışına taşı","MENU_BAR_MENU_FILE":"Dosya","MENU_BAR_MENU_EDIT":"Düzenle","MENU_BAR_MENU_VIEW":"Görüntüle","MENU_BAR_MENU_INSERT":"Ekle","MENU_BAR_MENU_FORMAT":"Biçim","MENU_BAR_MENU_TOOLS":"Araçlar","MENU_BAR_MENU_HELP":"Yardım","MENU_BAR_MENU_TEXT":"Metin","MENU_BAR_MENU_FONT":"Yazı Tipi","Editor menu bar":"Düzenleyici menü çubuğu","Please enter a valid color (e.g. \"ff0000\").":"Lütfen geçerli bir renk girin (ör. \"ff0000\").","Insert table":"Tablo Ekle","Header column":"Başlık kolonu","Insert column left":"Sola kolon ekle","Insert column right":"Sağa kolon ekle","Delete column":"Kolonu sil","Select column":"Kolon seç","Column":"Kolon","Header row":"Başlık satırı","Insert row below":"Alta satır ekle","Insert row above":"Üste satır ekle","Delete row":"Satırı sil","Select row":"Satır seç","Row":"Satır","Merge cell up":"Yukarı doğru birleştir","Merge cell right":"Sağa doğru birleştir","Merge cell down":"Aşağıya doğru birleştir","Merge cell left":"Sola doğru birleştir","Split cell vertically":"Hücreyi dikey böl","Split cell horizontally":"Hücreyi yatay böl","Merge cells":"Hücreleri birleştir","Table toolbar":"Tablo araç çubuğu","Table properties":"Tablo özellikleri","Cell properties":"Hücre özellikleri","Border":"Kenar","Style":"Stil","Width":"Genişlik","Height":"Yükseklik","Color":"Renk","Background":"Arkaplan","Padding":"İç boşluk","Dimensions":"Ölçüler","Table cell text alignment":"Tablo hücresi metin hizalaması","Alignment":"Hizalama","Horizontal text alignment toolbar":"Yatay metin hizalama araç çubuğu","Vertical text alignment toolbar":"Dikey metin hizalama araç çubuğu","Table alignment toolbar":"Tablo hizalama araç çubuğu","None":"Yok","Solid":"Dolu","Dotted":"Noktalı","Dashed":"Kesik çizgili","Double":"Çift","Groove":"Yiv","Ridge":"Yükselti","Inset":"İçe","Outset":"Dışarıya","Align cell text to the left":"Hücre içindeki metnini sola hizala","Align cell text to the center":"Hücre içindeki metnini ortaya hizalama","Align cell text to the right":"Hücre içindeki metnini sağa hizala","Justify cell text":"Hücre içindeki metini iki yana yasla","Align cell text to the top":"Hücre içindeki metni üste hizala","Align cell text to the middle":"Hücre içindeki metni ortaya hizala","Align cell text to the bottom":"Hücre içindeki metni alta hizala","Align table to the left":"Tabloyu sola hizala","Center table":"Tabloyu ortala","Align table to the right":"Tabloyu sağa hizala","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"Geçersiz renk. \"#FF0000\" veya \"rgb(255,0,0)\" veya \"red\" deneyin.","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"Geçersiz değer. \"10px\" veya \"2em\" veya sadece \"2\" deneyin.","Enter table caption":"Tablo açıklaması gir","Keystrokes that can be used in a table cell":"Tablo hücresinde kullanılabilecek tuş vuruşları","Move the selection to the next cell":"Seçimi sonraki hücreye taşı","Move the selection to the previous cell":"Seçimi önceki hücreye taşı","Insert a new table row (when in the last cell of a table)":"Yeni bir tablo satırı ekle (tablonun son hücresindeyken)","Navigate through the table":"Tabloda gezin","Table":"Tablo","Special characters":"Özel karakterler","Category":"Kategori","All":"Tümü","Arrows":"Oklar","Currency":"Para Birimi","Latin":"Latince","Mathematical":"Matematiksel","Text":"Metin","leftwards simple arrow":"sola doğru basit ok","rightwards simple arrow":"sağa doğru basit ok","upwards simple arrow":"yukarı doğru basit ok","downwards simple arrow":"aşağı doğru basit ok","leftwards double arrow":"sola çift ok","rightwards double arrow":"sağa çift ok","upwards double arrow":"yukarı çift ok","downwards double arrow":"aşağı çift ok","leftwards dashed arrow":"sola kesik çizgili ok","rightwards dashed arrow":"sağa kesik çizgili ok","upwards dashed arrow":"yukarı doğru kesik ok","downwards dashed arrow":"aşağı doğru kesik ok","leftwards arrow to bar":"sola ok çubuğu","rightwards arrow to bar":"sağa ok çubuğu","upwards arrow to bar":"yukarı ok çubuğu","downwards arrow to bar":"aşağı ok çubuğu","up down arrow with base":"taban ile yukarı aşağı ok","back with leftwards arrow above":"geri sol ok yukarıda","end with leftwards arrow above":"sona sol ok yukarıda","on with exclamation mark with left right arrow above":"üzerinde sol sağ ok bulunan ünlem işaretiyle","soon with rightwards arrow above":"yakında sağ ok ile","top with upwards arrow above":"en üst yukarı oku","Dollar sign":"Dolar işareti","Euro sign":"Avro işareti","Yen sign":"Yen işareti","Pound sign":"Sterlin işareti","Cent sign":"Kuruş işareti","Euro-currency sign":"Avro para birimi simgesi","Colon sign":"İki nokta üst üste işareti","Cruzeiro sign":"Cruzeiro işareti","French franc sign":"Fransız Frangı işareti","Lira sign":"Lira işareti","Currency sign":"Para birimi işareti","Bitcoin sign":"Bitcoin işareti","Mill sign":"Mill işareti","Naira sign":"Naira işareti","Peseta sign":"Peseta işareti","Rupee sign":"Rupi işareti","Won sign":"Kazanılan işaret","New sheqel sign":"Yeni şekel işareti","Dong sign":"Dong işareti","Kip sign":"Kip işareti","Tugrik sign":"Tugrik işareti","Drachma sign":"Drahmisi işareti","German penny sign":"Alman kuruş işareti","Peso sign":"Peso işareti","Guarani sign":"Guarani işareti","Austral sign":"Austral işareti","Hryvnia sign":"Grivnası işareti","Cedi sign":"Cedi işareti","Livre tournois sign":"Livre tournois işareti","Spesmilo sign":"Spesmilo işareti","Tenge sign":"Tenge işareti","Indian rupee sign":"Hint Rupisi işareti","Turkish lira sign":"Türk Lirası işareti","Nordic mark sign":"İskandinav işareti","Manat sign":"Manat işareti","Ruble sign":"Ruble işareti","Latin capital letter a with macron":"Üstü çizili büyük a harfi","Latin small letter a with macron":"Üstü çizili küçük a harfi","Latin capital letter a with breve":"Üstü yuvarlak büyük a harfi","Latin small letter a with breve":"Üstü yuvarlak küçük a harfi","Latin capital letter a with ogonek":"Altı kuyruklu işaretli büyük a harfi","Latin small letter a with ogonek":"Altı kuyruklu işaretli küçük a harfi","Latin capital letter c with acute":"Üzeri tırnaklı büyük c harfi","Latin small letter c with acute":"Üzeri tırnaklı küçük c harfi","Latin capital letter c with circumflex":"Üzeri şapkalı büyük c harfi","Latin small letter c with circumflex":"Üzeri şapkalı küçük c harfi","Latin capital letter c with dot above":"Üstü noktalı büyük c harfi","Latin small letter c with dot above":"Üstü noktalı küçük c harfi","Latin capital letter c with caron":"Üstü ters şapkalı büyük c harfi","Latin small letter c with caron":"Üstü ters şapkalı küçük c harfi","Latin capital letter d with caron":"Üstü ters şapkalı büyük d harfi","Latin small letter d with caron":"Üstü ters şapkalı küçük d harfi","Latin capital letter d with stroke":"Ortası çizgili büyük d harfi","Latin small letter d with stroke":"Ortası çizgili küçük d harfi","Latin capital letter e with macron":"Üstü çizili büyük e harfi","Latin small letter e with macron":"Üstü çizili küçük e harfi","Latin capital letter e with breve":"Üstü ters şapkalı büyük e harfi","Latin small letter e with breve":"Üstü ters şapkalı küçük e harfi","Latin capital letter e with dot above":"Üstü noktalı büyük e harfi","Latin small letter e with dot above":"Üstü noktalı küçük e harfi","Latin capital letter e with ogonek":"Altı kuyruklu büyük e harfi","Latin small letter e with ogonek":"Altı kuyruklu küçük e harfi","Latin capital letter e with caron":"Üstü ters şapkalı büyük e harfi","Latin small letter e with caron":"Üstü ters şapkalı küçük e harfi","Latin capital letter g with circumflex":"Üzeri şapkalı büyük g harfi","Latin small letter g with circumflex":"Üzeri şapkalı küçük g harfi","Latin capital letter g with breve":"Üstü ters şapkalı büyük g harfi","Latin small letter g with breve":"Üstü ters şapkalı küçük g harfi","Latin capital letter g with dot above":"Üstü noktalı büyük g harfi","Latin small letter g with dot above":"Üstü noktalı küçük g harfi","Latin capital letter g with cedilla":"Altı kuyruklu büyük g harfi","Latin small letter g with cedilla":"Altı kuyruklu küçük g harfi","Latin capital letter h with circumflex":"Üzeri şapkalı büyük h harfi","Latin small letter h with circumflex":"Üzeri şapkalı küçük g harfi","Latin capital letter h with stroke":"Üst kısmı çizgili büyük h harfi","Latin small letter h with stroke":"Üst kısmı çizgili küçük h harfi","Latin capital letter i with tilde":"Üstü tilda işaretli büyük i harfi","Latin small letter i with tilde":"Üstü tilda işaretli küçük i harfi","Latin capital letter i with macron":"Üstü çizili büyük i harfi","Latin small letter i with macron":"Üstü çizili küçük i harfi","Latin capital letter i with breve":"Üstü ters şapkalı büyük i harfi","Latin small letter i with breve":"Üstü ters şapkalı küçük i harfi","Latin capital letter i with ogonek":"Altı kuyruklu büyük i harfi","Latin small letter i with ogonek":"Altı kuyruklu küçük i harfi","Latin capital letter i with dot above":"Üstü noktalı büyük i harfi","Latin small letter dotless i":"Noktası küçük i harfi","Latin capital ligature ij":"Büyük ij harfi","Latin small ligature ij":"Küçük ij harfi","Latin capital letter j with circumflex":"Üzeri şapkalı büyük j harfi","Latin small letter j with circumflex":"Üzeri şapkalı küçük j harfi","Latin capital letter k with cedilla":"Altı kuyruklu büyük k harfi","Latin small letter k with cedilla":"Altı kuyruklu küçük k harfi","Latin small letter kra":"Küçük küt k harfi","Latin capital letter l with acute":"Üzeri tırnaklı büyük L harfi","Latin small letter l with acute":"Üzeri tırnaklı küçük L harfi","Latin capital letter l with cedilla":"Altı kuyruklu büyük L harfi","Latin small letter l with cedilla":"Altı kuyruklu küçük L harfi","Latin capital letter l with caron":"Üstü ters şapkalı büyük L harfi","Latin small letter l with caron":"Üstü ters şapkalı küçük L harfi","Latin capital letter l with middle dot":"Ortası noktalı büyük L harfi","Latin small letter l with middle dot":"Ortası noktalı küçük L harfi","Latin capital letter l with stroke":"Üst kısmı çizgili büyük L harfi","Latin small letter l with stroke":"Üst kısmı çizgili küçük L harfi","Latin capital letter n with acute":"Üzeri tırnaklı büyük n harfi","Latin small letter n with acute":"Üzeri tırnaklı küçük n harfi","Latin capital letter n with cedilla":"Altı kuyruklu büyük n harfi","Latin small letter n with cedilla":"Altı kuyruklu küçük n harfi","Latin capital letter n with caron":"Üstü ters şapkalı büyük n harfi","Latin small letter n with caron":"Üstü ters şapkalı küçük n harfi","Latin small letter n preceded by apostrophe":"Önden apostrof küçük n harfi","Latin capital letter eng":"Alttan kuyruklu büyük n harfi","Latin small letter eng":"Alttan kuyruklu küçük n harfi","Latin capital letter o with macron":"Üstü çizili büyük o harfi","Latin small letter o with macron":"Üstü çizili küçük o harfi","Latin capital letter o with breve":"Üstü ters şapkalı büyük o harfi","Latin small letter o with breve":"Üstü ters şapkalı küçük o harfi","Latin capital letter o with double acute":"Üstü çift tırnaklı büyük o harfi","Latin small letter o with double acute":"Üstü çift tırnaklı küçük o harfi","Latin capital ligature oe":"Büyük yunan OE harfi","Latin small ligature oe":"Küçük yunan OE harfi","Latin capital letter r with acute":"Üzeri tırnaklı büyük r harfi","Latin small letter r with acute":"Üzeri tırnaklı küçük r harfi","Latin capital letter r with cedilla":"Altı kuyruklu büyük r harfi","Latin small letter r with cedilla":"Altı kuyruklu küçük r harfi","Latin capital letter r with caron":"Üstü ters şapkalı büyük r harfi","Latin small letter r with caron":"Üstü ters şapkalı küçük r harfi","Latin capital letter s with acute":"Üzeri tırnaklı büyük s harfi","Latin small letter s with acute":"Üzeri tırnaklı küçük s harfi","Latin capital letter s with circumflex":"Üzeri şapkalı büyük s harfi","Latin small letter s with circumflex":"Üzeri şapkalı küçük s harfi","Latin capital letter s with cedilla":"Altı kuyruklu büyük s harfi","Latin small letter s with cedilla":"Altı kuyruklu küçük s harfi","Latin capital letter s with caron":"Üstü ters şapkalı büyük s harfi","Latin small letter s with caron":"Üstü ters şapkalı küçük s harfi","Latin capital letter t with cedilla":"Altı kuyruklu büyük t harfi","Latin small letter t with cedilla":"Altı kuyruklu küçük t harfi","Latin capital letter t with caron":"Üstü ters şapkalı büyük t harfi","Latin small letter t with caron":"Üstü ters şapkalı küçük t harfi","Latin capital letter t with stroke":"Üst kısmı çizgili büyük t harfi","Latin small letter t with stroke":"Üst kısmı çizgili küçük t harfi","Latin capital letter u with tilde":"Üstü tildalı büyük u harfi","Latin small letter u with tilde":"Üstü tildalı küçük u harfi","Latin capital letter u with macron":"Üstü çizili büyük u harfi","Latin small letter u with macron":"Üstü çizili küçük u harfi","Latin capital letter u with breve":"Üstü ters şapkalı büyük u harfi","Latin small letter u with breve":"Üstü ters şapkalı küçük u harfi","Latin capital letter u with ring above":"Üstü derece işaretli büyük u harfi","Latin small letter u with ring above":"Üstü derece işaretli küçük u harfi","Latin capital letter u with double acute":"Üstü çift tırnaklı büyük u harfi","Latin small letter u with double acute":"Üstü çift tırnaklı küçük u harfi","Latin capital letter u with ogonek":"Altı kuyruklu büyük u harfi","Latin small letter u with ogonek":"Altı kuyruklu küçük u harfi","Latin capital letter w with circumflex":"Üzeri şapkalı büyük w harfi","Latin small letter w with circumflex":"Üzeri şapkalı küçük w harfi","Latin capital letter y with circumflex":"Üzeri şapkalı büyük y harfi","Latin small letter y with circumflex":"Üzeri şapkalı küçük y harfi","Latin capital letter y with diaeresis":"Üstü çift noktalı büyük y harfi","Latin capital letter z with acute":"Üzeri tırnaklı büyük z harfi","Latin small letter z with acute":"Üzeri tırnaklı küçük z harfi","Latin capital letter z with dot above":"Üstü noktalı büyük z harfi","Latin small letter z with dot above":"Üstü noktalı küçük z harfi","Latin capital letter z with caron":"Üstü ters şapkalı büyük z harfi","Latin small letter z with caron":"Üstü ters şapkalı küçük z harfi","Latin small letter long s":"Uzun küçük s harfi","Less-than sign":"Küçüktür işareti","Greater-than sign":"Büyüktür işareti","Less-than or equal to":"Küçük veya eşit","Greater-than or equal to":"Büyük veya eşit","En dash":"Çizgi","Em dash":"Uzun çizgi","Macron":"Uzatma işareti","Overline":"Üstü çizili","Degree sign":"Derece işareti","Minus sign":"Eksi işareti","Plus-minus sign":"Artı eksi işareti","Division sign":"Bölme işareti","Fraction slash":"Kesir eğik çizgi","Multiplication sign":"Çarpma işareti","Latin small letter f with hook":"Latince küçük f harfi","Integral":"İntegral","N-ary summation":"N-ary toplamı","Infinity":"Sonsuzluk","Square root":"Kare kök","Tilde operator":"Tilde operatörü","Approximately equal to":"Yaklaşık olarak eşit","Almost equal to":"Neredeyse eşit","Not equal to":"Eşit değil","Identical to":"Benzeri","Element of":"Öğesi","Not an element of":"Onun öğesi değil","Contains as member":"Üye olarak içerir","N-ary product":"N-ary ürünü","Logical and":"Mantıksal VE","Logical or":"Mantıksal VEYA","Not sign":"İmzalanmamış","Intersection":"Kesişim","Union":"Birleşik","Partial differential":"Kısmi diferansiyel","For all":"Hepsi için","There exists":"Var","Empty set":"Boş küme","Nabla":"Nabla","Asterisk operator":"Yıldız operatörü","Proportional to":"Orantılı","Angle":"Açı","Vulgar fraction one quarter":"Kaba kesir bir çeyrek","Vulgar fraction one half":"Kaba kesir bir buçuk","Vulgar fraction three quarters":"Kaba bölüm dörtte üç","Single left-pointing angle quotation mark":"Tek sola dönük açı tırnak işareti","Single right-pointing angle quotation mark":"Sağa bakan tek açılı tırnak işareti","Left-pointing double angle quotation mark":"Sola dönük çift açılı tırnak işareti","Right-pointing double angle quotation mark":"Sağa bakan çift açılı tırnak işareti","Left single quotation mark":"Sol tek tırnak işareti","Right single quotation mark":"Sağ tek tırnak işareti","Left double quotation mark":"Sol çift tırnak işareti","Right double quotation mark":"Sağ çift tırnak işareti","Single low-9 quotation mark":"Tek düşük 9 tırnak işareti","Double low-9 quotation mark":"Çift düşük 9 tırnak işareti","Inverted exclamation mark":"Ters ünlem işareti","Inverted question mark":"Ters soru işareti","Two dot leader":"Öncelikli iki nokta","Horizontal ellipsis":"Yatay elips","Double dagger":"Çift hançer","Per mille sign":"Bin işareti için","Per ten thousand sign":"Her on bine göre işareti","Double exclamation mark":"Çift ünlem işareti","Question exclamation mark":"Soru ünlem işareti","Exclamation question mark":"Ünlem soru işareti","Double question mark":"Çift soru işareti","Copyright sign":"Telif hakkı işareti","Registered sign":"Kayıtlı işareti","Trade mark sign":"Ticari marka işareti","Section sign":"Bölüm işareti","Paragraph sign":"Paragraf işareti","Reversed paragraph sign":"Ters paragraf işareti","Styles":"Stiller","Multiple styles":"Birden fazla stil","Block styles":"Blok stilleri","Text styles":"Metin stilleri","Show blocks":"Blokları göster","Select all":"Hepsini seç","Source":"Kaynak","Show source":"Kaynağı göster","Remove Format":"Biçimlendirmeyi Kaldır","Disable editing":"Düzenlemeyi devre dışı bırak","Enable editing":"Düzenlemeyi etkinleştir","Previous editable region":"Önceki düzenlenebilir alan","Next editable region":"Sonraki düzenlenebilir alan","Navigate editable regions":"Düzenlenebilir alanlara git","Page break":"Sayfa sonu","media widget":"medya aracı","Media URL":"Medya URL'si","Paste the media URL in the input.":"Medya URL'siini metin kutusuna yapıştırınız.","Tip: Paste the URL into the content to embed faster.":"İpucu: İçeriği daha hızlı yerleştirmek için URL'yi yapıştırın.","The URL must not be empty.":"URL boş olamaz.","This media URL is not supported.":"Desteklenmeyen Medya URL'si.","Insert media":"Medya Ekle","Media":"Medya","Media toolbar":"Medya araç çubuğu","Open media in new tab":"Medyayı yeni sekmede aç","Numbered List":"Numaralı Liste","Bulleted List":"Simgeli Liste","To-do List":"Yapılacaklar Listesi","Bulleted list styles toolbar":"Madde işaretli liste stilleri araç çubuğu","Numbered list styles toolbar":"Numaralandırılmış liste stilleri araç çubuğu","Toggle the disc list style":"Disk liste stilini değiştir","Toggle the circle list style":"Çember liste stilini değiştir","Toggle the square list style":"Kare liste stilini değiştir","Toggle the decimal list style":"Ondalık liste stilini değiştir","Toggle the decimal with leading zero list style":"0'la başlayan ondalık liste stilini değiştir","Toggle the lower–roman list style":"Küçük Roma rakamları liste stilini değiştir","Toggle the upper–roman list style":"Büyük Roma rakamları liste stilini değiştir","Toggle the lower–latin list style":"Küçük Latin harfleri liste stilini değiştir","Toggle the upper–latin list style":"Büyük Latin harfleri liste stilini değiştir","Disc":"Disk","Circle":"Çember","Square":"Kare","Decimal":"Ondalık","Decimal with leading zero":"0'la başlayan ondalık","Lower–roman":"Küçük Roma rakamları","Upper-roman":"Büyük Roma rakamları","Lower-latin":"Küçük Latin harfleri","Upper-latin":"Büyük Latin harfleri","List properties":"Liste özellikleri","Start at":"Şununla başla","Invalid start index value.":"Geçersiz başlangıç ​​dizini değeri.","Start index must be greater than 0.":"Başlangıç dizini 0'dan büyük olmalıdır.","Reversed order":"Ters sıralama","Keystrokes that can be used in a list":"Listedeki kullanılabilecek tuş vuruşları","Increase list item indent":"Liste ögesi girintisini artır","Decrease list item indent":"Liste ögesi girintisini azalt","Entering a to-do list":"Yapılacaklar listesi girmek","Leaving a to-do list":"Yapılacaklar listesinden ayrılma","Unlink":"Bağlantıyı kaldır","Link":"Bağlantı","Link URL":"Bağlantı Adresi","Link URL must not be empty.":"Bağlantı URL'si boş olmamalıdır.","Link image":"Resim bağlantısı","Edit link":"Bağlantıyı değiştir","Open link in new tab":"Yeni sekmede aç","This link has no URL":"Bağlantı adresi yok","Open in a new tab":"Yeni sekmede aç","Downloadable":"İndirilebilir","Create link":"Bağlantı oluştur","Move out of a link":"Bir bağlantıdan çık","Scroll to target":"Hedefe doğru kaydır","Language":"Dil","Choose language":"Dil seç","Remove language":"Dili kaldır","Increase indent":"Girintiyi arttır","Decrease indent":"Girintiyi azalt","image widget":"resim aracı","Wrap text":"Metni kaydır","Break text":"Metni böl","In line":"Aynı hizada","Side image":"Yan Görsel","Full size image":"Tam Boyut Görsel","Left aligned image":"Sola hizalı görsel","Centered image":"Ortalanmış görsel","Right aligned image":"Sağa hizalı görsel","Change image text alternative":"Görsel alternatif yazısını değiştir","Text alternative":"Yazı alternatifi","Enter image caption":"Resim açıklaması gir","Insert image":"Görsel Ekle","Replace image":"Resmi değiştir","Upload from computer":"Bilgisayardan yükle","Replace from computer":"Bilgisayardan değiştir","Upload image from computer":"Bilgisayardan görüntü yükle","Image from computer":"Bilgisayardan görüntü","From computer":"Bilgisayardan","Replace image from computer":"Görüntüyü bilgisayardan değiştir","Upload failed":"Yükleme başarsız","You have no image upload permissions.":"Görüntü yükleme izniniz yok.","Image toolbar":"Resim araç çubuğu","Resize image":"Resmi boyutlandır","Resize image to %0":"Resmi %0 ölçülerine boyutlandır","Resize image to the original size":"Resmi orijinal büyüklüğüne al","Resize image (in %0)":"Resmi yeniden boyutlandır (%0 olarak)","Original":"Orijinal","Custom image size":"Özel resim boyutu","Custom":"Özel","Image resize list":"Resim yeniden boyutlandırma listesi","Insert image via URL":"URL ile görüntü ekle","Insert via URL":"URL aracılığıyla ekle","Image via URL":"URL aracılığıyla görsel","Via URL":"URL'den","Update image URL":"Görüntü URL'sini güncelle","Caption for the image":"Resim için başlık","Caption for image: %0":"Resim için başlık: %0","The value must not be empty.":"Değer boş olmamalıdır.","The value should be a plain number.":"Değer düz bir sayı olmalıdır.","Uploading image":"Resim yükleniyor","Image upload complete":"Resim yüklemesi tamamlandı","Error during image upload":"Resim yükleme sırasında hata oluştu","Image":"Görsel","HTML object":"HTML nesnesi","Insert HTML":"HTML ekle","HTML snippet":"HTML snippet'i","Paste raw HTML here...":"Ham HTML'yi buraya yapıştırın...","Edit source":"Kaynağı düzenle","Save changes":"Değişiklikleri kaydet","No preview available":"Önizleme yok","Empty snippet content":"Snippet içeriği boş","Horizontal line":"Yatay çiizgi","Yellow marker":"Sarı işaretleyici","Green marker":"Yeşil işaretleyici","Pink marker":"Pembe işaretleyici","Blue marker":"Mavi işaretleyici","Red pen":"Kırmızı kalem","Green pen":"Yeşik kalem","Remove highlight":"Vurgulamayı temizle","Highlight":"Vurgu","Text highlight toolbar":"Yazı Vurgulama Araç Çubuğu","Heading":"Başlık","Choose heading":"Başlık tipi seç","Heading 1":"1. Seviye Başlık","Heading 2":"2. Seviye Başlık","Heading 3":"3. Seviye Başlık","Heading 4":"4. Seviye Başlık","Heading 5":"5. Seviye Başlık","Heading 6":"6. Seviye Başlık","Type your title":"Başlığınızı yazınız","Type or paste your content here.":"İçeriğinizi buraya yapıştırın yada yazın.","Font Size":"Yazı Boyutu","Tiny":"Çok Küçük","Small":"Küçük","Big":"Büyük","Huge":"Çok Büyük","Font Family":"Yazı Tipi Ailesi","Default":"Varsayılan","Font Color":"Yazı Tipi Rengi","Font Background Color":"Yazı Tipi Arkaplan Rengi","Document colors":"Belge Rengi","Find and replace":"Bul ve değiştir","Find in text…":"Metinde bul...","Find":"Bul","Previous result":"Önceki sonuç","Next result":"Sonraki sonuç","Replace":"Değiştir","Replace all":"Hepsini değiştir","Match case":"Büyük küçük harfe duyarlı","Whole words only":"Sadece bütün kelimeler","Replace with…":"Şununla değiştir...","Text to find must not be empty.":"Bulunacak metin boş bırakılmamalıdır.","Tip: Find some text first in order to replace it.":"İpucu: Değiştirmek için önce bir metin bul.","Advanced options":"Gelişmiş seçenekler","Find in the document":"Belgede bul","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Değişebilir sayfa sonu ekle (bir <code><br></code> ögesi)","Insert a hard break (a new paragraph)":"Değişmez sayfa sonu ekle (yeni bir paragraf)","Cancel":"İptal","Clear":"Temizle","Remove color":"Rengi Sil","Restore default":"Varsayılanı geri yükle","Save":"Kaydet","Show more items":"Daha fazla öğe göster","%0 of %1":"%0/%1","Cannot upload file:":"Dosya yüklenemedi:","Rich Text Editor. Editing area: %0":"Zengin Metin Editörü.Düzenleme alanı: %0","Insert with file manager":"Dosya yöneticisiyle ekle","Replace with file manager":"Dosya yöneticisiyle değiştirin","Insert image with file manager":"Dosya yöneticisiyle görüntü ekleyin","Replace image with file manager":"Resmi dosya yöneticisiyle değiştir","File":"Dosya","With file manager":"Dosya yöneticisi ile","Toggle caption off":"Açıklamayı kapat","Toggle caption on":"Açıklamayı aç","Content editing keystrokes":"İçerik düzenleme tuş vuruşları","These keyboard shortcuts allow for quick access to content editing features.":"Bu klavye kısayolları içerik düzenleme özelliklerine hızlı erişim sağlar.","User interface and content navigation keystrokes":"Kullanıcı arayüzü ve içerik gezinme tuş vuruşları","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"CKEditor 5 kullanıcı arayüzünde daha etkili gezinti için aşağıdaki tuş vuruşlarını kullanın.","Close contextual balloons, dropdowns, and dialogs":"Bağlamsal balonları, açılır menüleri ve iletişim kutularını kapat","Open the accessibility help dialog":"Erişilebilirlik yardımı iletişim kutusunu aç","Move focus between form fields (inputs, buttons, etc.)":"Odağı, form alanları (girdiler, düğmeler vb.) arasında taşı","Move focus to the menu bar, navigate between menu bars":"Odağı menü çubuğuna taşıyın, menü çubukları arasında gezinin","Move focus to the toolbar, navigate between toolbars":"Odağı araç çubuğuna taşı, araç çubukları arasında gezin","Navigate through the toolbar or menu bar":"Araç çubuğu veya menü çubuğunda gezinme","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"O anda odaklanılan düğmeyi çalıştırın. Düzenleyici içeriğiyle etkileşime giren düğmelerin çalıştırılması, odağı içeriğe geri taşır.","Accept":"Kabul et","Paragraph":"Paragraf","Color picker":"Renk seçici","Insert code block":"Kod bloğu ekle","Plain text":"Düz metin","Leaving %0 code snippet":"%0 kod parçacığından ayrılınıyor","Entering %0 code snippet":"%0 kod parçacığına girmek","Entering code snippet":"Kod parçacığına girmek","Leaving code snippet":"Kod parçacığından ayrılma","Code block":"Kod bloku","Copy selected content":"Seçilen içeriği kopyala","Paste content":"İçeriği yapıştır","Paste content as plain text":"İçeriği düz metin olarak yapıştır","Insert image or file":"Resim veya dosya ekleyin","Could not obtain resized image URL.":"Yeniden boyutlandırılmış resim URL’si alınamadı","Selecting resized image failed":"Yeniden boyutlandırılan resim seçilemedi","Could not insert image at the current position.":"Resim mevcut konumda eklenemedi.","Inserting image failed":"Resim eklenemedi","Open file manager":"Dosya yöneticisini aç","Cannot determine a category for the uploaded file.":"Yüklenen dosya için bir kategori belirlenemiyor.","Cannot access default workspace.":"Varsayılan çalışma alanına erişilemiyor.","You have no image editing permissions.":"Görüntü düzenleme izniniz yok.","Edit image":"Görüntüyü düzenle","Processing the edited image.":"Düzenlenen görüntü işleniyor.","Server failed to process the image.":"Sunucu görüntüyü işlemede başarısız oldu.","Failed to determine category of edited image.":"Düzenlenen görselin kategorisinin belirlenmesi başarısız oldu.","Bookmark":"Yer imi","Insert":"Ekle","Update":"Güncelle","Edit bookmark":"Yer imini düzenle","Remove bookmark":"Yer imini kaldır","Bookmark name":"Yer imi adı","Enter the bookmark name without spaces.":"Yer imi adını boşluk bırakmadan gir.","Bookmark must not be empty.":"Yer imi boş bırakılamaz.","Bookmark name cannot contain space characters.":"Yer imi adı, boşluk karakterleri içeremez.","Bookmark name already exists.":"Yer imi adı zaten var.","bookmark widget":"yer imi araç takımı","Block quote":"Alıntı","Bold":"Kalın","Italic":"İtalik","Underline":"Altı Çizgili","Code":"Kod","Strikethrough":"Üstü çizili","Subscript":"Alt Simge","Superscript":"Üst Simge","Italic text":"İtalik metin","Move out of an inline code style":"Satır içi kod stilinden çık","Bold text":"Kalın yazı","Underline text":"Metnin altını çiz","Strikethrough text":"Metnin üstünü çiz","Saving changes":"Değişiklikler Kaydediliyor","Revert autoformatting action":"Otomatik biçimlendirme işlemini geri al","Align left":"Sola hizala","Align right":"Sağa hizala","Align center":"Ortala","Justify":"İki yana yasla","Text alignment":"Yazı hizalama","Text alignment toolbar":"Yazı Hizlama Araç Çubuğu"},getPluralForm(n){return (n > 1);}}};
e[ 'tr' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'tr' ].dictionary = Object.assign( e[ 'tr' ].dictionary, dictionary );
e[ 'tr' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
