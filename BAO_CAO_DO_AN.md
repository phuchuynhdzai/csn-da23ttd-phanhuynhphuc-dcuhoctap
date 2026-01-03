BÁO CÁO ĐỒ ÁN CƠ SỞ NGÀNH

WEBSITE BÁN DỤNG CỤ HỌC TẬP

---

Sinh viên thực hiện: Phan Huỳnh Phúc
Mã số sinh viên: 110123159
Lớp: DA23TTD
Giảng viên hướng dẫn: [Họ và tên GVHD]
Khoa: Công Nghệ Thông Tin
Trường: [Tên trường]

Học kỳ: I • Năm học: 2024•2025

---

LỜI CẢM ƠN

Trước tiên, em xin gửi lời cảm ơn chân thành đến Thầy/Cô giảng viên hướng dẫn, người đã tận tình hướng dẫn, chỉ bảo và động viên em trong suốt quá trình thực hiện đồ án cơ sở ngành này.

Em xin chân thành cảm ơn quý Thầy Cô trong Khoa Công Nghệ Thông Tin đã truyền đạt những kiến thức về lập trình web, giúp em có nền tảng để hoàn thành đồ án này.

Em cũng xin gửi lời cảm ơn đến gia đình, bạn bè đã luôn bên cạnh, động viên và hỗ trợ em trong suốt thời gian học tập và thực hiện đồ án.

Mặc dù đã cố gắng hết sức, nhưng do thời gian và kinh nghiệm còn hạn chế, đồ án không tránh khỏi những thiếu sót. Em rất mong nhận được sự góp ý, chỉ bảo của quý Thầy Cô để đồ án được hoàn thiện hơn.

Em xin chân thành cảm ơn!

---

MỤC LỤC

TÓM TẮT ĐỒ ÁN CƠ SỞ NGÀNH
MỞ ĐẦU
CHƯƠNG 1: TỔNG QUAN
CHƯƠNG 2: CƠ SỞ LÝ THUYẾT
CHƯƠNG 3: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG
CHƯƠNG 4: KẾT QUẢ THỰC HIỆN
CHƯƠNG 5: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN
TÀI LIỆU THAM KHẢO

---

TÓM TẮT ĐỒ ÁN CƠ SỞ NGÀNH

Vấn đề nghiên cứu:
• Với sự phát triển của giáo dục và nhu cầu học tập ngày càng cao, thị trường dụng cụ học tập và văn phòng phẩm tại Việt Nam đang tăng trưởng mạnh mẽ. Tuy nhiên, các nền tảng thương mại điện tử chuyên biệt cho lĩnh vực này còn hạn chế cả về số lượng và chất lượng.
• Khách hàng (học sinh, sinh viên, phụ huynh) thường gặp khó khăn trong việc tìm kiếm sản phẩm phù hợp, so sánh giá cả, và đảm bảo chất lượng sản phẩm.
• Đề tài tập trung xây dựng một website bán dụng cụ học tập hiện đại, thân thiện với người dùng, và có khả năng hỗ trợ tốt trong giao dịch trực tuyến.

Hướng tiếp cận:
• Sử dụng công nghệ HTML5, CSS3 và JavaScript ES6+ để xây dựng giao diện người dùng thân thiện và linh hoạt.
• Áp dụng kiến trúc Single Page Application (SPA) giúp tăng trải nghiệm người dùng, chuyển trang mượt mà không cần tải lại.
• Xây dựng Backend API với ASP.NET Core Web API và Entity Framework Core.
• Sử dụng cơ sở dữ liệu SQLite để lưu trữ dữ liệu sản phẩm, người dùng, đơn hàng.
• Sử dụng LocalStorage API để lưu trữ dữ liệu tạm thời phía client.

Cách giải quyết vấn đề:
• Phân tích yêu cầu người dùng: Khảo sát để xác định các tính năng cần thiết như hiển thị danh mục sản phẩm, tìm kiếm, lọc sản phẩm, quản lý giỏ hàng, và hỗ trợ đăng ký/đăng nhập.
• Thiết kế giao diện: Xây dựng giao diện responsive với CSS Grid và Flexbox, đảm bảo hiển thị tốt trên desktop, tablet và mobile.
• Phát triển tính năng chính:
  + Quản lý sản phẩm: Hiển thị 22 sản phẩm với đầy đủ thông tin (tên, giá, hình ảnh, mô tả, thương hiệu, tồn kho).
  + Tìm kiếm và lọc: Cho phép người dùng tìm kiếm theo tên, danh mục, thương hiệu và lọc theo 3 danh mục.
  + Giỏ hàng và thanh toán: Thêm/xóa sản phẩm, tính tổng tiền, nhập thông tin giao hàng.
  + Quản lý tài khoản: Đăng ký, đăng nhập người dùng và admin.
  + Đánh giá sản phẩm: Gửi và hiển thị đánh giá với rating 1•5 sao.

Kết quả đạt được:
• Website được xây dựng hoàn thiện với 22 sản phẩm thuộc 3 danh mục: Bút viết, Vở/Sổ, Dụng cụ học tập.
• Giao diện đẹp mắt, thân thiện với người dùng, responsive trên nhiều thiết bị.
• Backend API hoàn chỉnh với ASP.NET Core, Entity Framework Core và SQLite.
• Hệ thống quản lý sản phẩm, giỏ hàng, tài khoản hoạt động ổn định.
• Swagger UI cho API documentation tại /swagger.

