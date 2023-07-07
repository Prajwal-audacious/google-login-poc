import { useQuery } from "@tanstack/react-query";
import { authLogin } from "../../service/index";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("googleToken");

  const { data, isFetched } = useQuery(["dataaa"], () => authLogin(token), {
    enabled: token ? true : false,
  });
   

  const logOut = () => {
    googleLogout();
    localStorage.removeItem("googleToken");
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "centre",
          flexDirection: "column",
        }}
      >
        <div>
          {isFetched && (
            <>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={data.data.picture} alt="" />
                <h1>{`Welocome , ${data.data.name}`}</h1>
              </div>
              <h1>{data.data.email}</h1>
            </>
          )}
        </div>
        <button onClick={logOut}>Logout</button>
      </div>
    </>
  );
};

export default Home;

      
