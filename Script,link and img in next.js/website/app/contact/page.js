import React from 'react'
import Script from 'next/script'


const page = () => {
  return (
    <div>
        <Script>
            {`alert("Welcome to Contact page")`}
        </Script>
        I am Contact
        </div>
  )
}

export default page

export const metadata = {
  title: "Contact Facebook - Connect with the world",
  description: "Welcome to Contact Facebook", 
  // a well optimised description makes the SEO of website better
};