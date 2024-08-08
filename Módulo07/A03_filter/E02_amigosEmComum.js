const amigosPedro = ['José','Aline','Alicia','Débora','Marcos','Paula'];

const amigosLia = ['Antônio','José','Laura','Lívia','Eduardo','Wilian','Aline'];

const amigosEmComum = amigosPedro.filter(amigo => amigosLia.includes(amigo));

console.log(amigosEmComum);