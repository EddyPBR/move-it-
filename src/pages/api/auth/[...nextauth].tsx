import NextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  database: process.env.MONGODB_URI,
};

export default (request: NextApiRequest, response: NextApiResponse) =>
  NextAuth(request, response, options);
