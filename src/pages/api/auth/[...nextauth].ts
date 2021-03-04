import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const gitId = process.env.GITHUB_ID;
const gitSecret = process.env.GITHUB_SECRET;

const options = {
    providers: [
        Providers.GitHub({
            clientId: gitId,
            clientSecret: gitSecret
        }),
    ],
}

export default (req, res) => NextAuth(req, res, options)