---

MỞ ĐẦU

Lý do chọn đề tài

Ngày nay, việc học tập ngày càng được chú trọng và đầu tư. Nhu cầu mua sắm các sản phẩm dụng cụ học tập như bút viết, vở, sổ tay, balo, máy tính và các vật dụng văn phòng phẩm ngày càng tăng cao. Tuy nhiên, thị trường trực tuyến tại Việt Nam chưa có nhiều nền tảng chuyên biệt cung cấp các sản phẩm này một cách thuận tiện và hiện đại.

Với sự phát triển mạnh mẽ của công nghệ web, việc nghiên cứu và áp dụng HTML5, CSS3, JavaScript để xây dựng một website bán dụng cụ học tập là một hướng đi tiềm năng nhằm đáp ứng nhu cầu thực tế.

Mục đích nghiên cứu

• Tìm hiểu cách áp dụng công nghệ HTML5, CSS3, JavaScript vào xây dựng một website thương mại điện tử.
• Phát triển một nền tảng mua sắm trực tuyến chuyên biệt dành cho dụng cụ học tập, giúp người dùng dễ dàng tìm kiếm, lựa chọn và mua sắm các sản phẩm phù hợp.
• Cải thiện trải nghiệm người dùng thông qua giao diện thân thiện, tính năng tìm kiếm nhanh, và thiết kế responsive.

Đối tượng nghiên cứu

• Công nghệ HTML5 và các thẻ semantic để xây dựng cấu trúc trang web.
• Công nghệ CSS3 với Flexbox, Grid Layout, Media Queries để thiết kế giao diện responsive.
• Ngôn ngữ JavaScript ES6+ để xử lý logic và tương tác người dùng.
• ASP.NET Core Web API để xây dựng Backend API.
• Entity Framework Core để tương tác với cơ sở dữ liệu.
• Cơ sở dữ liệu SQLite để lưu trữ dữ liệu.
• LocalStorage API để lưu trữ dữ liệu tạm thời phía client.
• Kiến trúc Single Page Application (SPA) để tạo trải nghiệm mượt mà.

Phạm vi nghiên cứu

• Tập trung vào việc xây dựng website bán dụng cụ học tập với 22 sản phẩm thuộc 3 danh mục.
• Nghiên cứu và triển khai các tính năng cơ bản: xem sản phẩm, tìm kiếm, lọc, giỏ hàng, thanh toán, đăng nhập, quản trị.
• Thiết kế giao diện responsive cho desktop, tablet và mobile.
• Thử nghiệm và tối ưu hóa hiệu năng của website trên các trình duyệt khác nhau.

---

CHƯƠNG 1: TỔNG QUAN

1.1. Tổng quan về thị trường dụng cụ học tập tại Việt Nam

1.1.1. Thực trạng thị trường

Thị trường dụng cụ học tập và văn phòng phẩm tại Việt Nam là một trong những thị trường có tiềm năng phát triển lớn với quy mô ước tính hàng nghìn tỷ đồng mỗi năm. Với dân số trẻ và tỷ lệ đi học cao, nhu cầu về các sản phẩm phục vụ học tập luôn ở mức ổn định và có xu hướng tăng trưởng. Việt Nam hiện có khoảng 23 triệu học sinh và sinh viên các cấp, tạo nên một thị trường tiêu thụ dụng cụ học tập khổng lồ.

Thị trường này có tính mùa vụ rõ rệt, nhu cầu tăng cao vào các dịp tựu trường từ tháng 8 đến tháng 9 và các kỳ thi từ tháng 5 đến tháng 6 hoặc tháng 12 đến tháng 1. Sản phẩm trên thị trường rất đa dạng, từ các sản phẩm cơ bản như bút và vở đến các thiết bị công nghệ như máy tính khoa học và đèn học thông minh. Phân khúc giá cũng đa dạng từ bình dân dành cho học sinh tiểu học và trung học cơ sở đến cao cấp dành cho sinh viên và dân văn phòng.

1.1.2. Xu hướng mua sắm trực tuyến

Với sự phát triển mạnh mẽ của Internet và smartphone, hành vi mua sắm của người tiêu dùng Việt Nam đã có sự thay đổi đáng kể. Việt Nam hiện có hơn 77 triệu người dùng Internet, chiếm 79% dân số, trong đó phần lớn là người trẻ, đây chính là đối tượng chính của thị trường dụng cụ học tập.

Thị trường thương mại điện tử Việt Nam tăng trưởng trung bình từ 25 đến 30% mỗi năm, người tiêu dùng ngày càng quen với việc mua sắm online. Các hình thức thanh toán số như ví điện tử MoMo và ZaloPay cùng với chuyển khoản ngân hàng ngày càng phổ biến, tạo điều kiện thuận lợi cho giao dịch trực tuyến. Dịch vụ giao hàng cũng phát triển mạnh với thời gian giao hàng nhanh từ 1 đến 3 ngày và chi phí hợp lý.

1.1.3. Các thương hiệu dụng cụ học tập phổ biến

Thị trường dụng cụ học tập Việt Nam có sự góp mặt của nhiều thương hiệu uy tín. Thiên Long là thương hiệu Việt Nam hàng đầu về bút viết, thước kẻ và dụng cụ học tập với hơn 40 năm kinh nghiệm. Hồng Hà là thương hiệu lâu đời chuyên về vở, sổ tay và giấy viết với chất lượng ổn định. Campus là thương hiệu Nhật Bản nổi tiếng với các sản phẩm vở cao cấp, giấy mịn và bền đẹp.

