export default interface LoginUser {
    email: string,
    password: string
}

export default interface TokenObject {
    id: number,
    email: string
    password: string
    niveau: number
    token: string
}

export default interface UserObject {
    avatar: string,
    email: string,
    id: number,
    niveau: number,
    password: string,
    pseudo: string
}