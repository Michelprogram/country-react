import { useContext } from "react";
import Navigation from "../Components/Navigation";
import Logo from "../Components/Logo";
import Countries from "../Components/Countries";
import UserContext from "../UserContext";
import { Button } from "antd";

const Home = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <Logo />
      <Navigation />
      <Countries />
      {user ? <Button onClick={() => setUser(null)}>Logout</Button> : ""}
      <p className="context">{JSON.stringify(user, null, 2)}</p>
    </div>
  );
};

export default Home;
