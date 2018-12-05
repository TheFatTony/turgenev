DROP USER 'trv'@'localhost';
DROP USER 'trv'@'%';

DROP DATABASE trv;

DROP USER 'trv_user'@'localhost';
DROP USER 'trv_user'@'%';

CREATE USER 'trv'@'localhost'
  IDENTIFIED WITH mysql_native_password BY 'g4sGfdTbT23';
CREATE USER 'trv'@'%'
  IDENTIFIED WITH mysql_native_password BY 'g4sGfdTbT23';

CREATE DATABASE trv
  CHARACTER SET utf8
  COLLATE utf8_general_ci;

GRANT ALL PRIVILEGES ON trv.* TO 'trv'@'localhost';
GRANT ALL PRIVILEGES ON trv.* TO 'trv'@'%';

CREATE USER 'trv_user'@'localhost'
  IDENTIFIED WITH mysql_native_password BY 'tmuL4svR76d';
CREATE USER 'trv_user'@'%'
  IDENTIFIED WITH mysql_native_password BY 'tmuL4svR76d';

GRANT DELETE ON trv.* TO 'trv_user'@'localhost';
GRANT DELETE ON trv.* TO 'trv_user'@'%';
GRANT INSERT ON trv.* TO 'trv_user'@'localhost';
GRANT INSERT ON trv.* TO 'trv_user'@'%';
GRANT SELECT ON trv.* TO 'trv_user'@'localhost';
GRANT SELECT ON trv.* TO 'trv_user'@'%';
GRANT UPDATE ON trv.* TO 'trv_user'@'localhost';
GRANT UPDATE ON trv.* TO 'trv_user'@'%';