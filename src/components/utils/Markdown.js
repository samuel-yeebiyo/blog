import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow'

const Markdown = ({content}) =>{

    return (
        <ReactMarkdown
            components={{
                hr(){
                    return(
                        <div className="divide">
                        <div className="dts">
                            <div className="dt"></div>
                            <div className="dt"></div>
                            <div className="dt"></div>
                        </div>
                        </div>
                    )
                },
                img({src}){
                    console.log(src)
                    return(
                        <div className="postcontent-img">
                        <img src={src}/>
                        </div>
                    )    
                },
                code({ className, children }) {
                    // Removing "language-" because React-Markdown already added "language-"
                    const lang = className ? className.replace("language-", "") : "bash"
                    return (
                        <div className="code" style={{textAlign:"center", width:"100%"}}>
                            <div style={{background:"#2d2d2d", width:"100%", color:"rgba(255,255,255,0.50)", borderRadius:"7px 7px 0 0"}}>{lang}</div>
                            <SyntaxHighlighter style={theme} language={lang}>
                                {children[0]}
                            </SyntaxHighlighter>
                        </div>
                    );
                },
            }}>

            {content}
        </ReactMarkdown>
    );
}

export default Markdown