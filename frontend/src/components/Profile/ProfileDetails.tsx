interface ProfileDetailProps{
    name: string,
    title: string
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({name, title}) =>{ 
    return (
        <>
        <h1> Username: {name} </h1>
        <h1> Job Title: {title} </h1>
        </>
    )
}
export default ProfileDetail;