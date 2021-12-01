import Card from "./resusable/Card"
import '../css/articles.css'

const Articles = ({meta}) => {
    
    return (
        <div className="Articles">
            <div className="articles-desc">
                <h3>Articles 📰</h3>
                <p>Hope you find something useful!</p>
            </div>
            <div className="global-tags">

            </div>
            <div className="all-articles">
                {meta &&
                    meta.map((item)=>{
                        return <Card path={item.path} title={item.title} image={item.hero} description={item.description} date={item.date}/>
                    })
                }
            </div>
        </div>
    )
}

export default Articles
