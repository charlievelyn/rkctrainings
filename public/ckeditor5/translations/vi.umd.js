/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

( e => {
const { [ 'vi' ]: { dictionary, getPluralForm } } = {"vi":{"dictionary":{"Words: %0":"Số chữ: %0","Characters: %0":"Số ký tự: %0","Widget toolbar":"Thanh công cụ tiện ích","Insert paragraph before block":"Chèn đoạn trước khối","Insert paragraph after block":"Chèn đoạn sau khối","Press Enter to type after or press Shift + Enter to type before the widget":"Nhấn Enter để nhập vào sau hoặc nhấn Shift + Enter để nhập vào trước tiện ích","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Tổ hợp phím mà bạn có thể dùng khi một tiện ích được chọn (ví dụ: hình ảnh, bảng, v.v.)","Insert a new paragraph directly after a widget":"Chèn đoạn văn mới ngay sau tiện ích","Insert a new paragraph directly before a widget":"Chèn đoạn văn mới ngay trước tiện ích","Move the caret to allow typing directly before a widget":"Di chuyển dấu sót để cho phép nhập ngay trước một tiện ích","Move the caret to allow typing directly after a widget":"Di chuyển dấu sót để cho phép nhập ngay sau một tiện ích","Move focus from an editable area back to the parent widget":"Di chuyển tiêu điểm từ vùng có thể chỉnh sửa trở lại tiện ích gốc","Upload in progress":"Đang tải lên","Undo":"Hoàn tác","Redo":"Tiếp tục","Rich Text Editor":"Trình soạn thảo văn bản","Edit block":"Chỉnh sửa đoạn","Click to edit block":"Nhấp để sửa khối","Drag to move":"Kéo để di chuyển","Next":"Tiếp theo","Previous":"Quay lại","Editor toolbar":"Thanh công cụ biên tập","Dropdown toolbar":"Thanh công cụ danh mục","Dropdown menu":"Trình đơn thả xuống","Black":"Đen","Dim grey":"Xám mờ","Grey":"Xám","Light grey":"Xám nhạt","White":"Trắng","Red":"Đỏ","Orange":"Cam","Yellow":"Vàng","Light green":"Xanh lá nhạt","Green":"Xanh lá","Aquamarine":"Xanh ngọc biển","Turquoise":"Xanh ngọc bích","Light blue":"Xanh dương","Blue":"Xanh biển","Purple":"Tím","Editor block content toolbar":"Thanh công cụ chỉnh sửa khối nội dung","Editor contextual toolbar":"Thanh công cụ chỉnh sửa theo ngữ cảnh","HEX":"HEX","No results found":"Không tìm thấy kết quả","No searchable items":"Không có mục nào tìm kiếm được","Editor dialog":"Hộp thoại trình biên tập","Close":"Đóng","Help Contents. To close this dialog press ESC.":"Nội dung Trợ giúp. Nhấn phím ESC để đóng hộp thoại này.","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Dưới đây, bạn có thể tìm thấy danh sách các phím tắt mà bạn có thể dùng trong trình biên tập này.","(may require <kbd>Fn</kbd>)":"(có thể cần nhấn phím <kbd>Fn</kbd>)","Accessibility":"Trợ năng","Accessibility help":"Trợ giúp về khả năng truy cập","Press %0 for help.":"Nhấn %0 để được trợ giúp.","Move focus in and out of an active dialog window":"Di chuyển tiêu điểm vào và ra khỏi cửa sổ hộp thoại đang kích hoạt","MENU_BAR_MENU_FILE":"Tệp","MENU_BAR_MENU_EDIT":"Chỉnh sửa","MENU_BAR_MENU_VIEW":"Xem","MENU_BAR_MENU_INSERT":"Chèn","MENU_BAR_MENU_FORMAT":"Định dạng","MENU_BAR_MENU_TOOLS":"Công cụ","MENU_BAR_MENU_HELP":"Trợ giúp","MENU_BAR_MENU_TEXT":"Văn bản","MENU_BAR_MENU_FONT":"Phông chữ","Editor menu bar":"Thanh menu Trình soạn thảo","Please enter a valid color (e.g. \"ff0000\").":"Vui lòng nhập một màu sắc hợp lệ (ví dụ: \"ff0000\").","Insert table":"Tạo bảng","Header column":"Tiêu đề cột","Insert column left":"Thêm cột vào bên trái","Insert column right":"Thêm cột vào bên phải","Delete column":"Xoá cột","Select column":"Chọn cột","Column":"Cột","Header row":"Tiêu đề hàng","Insert row below":"Thêm hàng ở dưới","Insert row above":"Thêm hàng phía trên","Delete row":"Xoá hàng","Select row":"Chọn hàng","Row":"Hàng","Merge cell up":"Sát nhập ô lên trên","Merge cell right":"Sát nhập ô qua phải","Merge cell down":"Sát nhập ô xuống dưới","Merge cell left":"Sát nhập ô qua trái","Split cell vertically":"Tách ô theo chiều dọc","Split cell horizontally":"Tách ô theo chiều ngang","Merge cells":"Sát nhập ô","Table toolbar":"Thanh công cụ bảng","Table properties":"Thuộc tính của bảng","Cell properties":"Thuộc tính của ô","Border":"Viền","Style":"Kiểu","Width":"Rộng","Height":"Cao","Color":"Màu","Background":"Màu nền","Padding":"Cách lề","Dimensions":"Kích thước","Table cell text alignment":"Căn lề văn bản trong ô","Alignment":"Căn lề","Horizontal text alignment toolbar":"Thanh công cụ căn chỉnh văn bản theo chiều ngang","Vertical text alignment toolbar":"Thanh công cụ căn chỉnh văn bản theo chiều dọc","Table alignment toolbar":"Thanh công cụ căn chỉnh bảng","None":"Không có kiểu nào","Solid":"Dạng nét liền","Dotted":"Dạng chấm","Dashed":"Dạng đường đứt nét","Double":"Dạng nét đôi","Groove":"Dạng đường rãnh","Ridge":"Dạng gờ","Inset":"Dạng chìm","Outset":"Dạng nổi","Align cell text to the left":"Căn chỉnh văn bản trong ô về bên trái","Align cell text to the center":"Căn chỉnh văn bản trong ô vào chính giữa","Align cell text to the right":"Căn chỉnh văn bản trong ô về bên phải","Justify cell text":"Căn đều văn bản trong ô","Align cell text to the top":"Căn chỉnh văn bản trong ô lên trên cùng","Align cell text to the middle":"Căn chỉnh văn bản trong ô vào giữa","Align cell text to the bottom":"Căn chỉnh văn bản trong ô xuống dưới cùng","Align table to the left":"Căn chỉnh bảng về phía bên trái","Center table":"Căn chỉnh bảng vào chính giữa","Align table to the right":"Căn chỉnh bảng về phía bên phải","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"Màu này không hợp lệ. Hãy thử \"#FF0000\" hoặc \"rgb(255,0,0)\" hoặc \"red\".","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"Giá trị này không hợp lệ. Hãy thử \"10px\" hoặc \"2em\" hoặc chỉ \"2\".","Enter table caption":"Nhập chú thích cho bảng","Keystrokes that can be used in a table cell":"Tổ hợp phím mà bạn có thể dùng trong một ô bảng","Move the selection to the next cell":"Di chuyển vùng chọn đến ô tiếp theo","Move the selection to the previous cell":"Di chuyển vùng chọn đến ô trước đó","Insert a new table row (when in the last cell of a table)":"Chèn một hàng mới trong bảng (khi ở ô cuối cùng của bảng)","Navigate through the table":"Điều hướng qua bảng","Table":"Bảng","Special characters":"Các ký tự đặc biệt","Category":"Danh mục","All":"Tất cả","Arrows":"Mũi tên","Currency":"Tiền tệ","Latin":"Latin","Mathematical":"Toán học","Text":"Văn bản","leftwards simple arrow":"mũi tên đơn giản chỉ sang trái","rightwards simple arrow":"mũi tên đơn giản chỉ sang phải","upwards simple arrow":"mũi tên đơn giản chỉ lên trên","downwards simple arrow":"mũi tên đơn giản chỉ xuống dưới","leftwards double arrow":"mũi tên kép hướng sang trái","rightwards double arrow":"mũi tên kép hướng sang phải","upwards double arrow":"mũi tên kép hướng lên","downwards double arrow":"mũi tên kép hướng xuống","leftwards dashed arrow":"mũi tên đứt nét hướng sang trái","rightwards dashed arrow":"mũi tên đứt nét hướng sang phải","upwards dashed arrow":"mũi tên đứt nét hướng lên","downwards dashed arrow":"mũi tên đứt nét hướng xuống","leftwards arrow to bar":"mũi tên hướng sang trái về phía thanh","rightwards arrow to bar":"mũi tên hướng sang phải về phía thanh","upwards arrow to bar":"mũi tên hướng lên trên về phía thanh","downwards arrow to bar":"mũi tên hướng xuống dưới về phía thanh","up down arrow with base":"mũi tên lên xuống có đế","back with leftwards arrow above":"back với mũi tên hướng sang trái ở trên","end with leftwards arrow above":"end với mũi tên hướng sang trái ở trên","on with exclamation mark with left right arrow above":"on với dấu chấm than và mũi tên trái phải ở trên","soon with rightwards arrow above":"soon với mũi tên hướng sang phải ở trên","top with upwards arrow above":"top với mũi tên hướng lên ở trên","Dollar sign":"Ký hiệu Đô la","Euro sign":"Ký hiệu Euro","Yen sign":"Ký hiệu Yên Nhật","Pound sign":"Ký hiệu Bảng Anh","Cent sign":"Ký hiệu Cent","Euro-currency sign":"Ký hiệu tiền tệ Euro","Colon sign":"Ký hiệu Colon","Cruzeiro sign":"Ký hiệu Cruzeiro","French franc sign":"Ký hiệu franc Pháp","Lira sign":"Ký hiệu Lira","Currency sign":"Ký hiệu tiền tệ","Bitcoin sign":"Ký hiệu Bitcoin","Mill sign":"Ký hiệu Mill","Naira sign":"Ký hiệu Naira","Peseta sign":"Ký hiệu Peseta","Rupee sign":"Ký hiệu Rupee","Won sign":"Ký hiệu Won","New sheqel sign":"Ký hiệu Shekel mới","Dong sign":"Ký hiệu Đồng","Kip sign":"Ký hiệu Kip","Tugrik sign":"Ký hiệu Tögrög","Drachma sign":"Ký hiệu Drachma","German penny sign":"Ký hiệu penny Đức","Peso sign":"Ký hiệu Peso","Guarani sign":"Ký hiệu Guarani","Austral sign":"Ký hiệu Austral","Hryvnia sign":"Ký hiệu Hryvnia","Cedi sign":"Ký hiệu Cedi","Livre tournois sign":"Ký hiệu Livre tournois","Spesmilo sign":"Ký hiệu Spesmilo","Tenge sign":"Ký hiệu Tenge","Indian rupee sign":"Ký hiệu rupee Ấn Độ","Turkish lira sign":"Ký hiệu lira Thổ Nhĩ Kỳ","Nordic mark sign":"Ký hiệu Mác Bắc Âu","Manat sign":"Ký hiệu Manat","Ruble sign":"Ký hiệu Rúp","Latin capital letter a with macron":"Chữ cái Latinh a viết hoa với dấu trường âm","Latin small letter a with macron":"Chữ cái Latinh a viết thường với dấu trường âm","Latin capital letter a with breve":"Chữ cái Latinh a viết hoa với dấu trăng","Latin small letter a with breve":"Chữ cái Latinh a viết thường với dấu trăng","Latin capital letter a with ogonek":"Chữ cái Latinh a viết hoa với dấu ogonek","Latin small letter a with ogonek":"Chữ cái Latinh a viết thường với dấu ogonek","Latin capital letter c with acute":"Chữ cái Latinh c viết hoa với dấu sắc","Latin small letter c with acute":"Chữ cái Latinh c viết thường với dấu sắc","Latin capital letter c with circumflex":"Chữ cái Latinh c viết hoa với dấu mũ","Latin small letter c with circumflex":"Chữ cái Latinh c viết thường với dấu mũ","Latin capital letter c with dot above":"Chữ cái Latinh c viết hoa với dấu chấm ở trên","Latin small letter c with dot above":"Chữ cái Latinh c viết thường với dấu chấm ở trên","Latin capital letter c with caron":"Chữ cái Latinh c viết hoa với dấu mũ ngược","Latin small letter c with caron":"Chữ cái Latinh c viết thường với dấu mũ ngược","Latin capital letter d with caron":"Chữ cái Latinh d viết hoa với dấu mũ ngược","Latin small letter d with caron":"Chữ cái Latinh d viết thường với dấu mũ ngược","Latin capital letter d with stroke":"Chữ cái Latinh d viết hoa với dấu gạch ngang","Latin small letter d with stroke":"Chữ cái Latinh d viết thường với dấu gạch ngang","Latin capital letter e with macron":"Chữ cái Latinh e viết hoa với dấu trường âm","Latin small letter e with macron":"Chữ cái Latinh e viết thường với dấu trường âm","Latin capital letter e with breve":"Chữ cái Latinh e viết hoa với dấu trăng","Latin small letter e with breve":"Chữ cái Latinh e viết thường với dấu trăng","Latin capital letter e with dot above":"Chữ cái Latinh e viết hoa với dấu chấm ở trên","Latin small letter e with dot above":"Chữ cái Latinh e viết thường với dấu chấm ở trên","Latin capital letter e with ogonek":"Chữ cái Latinh e viết hoa với dấu ogonek","Latin small letter e with ogonek":"Chữ cái Latinh e viết thường với dấu ogonek","Latin capital letter e with caron":"Chữ cái Latinh e viết hoa với dấu mũ ngược","Latin small letter e with caron":"Chữ cái Latinh e viết thường với dấu mũ ngược","Latin capital letter g with circumflex":"Chữ cái Latinh g viết hoa với dấu mũ","Latin small letter g with circumflex":"Chữ cái Latinh g viết thường với dấu mũ","Latin capital letter g with breve":"Chữ cái Latinh g viết hoa với dấu trăng","Latin small letter g with breve":"Chữ cái Latinh g viết thường với dấu trăng","Latin capital letter g with dot above":"Chữ cái Latinh g viết hoa với dấu chấm ở trên","Latin small letter g with dot above":"Chữ cái Latinh g viết thường với dấu chấm ở trên","Latin capital letter g with cedilla":"Chữ cái Latinh g viết hoa với dấu móc dưới","Latin small letter g with cedilla":"Chữ cái Latinh g viết thường với dấu móc dưới","Latin capital letter h with circumflex":"Chữ cái Latinh h viết hoa với dấu mũ","Latin small letter h with circumflex":"Chữ cái Latinh h viết thường với dấu mũ","Latin capital letter h with stroke":"Chữ cái Latinh h viết hoa với dấu gạch ngang","Latin small letter h with stroke":"Chữ cái Latinh h viết thường với dấu gạch ngang","Latin capital letter i with tilde":"Chữ cái Latinh i viết hoa với dấu ngã","Latin small letter i with tilde":"Chữ cái Latinh i viết thường với dấu ngã","Latin capital letter i with macron":"Chữ cái Latinh i viết hoa với dấu trường âm","Latin small letter i with macron":"Chữ cái Latinh i viết thường với dấu trường âm","Latin capital letter i with breve":"Chữ cái Latinh i viết hoa với dấu trăng","Latin small letter i with breve":"Chữ cái Latinh i viết thường với dấu trăng","Latin capital letter i with ogonek":"Chữ cái Latinh i viết hoa với dấu ogonek","Latin small letter i with ogonek":"Chữ cái Latinh i viết thường với dấu ogonek","Latin capital letter i with dot above":"Chữ cái Latinh i viết hoa với dấu chấm ở trên","Latin small letter dotless i":"Chữ cái Latinh i viết thường không dấu chấm","Latin capital ligature ij":"Chữ ghép Latinh ij viết hoa","Latin small ligature ij":"Chữ ghép Latinh ij viết thường","Latin capital letter j with circumflex":"Chữ cái Latinh j viết hoa với dấu mũ","Latin small letter j with circumflex":"Chữ cái Latinh j viết thường với dấu mũ","Latin capital letter k with cedilla":"Chữ cái Latinh k viết hoa với dấu móc dưới","Latin small letter k with cedilla":"Chữ cái Latinh k viết hoa với dấu móc dưới","Latin small letter kra":"Chữ cái Latinh k viết thường","Latin capital letter l with acute":"Chữ cái Latinh l viết hoa với dấu sắc","Latin small letter l with acute":"Chữ cái Latinh l viết thường với dấu sắc","Latin capital letter l with cedilla":"Chữ cái Latinh l viết hoa với dấu móc dưới","Latin small letter l with cedilla":"Chữ cái Latinh l viết thường với dấu móc dưới","Latin capital letter l with caron":"Chữ cái Latinh l viết hoa với dấu mũ ngược","Latin small letter l with caron":"Chữ cái Latinh l viết thường với dấu mũ ngược","Latin capital letter l with middle dot":"Chữ cái Latinh l viết hoa với dấu chấm ở giữa","Latin small letter l with middle dot":"Chữ cái Latinh l viết thường với dấu chấm ở giữa","Latin capital letter l with stroke":"Chữ cái Latinh l viết hoa với dấu gạch ngang","Latin small letter l with stroke":"Chữ cái Latinh l viết thường với dấu gạch ngang","Latin capital letter n with acute":"Chữ cái Latinh n viết hoa với dấu sắc","Latin small letter n with acute":"Chữ cái Latinh n viết thường với dấu sắc","Latin capital letter n with cedilla":"Chữ cái Latinh n viết hoa với dấu móc dưới","Latin small letter n with cedilla":"Chữ cái Latinh n viết thường với dấu móc dưới","Latin capital letter n with caron":"Chữ cái Latinh n viết hoa với dấu mũ ngược","Latin small letter n with caron":"Chữ cái Latinh n viết thường với dấu mũ ngược","Latin small letter n preceded by apostrophe":"Chữ cái Latinh n viết thường có dấu viết lược đứng trước","Latin capital letter eng":"Chữ cái Latinh Ŋ viết hoa","Latin small letter eng":"Chữ cái Latinh ŋ viết thường","Latin capital letter o with macron":"Chữ cái Latinh o viết hoa với dấu trường âm","Latin small letter o with macron":"Chữ cái Latinh o viết thường với dấu trường âm","Latin capital letter o with breve":"Chữ cái Latinh o viết hoa với dấu trăng","Latin small letter o with breve":"Chữ cái Latinh o viết thường với dấu trăng","Latin capital letter o with double acute":"Chữ cái Latinh o viết hoa với dấu sắc kép","Latin small letter o with double acute":"Chữ cái Latinh o viết thường với dấu sắc kép","Latin capital ligature oe":"Chữ ghép Latinh oe viết hoa","Latin small ligature oe":"Chữ ghép Latinh oe viết thường","Latin capital letter r with acute":"Chữ cái Latinh r viết hoa với dấu sắc","Latin small letter r with acute":"Chữ cái Latinh r viết thường với dấu sắc","Latin capital letter r with cedilla":"Chữ cái Latinh r viết hoa với dấu móc dưới","Latin small letter r with cedilla":"Chữ cái Latinh r viết thường với dấu móc dưới","Latin capital letter r with caron":"Chữ cái Latinh r viết hoa với dấu mũ ngược","Latin small letter r with caron":"Chữ cái Latinh r viết thường với dấu mũ ngược","Latin capital letter s with acute":"Chữ cái Latinh s viết hoa với dấu sắc","Latin small letter s with acute":"Chữ cái Latinh s viết thường với dấu sắc","Latin capital letter s with circumflex":"Chữ cái Latinh s viết hoa với dấu mũ","Latin small letter s with circumflex":"Chữ cái Latinh s viết thường với dấu mũ","Latin capital letter s with cedilla":"Chữ cái Latinh s viết hoa với dấu móc dưới","Latin small letter s with cedilla":"Chữ cái Latinh s viết thường với dấu móc dưới","Latin capital letter s with caron":"Chữ cái Latinh s viết hoa với dấu mũ ngược","Latin small letter s with caron":"Chữ cái Latinh s viết thường với dấu mũ ngược","Latin capital letter t with cedilla":"Chữ cái Latinh t viết hoa với dấu móc dưới","Latin small letter t with cedilla":"Chữ cái Latinh t viết thường với dấu móc dưới","Latin capital letter t with caron":"Chữ cái Latinh t viết hoa với dấu mũ ngược","Latin small letter t with caron":"Chữ cái Latinh t viết thường với dấu mũ ngược","Latin capital letter t with stroke":"Chữ cái Latinh t viết hoa với dấu gạch ngang","Latin small letter t with stroke":"Chữ cái Latinh t viết thường với dấu gạch ngang","Latin capital letter u with tilde":"Chữ cái Latinh u viết hoa với dấu ngã","Latin small letter u with tilde":"Chữ cái Latinh u viết hoa với dấu ngã","Latin capital letter u with macron":"Chữ cái Latinh u viết hoa với dấu trường âm","Latin small letter u with macron":"Chữ cái Latinh u viết thường với dấu trường âm","Latin capital letter u with breve":"Chữ cái Latinh u viết hoa với dấu trăng","Latin small letter u with breve":"Chữ cái Latinh u viết thường với dấu trăng","Latin capital letter u with ring above":"Chữ cái Latinh u viết hoa với vòng tròn ở trên","Latin small letter u with ring above":"Chữ cái Latinh u viết thường với vòng tròn ở trên","Latin capital letter u with double acute":"Chữ cái Latinh u viết hoa với dấu sắc kép","Latin small letter u with double acute":"Chữ cái Latinh u viết thường với dấu sắc kép","Latin capital letter u with ogonek":"Chữ cái Latinh u viết hoa với dấu ogonek","Latin small letter u with ogonek":"Chữ cái Latinh u viết thường với dấu ogonek","Latin capital letter w with circumflex":"Chữ cái Latinh w viết hoa với dấu mũ","Latin small letter w with circumflex":"Chữ cái Latinh w viết thường với dấu mũ","Latin capital letter y with circumflex":"Chữ cái Latinh y viết hoa với dấu mũ","Latin small letter y with circumflex":"Chữ cái Latinh y viết thường với dấu mũ","Latin capital letter y with diaeresis":"Chữ cái Latinh y viết hoa với dấu tách đôi","Latin capital letter z with acute":"Chữ cái Latinh z viết hoa với dấu sắc","Latin small letter z with acute":"Chữ cái Latinh z viết thường với dấu sắc","Latin capital letter z with dot above":"Chữ cái Latinh z viết hoa với dấu chấm ở trên","Latin small letter z with dot above":"Chữ cái Latinh z viết thường với dấu chấm ở trên","Latin capital letter z with caron":"Chữ cái Latinh z viết hoa với dấu mũ ngược","Latin small letter z with caron":"Chữ cái Latinh z viết thường với dấu mũ ngược","Latin small letter long s":"Chữ cái Latinh s dài viết thường","Less-than sign":"Ký hiệu nhỏ hơn","Greater-than sign":"Ký hiệu lớn hơn","Less-than or equal to":"Nhỏ hơn hoặc bằng","Greater-than or equal to":"Lớn hơn hoặc bằng","En dash":"Gạch ngang ngắn","Em dash":"Gạch ngang dài","Macron":"Dấu trường âm","Overline":"Gạch trên","Degree sign":"Ký hiệu độ","Minus sign":"Ký hiệu trừ","Plus-minus sign":"Ký hiệu cộng-trừ","Division sign":"Ký hiệu chia","Fraction slash":"Dấu gạch chéo phân số","Multiplication sign":"Ký hiệu nhân","Latin small letter f with hook":"Chữ cái Latinh f viết thường với móc","Integral":"Tích phân","N-ary summation":"Phép tổng n số nguyên","Infinity":"Vô cực","Square root":"Căn bậc hai","Tilde operator":"Toán tử dấu ngã","Approximately equal to":"Xấp xỉ bằng","Almost equal to":"Gần bằng","Not equal to":"Không bằng","Identical to":"Tương đương","Element of":"Thuộc","Not an element of":"Không thuộc","Contains as member":"Chứa","N-ary product":"Tích n số nguyên","Logical and":"Và logic","Logical or":"Hoặc logic","Not sign":"Không","Intersection":"Giao","Union":"Hợp","Partial differential":"Vi phân riêng phần","For all":"Với mọi","There exists":"Tồn tại","Empty set":"Tập hợp rỗng","Nabla":"Nabla","Asterisk operator":"Toán tử dấu hoa thị","Proportional to":"Tương ứng với","Angle":"Góc","Vulgar fraction one quarter":"Phân số thường một phần tư","Vulgar fraction one half":"Phân số thường một phần hai","Vulgar fraction three quarters":"Phân số thường ba phần tư","Single left-pointing angle quotation mark":"Dấu nháy đơn dạng góc chỉ sang bên trái","Single right-pointing angle quotation mark":"Dấu nháy đơn dạng góc chỉ sang bên phải","Left-pointing double angle quotation mark":"Dấu nháy kép dạng góc chỉ sang bên trái","Right-pointing double angle quotation mark":"Dấu nháy kép dạng góc chỉ sang bên phải","Left single quotation mark":"Dấu nháy đơn bên trái","Right single quotation mark":"Dấu nháy đơn bên phải","Left double quotation mark":"Dấu nháy kép bên trái","Right double quotation mark":"Dấu nháy kép bên phải","Single low-9 quotation mark":"Dấu nháy đơn kiểu low-9","Double low-9 quotation mark":"Dấu nháy kép kiểu low-9","Inverted exclamation mark":"Dấu chấm than ngược","Inverted question mark":"Dấu hỏi ngược","Two dot leader":"Hàng hai dấu chấm","Horizontal ellipsis":"Dấu chấm lửng ngang","Double dagger":"Dấu chữ thập kép","Per mille sign":"Ký hiệu phần nghìn","Per ten thousand sign":"Ký hiệu phần vạn","Double exclamation mark":"Dấu chấm than kép","Question exclamation mark":"Dấu chấm hỏi và chấm than","Exclamation question mark":"Dấu chấm than và chấm hỏi","Double question mark":"Dấu chấm hỏi kép","Copyright sign":"Ký hiệu bản quyền","Registered sign":"Ký hiệu đăng ký thương hiệu","Trade mark sign":"Ký hiệu thương hiệu","Section sign":"Ký hiệu phân đoạn","Paragraph sign":"Ký hiệu đoạn văn","Reversed paragraph sign":"Ký hiệu đoạn văn đảo ngược","Styles":"Kiểu","Multiple styles":"Nhiều kiểu","Block styles":"Kiểu của khối","Text styles":"Kiểu văn bản","Show blocks":"Hiện các khối","Select all":"Chọn tất cả","Source":"Nguồn","Show source":"Hiển thị nguồn","Remove Format":"Xóa định dang","Disable editing":"Tắt tính năng chỉnh sửa","Enable editing":"Bật tính năng chỉnh sửa","Previous editable region":"Vùng có thể chỉnh sửa trước đó","Next editable region":"Vùng có thể chỉnh sửa tiếp theo","Navigate editable regions":"Di chuyển giữa các vùng có thể chỉnh sửa","Page break":"Ngắt trang","media widget":"tiện ích đa phương tiện","Media URL":"Đường dẫn đa phương tiện","Paste the media URL in the input.":"Dán đường dẫn đa phương tiện vào trường","Tip: Paste the URL into the content to embed faster.":"Mẹo: Dán đường dẫn vào nội dung để nhúng ngay","The URL must not be empty.":"Đường dẫn không được để trống","This media URL is not supported.":"Đường dẫn đa phương tiện không hỗ trợ","Insert media":"Chèn đa phương tiện","Media":"Phương tiện","Media toolbar":"Thanh công cụ đa phương tiện","Open media in new tab":"Mở nội dung nghe nhìn trong tab mới","Numbered List":"Danh sách đánh số","Bulleted List":"Danh sách đánh ký hiệu","To-do List":"Danh sách cần làm","Bulleted list styles toolbar":"Thanh công cụ kiểu danh sách có dấu đầu dòng","Numbered list styles toolbar":"Thanh công cụ kiểu danh sách được đánh số","Toggle the disc list style":"Bật/tắt kiểu danh sách dạng đĩa","Toggle the circle list style":"Bật/tắt kiểu danh sách dạng vòng tròn","Toggle the square list style":"Bật/tắt kiểu danh sách dạng vuông","Toggle the decimal list style":"Bật/tắt kiểu danh sách dạng thập phân","Toggle the decimal with leading zero list style":"Bật/tắt kiểu danh sách dạng thập phân bắt đầu bằng số 0","Toggle the lower–roman list style":"Bật/tắt kiểu danh sách chữ số La Mã viết thường","Toggle the upper–roman list style":"Bật/tắt kiểu danh sách chữ số La Mã viết hoa","Toggle the lower–latin list style":"Bật/tắt kiểu danh sách chữ cái Latinh viết thường","Toggle the upper–latin list style":"Bật/tắt kiểu danh sách chữ cái Latinh viết hoa","Disc":"Đĩa","Circle":"Tròn","Square":"Vuông","Decimal":"Thập phân","Decimal with leading zero":"Thập phân bắt đầu bằng số 0","Lower–roman":"Chữ số La Mã viết thường","Upper-roman":"Chữ số La Mã viết hoa","Lower-latin":"Chữ cái Latinh viết thường","Upper-latin":"Chữ cái Latinh viết hoa","List properties":"Thuộc tính danh sách","Start at":"Bắt đầu tại","Invalid start index value.":"Giá trị chỉ mục bắt đầu không hợp lệ.","Start index must be greater than 0.":"Chỉ mục bắt đầu phải lớn hơn 0.","Reversed order":"Thứ tự đảo ngược","Keystrokes that can be used in a list":"Tổ hợp phím mà bạn có thể dùng trong danh sách","Increase list item indent":"Tăng thụt lề mục danh sách","Decrease list item indent":"Giảm thụt lề mục danh sách","Entering a to-do list":"Đang nhập danh sách việc cần làm","Leaving a to-do list":"Đang rời khỏi danh sách việc cần làm","Unlink":"Bỏ liên kết","Link":"Chèn liên kết","Link URL":"Đường dẫn liên kết","Link URL must not be empty.":"Không được để trống URL đường liên kết.","Link image":"Liên kết của ảnh","Edit link":"Sửa liên kết","Open link in new tab":"Mở liên kết","This link has no URL":"Liên kết không có đường dẫn","Open in a new tab":"Mở trên tab mới","Downloadable":"Có thể tải về","Create link":"Tạo liên kết","Move out of a link":"Di chuyển ra khỏi một liên kết","Scroll to target":"Cuộn đến mục tiêu","Language":"Ngôn ngữ","Choose language":"Chọn ngôn ngữ","Remove language":"Xóa ngôn ngữ","Increase indent":"Tăng lề","Decrease indent":"Giảm lề","image widget":"tiện ích ảnh","Wrap text":"Bọc văn bản","Break text":"Ngắt văn bản","In line":"Nội dòng","Side image":"Ảnh một bên","Full size image":"Ảnh đầy đủ","Left aligned image":"Ảnh canh trái","Centered image":"Ảnh canh giữa","Right aligned image":"Ảnh canh phải","Change image text alternative":"Đổi chữ alt của ảnh","Text alternative":"Chữ alt","Enter image caption":"Nhập mô tả ảnh","Insert image":"Chèn ảnh","Replace image":"Thay thế hình ảnh","Upload from computer":"Tải lên từ máy tính","Replace from computer":"Thay thế từ máy tính","Upload image from computer":"Tải hình ảnh lên từ máy tính","Image from computer":"Hình ảnh từ máy tính","From computer":"Từ máy tính","Replace image from computer":"Thay thế hình ảnh từ máy tính","Upload failed":"Tải thất bại","You have no image upload permissions.":"Bạn không có quyền tải ảnh lên.","Image toolbar":"Thanh công cụ hình ảnh","Resize image":"Chỉnh kích cỡ ảnh","Resize image to %0":"Chỉnh kích cỡ ảnh về %0","Resize image to the original size":"Chỉnh về ảnh kích cỡ nguyên gốc","Resize image (in %0)":"Đặt lại kích thước hình ảnh (bằng %0)","Original":"Nguyên bản","Custom image size":"Tùy chỉnh kích thước hình ảnh","Custom":"Tùy chỉnh","Image resize list":"Danh sách ảnh đã chỉnh kích thước","Insert image via URL":"Chèn ảnh từ URL","Insert via URL":"Chèn bằng URL","Image via URL":"Hình ảnh bằng URL","Via URL":"Bằng URL","Update image URL":"Cập nhật ảnh từ URL","Caption for the image":"Chú thích cho hình ảnh","Caption for image: %0":"Chú thích cho hình ảnh: %0","The value must not be empty.":"Không được để trống giá trị này.","The value should be a plain number.":"Giá trị này phải là một số thường.","Uploading image":"Đang tải hình ảnh lên","Image upload complete":"Hoàn tất quá trình tải hình ảnh lên","Error during image upload":"Xảy ra lỗi trong quá trình tải hình ảnh lên","Image":"Hình ảnh","HTML object":"Đối tượng HTML","Insert HTML":"Chèn HTML","HTML snippet":"Mẫu HTML","Paste raw HTML here...":"Dán mã HTML nguyên bản tại đây...","Edit source":"Sửa nguồn","Save changes":"Lưu thay đổi","No preview available":"Không có sẵn bản xem trước","Empty snippet content":"Nội dung đoạn mã trống","Horizontal line":"Đường ngang","Yellow marker":"Bút vàng","Green marker":"Bút xanh lá","Pink marker":"Bút hồng","Blue marker":"Bút xanh dương","Red pen":"Mực đỏ","Green pen":"Mực xanh","Remove highlight":"Xóa làm nổi","Highlight":"Làm nổi","Text highlight toolbar":"Thanh công cụ làm nổi chữ","Heading":"Tiêu đề","Choose heading":"Chọn tiêu đề","Heading 1":"Tiêu đề 1","Heading 2":"Tiêu đề 2","Heading 3":"Tiêu đề 3","Heading 4":"Tiêu đề 4","Heading 5":"Tiêu đề 5","Heading 6":"Tiêu đề 6","Type your title":"Nhập tựa đề","Type or paste your content here.":"Nhập hoặc dán nội dung tại đây","Font Size":"Cỡ chữ","Tiny":"Bé","Small":"Nhỏ","Big":"Lớn","Huge":"Khổng lồ","Font Family":"Họ chữ","Default":"Mặc định","Font Color":"Màu chữ","Font Background Color":"Màu nền chữ","Document colors":"Màu văn bản","Find and replace":"Tìm và thay thế","Find in text…":"Tìm trong văn bản...","Find":"Tìm","Previous result":"Kết quả trước","Next result":"Kết quả tiếp theo","Replace":"Thay thế","Replace all":"Thay thế tất cả","Match case":"Khớp chữ hoa/chữ thường","Whole words only":"Chỉ toàn bộ từ","Replace with…":"Thay thế bằng...","Text to find must not be empty.":"Không được để trống trường văn bản cần tìm.","Tip: Find some text first in order to replace it.":"Mẹo: Tìm một đoạn văn bản trước để thay thế.","Advanced options":"Tùy chọn nâng cao","Find in the document":"Tìm trong tài liệu","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Chèn dấu ngắt mềm (phần tử <code>&lt;br&gt;</code>)","Insert a hard break (a new paragraph)":"Chèn dấu ngắt cứng (đoạn văn mới)","Cancel":"Hủy","Clear":"Xóa","Remove color":"Xóa màu","Restore default":"Khôi phục giá trị mặc định","Save":"Lưu","Show more items":"Xem thêm","%0 of %1":"%0 đến %1","Cannot upload file:":"Không thể tải file:","Rich Text Editor. Editing area: %0":"Trình chỉnh sửa Văn bản dạng RTF. Vùng chỉnh sửa:  %0","Insert with file manager":"Chèn bằng trình quản lý tập tin","Replace with file manager":"Thay thế bằng trình quản lý tập tin","Insert image with file manager":"Chèn hình ảnh bằng trình quản lý tập tin","Replace image with file manager":"Thay thế hình ảnh bằng trình quản lý tập tin","File":"Tệp","With file manager":"Với trình quản lý tệp","Toggle caption off":"Ẩn chú thích","Toggle caption on":"Hiện chú thích","Content editing keystrokes":"Tổ hợp phím chỉnh sửa nội dung","These keyboard shortcuts allow for quick access to content editing features.":"Những phím tắt này giúp bạn truy cập nhanh vào các tính năng chỉnh sửa nội dung.","User interface and content navigation keystrokes":"Giao diện người dùng và tổ hợp phím điều hướng nội dung","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Sử dụng các tổ hợp phím sau đây để điều hướng hiệu quả hơn trong giao diện người dùng CKEditor 5.","Close contextual balloons, dropdowns, and dialogs":"Đóng bong bóng theo ngữ cảnh, menu thả xuống và hộp thoại","Open the accessibility help dialog":"Mở hộp thoại trợ giúp về khả năng tiếp cận","Move focus between form fields (inputs, buttons, etc.)":"Di chuyển tiêu điểm giữa các trường biểu mẫu (nội dung nhập, nút, v.v.)","Move focus to the menu bar, navigate between menu bars":"Di chuyển tiêu điểm đến thanh menu, điều hướng giữa các thanh menu","Move focus to the toolbar, navigate between toolbars":"Di chuyển tiêu điểm đến thanh công cụ, điều hướng giữa các thanh công cụ","Navigate through the toolbar or menu bar":"Điều hướng trên thanh công cụ hoặc thanh menu","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Thực thi nút hiện đang ưu tiên. Việc thực thi các nút tương tác với nội dung soạn thảo sẽ làm di chuyển tiêu điểm trở lại phần nội dung.","Accept":"Chấp nhận","Paragraph":"Đoạn văn","Color picker":"Bộ chọn màu","Insert code block":"Chèn khối mã","Plain text":"Văn bản thuần","Leaving %0 code snippet":"Đang rời khỏi đoạn mã snippet %0","Entering %0 code snippet":"Đang nhập đoạn mã snippet %0","Entering code snippet":"Đang nhập đoạn mã snippet","Leaving code snippet":"Đang rời khỏi đoạn mã snippet","Code block":"Khối mã","Copy selected content":"Sao chép nội dung đã chọn","Paste content":"Dán nội dung","Paste content as plain text":"Dán nội dung dưới dạng văn bản thuần túy","Insert image or file":"Chèn ảnh hoặc file","Could not obtain resized image URL.":"Không thể lấy được đường dẫn ảnh đã đổi kích thước","Selecting resized image failed":"Chọn ảnh đã đổi kích thước thất bại","Could not insert image at the current position.":"Không thể chèn ảnh ở vị trí hiện tại","Inserting image failed":"Chèn ảnh thất bại","Open file manager":"Mở trình quản lý tệp","Cannot determine a category for the uploaded file.":"Không thể xác định danh mục cho tệp được tải lên.","Cannot access default workspace.":"Không thể truy cập vào không gian làm việc mặc định.","You have no image editing permissions.":"Bạn không có quyền chỉnh sửa ảnh.","Edit image":"Chỉnh sửa hình ảnh","Processing the edited image.":"Xử lý hình ảnh đã chỉnh sửa.","Server failed to process the image.":"Máy chủ không thể xử lý hình ảnh.","Failed to determine category of edited image.":"Không thể xác định danh mục hình ảnh đã chỉnh sửa.","Bookmark":"Dấu trang","Insert":"Chèn","Update":"Cập nhật","Edit bookmark":"Chỉnh sửa dấu trang","Remove bookmark":"Xóa dấu trang","Bookmark name":"Tên dấu trang","Enter the bookmark name without spaces.":"Nhập tên dấu trang không có khoảng trắng.","Bookmark must not be empty.":"Dấu trang không được để trống.","Bookmark name cannot contain space characters.":"Tên dấu trang không được chứa ký tự khoảng trắng.","Bookmark name already exists.":"Tên dấu trang đã tồn tại.","bookmark widget":"tiện ích đánh dấu trang","Block quote":"Trích dẫn","Bold":"Đậm","Italic":"Nghiêng","Underline":"Gạch dưới","Code":"Code","Strikethrough":"Gạch ngang","Subscript":"Chữ nhỏ dưới","Superscript":"Chữ nhỏ trên","Italic text":"In nghiêng chữ","Move out of an inline code style":"Thoát khỏi kiểu mã nội dòng","Bold text":"In đậm chữ","Underline text":"Gạch chân chữ","Strikethrough text":"Gạch ngang chữ","Saving changes":"Đang lưu","Revert autoformatting action":"Hoàn nguyên thao tác tự động định dạng","Align left":"Canh trái","Align right":"Canh phải","Align center":"Canh giữa","Justify":"Canh đều","Text alignment":"Căn chỉnh văn bản","Text alignment toolbar":"Thanh công cụ canh chữ"},getPluralForm(n){return 0;}}};
e[ 'vi' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'vi' ].dictionary = Object.assign( e[ 'vi' ].dictionary, dictionary );
e[ 'vi' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
