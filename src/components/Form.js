import React,{useState} from 'react'
// import { Show } from './show';

const Form =()=> {
    const [user,setUser]=useState({
        name:"",
        dept:"",
        rate:""
    })
    const [rec,setRec]=useState([]);
    const onInput=(event)=>{
        const name =event.target.name;
        const value =event.target.value;
        console.log(name,value);
        setUser({...user,[name]:value})
        console.log(user);
        }
    const onSubmit=(event)=>{
        event.preventDefault();
        setRec([...rec,user])
        console.log(rec);
    }
        return (
            <div className='forms'>
                <h1>Employee feedback form</h1>

                <label>Name:</label>
                <input name='name' type='text' value={user.name} onChange={onInput}/>
                <br></br>
                <label>Department:</label>
                <input name='dept' type='text' value={user.dept} onChange={onInput}/>
                <br></br>
                <label>Rating:</label>
                <input name='rate' type='number' min='0' max='5'value={user.rate} onChange={onInput}/>
                <br></br>
                <button type='submit' onClick={onSubmit}>Click here to Submit</button>
                <div className='output'>
                    {
                    rec.map((ele)=>{
                        return(
                            <div>
                                Name:{ele.name}  |  Department:{ele.dept}  |  Rating:{ele.rate}
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
}

export default Form
