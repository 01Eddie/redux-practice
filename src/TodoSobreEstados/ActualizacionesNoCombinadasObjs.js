import {useState} from "react";

export default function ActualizacionesNoCombinadasObj() {
    const [state, setState] = useState({
        email: '',
        password: ''
      })
    
      function handleInputChange(e) {
        setState({
          [e.target.name]: e.target.value
        })
      }
    
      return (
        <form>
          <input
            name="email"
            type="email"
            onChange={handleInputChange}
          />
          <input
            name="password"
            type="password"
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      );
}