import UsernamePasswordLogin from "./UsernamePasswordLogin"

const Main = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const username = formData.get("username")
        const password = formData.get("password")
        console.log('Username:', username)
        console.log('Password:', password)
    }
    return (
        <>  
            <div>
                <h1> Welcome to Store Integrated Management System [SEIMS] </h1>
                <p> AI-Powered Intelligent Integrated Store Management Software</p>    
            </div>

            <div>
                <h1> Login To Continue </h1>
                <UsernamePasswordLogin onSubmit={handleSubmit} />
            </div>
            
        </> 
    )
}
export default Main