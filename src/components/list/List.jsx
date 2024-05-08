import Post from "../post/Post";
import "./List.scss";

export default function List({data = []}){
    return(
        <div className="list">
            {data.map((i)=> (
                <Post post={i}/>
            ))} 
        </div>
    );
}