Casio là thương hiệu Nhật Bản hàng đầu về máy tính khoa học, được phép sử dụng trong các kỳ thi quốc gia. Pilot cũng là thương hiệu Nhật Bản nổi tiếng với bút gel và bút xóa được chất lượng cao. Stabilo là thương hiệu Đức chuyên về bút dạ quang và bút highlight với màu sắc tươi sáng. 3M là tập đoàn đa quốc gia với sản phẩm giấy note Post-it nổi tiếng toàn cầu. Double A là thương hiệu Thái Lan về giấy in và giấy photocopy chất lượng cao.

1.2. Tổng quan về thương mại điện tử

1.2.1. Khái niệm thương mại điện tử

Thương mại điện tử hay còn gọi là E-commerce là hình thức kinh doanh sử dụng các phương tiện điện tử và Internet để thực hiện các giao dịch mua bán hàng hóa và dịch vụ. Thương mại điện tử bao gồm nhiều hoạt động như mua bán hàng hóa và dịch vụ trực tuyến, thanh toán điện tử, quảng cáo và marketing trực tuyến, cũng như chăm sóc khách hàng qua các kênh số.

1.2.2. Các mô hình thương mại điện tử

Có nhiều mô hình thương mại điện tử khác nhau. Mô hình B2C hay Business to Consumer là hình thức doanh nghiệp bán hàng trực tiếp cho người tiêu dùng, đây là mô hình được áp dụng trong đồ án này. Mô hình B2B hay Business to Business là giao dịch giữa các doanh nghiệp với nhau. Mô hình C2C hay Consumer to Consumer là giao dịch giữa các cá nhân với nhau như trên Shopee và Lazada marketplace. Mô hình C2B hay Consumer to Business là khi người tiêu dùng cung cấp sản phẩm hoặc dịch vụ cho doanh nghiệp.

1.2.3. Ưu điểm của thương mại điện tử

Đối với người bán, thương mại điện tử giúp tiết kiệm chi phí vì không cần thuê mặt bằng và giảm chi phí nhân viên cũng như kho bãi. Người bán có thể mở rộng thị trường và tiếp cận khách hàng trên toàn quốc mà không bị giới hạn địa lý. Website hoạt động liên tục 24 giờ trong ngày và 7 ngày trong tuần, khách hàng có thể đặt hàng bất cứ lúc nào. Việc quản lý cũng dễ dàng hơn khi có thể theo dõi đơn hàng, tồn kho và doanh thu qua hệ thống quản trị. Marketing cũng hiệu quả hơn khi dễ dàng triển khai các chương trình khuyến mãi và quảng cáo trực tuyến.

Đối với người mua, thương mại điện tử mang lại sự tiện lợi khi có thể mua sắm mọi lúc mọi nơi chỉ với thiết bị có kết nối Internet. Người mua dễ dàng so sánh giá cả và chất lượng giữa các sản phẩm và nhà cung cấp khác nhau. Việc mua sắm online giúp tiết kiệm thời gian vì không cần di chuyển đến cửa hàng và chờ đợi. Người mua có thể tiếp cận nhiều sản phẩm từ nhiều thương hiệu khác nhau và tham khảo đánh giá từ người mua trước để đưa ra quyết định.

1.3. Tổng quan về dự án

1.3.1. Giới thiệu về website

Dụng cụ học tập là một trong những mặt hàng ngày càng được nhiều người kinh doanh lựa chọn do nhu cầu học tập và làm việc ngày càng tăng cao. Không chỉ đơn thuần là những món đồ hỗ trợ, dụng cụ học tập còn thể hiện sự quan tâm đến chất lượng học tập và phong cách của người sử dụng. Các sản phẩm như bút viết, vở, sổ tay, balo, máy tính hay các dụng cụ văn phòng phẩm không chỉ đáp ứng nhu cầu cơ bản mà còn giúp tăng hiệu quả học tập và làm việc.

Với sự phát triển của công nghệ và hình thức kinh doanh trực tuyến, việc bán dụng cụ học tập qua các nền tảng online đang trở thành một xu hướng phổ biến. Kinh doanh trực tuyến mang lại nhiều lợi thế như thao tác nhanh gọn, đặt hàng ở bất kỳ đâu và bất kỳ lúc nào, tiết kiệm thời gian và chi phí. Hơn nữa, hình thức này không đòi hỏi vốn đầu tư lớn nhưng vẫn đảm bảo hiệu quả kinh doanh cao.

Xây dựng một Website bán dụng cụ học tập với đầy đủ chức năng là một giải pháp lý tưởng để tiếp cận khách hàng và tăng doanh thu. Website sẽ cung cấp các chức năng cơ bản như xem, thêm, xóa và sửa sản phẩm dành cho nhà kinh doanh. Đối với khách hàng, website sẽ cho phép họ xem các sản phẩm, đặt hàng và nhận được đầy đủ thông tin qua hình ảnh, mô tả, giá cả cũng như đánh giá từ những người dùng khác.

1.3.2. Mục tiêu của dự án

Mục tiêu chính của dự án là xây dựng một website thương mại điện tử hoàn chỉnh chuyên bán dụng cụ học tập, áp dụng các công nghệ web hiện đại như HTML5, CSS3 và JavaScript ES6+, đồng thời tạo trải nghiệm người dùng tốt với giao diện đẹp, responsive và dễ sử dụng.

