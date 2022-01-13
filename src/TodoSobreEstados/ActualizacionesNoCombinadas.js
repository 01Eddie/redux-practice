import {useState} from "react";

export default function ActualizacionesNoCombinadas() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
      <form>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }