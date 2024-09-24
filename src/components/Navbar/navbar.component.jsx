import App from "../../App"



const Navbar = ({NavbarTitle}) => {
    return (
        <>
        <div className="navbarContainer bg-cream p-5">
            <div className="text-chocolaty font-bold text-5xl my-4 text-center">
                <h1>{NavbarTitle}</h1>
            </div>
        </div>
        
         </>

    )
}

export default Navbar