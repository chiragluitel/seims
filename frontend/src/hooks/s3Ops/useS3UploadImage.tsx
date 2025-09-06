import { useEffect, useState } from "react"

const useS3UploadImage = (file: File | null) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [S3ImageURL, setS3ImageURL] = useState<string>('');
    useEffect(()=> {
        const uploadFunction = async () => {
            if(!file){
                setS3ImageURL('')
                return;
            }
            try{
                setIsLoading(true)
                setError(null)

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
                      "x-amz-acl": "public-read"
                    },
                    body: file,
                });
            
                if (!uploadResponse.ok) {
                    throw new Error("Failed to upload file to S3.");
                }
                console.log('Upload Successful: ', uploadResponse)
                const s3ImageUrl = url.split('?')[0]; 
                console.log('URL: ', s3ImageUrl)

                setS3ImageURL(s3ImageUrl);
            }catch(err:any){
                console.error("Upload error:", err);
                setError(err.message || "An unexpected error occurred during upload.");
            }finally{
                setIsLoading(false)
            }
        }
        uploadFunction()
    }, [file])
    
    return {S3ImageURL, isLoading, error}
}

export default useS3UploadImage;