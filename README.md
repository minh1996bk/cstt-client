Chuẩn bị môi trường: Cài đặt node version > 8.11.0 và mariaDb
Cài đặt chương trình chạy local khi sử dụng git:
B1: Cài đặt module bằng dòng lệnh "npm install hoặc sudo npm install", đảm bảo không cài thiếu module
B2: Cấu hình
    - Vào config/model chỉnh sử migrate thành 'safe'
    - Vào config/datastores chỉnh sửa lại url kết nối với cơ sở dữ liệu
B3: Vào database mà B2 đã chọn chạy file cstt.sql để  thêm bảng và dữ liệu của hệ thống
B4: Chạy chương trình bằng lênh "node app.js"

