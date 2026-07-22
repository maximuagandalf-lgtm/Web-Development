export default async function Page({ params }) {
    throw new Error("error hai");
    
    //fetch your blog post by its slug
    const {slug} = await params //params is now a promise in nextjs 16 compared to an object in previous versions.

    let blogs = ["python", "javascript", "c", "c++", "c#"]
    if (blogs.includes(slug?.toLowerCase())){
        return <div>My Post: {slug}</div>
    }
    else {
        return <div>Post not available</div>
    }
 //   return <div>My Post: {slug}</div>
}

// this is used to access any variable from our URL. Usually used for creating blogposts.We dont have to create multiple requests for mutilple posts
