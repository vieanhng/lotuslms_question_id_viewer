Question ID — Minimalist

Cài đặt:
1. Giải nén ZIP.
2. Mở chrome://extensions hoặc edge://extensions.
3. Bật Developer mode.
4. Chọn Load unpacked và chọn thư mục có manifest.json.
5. Tải lại trang LMS.


Giao diện tối giản:
- Chỉ hiển thị ID, không có nhãn "Question ID".
- Nền trắng, viền xám nhạt, chữ monospace nhỏ.
- Bấm ID để sao chép.
- Theo dõi React-rendered DOM bằng MutationObserver.

Selector hiện dùng:
.question-panel[id^="question-wrapper-id-"]
