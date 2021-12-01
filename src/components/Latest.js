import '../css/latest.css'
import { Link } from 'react-router-dom'
import Card from '../components/resusable/Card'

const Latest = ({meta}) => {

    return (
        <div className="Latest">
            <h3 className="title">Latest Articles 👇</h3>
                <div className="all-latest-articles">
                    {meta &&
                        meta.map((item, index)=>{
                            if(index < 4){
                                return <Card path={item.path} title={item.title} image={item.hero} description={item.description} date={item.date}/>
                            }
                        })
                    }
                </div>


             <Link to="/articles" className="more-articles">
                <p>More articles</p>
            </Link>

        </div>
    )
}

export default Latest
