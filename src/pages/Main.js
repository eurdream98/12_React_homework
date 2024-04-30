import {Link} from "react-router-dom";

function Main(){
    return(
        <Link to={"/list"}>
        <div className="content">
            <h1>캐릭터 순위</h1>
        </div>
        </Link>
    )
}
export default Main;