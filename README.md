# Dự Án Quản Lý Đơn Hàng

## Mô Tả
Dự án này cung cấp một hệ thống quản lý đơn hàng giúp người dùng theo dõi và quản lý đơn hàng dễ dàng bằng cách áp dụng kiến trúc microservices.

## Tính Năng
- **Quản lý đơn hàng:** Tạo, sửa, và xóa đơn hàng.
- **Thống kê:** Hiển thị thống kê về số lượng đơn hàng theo thời gian.
- **Thông báo:** Gửi thông báo khi có thay đổi trạng thái đơn hàng.

## Kiến Trúc
- Sử dụng microservices để tách biệt các chức năng: dịch vụ người dùng, dịch vụ đơn hàng và dịch vụ thông báo.
- Triển khai Docker để container hóa ứng dụng.

## Hướng Dẫn Cài Đặt
1. Clone repository: `git clone https://github.com/username/du-an-quan-ly-dat-hang`
2. Cài đặt Docker.
3. Chạy ứng dụng bằng lệnh: `docker-compose up`

## Công Nghệ
- Node.js, Express cho backend.
- MongoDB cho cơ sở dữ liệu.
- React cho frontend.

## Đóng Góp
Nếu bạn muốn đóng góp cho dự án này, vui lòng tạo một pull request hoặc mở issue.

## Liên Hệ
Bạn có thể liên hệ với tôi qua email: example@example.com
