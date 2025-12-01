-- create database sonhoemjogo;
-- use sonhoemjogo;
-- drop database sonhoemjogo;

CREATE TABLE usuario (
  idusuario int PRIMARY KEY auto_increment,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
 check (email like ('%@%.%')),
  senha CHAR(10) NOT NULL
);

select *from usuario; 

CREATE TABLE pontuacao (
    id_pontuacao INT AUTO_INCREMENT PRIMARY KEY,
	pontuacao int,                 
    tentativas int,                        
    data_resposta DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(idusuario)
);

/*
               SELECT 
  pontuacao,
   5- pontuacao  as respostas_erradas,
   count(*)  tentativas
FROM pontuacao 
WHERE id_usuario = 2
group by tentativas, pontuacao;

        SELECT 
  pontuacao as Respostas_certa,
    ROUND((pontuacao / 5) * 100, 2) AS porcentagem_acertos,
    (SELECT COUNT(*) FROM pontuacao WHERE id_usuario = 2) AS quantidade_tentativas
FROM pontuacao
WHERE id_usuario =2
    ;

               SELECT 
  pontuacao as Respostas_certa,
   5 - pontuacao as Repostas_erradas,
    data_resposta
FROM pontuacao
WHERE id_usuario = 2
    ;

/*SELECT 
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
   */  