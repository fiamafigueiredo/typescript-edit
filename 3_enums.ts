enum Roles { //é uma lista de variáveis
    ADMIN = 'Administrador',
    GUEST = 'Convidado',
    USER = 'Utilizador'
}

interface IUser {
    username: string, 
    role: Roles
}

const user : IUser = {
    username: 'alex',
    role: Roles.ADMIN
}

console.log (user)

enum SocialMedia {
    FACEBOOK =  'Facebook',
    INSTAGRAM = 'Instagram'
}

const social = SocialMedia.FACEBOOK;

// social -> "Facebook"

for (const social in SocialMedia) {
    console.log (social);
}