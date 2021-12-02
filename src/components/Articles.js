import { useState, useEffect } from "react"

import { Link, useLocation } from "react-router-dom"

import Card from "./resusable/Card"
import '../css/articles.css'

const Articles = ({meta, location, history}) => {

    const [tags, setTags]=useState([])
    const [selectedTag, setSelectedTag]=useState({
        name:"",
        id:[]
    })
    const linkData = useLocation()

    useEffect(()=>{
        async function fetchTags(){
          await fetch('http://192.168.10.159:5000/api/get-tags').then( async (res)=> {
              
            res= await res.json()
            console.log("Fetched: ", res)
            setTags(res);

            if(linkData.state){
                let sel;
                console.log({res})
                for(let i=0; i<res.length ; i++){
                    if(res[i].name == linkData.state){
                        sel = res[i]
                        break
                    }
                }
                
                setSelectedTag(sel)
            }


    
          }).catch(err => console.log(err))
        }
    
        fetchTags()

       
    
    },[])
    

    
    

    const selectTag = (tag)=>{
        if(tag.name == selectedTag.name){
            setSelectedTag({ name:"",id:[]})
        }else setSelectedTag(tag);
    }

    return (
        <div className="Articles">
            <div className="articles-desc">
                <h3>Articles 📰</h3>
                <p>Hope you find something useful!</p>
            </div>
            <div className="global-tags">
                {tags &&
                    tags.map((item)=>{
                        return (
                            <div tabIndex="-1" className={`global-tag ${selectedTag.name == item.name && "tag-selected"}`} onClick={() => selectTag(item)}>
                                <p>{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="all-articles">

                {selectedTag.id.length > 0 ?
                    meta &&
                        meta.map((item)=>{
                            if(selectedTag.id.includes(item.id))
                            return <Card path={item.path} title={item.title} image={item.hero} description={item.description} date={item.date}/>
                        })
                    :
                    meta &&
                        meta.map((item)=>{
                            return <Card path={item.path} title={item.title} image={item.hero} description={item.description} date={item.date}/>
                        })
                     
                }

            </div>
        </div>
    )
}

export default Articles
