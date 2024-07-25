import { useNavigate } from "react-router-dom"
import FormActivity from "../formActivity/FormActivity"

function CreateActivity(){
    const navigate = useNavigate()

    function createPost(Activities){
        fetch('http://localhost:4000/activities', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(Activities),
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data)
            navigate(`/activity/${data.id}`)
        })
        .catch((err)=>console.log(err))
    }
    return (
        <FormActivity handleSubmit={createPost}/>
    )
}

export default CreateActivity