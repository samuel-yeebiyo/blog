import Card from "./resusable/Card"

import '../css/articles.css'

import { Link } from "react-router-dom"

const Articles = ({meta}) => {
    
    return (
        <div className="Articles">
            <div className="articles-desc">
                <h3>Articles 📰</h3>
                <p>Hope you find something useful!</p>
            </div>
            {meta &&
                meta.map((item)=>(
                    <Card path={item.path} title={item.title} image={item.hero} description={item.description} date={item.date}/>
                ))
            }
        </div>
    )
}

export default Articles
