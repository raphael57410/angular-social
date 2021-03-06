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
    id_article: number,
    titre: string,
    contenu: string
    comment: CommentObject[]
    user: UserObject[]
}

export interface CommentObject {
    id: number,
    contenu: string,
    id_commentaire: number
}