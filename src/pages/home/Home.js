// import Area from "../../components/Area/Area";
//
// export default function Home () {
//   return (
//     <Area height={650}>
//         Добро пожаловать!
//     </Area >
//   )
// }

import {Link} from "react-router-dom";
import {useState} from "react";
import {LoginForm} from "./components/LoginForm";
import {logIn, signUp} from "../../services/firebase";



export default function Home ({ isSignUp }) {
  const [error, setError] = useState("");
  const handleSubmit = async ({ login, pass }) => {
    try {
      if (isSignUp) {
        await signUp(login, pass);
      } else {
        await logIn(login, pass);
      }
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <>
      <h4>Home page</h4>
      <LoginForm onSubmit={handleSubmit} />
      {error && <h5>{error}</h5>}
      <Link to={isSignUp ? "/" : "/signup"}>
        {isSignUp ? "to login" : "to signup"}
      </Link>
    </>
  );
};