Về mục tiêu cụ thể, website sẽ hiển thị 22 sản phẩm thuộc 3 danh mục với đầy đủ thông tin. Website cung cấp chức năng tìm kiếm và lọc sản phẩm nhanh chóng, xây dựng hệ thống giỏ hàng và thanh toán hoàn chỉnh. Dự án cũng phát triển hệ thống đăng ký và đăng nhập cho người dùng và admin, tích hợp chức năng đánh giá sản phẩm với rating từ 1 đến 5 sao, và xây dựng trang quản trị để quản lý sản phẩm, khuyến mãi và đánh giá.

1.3.3. Đối tượng sử dụng

Đối tượng sử dụng website bao gồm hai nhóm chính là khách hàng và quản trị viên. Nhóm khách hàng bao gồm học sinh các cấp từ tiểu học, trung học cơ sở đến trung học phổ thông, họ mua bút, vở, thước, balo và các dụng cụ học tập cơ bản. Sinh viên cũng là đối tượng quan trọng, họ mua vở, sổ tay, máy tính khoa học và dụng cụ vẽ kỹ thuật. Phụ huynh mua sắm dụng cụ học tập cho con em, đặc biệt vào mùa tựu trường. Nhân viên văn phòng mua văn phòng phẩm như bút, giấy, sổ tay và bìa hồ sơ.

Nhóm quản trị viên bao gồm chủ cửa hàng, người quản lý sản phẩm, theo dõi đơn hàng và cập nhật khuyến mãi. Nhân viên quản lý xử lý đánh giá khách hàng và cập nhật thông tin sản phẩm.

1.4. Giới thiệu chi tiết về website

Website Dụng Cụ Học Tập là một trang thương mại điện tử chuyên bán các sản phẩm văn phòng phẩm và dụng cụ học tập. Website được xây dựng theo mô hình Single Page Application hay SPA sử dụng HTML5, CSS3 và JavaScript ES6+.

Website có nhiều đặc điểm nổi bật. Về giao diện, website được thiết kế đẹp mắt với gradient màu sắc, hiệu ứng hover và animation mượt mà. Website có thiết kế Responsive, hiển thị tốt trên mọi thiết bị từ desktop, tablet đến mobile. Tốc độ tải trang nhanh nhờ sử dụng kiến trúc SPA, không cần tải lại trang khi chuyển đổi giữa các phần. Giao diện trực quan và dễ sử dụng, các chức năng được bố trí hợp lý. Website sử dụng LocalStorage để lưu giỏ hàng và thông tin đăng nhập ngay trên trình duyệt của người dùng.

1.5. Danh sách sản phẩm trong website

Website hiện có 22 sản phẩm được chia thành 3 danh mục:

Danh mục "Bút viết" (5 sản phẩm):
• Bút Máy Cao Cấp • Thiên Long • 50.000đ
• Bút Thiên Long Hộp 20 Cây • Thiên Long • 80.000đ
• Bút Chì Gỗ 2B Hộp 12 Cây • Thiên Long • 35.000đ
• Bút Gel Xóa Được Pilot • Pilot • 45.000đ
• Bút Dạ Quang Highlight 6 Màu • Stabilo • 55.000đ

Danh mục "Vở/Sổ" (5 sản phẩm):
• Vở Học Sinh 96 Trang • Hồng Hà • 12.000đ
• Vở Campus 200 Trang • Campus • 65.000đ
• Sổ Tay Bìa Da Cao Cấp A5 • Klong • 95.000đ
• Giấy Note Dán 3M Post•it • 3M • 42.000đ
• Giấy A4 Double A 70gsm • Double A • 95.000đ

Danh mục "Dụng cụ học tập" (12 sản phẩm):
• Bộ Thước Kẻ Đa Năng • Thiên Long • 25.000đ
• Máy Tính Casio FX•580VN X • Casio • 850.000đ
• Balo Chống Gù Lưng • Mikkor • 450.000đ
• Bộ Màu Vẽ Colormate 120 Món • Colormate • 250.000đ
• Đèn Bàn Học Chống Cận • Điện Quang • 180.000đ
• Kéo Học Sinh Inox 16cm • Thiên Long • 18.000đ
• Hộp Bút Nhựa Trong Suốt • Deli • 22.000đ
• Gọt Bút Chì 2 Lỗ Kim Loại • Thiên Long • 15.000đ
• Bìa Hồ Sơ Còng Nhựa A4 • Hồng Hà • 8.000đ
• Túi Đựng Bút Canvas Đa Năng • Miniso • 38.000đ
• Bảng Viết Bút Lông Mini A4 • Deli • 68.000đ
• Bộ Compa Vẽ Kỹ Thuật 8 Món • Thiên Long • 125.000đ

1.6. Các chức năng chính của website

1.6.1. Chức năng dành cho khách hàng đã đăng ký

