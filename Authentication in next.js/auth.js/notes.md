### NextAuth -->
- install with "npm i next-auth"

- create route.js in "app/api/aut/[...nextauth]/route.js"

- create a SessionWrapper similiar to how it is created in the SessionWrapper.jsx here and then import it into layout.jsx + wrap the {children} inside the body tags b/w SessionWrapper tags 

- boiler plate code for app/page.jsx -->
    "use client"

import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {

const {data: session} = useSession()
if (session) {
return <>
   Signed in as (session.user.email) <br/>
   <button onClick={() => signOut()}> Sign out </button>
  </>
}
return <>
  Not signed in <br/>
  <button onClick = {()=> signIn()}>Sign in </button>
  </>
}

- we can create separate signIn buttons for giving options to users so that they can sign in with github, facebook, google etc.

- page.jsx code for multi option Authorisation-->

return <>
  Not signed in <br/>
  <button onClick = {()=> signIn("github")}>Sign in using Github </button>
  <button onClick={()=> signIn("google")}>Sign in using Google</button>
  <button onClick={()=> signIn("Facebook")}>Sign in using Facebook</button> 
  </>
}

- we will have to create separate OAuth provider registerations, clientID and clientsecrets. we will have to provide separate providers for all the authorisation options we want to provide.

- create .env.local inside project's root directory

- now as we are using gihub provider for authentication, we have to register a new Oauth application on github, go to settings-> developer settings-> OAuth Apps-> create a new Oauth App

- callback URL while registering on github - "http://localhost.3000/api/auth/callback/gitfiubl"

- after registeration, copy the ClientID and Client Secret(after generating) and paste them ino .env.local with in curly brackets.

- refer to documentation for proper installation

- All of this helps us create sign in procedures for users, we can provide the option for users to sign in using Github, Google, Facebook etc. accounts separately.