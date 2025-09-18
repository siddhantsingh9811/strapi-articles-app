import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
const ArticleDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState([]);
    useEffect(() => {
        const fetchArticle = async () => {
          try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/articles/${id}?populate=*`);
            console.log(response.data.data.content);
            setArticle(response.data.data.content);

          } catch (error) {
            console.error('Error fetching article:', error);
          }
        };
    
        fetchArticle();
      }, [id]);
    
      if (!article) {
        return <div>Loading...</div>;
      }      
    return ( 
      <div>
        <div className="article-content">
            <BlocksRenderer content={article} />
        </div>
      </div>
     );
}
 
export default ArticleDetail;