• Đăng nhập, đăng xuất tài khoản.
• Xem thông tin tài khoản cá nhân.
• Xem danh mục sản phẩm, giới thiệu và liên hệ website.
• Xem các tin tức và khuyến mãi dành cho học sinh.
• Xem danh sách 22 sản phẩm với hình ảnh, tên, giá hiển thị dạng lưới.
• Xem chi tiết sản phẩm trong modal với đầy đủ thông tin: mô tả, thương hiệu, tồn kho.
• Tìm kiếm sản phẩm theo tên, danh mục, thương hiệu với kết quả hiển thị real-time.
• Lọc sản phẩm theo 3 danh mục: Bút viết, Vở/Sổ, Dụng cụ học tập.
• Gửi đánh giá sản phẩm với rating 1-5 sao và nội dung nhận xét.
• Thêm sản phẩm vào giỏ hàng bằng nút "Thêm vào giỏ" hoặc "Mua ngay".
• Xóa sản phẩm khỏi giỏ hàng, xem tổng tiền giỏ hàng.
• Đặt hàng với form nhập thông tin giao hàng: họ tên, số điện thoại, địa chỉ.
• Chọn phương thức thanh toán: COD, Chuyển khoản, MoMo.

1.6.2. Chức năng dành cho khách hàng chưa đăng ký

• Xem danh mục sản phẩm, giới thiệu và liên hệ website.
• Xem các tin tức và khuyến mãi.
• Xem danh sách sản phẩm, chi tiết sản phẩm, đánh giá sản phẩm.
• Tìm kiếm sản phẩm theo tên, danh mục, thương hiệu.
• Đăng ký tài khoản mới với username, email và password.

1.6.3. Chức năng dành cho quản trị viên

• Đăng nhập admin với tài khoản mặc định (username: admin, password: 123).
• Đăng xuất admin.
• Quản lý sản phẩm: xem danh sách, thêm, sửa, xóa sản phẩm.
• Quản lý đơn hàng: xem danh sách đơn hàng, cập nhật trạng thái thanh toán.
• Quản lý người dùng: xem danh sách người dùng đã đăng ký, xem thông tin chi tiết.
• Quản lý khuyến mãi học sinh: thêm, sửa, xóa, kích hoạt/tắt khuyến mãi.
• Quản lý đánh giá: xem và phê duyệt đánh giá từ khách hàng.
• Xem thống kê doanh thu: tổng doanh thu, doanh thu hôm nay, lọc doanh thu theo ngày.
• Khóa/Mở khóa phiên làm việc để bảo mật.

1.7. Cấu trúc thư mục dự án

Thư mục gốc /websitebandungcuhoctap chứa:
• index.html: File HTML chính (Frontend SPA)
• script.js: File JavaScript (xử lý logic frontend)
• style.css: File CSS (định dạng giao diện)
• img/: Thư mục chứa hình ảnh (banner1.svg, banner2.svg, banner3.svg và 22 hình sản phẩm)

Thư mục c#/ chứa Backend ASP.NET Core API:
• Program.cs: Entry point và cấu hình
• appsettings.json: Cấu hình ứng dụng
• SchoolSupplies.db: SQLite database
• Controllers/: Chứa ProductsController.cs và SeedController.cs
• Models/: Chứa Product.cs, User.cs, Order.cs, ProductReview.cs
• Data/: Chứa AppDbContext.cs
• Migrations/: Chứa các file migration của EF Core

---

CHƯƠNG 2: CƠ SỞ LÝ THUYẾT

2.1. HTML5

2.1.1. Giới thiệu HTML

