import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';

function Header(props){
  return <header><h1><a href="/" onClick={(evt)=>{
    evt.preventDefault()
    console.log('evt', evt)
    props.onSelect();
  }}>WWW</a></h1></header>
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
    return <li key={e.id}><a href={'/read/'+e.id}  onClick={(evt)=>{
      evt.preventDefault()
      console.log('evt', evt)
      props.onSelect();
    }}>{e.title}</a></li>
  })
  return <nav><ol>{liTags}</ol></nav>
}
// function createHandler() {

// }
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
      <Header onSelect={()=>{
        alert('Header!!!')
      }}></Header>
      {/* <Nav data={topics}></Nav> */}
      <Nav data={topics} onSelect={()=>{
        alert('Nav!!!')
      }}></Nav>
      <Article title="Welcome" body="Hello, WEB!"></Article>
      <ButtonGroup>
        <Button variant="outlined" onClick={()=>{
          alert('create!')
        }}>Create</Button>
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
      <Button variant="outlined">Delete</Button>
    </div>
  );
}

export default App;
