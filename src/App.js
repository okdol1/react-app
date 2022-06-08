import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';

function Header(){
  return <header><h1><a href="/">WWW</a></h1></header>
}
// function Nav(props){
//   const list = props.data.map((e)=>{
//     return <li key={e.id}><a href={'/read/'+e.id}>{e.title}</a></li>
//   });
//   return <nav>
//     <ol>
//         {list}
//     </ol>
//   </nav>
// }
function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function Nav(props){
  const liTags = props.data.map((e)=>{
    return <li><a href={'/read/'+e.id}>{e.title}</a></li>
  })
  return <nav><ol>{liTags}</ol></nav>
}
function App() {
  // const topics = [
  //   {id:1, title:'html', body:'html is ...'},
  //   {id:2, title:'css', body:'css is ...'}
  // ];
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
  ];
  return (
    <div>
      <Header></Header>
      {/* <Nav data={topics}></Nav> */}
      <Nav data={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB!"></Article>
      <ButtonGroup>
        <Button variant="outlined">Create</Button>
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
      <Button variant="outlined">Delete</Button>
    </div>
  );
}

export default App;