HTML (Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản được sử dụng để tạo và định dạng cấu trúc các thành phần trong trang web. Các tệp mã nguồn HTML có phần mở rộng là ".htm" hoặc ".html".

2.1.2. Cấu trúc trang HTML

Cấu trúc trang HTML gồm 3 phần chính:
• <!DOCTYPE html>: Khai báo phiên bản HTML5
• <head>: Chứa tiêu đề trang web và các khai báo meta
• <body>: Chứa nội dung hiển thị trên màn hình

2.1.3. Các thẻ HTML chính

• Thẻ cấu trúc: <header>, <nav>, <main>, <section>, <footer>
• Thẻ nội dung: <div>, <span>, <img>, <a>, <button>
• Thẻ form: <form>, <input>, <select>, <textarea>

---

2.2. CSS3

2.2.1. Giới thiệu CSS

CSS (Cascading Style Sheet) là ngôn ngữ thiết kế được sử dụng để định dạng các phần tử HTML. CSS giúp tạo ra phong cách hiển thị cho trang web thông qua các bộ chọn (selector).

2.2.2. Các kỹ thuật CSS được sử dụng

• Flexbox: Căn chỉnh menu điều hướng và footer
• CSS Grid: Hiển thị danh sách sản phẩm dạng lưới
• Media Queries: Thiết kế responsive cho desktop, tablet, mobile
• Transitions: Tạo hiệu ứng hover cho card sản phẩm

---

2.3. JavaScript ES6+

2.3.1. Giới thiệu JavaScript

JavaScript là ngôn ngữ lập trình web phổ biến, dùng để tích hợp vào HTML giúp trang web trở nên sống động và tương tác với người dùng.

2.3.2. Các tính năng ES6+ được sử dụng

• Arrow Functions: Cú pháp ngắn gọn cho hàm
• Template Literals: Tạo HTML động với cú pháp backtick
• Array Methods: filter(), find(), map(), reduce()
• DOM Manipulation: getElementById(), querySelector(), innerHTML

---

2.4. LocalStorage API

LocalStorage là Web Storage API cho phép lưu trữ dữ liệu trên trình duyệt của người dùng. Dữ liệu được lưu dạng key-value và không bị mất khi đóng trình duyệt.

Đặc điểm:
• Dung lượng: 5-10MB tùy trình duyệt
• Dữ liệu không hết hạn (persistent)
• Sử dụng JSON.stringify/parse cho object

---

2.5. Kiến trúc Single Page Application (SPA)

SPA là kiến trúc ứng dụng web trong đó toàn bộ nội dung được tải trong một trang HTML duy nhất. Các "trang" khác nhau được hiển thị bằng cách ẩn/hiện các phần tử DOM thông qua JavaScript.

Ưu điểm:
• Trải nghiệm người dùng mượt mà, không reload trang
• Tốc độ phản hồi nhanh
• Giảm tải cho server

---

2.6. Font Awesome

Font Awesome là thư viện icon vector phổ biến, cung cấp hàng nghìn icon miễn phí. Website sử dụng Font Awesome 6.0.0 để hiển thị các icon như: fa-shopping-cart, fa-search, fa-user, fa-star.

---

CHƯƠNG 3: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG

3.1. Phân tích yêu cầu

3.1.1. Yêu cầu chức năng

Đối với khách hàng:
• Xem danh sách sản phẩm với hình ảnh, tên, giá
• Tìm kiếm sản phẩm theo tên, danh mục, thương hiệu
• Lọc sản phẩm theo danh mục
• Xem chi tiết sản phẩm
• Thêm/xóa sản phẩm trong giỏ hàng
• Đặt hàng với thông tin giao hàng
• Đăng ký/Đăng nhập tài khoản
• Gửi đánh giá sản phẩm

Đối với quản trị viên:
• Đăng nhập admin
• Thêm/Sửa/Xóa sản phẩm
• Quản lý khuyến mãi
• Quản lý đánh giá

3.1.2. Yêu cầu phi chức năng

• Giao diện thân thiện, dễ sử dụng
• Responsive trên desktop, tablet, mobile
• Tốc độ tải trang nhanh
• Dữ liệu được lưu trữ an toàn trong LocalStorage

3.2. Thiết kế giao diện

3.2.1. Trang chủ (Home)

Các thành phần:
• Header: Logo, menu điều hướng, thông tin đăng nhập
• Banner carousel: 3 banner quảng cáo tự động chuyển đổi
• Khuyến mãi học sinh: Hiển thị các chương trình ưu đãi
• Sản phẩm nổi bật: 3 sản phẩm bán chạy với giá khuyến mãi
• Đánh giá khách hàng: Form gửi đánh giá và danh sách đánh giá
• Footer: Thông tin liên hệ, mạng xã hội

3.2.2. Trang sản phẩm (Products)

Các thành phần:
• Thanh tìm kiếm: Ô nhập từ khóa, icon tìm kiếm
• Bộ lọc danh mục: 4 nút (Tất cả, Bút viết, Vở/Sổ, Dụng cụ học tập)
• Danh sách sản phẩm: Grid hiển thị 22 sản phẩm
• Modal chi tiết: Hiển thị khi click vào sản phẩm

3.2.3. Trang giỏ hàng (Cart)

Các thành phần:
• Danh sách sản phẩm trong giỏ với nút xóa
• Tổng tiền
• Form thanh toán: Họ tên, SĐT, địa chỉ, phương thức thanh toán

3.2.4. Trang quản trị (Admin Panel)

Các thành phần:
• Sidebar: Menu quản lý sản phẩm, khuyến mãi, đánh giá
• Bảng danh sách sản phẩm
• Form thêm/sửa sản phẩm
• Nút khóa phiên, đăng xuất

3.3. Thiết kế dữ liệu

3.3.1. Cấu trúc dữ liệu sản phẩm

Mỗi sản phẩm là một object chứa các thuộc tính:
• id: ID sản phẩm (số nguyên)
• name: Tên sản phẩm (chuỗi)
• price: Giá sản phẩm (số, đơn vị VNĐ)
• img: Đường dẫn hình ảnh (chuỗi)
• category: Danh mục (chuỗi)
• description: Mô tả chi tiết (chuỗi)
• stock: Số lượng tồn kho (số nguyên)
• brand: Thương hiệu (chuỗi)

3.3.2. Cấu trúc dữ liệu giỏ hàng

Giỏ hàng là một mảng chứa các object sản phẩm với các thuộc tính: id, name, price, img.

3.3.3. Cấu trúc dữ liệu đánh giá

Mỗi đánh giá là một object chứa các thuộc tính:
• id: ID đánh giá
• name: Tên khách hàng
• email: Email khách hàng
• rating: Số sao đánh giá (1•5)
• message: Nội dung đánh giá
• date: Ngày đánh giá
• responded: Trạng thái đã phản hồi (true/false)

---

CHƯƠNG 4: KẾT QUẢ THỰC HIỆN

4.1. Kết quả đạt được

4.1.1. Về chức năng

Website đã hoàn thành đầy đủ các chức năng đề ra:

a) Chức năng dành cho khách hàng:
• Xem danh sách 22 sản phẩm với đầy đủ thông tin (tên, giá, hình ảnh, mô tả, thương hiệu, tồn kho)
• Tìm kiếm sản phẩm real•time theo tên, danh mục, thương hiệu
• Lọc sản phẩm theo 3 danh mục: Bút viết, Vở/Sổ, Dụng cụ học tập
• Xem chi tiết sản phẩm trong modal
• Quản lý giỏ hàng: thêm, xóa, xem tổng tiền
• Thanh toán với 3 phương thức: COD, Chuyển khoản, MoMo
• Đăng ký/Đăng nhập tài khoản
• Gửi đánh giá với rating 1•5 sao

