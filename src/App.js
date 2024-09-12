import Student from "./Student";
import Principal from "./Principal";
import Teacher from "./Teacher";


const App= function(){
  const student={
    name:"Rani",
    age:"20",
    class:"React js"
  }
  const teacher={
    name:"Anisha",
    post:"Teacher",
    salary:"40,000"
  }
  return(
    <>
      <Student student={student}/>
      <Principal
        name="Jignesh"
        post="Principal"
        salary="80,000"
      />
      <Teacher {...teacher} />
    </>
  )
}
export default App;