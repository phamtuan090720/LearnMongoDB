# Mongodb ![enter image description here](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/50px-Antu_mongodb.svg.png?20160706123547)
## Tổng quan về mongodb :
### Mongodb là gì ? 
MongoDB là một cơ sở dữ liệu mã nguồn mở và là cơ sở dữ liệu NoSQL hàng đầu, được hàng triệu người sử dụng. MongoDB được viết bằng C++.
Ngoài ra, MongoDB là một cơ sở dữ liệu đa nền tảng, hoạt động trên các khái niệm Collection và Document, nó cung cấp hiệu suất cao, tính khả dụng cao và khả năng mở rộng dễ dàng.
### Vậy Conllection là gì ? 
Collection là một nhóm các Document trong MongoDB. Nó tương đương như một bảng trong RDBMS. Do đó, một Collection tồn tại bên trong một cơ sở dữ liệu duy nhất. Các Collection không có ràng buộc Relationship như các hệ quản trị cơ sở dữ liệu khác nên việc truy xuất rất nhanh, chính vì thế mỗi collection có thể chứa nhiều thể loại khác nhau không giống như table trong hệ quản trị mysql là các field cố định. Các Document bên trong một Collection có thể có nhiều trường khác nhau. Đặc biệt, tất cả các Document trong một Collection là tương tự nhau hoặc với cùng mục đích liên quan.
### Document trong Mongodb là gì ? 
Một Document trong MongoDB, có cấu trúc tương tự như kiểu dữ liệu JSON, là một tập hợp các cặp key-value. Các Document có schema động, nghĩa là Document trong cùng một Collection không cần thiết phải có cùng một tập hợp các trường hoặc cấu trúc giống nhau, và các trường chung trong Document của một Collection có thể giữ các kiểu dữ liệu khác nhau.
#### Bảng so sánh giữa Relational Database Management System vs NoSQL :
| Relational Database Management System|MongoDB (NoSQL)  |
|:--------------:|:--------------:|
| Database | Database |
| Table| Collection|
| Tuple/Row| Document|
| column| Field|
| Table Join| Embedded Documents|
|Primary Key|Primary Key (Giá trị mặc định là _id được cung cấp bởi chính MongoDB)|
| **Database Server và Client** |  |
|  Mysqld/Oracle| mongod |
|  mysql/sqlplus| mongo|


#### Cấu trúc của Document đơn giản :

        {
    
        _id: ObjectId(7 df78ad8902c)
    
        title: 'MongoDB Overview',
    
        description: 'MongoDB is no sql database',
    
        by: 'tutorials point',
    
        url: 'http://www.tutorialspoint.com',
    
        tags: ['mongodb', 'database', 'NoSQL'],
    
        likes: 100,
    
        comments: [
    
            {
    
                user: 'user1',
    
                message: 'My first comment',
    
                dateCreated: new Date(2011, 1, 20, 2, 15),
    
                like: 0
    
            },
    
            {
    
                user: 'user2',
    
                message: 'My second comments',
    
                dateCreated: new Date(2011, 1, 25, 7, 45),
    
                like: 5
    
            }
    
        ]
    
    }
Ở đây, **_id** là một số thập lục phân 12 byte để đảm bảo tính duy nhất của mỗi Document. Bạn có thể cung cấp _id trong khi chèn vào Document. Nếu bạn không cung cấp, thì MongoDB sẽ cung cấp một id duy nhất cho mỗi Document. Trong 12 byte này, 4 byte đầu là cho Timestamp hiện tại, 3 byte tiếp theo cho ID của thiết bị, 2 byte tiếp là process id của MongoDB Server và 3 byte còn lại là giá trị có thể tăng.

