/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

( e => {
const { [ 'pt-br' ]: { dictionary, getPluralForm } } = {"pt-br":{"dictionary":{"Words: %0":"Palavras: %0","Characters: %0":"Caracteres: %0","Widget toolbar":"Ferramentas de Widgets","Insert paragraph before block":"Inserir parágrafo antes do bloco","Insert paragraph after block":"Inserir parágrafo após o bloco","Press Enter to type after or press Shift + Enter to type before the widget":"Pressione Enter para digitar depois ou pressione Shift + Enter para digitar antes do widget","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Teclas que podem ser usadas quando um widget está selecionado (por exemplo: imagem, tabela, etc.)","Insert a new paragraph directly after a widget":"Inserir um novo parágrafo diretamente após um widget","Insert a new paragraph directly before a widget":"Inserir um novo parágrafo diretamente antes de um widget","Move the caret to allow typing directly before a widget":"Mova o cursor para permitir a digitação diretamente antes de um widget","Move the caret to allow typing directly after a widget":"Mova o cursor para permitir a digitação diretamente após um widget","Move focus from an editable area back to the parent widget":"Mova o foco de uma área editável de volta para o widget-pai","Upload in progress":"Enviando dados","Undo":"Desfazer","Redo":"Refazer","Rich Text Editor":"Editor de Formatação","Edit block":"Editor de bloco","Click to edit block":"Clicar para editar o bloco","Drag to move":"Arrastar para mover","Next":"Próximo","Previous":"Anterior","Editor toolbar":"Ferramentas do Editor","Dropdown toolbar":"Barra de Ferramentas da Lista Suspensa","Dropdown menu":"Menu suspenso","Black":"Preto","Dim grey":"Cinza escuro","Grey":"Cinza","Light grey":"Cinza claro","White":"Branco","Red":"Vermelho","Orange":"Laranja","Yellow":"Amarelo","Light green":"Verde claro","Green":"Verde","Aquamarine":"Água-marinha","Turquoise":"Turquesa","Light blue":"Azul claro","Blue":"Azul","Purple":"Púrpura","Editor block content toolbar":"Barra de ferramentas de bloco do Editor","Editor contextual toolbar":"Barra de ferramentas contextual do Editor","HEX":"Hexadecimal","No results found":"Nenhum resultado encontrado","No searchable items":"Sem itens pesquisáveis","Editor dialog":"Diálogo do editor","Close":"Fechar","Help Contents. To close this dialog press ESC.":"Conteúdo de Ajuda. Para fechar este diálogo pressione ESC.","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Abaixo, você pode encontrar uma lista de atalhos de teclado que podem ser usados no editor.","(may require <kbd>Fn</kbd>)":"(pode requerer <kbd>Fn</kbd>)","Accessibility":"Acessibilidade","Accessibility help":"Ajuda de acessibilidade","Press %0 for help.":"Pressione %0 para ajuda.","Move focus in and out of an active dialog window":"Mover o foco para dentro e fora de uma janela de diálogo ativa","MENU_BAR_MENU_FILE":"Arquivo","MENU_BAR_MENU_EDIT":"Editar","MENU_BAR_MENU_VIEW":"Visualizar","MENU_BAR_MENU_INSERT":"Inserir","MENU_BAR_MENU_FORMAT":"Formato","MENU_BAR_MENU_TOOLS":"Ferramentas","MENU_BAR_MENU_HELP":"Ajuda","MENU_BAR_MENU_TEXT":"Texto","MENU_BAR_MENU_FONT":"Fonte","Editor menu bar":"Barra de menu do editor","Please enter a valid color (e.g. \"ff0000\").":"Digite uma cor válida (por exemplo, \"ff0000\").","Insert table":"Inserir tabela","Header column":"Coluna de cabeçalho","Insert column left":"Inserir coluna à esquerda","Insert column right":"Inserir coluna à direita","Delete column":"Excluir coluna","Select column":"Selecionar coluna","Column":"Coluna","Header row":"Linha de cabeçalho","Insert row below":"Inserir linha abaixo","Insert row above":"Inserir linha acima","Delete row":"Excluir linha","Select row":"Selecionar linha","Row":"Linha","Merge cell up":"Mesclar acima","Merge cell right":"Mesclar à direita","Merge cell down":"Mesclar abaixo","Merge cell left":"Mesclar à esquerda","Split cell vertically":"Dividir verticalmente","Split cell horizontally":"Dividir horizontalmente","Merge cells":"Mesclar células","Table toolbar":"Ferramentas de Tabela","Table properties":"Propriedades da tabela","Cell properties":"Propriedades da célula","Border":"Borda","Style":"Estilo","Width":"Largura","Height":"Altura","Color":"Cor","Background":"Cor de fundo","Padding":"Margem interna","Dimensions":"Dimensões","Table cell text alignment":"Alinhamento do texto na célula","Alignment":"Alinhamento","Horizontal text alignment toolbar":"Ferramentas de alinhamento horizontal do texto","Vertical text alignment toolbar":"Ferramentas de alinhamento vertical do texto","Table alignment toolbar":"Ferramentas de alinhamento da tabela","None":"Sem borda","Solid":"Sólida","Dotted":"Pontilhada","Dashed":"Tracejada","Double":"Dupla","Groove":"Ranhura","Ridge":"Crista","Inset":"Baixo relevo","Outset":"Alto relevo","Align cell text to the left":"Alinhar texto da célula para a esquerda","Align cell text to the center":"Alinhar texto da célula centralizado","Align cell text to the right":"Alinhar texto da célula para a direita","Justify cell text":"Justificar texto da célula","Align cell text to the top":"Alinhar texto da célula para o topo","Align cell text to the middle":"Alinhar texto da célula para o meio","Align cell text to the bottom":"Alinhar texto da célula para baixo","Align table to the left":"Alinhar tabela para esquerda","Center table":"Centralizar tabela","Align table to the right":"Alinhar tabela para direita","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"Cor inválida. Tente \"#FF0000\" ou \"rgb(255,0,0)\" ou \"red\"","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"Valor inválido. Tente \"10px\" ou \"2em\" ou apenas \"2\"","Enter table caption":"Inserir legenda da tabela","Keystrokes that can be used in a table cell":"Teclas que podem ser usadas em uma célula de tabela","Move the selection to the next cell":"Mover a seleção para a próxima célula","Move the selection to the previous cell":"Mover a seleção para a célula anterior","Insert a new table row (when in the last cell of a table)":"Inserir uma nova linha de tabela (quando na última célula de uma tabela)","Navigate through the table":"Navegar pela tabela","Table":"Tabela","Special characters":"Caracteres especiais","Category":"Categoria","All":"Tudo","Arrows":"Setas","Currency":"Moeda","Latin":"Latim","Mathematical":"Matemática","Text":"Texto","leftwards simple arrow":"seta simples para a esquerda","rightwards simple arrow":"seta simples para a direita","upwards simple arrow":"seta simples para cima","downwards simple arrow":"seta simples para baixo","leftwards double arrow":"seta dupla para esquerda","rightwards double arrow":"seta dupla para direita","upwards double arrow":"seta dupla para cima","downwards double arrow":"seta dupla para baixo","leftwards dashed arrow":"seta tracejada para esquerda","rightwards dashed arrow":"seta tracejada para direita","upwards dashed arrow":"seta tracejada para cima","downwards dashed arrow":"seta tracejada para baixo","leftwards arrow to bar":"seta à esquerda para barra","rightwards arrow to bar":"seta à direita para barra","upwards arrow to bar":"seta a cima para barra","downwards arrow to bar":"seta a baixo para barra","up down arrow with base":"seta para cima e para baixo com base","back with leftwards arrow above":"símbolo BACK com a seta para esquerda acima","end with leftwards arrow above":"símbolo END com a seta para esquerda acima","on with exclamation mark with left right arrow above":"símbolo ON com ponto de exclamação e seta para esquerda e direita acima","soon with rightwards arrow above":"símbolo SOON com a seta para a direita acima","top with upwards arrow above":"símbolo TOP com a seta para cima acima","Dollar sign":"Símbolo do Dólar","Euro sign":"Símbolo do Euro","Yen sign":"Símbolo do Yen","Pound sign":"Símbolo de Libra","Cent sign":"Símbolo de Centavo","Euro-currency sign":"Símbolo da moeda Euro","Colon sign":"Sinal de dois pontos","Cruzeiro sign":"Símbolo do Cruzeiro","French franc sign":"Símbolo do Franco Francês","Lira sign":"Símbolo da Lira","Currency sign":"Símbolo de moeda","Bitcoin sign":"Símbolo do Bitcoin","Mill sign":"Símbolo de Mill","Naira sign":"Símbolo de Naira","Peseta sign":"Símbolo de Peseta","Rupee sign":"Símbolo da Rupia","Won sign":"Símbolo do Won","New sheqel sign":"Símbolo do Novo Sheqel","Dong sign":"Símbolo do Dong","Kip sign":"Símbolo do Kip","Tugrik sign":"Símbolo de Tugrik","Drachma sign":"Sinal de Dracma","German penny sign":"Símbolo do Centavo Alemão","Peso sign":"Símbolo do Peso","Guarani sign":"Símbolo do Guarani","Austral sign":"Símbolo de Austral","Hryvnia sign":"Símbolo de Hryvnia","Cedi sign":"Símbolo de Cedi","Livre tournois sign":"Símbolo de Livre tournois","Spesmilo sign":"Símbolo do Spesmilo","Tenge sign":"Símbolo do Tenge","Indian rupee sign":"Símbolo da Rupia Indiana","Turkish lira sign":"Símbolo da Lira Turca","Nordic mark sign":"Símbolo do Marco Nórdico","Manat sign":"Símbolo do Manat","Ruble sign":"Símbolo do Rublo Russo","Latin capital letter a with macron":"Símbolo latim maiúsculo A com mácron","Latin small letter a with macron":"Símbolo latim minúsculo A com mácron","Latin capital letter a with breve":"Símbolo latim maiúsculo A com breve","Latin small letter a with breve":"Símbolo latim minúsculo A com breve","Latin capital letter a with ogonek":"Símbolo latim maiúsculo A com ogonek","Latin small letter a with ogonek":"Símbolo latim minúsculo A com ogonek","Latin capital letter c with acute":"Símbolo latim maiúsculo C com acento agudo","Latin small letter c with acute":"Símbolo latim minúsculo C com acento agudo","Latin capital letter c with circumflex":"Símbolo latim maiúsculo C com acento circunflexo","Latin small letter c with circumflex":"Símbolo latim minúsculo C com acento circunflexo","Latin capital letter c with dot above":"Símbolo latim maiúsculo C com ponto acima","Latin small letter c with dot above":"Símbolo latim minúsculo C com ponto acima","Latin capital letter c with caron":"Símbolo latim maiúsculo C com caron","Latin small letter c with caron":"Símbolo latim minúsculo C com caron","Latin capital letter d with caron":"Símbolo latim maiúsculo D com caron","Latin small letter d with caron":"Símbolo latim minúsculo D com caron","Latin capital letter d with stroke":"Símbolo latin maiúsculo D com um traçado vertical","Latin small letter d with stroke":"Símbolo latin minúsculo D com um traçado vertical","Latin capital letter e with macron":"Símbolo latim maiúsculo E com mácron","Latin small letter e with macron":"Símbolo latim minúsculo E com mácron","Latin capital letter e with breve":"Símbolo latim maiúsculo E com breve","Latin small letter e with breve":"Símbolo latim minúsculo E com breve","Latin capital letter e with dot above":"Símbolo latim maiúsculo E com ponto acima","Latin small letter e with dot above":"Símbolo latim minúsculo E com ponto acima","Latin capital letter e with ogonek":"Símbolo latim maiúsculo E com ogonek","Latin small letter e with ogonek":"Símbolo latim minúsculo E com ogonek","Latin capital letter e with caron":"Símbolo latim maiúsculo E com caron","Latin small letter e with caron":"Símbolo latim minúsculo E com caron","Latin capital letter g with circumflex":"Símbolo latim maiúsculo G com acento circunflexo","Latin small letter g with circumflex":"Símbolo latim minúsculo G com acento circunflexo","Latin capital letter g with breve":"Símbolo latim maiúsculo G com breve","Latin small letter g with breve":"Símbolo latim minúsculo G com breve","Latin capital letter g with dot above":"Símbolo latim maiúsculo G com ponto acima","Latin small letter g with dot above":"Símbolo latim minúsculo G com ponto acima","Latin capital letter g with cedilla":"Símbolo latim maiúsculo G com cedilha","Latin small letter g with cedilla":"Símbolo latim minúsculo G com cedilha","Latin capital letter h with circumflex":"Símbolo latim maiúsculo H com acento circunflexo","Latin small letter h with circumflex":"Símbolo latim minúsculo H com acento circunflexo","Latin capital letter h with stroke":"Símbolo latin maiúsculo H com um traçado vertical","Latin small letter h with stroke":"Símbolo latin minúsculo H com um traçado vertical","Latin capital letter i with tilde":"Símbolo latim maiúsculo I com til","Latin small letter i with tilde":"Símbolo latim minúsculo I com til","Latin capital letter i with macron":"Símbolo latim maiúsculo I com mácron","Latin small letter i with macron":"Símbolo latim minúsculo I com mácron","Latin capital letter i with breve":"Símbolo latim maiúsculo I com breve","Latin small letter i with breve":"Símbolo latim minúsculo I com breve","Latin capital letter i with ogonek":"Símbolo latim maiúsculo I com ogonek","Latin small letter i with ogonek":"Símbolo latim minúsculo I com ogonek","Latin capital letter i with dot above":"Símbolo latim maiúsculo I com ponto acima","Latin small letter dotless i":"Símbolo latin sem ponto I","Latin capital ligature ij":"Símbolo latin maiúsculo ligadura IJ","Latin small ligature ij":"Símbolo latin minúsculo ligadura IJ","Latin capital letter j with circumflex":"Símbolo latim maiúsculo J com acento circunflexo","Latin small letter j with circumflex":"Símbolo latim minúsculo J com acento circunflexo","Latin capital letter k with cedilla":"Símbolo latim maiúsculo K com cedilha","Latin small letter k with cedilla":"Símbolo latim minúsculo K com cedilha","Latin small letter kra":"Símbolo latin minúsculo K","Latin capital letter l with acute":"Símbolo latim maiúsculo l com acento agudo","Latin small letter l with acute":"Símbolo latim minúsculo I com acento agudo","Latin capital letter l with cedilla":"Símbolo latim maiúsculo L com cedilha","Latin small letter l with cedilla":"Símbolo latim minúsculo L com cedilha","Latin capital letter l with caron":"Símbolo latim maiúsculo I com caron","Latin small letter l with caron":"Símbolo latim minúsculo I com caron","Latin capital letter l with middle dot":"Símbolo latin maiúsculo L com ponto no meio","Latin small letter l with middle dot":"Símbolo latin minúsculo L com ponto no meio","Latin capital letter l with stroke":"Símbolo latin maiúsculo L com um traçado vertical","Latin small letter l with stroke":"Símbolo latin minúsculo L com um traçado vertical","Latin capital letter n with acute":"Símbolo latim maiúsculo N com acento agudo","Latin small letter n with acute":"Símbolo latim minúsculo N com acento agudo","Latin capital letter n with cedilla":"Símbolo latim maiúsculo N com cedilha","Latin small letter n with cedilla":"Símbolo latim minúsculo N com cedilha","Latin capital letter n with caron":"Símbolo latim maiúsculo N com caron","Latin small letter n with caron":"Símbolo latim minúsculo N com caron","Latin small letter n preceded by apostrophe":"Símbolo latim minúsculo N precedido por apóstrofe","Latin capital letter eng":"Símbolo latim maiúsculo Eng","Latin small letter eng":"Símbolo latim minúsculo Eng","Latin capital letter o with macron":"Símbolo latim maiúsculo I com mácron","Latin small letter o with macron":"Símbolo latim minúsculo O com mácron","Latin capital letter o with breve":"Símbolo latim maiúsculo O com breve","Latin small letter o with breve":"Símbolo latim minúsculo O com breve","Latin capital letter o with double acute":"Símbolo latim maiúsculo O com acento agudo duplo","Latin small letter o with double acute":"Símbolo latim minúsculo O com acento agudo duplo","Latin capital ligature oe":"Símbolo latin maiúsculo ligadura OE","Latin small ligature oe":"Símbolo latin minúsculo ligadura OE","Latin capital letter r with acute":"Símbolo latim maiúsculo R com acento agudo","Latin small letter r with acute":"Símbolo latim minúsculo R com acento agudo","Latin capital letter r with cedilla":"Símbolo latim maiúsculo R com cedilha","Latin small letter r with cedilla":"Símbolo latim minúsculo R com cedilha","Latin capital letter r with caron":"Símbolo latim maiúsculo R com caron","Latin small letter r with caron":"Símbolo latim minúsculo R com caron","Latin capital letter s with acute":"Símbolo latim maiúsculo S com acento agudo","Latin small letter s with acute":"Símbolo latim minúsculo S com acento agudo","Latin capital letter s with circumflex":"Símbolo latim maiúsculo S com acento circunflexo","Latin small letter s with circumflex":"Símbolo latim minúsculo S com acento circunflexo","Latin capital letter s with cedilla":"Símbolo latim maiúsculo S com cedilha","Latin small letter s with cedilla":"Símbolo latim minúsculo S com cedilha","Latin capital letter s with caron":"Símbolo latim maiúsculo S com caron","Latin small letter s with caron":"Símbolo latim minúsculo S com caron","Latin capital letter t with cedilla":"Símbolo latim maiúsculo T com cedilha","Latin small letter t with cedilla":"Símbolo latim minúsculo T com cedilha","Latin capital letter t with caron":"Símbolo latim maiúsculo T com caron","Latin small letter t with caron":"Símbolo latim minúsculo T com caron","Latin capital letter t with stroke":"Símbolo latin maiúsculo T com um traçado vertical","Latin small letter t with stroke":"Símbolo latin minúsculo T com um traçado vertical","Latin capital letter u with tilde":"Símbolo latim maiúsculo U com til","Latin small letter u with tilde":"Símbolo latim minúsculo U com til","Latin capital letter u with macron":"Símbolo latim maiúsculo I com mácron","Latin small letter u with macron":"Símbolo latim minúsculo U com mácron","Latin capital letter u with breve":"Símbolo latim maiúsculo U com breve","Latin small letter u with breve":"Símbolo latim minúsculo U com breve","Latin capital letter u with ring above":"Símbolo latim maiúsculo U com anel acima","Latin small letter u with ring above":"Símbolo latim minúsculo U com anel acima","Latin capital letter u with double acute":"Símbolo latim maiúsculo U com acento agudo duplo","Latin small letter u with double acute":"Símbolo latim minúsculo U com acento agudo","Latin capital letter u with ogonek":"Símbolo latim maiúsculo U com ogonek","Latin small letter u with ogonek":"Símbolo latim minúsculo U com ogonek","Latin capital letter w with circumflex":"Símbolo latim maiúsculo W com acento circunflexo","Latin small letter w with circumflex":"Símbolo latim minúsculo W com acento circunflexo","Latin capital letter y with circumflex":"Símbolo latim maiúsculo Y com acento circunflexo","Latin small letter y with circumflex":"Símbolo latim minúsculo Y com acento circunflexo","Latin capital letter y with diaeresis":"Símbolo latim maiúsculo Z com trema","Latin capital letter z with acute":"Símbolo latim maiúsculo Z com acento agudo","Latin small letter z with acute":"Símbolo latim minúsculo Z com acento agudo","Latin capital letter z with dot above":"Símbolo latim maiúsculo Z com ponto acima","Latin small letter z with dot above":"Símbolo latim minúsculo Z com ponto acima","Latin capital letter z with caron":"Símbolo latim maiúsculo Z com caron","Latin small letter z with caron":"Símbolo latim minúsculo Z com caron","Latin small letter long s":"Símbolo latim minúsculo long s","Less-than sign":"Sinal menor que","Greater-than sign":"Sinal maior que","Less-than or equal to":"Menor que ou igual a","Greater-than or equal to":"Maior que ou igual a","En dash":"Traço","Em dash":"Travessão","Macron":"Mácron","Overline":"Linha acima","Degree sign":"Sinal de grau","Minus sign":"Sinal de menos","Plus-minus sign":"Sinal de mais ou menos","Division sign":"Sinal de divisão","Fraction slash":"Barra de fração","Multiplication sign":"Sinal de multiplicação","Latin small letter f with hook":"Latim minúsculo F com gancho","Integral":"Integral","N-ary summation":"Somatório","Infinity":"Infinito","Square root":"Raiz quadrada","Tilde operator":"Operador til","Approximately equal to":"Aproximadamente igual a","Almost equal to":"Quase igual a","Not equal to":"Diferente de","Identical to":"Idêntico a","Element of":"Elemento de","Not an element of":"Não é um elemento de","Contains as member":"Contém como membro","N-ary product":"Produto Cartesiano","Logical and":"Operador lógico AND","Logical or":"Operador lógico OR","Not sign":"Sinal de não","Intersection":"Interseção","Union":"União","Partial differential":"Diferencial parcial","For all":"Para todo","There exists":"Existe","Empty set":"Conjunto vazio","Nabla":"Nabla","Asterisk operator":"Operador asterisco","Proportional to":"Proporcional a","Angle":"Ângulo","Vulgar fraction one quarter":"Fração um quarto","Vulgar fraction one half":"Fração um meio","Vulgar fraction three quarters":"Fração três quartos","Single left-pointing angle quotation mark":"Aspas angulares simples esquerda","Single right-pointing angle quotation mark":"Aspas angulares simples direita","Left-pointing double angle quotation mark":"Aspas angulares duplas esquerda","Right-pointing double angle quotation mark":"Aspas angulares duplas direita","Left single quotation mark":"Aspas simples esquerda","Right single quotation mark":"Aspas simples direita","Left double quotation mark":"Aspas dupla esquerda","Right double quotation mark":"Aspas dupla direita","Single low-9 quotation mark":"Aspas baixas simples","Double low-9 quotation mark":"Aspas duplas baixas simples","Inverted exclamation mark":"Ponto de exclamação invertido","Inverted question mark":"Ponto de interrogação invertido","Two dot leader":"Dois pontos","Horizontal ellipsis":"Elipse horizontal","Double dagger":"Adaga dupla","Per mille sign":"Símbolo de por 1 mil","Per ten thousand sign":"Símbolo de por 10 mil","Double exclamation mark":"Sinal do ponto de exclamação duplo","Question exclamation mark":"Ponto de interrogação com exclamação","Exclamation question mark":"Ponto de exclamação com interrogação","Double question mark":"Ponto de interrogação duplo","Copyright sign":"Símbolo de direitos reservados","Registered sign":"Símbolo de registrado","Trade mark sign":"Símbolo de marca registrada","Section sign":"Símbolo de secção","Paragraph sign":"Símbolo de parágrafo","Reversed paragraph sign":"Símbolo de parágrafo invertido","Styles":"Estilos","Multiple styles":"Múltiplos estilos","Block styles":"Estilos de bloco","Text styles":"Estilos de texto","Show blocks":"Mostrar blocos","Select all":"Selecionar tudo","Source":"Código-Fonte","Show source":"Exibir fonte","Remove Format":"Remover Formatação","Disable editing":"Desativar edição","Enable editing":"Ativar edição","Previous editable region":"Região editável anterior","Next editable region":"Próxima região editável","Navigate editable regions":"Navegar entre regiões editáveis","Page break":"Quebra de página","media widget":"Ferramenta de mídia","Media URL":"URL da mídia","Paste the media URL in the input.":"Cole o endereço da mídia no campo.","Tip: Paste the URL into the content to embed faster.":"Cole o endereço dentro do conteúdo para embutir mais rapidamente.","The URL must not be empty.":"A URL não pode ficar em branco.","This media URL is not supported.":"Esta URL de mídia não é suportada.","Insert media":"Inserir mídia","Media":"Mídia","Media toolbar":"Ferramentas de Mídia","Open media in new tab":"Abrir mídia em nova aba","Numbered List":"Lista numerada","Bulleted List":"Lista com marcadores","To-do List":"Lista de Tarefas","Bulleted list styles toolbar":"Barra de ferramentas de estilos de lista com marcador","Numbered list styles toolbar":"Barra de ferramentas de estilos de lista numerada","Toggle the disc list style":"Alternar o estilo da lista de disco","Toggle the circle list style":"Alternar o estilo da lista de círculo","Toggle the square list style":"Alternar o estilo de lista quadrada","Toggle the decimal list style":"Alternar o estilo de lista decimal","Toggle the decimal with leading zero list style":"Alternar o estilo de lista decimal com zero à esquerda","Toggle the lower–roman list style":"Alternar o estilo de lista romana minúscula","Toggle the upper–roman list style":"Alternar o estilo de lista romana maiúscula","Toggle the lower–latin list style":"Alternar o estilo de lista latina minúscula","Toggle the upper–latin list style":"Alternar o estilo de lista latino maiúscula","Disc":"Disco","Circle":"Círculo","Square":"Quadrado","Decimal":"Decimal","Decimal with leading zero":"Decimal com zero à esquerda","Lower–roman":"Romano minúsculo","Upper-roman":"Romano maiúsculo","Lower-latin":"Latim minúsculo","Upper-latin":"Latim maiúsculo","List properties":"Propriedades da lista","Start at":"Iniciar em","Invalid start index value.":"Valor de índice inicial inválido.","Start index must be greater than 0.":"O índice inicial deve ser maior que 0.","Reversed order":"Ordem inversa","Keystrokes that can be used in a list":"Teclas que podem ser usadas em uma lista","Increase list item indent":"Aumentar o recuo do item da lista","Decrease list item indent":"Diminuir o recuo do item da lista","Entering a to-do list":"Inserção de uma lista de tarefas","Leaving a to-do list":"Deixar uma lista de tarefas","Unlink":"Remover link","Link":"Link","Link URL":"URL do link","Link URL must not be empty.":"O URL do link não pode estar vazio.","Link image":"Link com imagem","Edit link":"Editar link","Open link in new tab":"Abrir link em nova aba","This link has no URL":"Este link não possui uma URL","Open in a new tab":"Abrir em nova aba","Downloadable":"Pode ser baixado","Create link":"Criar link","Move out of a link":"Sair de um link","Scroll to target":"Rolar para o destino","Language":"Idioma","Choose language":"Escolher idioma","Remove language":"Remover idioma","Increase indent":"Aumentar recuo","Decrease indent":"Diminuir recuo","image widget":"Ferramenta de imagem","Wrap text":"Texto ao redor","Break text":"Quebrar texto","In line":"Na linha","Side image":"Imagem lateral","Full size image":"Imagem completa","Left aligned image":"Imagem alinhada à esquerda","Centered image":"Imagem centralizada","Right aligned image":"Imagem alinhada à direita","Change image text alternative":"Alterar texto alternativo da imagem","Text alternative":"Texto alternativo","Enter image caption":"Inserir legenda da imagem","Insert image":"Inserir imagem","Replace image":"Substituir imagem","Upload from computer":"Carregar do computador","Replace from computer":"Substituir do computador","Upload image from computer":"Carregar imagem do computador","Image from computer":"Imagem do computador","From computer":"A partir do computador","Replace image from computer":"Substituir a imagem do computador","Upload failed":"Falha ao enviar arquivo","You have no image upload permissions.":"Você não tem permissão para carregar imagens.","Image toolbar":"Ferramentas de Imagem","Resize image":"Redimensionar imagem","Resize image to %0":"Redimensionar a imagem para %0","Resize image to the original size":"Redimensionar a imagem para o tamanho original","Resize image (in %0)":"Redimensionar imagem (em %0)","Original":"Original","Custom image size":"Tamanho de imagem personalizado","Custom":"Personalizar","Image resize list":"Lista de redimensionamento de imagem","Insert image via URL":"Inserir imagem via URL","Insert via URL":"Inserir através de URL","Image via URL":"Imagem através de URL","Via URL":"Através de URL","Update image URL":"Atualizar URL da imagem","Caption for the image":"Legenda para a imagem","Caption for image: %0":"Legenda da imagem: %0","The value must not be empty.":"O valor não deve estar vazio.","The value should be a plain number.":"O valor deve ser um número simples.","Uploading image":"Carregamento de imagem","Image upload complete":"Carregamento de imagem concluído","Error during image upload":"Erro durante o carregamento da imagem","Image":"Imagem","HTML object":"Objeto HTML","Insert HTML":"Inserir HTML","HTML snippet":"Trecho HTML","Paste raw HTML here...":"Cole o HTML puro aqui","Edit source":"Editar código","Save changes":"Salvar alterações","No preview available":"Nenhuma visualização disponível","Empty snippet content":"Trecho sem conteúdo","Horizontal line":"Linha horizontal","Yellow marker":"Marcador amarelo","Green marker":"Marcador verde","Pink marker":"Marcador rosa","Blue marker":"Marcador azul","Red pen":"Caneta vermelha","Green pen":"Caneta verde","Remove highlight":"Remover marcação","Highlight":"Marcador","Text highlight toolbar":"Ferramentas de marcação","Heading":"Titulo","Choose heading":"Escolha o título","Heading 1":"Título 1","Heading 2":"Título 2","Heading 3":"Título 3","Heading 4":"Título 4","Heading 5":"Título 5","Heading 6":"Título 6","Type your title":"Digite o título","Type or paste your content here.":"Digite ou cole o conteúdo aqui.","Font Size":"Tamanho da fonte","Tiny":"Minúsculo","Small":"Pequeno","Big":"Grande","Huge":"Gigante","Font Family":"Fonte","Default":"Padrão","Font Color":"Cor da Fonte","Font Background Color":"Cor de Fundo","Document colors":"Cores do documento","Find and replace":"Localizar e substituir","Find in text…":"Localizar no texto","Find":"Localizar","Previous result":"Ocorrência anterior","Next result":"Próxima ocorrência","Replace":"Substituir","Replace all":"Substituir todos","Match case":"Diferenciar maiúsculas de minúsculas","Whole words only":"Apenas palavras inteiras","Replace with…":"Substituir por...","Text to find must not be empty.":"O texto a ser localizado não pode ser vazio.","Tip: Find some text first in order to replace it.":"Dica: Localize algum texto primeiro para poder substituí-lo.","Advanced options":"Opções avançadas","Find in the document":"Pesquisar no documento","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Inserir uma quebra suave (um elemento <code><br></code>)","Insert a hard break (a new paragraph)":"Inserir uma quebra dura (um novo parágrafo)","Cancel":"Cancelar","Clear":"Limpar","Remove color":"Remover cor","Restore default":"Restaurar padrão","Save":"Salvar","Show more items":"Exibir mais itens","%0 of %1":"%0 de %1","Cannot upload file:":"Não foi possível enviar o arquivo:","Rich Text Editor. Editing area: %0":"Editor de Texto Valioso. Área de edição: %0","Insert with file manager":"Inserir com gerenciador de arquivos","Replace with file manager":"Substituir pelo gerenciador de arquivos","Insert image with file manager":"Inserir imagem com o gerenciador de arquivos","Replace image with file manager":"Substituir imagem pelo gerenciador de arquivos","File":"Arquivo","With file manager":"Com o gerenciador de arquivos","Toggle caption off":"Desabilitar legenda","Toggle caption on":"Habilitar legenda","Content editing keystrokes":"Teclas de edição de conteúdo","These keyboard shortcuts allow for quick access to content editing features.":"Estes atalhos de teclado permitem um rápido acesso às funcionalidades de edição de conteúdo.","User interface and content navigation keystrokes":"Teclas de navegação da interface do usuário e do conteúdo","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use as seguintes teclas para uma navegação mais eficiente na interface do usuário do CKEditor 5.","Close contextual balloons, dropdowns, and dialogs":"Fechar balões contextuais, dropdowns e diálogos","Open the accessibility help dialog":"Abrir o diálogo de ajuda de acessibilidade","Move focus between form fields (inputs, buttons, etc.)":"Mover o foco entre campos de formulário (entradas, botões, etc.)","Move focus to the menu bar, navigate between menu bars":"Mova o foco para a barra de menu, navegue entre as barras de menu","Move focus to the toolbar, navigate between toolbars":"Mover o foco para a barra de ferramentas, navegar entre barras de ferramentas","Navigate through the toolbar or menu bar":"Navegue pela barra de ferramentas ou pela barra de menu","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute o botão com o foco atual. Executar botões que interajam com o conteúdo do editor retorna o foco para o conteúdo.","Accept":"Aceitar","Paragraph":"Parágrafo","Color picker":"Seletor de cor","Insert code block":"Inserir bloco de código","Plain text":"Texto sem formatação","Leaving %0 code snippet":"Deixando o trecho de código %0","Entering %0 code snippet":"Inserção do trecho de código %0","Entering code snippet":"Inserção de trecho de código","Leaving code snippet":"Deixando o trecho de código","Code block":"Bloco de código","Copy selected content":"Copiar conteúdo selecionado","Paste content":"Colar conteúdo","Paste content as plain text":"Colar conteúdo como texto simples","Insert image or file":"Inserir imagem ou arquivo","Could not obtain resized image URL.":"Não foi possível obter o endereço da imagem redimensionada","Selecting resized image failed":"Seleção da imagem redimensionada falhou","Could not insert image at the current position.":"Não foi possível inserir a imagem na posição atual","Inserting image failed":"Falha ao inserir imagem","Open file manager":"Abrir gerenciador de arquivos","Cannot determine a category for the uploaded file.":"Não foi possível determinar a categoria para o arquivo enviado.","Cannot access default workspace.":"Não é possível acessar o espaço de trabalho padrão.","You have no image editing permissions.":"Você não tem permissão para editar imagens.","Edit image":"Editar imagem","Processing the edited image.":"Processando a imagem editada.","Server failed to process the image.":"Falha do servidor ao processar a imagem.","Failed to determine category of edited image.":"Falha ao determinar a categoria da imagem editada.","Bookmark":"Favorito","Insert":"Inserir","Update":"Atualizar","Edit bookmark":"Editar favorito","Remove bookmark":"Remover favorito","Bookmark name":"Nome do favorito","Enter the bookmark name without spaces.":"Insira o nome do favorito sem espaços.","Bookmark must not be empty.":"O favorito não pode estar vazio.","Bookmark name cannot contain space characters.":"O nome do favorito não pode conter caracteres de espaço.","Bookmark name already exists.":"O nome do favorito já existe.","bookmark widget":"widget de favorito","Block quote":"Bloco de citação","Bold":"Negrito","Italic":"Itálico","Underline":"Sublinhado","Code":"Código","Strikethrough":"Tachado","Subscript":"Subscrito","Superscript":"Sobrescrito","Italic text":"Texto em itálico","Move out of an inline code style":"Sair de um estilo de código inline","Bold text":"Texto em negrito","Underline text":"Texto sublinhado","Strikethrough text":"Texto com riscado","Saving changes":"Salvando alterações","Revert autoformatting action":"Reverter ação de autoformatação","Align left":"Alinhar à esquerda","Align right":"Alinhar à direita","Align center":"Centralizar","Justify":"Justificar","Text alignment":"Alinhamento do texto","Text alignment toolbar":"Ferramentas de alinhamento de texto"},getPluralForm(n){return (n != 1);}}};
e[ 'pt-br' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'pt-br' ].dictionary = Object.assign( e[ 'pt-br' ].dictionary, dictionary );
e[ 'pt-br' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
