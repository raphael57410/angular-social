export interface LoginUser {
    email: string,
    password: string
}

export interface TokenObject {
    id: number,
    email: string
    password: string
    niveau: number
    token: string
}

export interface UserObject {
    avatar: string,
    email: string,
    id: number,
    niveau: number,
    password: string,
    pseudo: string
}

export interface ItemObject {
    id: number,
    titre: string,
    contenu: string
}

export interface CommentObject {
    idArt: number,
    contenu: string,
    id_commentaire: number
}