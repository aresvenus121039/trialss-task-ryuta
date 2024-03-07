import { NextAuthOptions, Session, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials'

interface Credentials{
  email: string;
  password: string;
}
export interface MySession extends Session{
    user:{
        id: string,
        name: string,
        email: string,
    }
}
interface MyUser extends User{
    id: string,
    name: string,
    email: string,
    address: string
}
const options: NextAuthOptions = {
    session:{
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session,token }){
            if (token) {
                session.user = token.user as MyUser;
            }
            return Promise.resolve(session);
        },
    },
    secret: "POWER",
    providers: [
        Credentials({
            id: 'credentials',
            name: 'credentials',
            credentials:{
                email: {label:'email', type:'text',placeholder:''},
                password:{label:'password',type:'password'}
            },
            async authorize(credentials){
                // const { email, password } = credentials as Credentials;

                const user = { id: "001", email: "nextjsdev", password: "12345678" }

              if (credentials?.email === user.email && credentials?.password === user.password) {
                return user
              } else {
                return null
              }
                
            },
        })
    ],
}

export default options;