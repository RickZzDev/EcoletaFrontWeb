import React, {useCallback,useState} from 'react'
import {useDropzone} from 'react-dropzone'
import './styles.css'
import {FiUpload} from 'react-icons/fi'

interface Props{
    onFileUploaded: (file:File) => void;
}

const DropZone: React.FC<Props> = ({onFileUploaded}) => {


  const [selectedFile,setSelectedFile] = useState('')
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
        const file = acceptedFiles[0]

        const fileUrl = URL.createObjectURL(file)

        setSelectedFile(fileUrl)
        onFileUploaded(file)
  }, [onFileUploaded])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,
    accept:'image/*'})

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()}  accept="image/*"/>

        {selectedFile
        ?
            <img src={selectedFile}></img>
        :(
            <p>
            <FiUpload/>
            Imagem do estabelecimento
        </p>
        )
        
        }

    </div>
  )
}

export default DropZone