import react, { useState } from  'react';

    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");	
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password,  };
        console.log("Info of:", newUser);
    	setFirstname("");
        setLastname("");
    	setEmail("");
    	setPassword("");
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Firstname: </label> 
                <input 
                className="form-control"
                type="name" 
                placeholder="Firstname"
                value={firstname} 
                onChange={ (e) => setFirstname(e.target.value) } />
                {firstname.length < 2 ? ( <p>First name must be at least 2 Characters </p>): null}
            </div>
	        <div>
                <label>Lastname: </label> 
                <input 
                type="name"
                className="form-control" 
                placeholder="Lastname"
                value={lastname} 
                onChange={ (e) => setLastname(e.target.value) } />
                {lastname.length < 2 ? ( <p>Last name must be at least 2 Characters </p>): null}
            </div>
            <div>
                <label>Email Address: </label> 
                <input 
                type="email"
                className="form-control" 
                placeholder="Email"
                value={email} 
                onChange={ (e) => setEmail(e.target.value) } />
                {email.length < 4 ? ( <p>Email must be at least 4 Characters </p>): null}
            </div>
            <div>
                <label>Password: </label>
                <input 
                type="password" 
                className="form-control"
                placeholder="Password"
                value={password} 
                onChange={ (e) => setPassword(e.target.value) } />
                {password.length >= 8 ? 
                ( <p style={{color:"green"}}>Password has met the 8 Characters Length</p>)
                : (<p style={{color:"red"}}>Does not Meet 8 Character Length</p>)}
            </div>
            <div>
            <button type="submit" className = "btn btn-sm btn-primary">Create User</button>
            </div>
        </form>
    );
};
    
export default UserForm;
