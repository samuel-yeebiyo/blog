import { useEffect, useState} from 'react'

import '../../css/post.css'
import Showdown from 'showdown'
import MarkDown from '../utils/Markdown'


import Email from './Email'

const Post = ({hero, id, meta}) => {

   
    const [content, setContent] = useState('');

    useEffect(()=>{
        
        async function fetchPost(){
            await fetch(`http://192.168.8.108:5000/api/post/${id}`).then( async (res)=> {
            
            let data = await res.text()
            let converter = new Showdown.Converter();
            converter.setOption('simpleLineBreaks', true)
            let html = converter.makeHtml(data);
            setContent(data)

            }).catch(err => console.log(err))
        }
        
        fetchPost() 

    },[])


    return (
        <div id="post" className="Post">
            <div className="post-image">
                <div className="overlay">
                    <div className="post-data">
                        <p className="post-date">{new Date(meta.date).toDateString()}</p>
                        <h1 className="post-title">{meta.title}</h1>
                        <br/>
                        <p className="post-tags">{
                            meta.tags.map((item)=>(<span>{item} // </span>))
                        }
                        </p>
                    </div>
                </div>
                <img src={`${hero}`} />
            </div>
            <div className="post-content">
                <MarkDown content={content}/>
            </div>
            <div className="divider">
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
            <Email/>
        </div>
    )
}

export default Post
