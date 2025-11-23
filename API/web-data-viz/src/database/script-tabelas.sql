-- create database sonhoemjogo;
-- use sonhoemjogo;
-- drop database sonhoemjogo;

CREATE TABLE usuario (
  idusuario int PRIMARY KEY auto_increment,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  senha CHAR(10) NOT NULL
);

select *from usuario; 

CREATE TABLE pontuacao (
    id_pontuacao INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    acertou TINYINT(1),                 -- 1 = acerto, 0 = erro
    quiz INT,                           -- qual quiz foi respondido
    data_resposta DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuario(idusuario)
);


insert into usuario (nome,email, senha) value
('bubu', 'bubu@bubu', 'bubu');

insert into pontuacao (id_usuario, acertou) value
(1,0);


SELECT 
    u.nome,
    SUM(p.acertou) AS acertos,
    COUNT(*) - SUM(p.acertou) AS erros,
	count(*) as total
FROM pontuacao p
JOIN usuario u ON u.idusuario = p.id_usuario
GROUP BY u.idusuario, u.nome;

select data_resposta as tempo
from pontuacao p 
join usuario u 
on u.idusuario = p.id_usuario
GROUP BY u.idusuario, data_resposta;
   