b) Chức năng dành cho admin:
• Đăng nhập admin (username: admin, password: 123)
• Quản lý sản phẩm: thêm, sửa, xóa
• Quản lý khuyến mãi học sinh
• Quản lý đánh giá: xem, phê duyệt, xóa
• Khóa/mở khóa phiên làm việc

4.1.2. Về giao diện

• Giao diện hiện đại với gradient tím cho header
• Banner carousel 3 slide tự động chuyển đổi
• Responsive trên Desktop (>768px), Tablet (481•768px), Mobile (<480px)
• Sử dụng Font Awesome 6.0.0 cho icon
• Hiệu ứng hover cho card sản phẩm
• Toast notifications cho thông báo

4.1.3. Về hiệu suất

• Tốc độ tải trang: < 1 giây (không cần kết nối server)
• Chuyển trang mượt mà với kiến trúc SPA
• Dữ liệu được lưu trữ persistent trong LocalStorage

4.2. Các hàm JavaScript chính trong website

4.2.1. Hàm hiển thị sản phẩm

Hàm renderProducts(productList) thực hiện:
• Lấy container bằng document.getElementById('product-list')
• Sử dụng map() để tạo HTML cho từng sản phẩm
• Mỗi card sản phẩm chứa: hình ảnh, tên, thương hiệu, giá, nút thêm vào giỏ
• Sử dụng join('') để nối các HTML thành chuỗi
• Gán vào innerHTML của container

4.2.2. Hàm tìm kiếm sản phẩm

Hàm searchProducts() thực hiện:
• Lấy từ khóa tìm kiếm từ input và chuyển thành chữ thường
• Sử dụng filter() để lọc sản phẩm theo tên, danh mục hoặc thương hiệu
• Gọi renderProducts() để hiển thị kết quả

4.2.3. Hàm thêm vào giỏ hàng

Hàm addToCart(productId) thực hiện:
• Kiểm tra người dùng đã đăng nhập chưa
• Nếu chưa đăng nhập, hiển thị thông báo và chuyển đến trang login
• Tìm sản phẩm theo ID bằng find()
• Thêm sản phẩm vào mảng cart
• Lưu giỏ hàng vào LocalStorage
• Cập nhật số lượng giỏ hàng trên menu
• Hiển thị thông báo thành công

4.2.4. Hàm xử lý thanh toán

Hàm processCheckout() thực hiện:
• Thu thập thông tin từ form: họ tên, số điện thoại, địa chỉ, phương thức thanh toán
• Tính tổng tiền bằng reduce()
• Validate: kiểm tra các trường bắt buộc
• Nếu thiếu thông tin, hiển thị thông báo lỗi
• Nếu hợp lệ: xóa giỏ hàng, lưu LocalStorage, cập nhật số lượng
• Hiển thị thông báo thành công và chuyển về trang chủ

---

CHƯƠNG 5: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

5.1. Kết luận

5.1.1. Kết quả đạt được

Qua quá trình nghiên cứu và triển khai đồ án "Website Bán Dụng Cụ Học Tập", sinh viên đã thu được những thành quả quan trọng sau:

a) Về kiến thức và kỹ năng:
• Nắm vững nguyên lý hoạt động của ứng dụng web Single Page Application (SPA)
• Thành thạo việc sử dụng HTML5, CSS3 và JavaScript ES6+ trong phát triển giao diện người dùng
• Hiểu rõ quy trình vận hành của một hệ thống thương mại điện tử chuyên về văn phòng phẩm
• Tích lũy kinh nghiệm về nghiệp vụ kinh doanh trong lĩnh vực dụng cụ học tập

b) Về sản phẩm hoàn thiện:
• Xây dựng thành công hệ thống website với giao diện trực quan, dễ sử dụng cho cả khách hàng lẫn quản trị viên
• Danh mục sản phẩm được phân loại khoa học với thông tin chi tiết, hình ảnh rõ ràng
• Tích hợp đầy đủ các tính năng cần thiết cho một website bán hàng trực tuyến

c) Về trải nghiệm người dùng:
• Khách hàng có thể tra cứu thông tin sản phẩm thông qua hình ảnh minh họa, mô tả chi tiết, bảng giá và nhận xét từ người mua trước
• Hỗ trợ đặt hàng trực tuyến mọi lúc mọi nơi mà không cần đến cửa hàng
• Hiển thị các chương trình ưu đãi, sản phẩm nổi bật nhằm thu hút sự quan tâm của người mua

d) Chức năng dành cho quản trị viên:
• Quản lý danh mục sản phẩm: thêm mới, chỉnh sửa, xóa bỏ
• Quản lý thông tin sản phẩm: cập nhật giá, mô tả, hình ảnh, số lượng tồn kho
• Quản lý đơn hàng: theo dõi và cập nhật trạng thái thanh toán
• Quản lý chương trình khuyến mãi dành cho học sinh, sinh viên
• Xem báo cáo thống kê doanh thu theo ngày
• Quản lý thông tin và phản hồi từ khách hàng

