import logout from "../assets/logout-svgrepo-com.svg";
import logoutBlack from "../assets/logout-svgrepo-com-black.svg";

export default function Logout(props) {
  const handleClick = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      {props.darkMode == true ? (
        <img className='logout' src={logoutBlack} onClick={handleClick}></img>
      ) : (
        <img className='logout' src={logout} onClick={handleClick}></img>
      )}
    </>
  );
}
