# mixed webcomponents

a finalidade desse repositório é aferir a possibilidade de execução de multiplos angulares na aplicação, com os componentes sendo distribuidos via webcomponentes.

Para tal teste foi criado as 5 aplicações:
app1-ng7 app2-ng7 usando a tecnologia angular 7 
app1-ng6 app2-ng6 usando a tecnologia angular 6
shell - appshell que agrega todas as aplicações.


No teste é verificado se o compartilhamento do angular interfere no outro aplicativo.



O resultado foi que não interfere.

Para executar o teste no app shell execute o comando abaixo:


npm start


o comando executará a construção das aplicações e iniciará o servidor http porta 8080.
