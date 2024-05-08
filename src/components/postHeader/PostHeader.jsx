import "./PostHeader.scss";

export default function PostHeader({
    avatar,
    fullname,
    title,
}){
    return (
        <div className="post-header">
            <img
                className="post-header__img"
                src={ avatar }
                alt="Profile pic"
            ></img>
            <div className="post-header__text-container">
                <span className="post-header__title">{fullname}</span>
                <span className="post-header__subtitle">{title}</span>
            </div>        
        </div>
    );
}