e) Chức năng dành cho khách hàng:
• Đăng ký tài khoản và đăng nhập hệ thống
• Duyệt danh mục, xem chi tiết và đánh giá sản phẩm
• Tìm kiếm sản phẩm theo tên, danh mục hoặc thương hiệu
• Thêm sản phẩm vào giỏ hàng và danh sách yêu thích
• Thực hiện đặt hàng với thông tin giao nhận đầy đủ
• Xem thông tin giới thiệu và liên hệ với cửa hàng
• Theo dõi lịch sử đơn hàng và thông tin tài khoản cá nhân

5.1.2. Hạn chế

• Khả năng tương thích: Giao diện chưa được tối ưu hoàn toàn cho một số thiết bị di động có kích thước màn hình đặc biệt, ảnh hưởng đến trải nghiệm người dùng trên các nền tảng khác nhau

• Tính năng nâng cao: Một số chức năng như gợi ý sản phẩm dựa trên hành vi mua sắm, bộ lọc tìm kiếm theo nhiều tiêu chí, quản lý chi tiết lịch sử giao dịch chưa được triển khai đầy đủ

• Phương thức thanh toán: Hiện tại website chỉ hỗ trợ thanh toán khi nhận hàng (COD), chưa tích hợp các cổng thanh toán điện tử phổ biến như VNPay, MoMo, ZaloPay hay thanh toán quốc tế qua PayPal, Stripe. Điều này hạn chế sự tiện lợi cho khách hàng có nhu cầu thanh toán trực tuyến

• Theo dõi đơn hàng: Khách hàng chưa thể theo dõi chi tiết trạng thái vận chuyển đơn hàng (đang xử lý, đã đóng gói, đang giao, đã giao). Việc này gây khó khăn khi khách hàng muốn nắm bắt tình hình thực tế của đơn hàng

• Lưu trữ dữ liệu: Dữ liệu được lưu trên trình duyệt (LocalStorage) nên có thể bị mất khi người dùng xóa bộ nhớ cache hoặc chuyển sang thiết bị khác

5.2. Hướng phát triển

5.2.1. Khắc phục hạn chế hiện tại
• Tối ưu hóa giao diện responsive cho mọi kích thước màn hình
• Cải thiện hiệu suất và tốc độ tải trang
• Nâng cao tính bảo mật cho dữ liệu người dùng

5.2.2. Bổ sung tính năng mới
• Phát triển chức năng chọn màu sắc, kích thước cho sản phẩm (nếu có)
• Xây dựng hệ thống gợi ý sản phẩm thông minh dựa trên sở thích và lịch sử mua hàng
• Tích hợp chức năng so sánh sản phẩm
• Thêm tính năng đánh giá sản phẩm bằng hình ảnh

5.2.3. Nâng cấp hệ thống thanh toán
• Tích hợp cổng thanh toán VNPay, MoMo, ZaloPay
• Hỗ trợ thanh toán qua thẻ ngân hàng nội địa và quốc tế
• Triển khai mã giảm giá và voucher điện tử

5.2.4. Phát triển chức năng theo dõi đơn hàng
• Cập nhật trạng thái đơn hàng theo thời gian thực
• Gửi thông báo qua email hoặc SMS khi có thay đổi trạng thái
• Tích hợp tra cứu vận đơn từ các đơn vị vận chuyển

5.2.5. Mở rộng quy mô
• Phát triển Backend API với ASP.NET Core và cơ sở dữ liệu SQL Server
• Xây dựng ứng dụng di động cho Android và iOS
• Tích hợp chatbot hỗ trợ khách hàng tự động
• Triển khai hệ thống tích điểm và ưu đãi khách hàng thân thiết

---

TÀI LIỆU THAM KHẢO

[1] Mozilla Developer Network. (2024). HTML: HyperText Markup Language. https://developer.mozilla.org/en-US/docs/Web/HTML

[2] Mozilla Developer Network. (2024). CSS: Cascading Style Sheets. https://developer.mozilla.org/en-US/docs/Web/CSS

[3] Mozilla Developer Network. (2024). JavaScript. https://developer.mozilla.org/en-US/docs/Web/JavaScript

[4] W3Schools. (2024). HTML Tutorial. https://www.w3schools.com/html/

[5] W3Schools. (2024). CSS Tutorial. https://www.w3schools.com/css/

[6] W3Schools. (2024). JavaScript Tutorial. https://www.w3schools.com/js/

[7] CSS•Tricks. (2024). A Complete Guide to Flexbox. https://css-tricks.com/snippets/css/a-guide-to-flexbox/

[8] CSS•Tricks. (2024). A Complete Guide to Grid. https://css-tricks.com/snippets/css/complete-guide-grid/

[9] Font Awesome. (2024). Font Awesome Documentation. https://fontawesome.com/docs

---

PHỤ LỤC

Phụ lục A: Hướng dẫn sử dụng website

A.1. Yêu cầu hệ thống
• Trình duyệt web: Chrome 90+, Firefox 88+, Edge 90+, Safari 14+
• Kết nối Internet (để tải Font Awesome từ CDN)

A.2. Cách chạy website
• Mở file index.html trực tiếp trong trình duyệt
• Hoặc sử dụng Live Server extension trong VS Code

A.3. Tài khoản admin mặc định
• Username: admin
• Password: 123

Phụ lục B: Thông tin liên hệ

Sinh viên: Phan Huỳnh Phúc
Địa chỉ: ĐƯỜNG D5, CHÂU THÀNH, VĨNH LONG
Số điện thoại: 0977670459
Email: phanhuynhphuc@gmail.com

---

KẾT THÚC BÁO CÁO
