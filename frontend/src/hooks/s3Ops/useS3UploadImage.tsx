const useS3UploadImage = () => {
    const uploadFunction = async (file: File) => {
        try{
            const filename = file.name;
            const fileType = file.type;

            const response = await fetch(`${import.meta.env.VITE_PRODUCTS_BASE_URL}/uploadImage`, {
                method: 'POST',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({filename, fileType})
            })
            if (!response.ok) {
                throw new Error("Failed to get presigned URL from backend.");
            }
            const { url } = await response.json();

            const uploadResponse = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": file.type,
                },
                body: file,
            });
        
            if (!uploadResponse.ok) {
                throw new Error("Failed to upload file to S3.");
            }
            console.log('Upload Successful: ', uploadResponse)
            const s3ImageUrl = url.split('?')[0]; 
            return (s3ImageUrl)
        }catch(err:any){
            console.error("Upload error:", err);
        }
    }
    return {uploadFunction}
}
export default useS3UploadImage;