import React, {useState} from 'react'

const AdminPosts = () => {

    const [posts, setPosts] = useState([]);

    // const[formData, setFormData] = useState({
    //     email:"", content:""
    // });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
          id: posts.length + 1,
          title: e.target.title.value,
          content: e.target.content.value,
        };
        setPosts([...posts, newPost]);
        e.target.title.value=""
        e.target.content.value=""
      };

    //   const handleSubmit1 = (e) => {
    //     e.preventDefault();
    //     const newData = {
          
    //       email: e.target.email.value,
    //       content: e.target.content.value,
    //     };
    //     console.log(newData);
    //   };
    


  return (

    <div>

{/* <form className="mb-4 flex flex-col" onSubmit={handleSubmit1}>
        <input 
            placeholder='email'
            required
            name='email'
            type='text'
            className="mb-2 p-2 border w-22 h-15 self-center"
            
            
        />
        <textarea
            name='content'
            placeholder='write the post content here'
            required
            className="mb-2 p-2 border w-7/12 h-60 self-center"
            
            
        />
        <button type='submit' className="bg-blue-500 text-white p-2 w-1/12 self-center">Publish</button>
      </form> */}

    
      <form className="mb-4 flex flex-col" onSubmit={handleSubmit}>
        <input 
            placeholder='Post Title'
            required
            name='title'
            type='text'
            className="mb-2 p-2 border w-22 h-15 self-center"
            
        />
        <textarea
            name='content'
            placeholder='write the post content here'
            required
            className="mb-2 p-2 border w-7/12 h-60 self-center"
            
        />
        <button type='submit' className="bg-blue-500 text-white p-2 w-1/12 self-center">Publish</button>
      </form>

      <div>
        {
            posts.map((post) => (
                <div key={post.id} className='border p-4 mb-2'>
                <h3 className="font-bold">{post.id}.{post.title}</h3>
                <p>{post.content}</p> 
                </div>
            ))
        }
      </div>

    </div>
  )
}

export default AdminPosts
