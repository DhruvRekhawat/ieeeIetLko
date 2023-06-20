import React from 'react'
import { useState,useEffect } from 'react'
import './blogSanity.css'
import sanityClient from '../../client'
const BlogSanity = () => {
        const [categories, setCategories] = useState(null);

        useEffect(() => {
    
            sanityClient
    
                .fetch(
    
                    `*[_type == "category"]{
    
          title,
    
          slug,
    
          description,
    
          image{
    
            asset->{
    
              _id,
    
              url
    
            },
    
          },
    
          hexCode,
    
        }`
    
                )
    
                .then((data) => setCategories(data))
    
                .catch(console.error);
    
        }, []);
  return (
    <div>BlogSanity</div>
  )
}

export default BlogSanity