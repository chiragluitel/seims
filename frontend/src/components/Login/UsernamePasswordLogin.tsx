interface UsernamePasswordLoginProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const UsernamePasswordLogin:React.FC<UsernamePasswordLoginProps> = ({onSubmit}) =>{
    return (
        <>
                <form onSubmit={onSubmit}>
                    <div>
                         <span> Username/Email </span> <input name="username" type="text" placeholder="yourself@seims.com" />
                        <span> Password </span> <input name="password" type="password" placeholder="your password" />
                        <button type="submit"> Login </button>
                    </div>
                </form>
        </>
    )
}

export default UsernamePasswordLogin;