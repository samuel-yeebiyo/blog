import { useEffect, useState} from 'react'

import '../../css/post.css'
import Showdown from 'showdown'
import MarkDown from 'markdown-to-jsx'

const Blog = () => {

   
    const [content, setContent] = useState('');

    useEffect(()=>{
        
        async function fetchPost(){
            await fetch('http://192.168.10.159:5000/get').then( async (res)=> {
            
            let data = await res.text()
            console.log("Fetched: ", data)

            let converter = new Showdown.Converter();
            converter.setOption('simpleLineBreaks', true)
            let html = converter.makeHtml(data);

            console.log("Converted: ",html)

            setContent(html)

            }).catch(err => console.log(err))
        }
        
        fetchPost() 

    },[])

    return (
        <div className="Post">
            <div className="post-image">
                <div className="overlay">
                    <div className="post-data">
                        <h1>This is the title for the blog, This is quite long hmm</h1>
                        <p>21 October, 9:00PM</p>
                        <br/>
                        <p>React // JavaScript // Projects</p>
                    </div>
                </div>
                <img src="http://192.168.10.159:5000/static/temp.jpg" />
            </div>
            <div className="post-content">
                <p>This is a blog 1</p>
                <MarkDown>
                    {content}
                </MarkDown>
            </div>
        </div>
    )
}

export default Blog
