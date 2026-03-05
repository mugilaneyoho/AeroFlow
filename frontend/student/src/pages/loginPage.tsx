import loginImage from "../assets/login-image.png"
import LoginCard from "../components/LoginCard"

const loginPage = () => {

    return (
        <div className="bg-[#F4F4F4] flex justify-around items-center h-screen">
            <img src={loginImage} alt="login_image" className="h-100 w-100" />
            <LoginCard />
        </div>
    )
}

export default loginPage;