export default async function Page({ params }) {
  const {slug} = await params
  console.log(slug)
  return <div>I am about page check console</div>
}

// this way we can access all the slugs from URL from the server, this will return an array name val[slug1, slug2, slug3].

// eg:- ...localhost:3000/about/ayush/one/two
// val: [ayush, one, two]

// we can write separate logic for each slug here. different logic for "/ayush", separate for "/one" separate for "/two"