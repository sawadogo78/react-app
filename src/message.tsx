//PasclaCasing
function Message(){
    // / JSX: JavaScript XML
    const name = ""; // dynamic content
    if (name){
        return <h1>Hello { name }</h1>;  
    } else
    {
        return <h1>Hello World</h1>
    }

}

export default Message; // to use it we need to export it