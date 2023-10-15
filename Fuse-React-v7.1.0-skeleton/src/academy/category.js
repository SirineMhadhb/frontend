import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


export const Category = (props) => {
    
    const [blogs, setBlogs] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    

    useEffect(() => {
        const {id} = useParams
         
        setCurrentCategory(capitalizeFirstLetter(currentCategory));

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/all_categories`, { id }, config);
                setBlogs(res.data);
                console.log(res)
            }
            catch (err) {

            }
        };
        

        fetchData();
    }, [props.id]);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const getCategoryBlogs = () => {
        let list = [];
        let result = [];

        blogs.map(CourPost => {
            return list.push(
                <form>
                <div style={{border: "5px solid #A0A0A0" , width: "400px"  , boxShadow:"-moz-initial" }}>
                    <div>
                    <div >{(CourPost.Categories)}</div>

                        <h3 style={{color: "black" , backgroundColor: "white" ,  padding: "10px" , textAlign :"center" ,padding:"20px 25px"}}>
                            
                            <b className='blog-post-title'>{CourPost.title}</b></h3>
                        <div ><b>{CourPost.month} {CourPost.day} {CourPost.year}</b></div>
                        <div> <b>{CourPost.time}</b></div>
                         
                        <div dangerouslySetInnerHTML={{ __html: CourPost.content }}>

                        </div>
                        <button  style={{background:"#666ed8",padding:"20px 25px", border:"none" , cursor:"pointer",color:"white" , boxShadow :"1px 2px 3px" , transition:"0.3s ease all"
                     }} > 
                            <Link to={`/coursess/${CourPost.slug}`} >Continue reading</Link> </button>
                    </div>
                    <div >
                        {/* <img style ={{width:'200' , height:'200'}}src={CourPost.thumbnail} alt='thumbnail' /> */}
                    </div>
                </div>
                </form>
                
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
                
            )
        }

        return result;
    };

    return (
        <div className='container mt-3'>
            <h3 className='display-4'>{currentCategory} Category</h3>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                <Link className="p-2 text-muted" to='/category/web' >web</Link>
                    <Link className="p-2 text-muted" to='/category/mobile'>mobile</Link>
                    <Link className="p-2 text-muted" to='/category/firebase'>firebase</Link>
                </nav>
            </div>
            {getCategoryBlogs()}
        </div>
    );
};

export default Category;


