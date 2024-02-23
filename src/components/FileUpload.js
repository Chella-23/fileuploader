import React from 'react'

import {useState} from 'react'


function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null)
    const [show, setShow] =useState(true)

    

  const handleFileChange = (event) => {
    
    
    const file = event.target.files[0];
   
    
    
    const allowedTypes = ['text/plain', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.oasis.opendocument.spreadsheet', 'text/csv','application/vnd.ms-powerpoint','application/vnd.openxmlformats-officedocument.presentationml.presentation', 
   'application/vnd.oasis.opendocument.presentation', 'image/jpeg', 'image/png','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf', 'application/json', 'application/ld+json', 
   'application/vnd.oasis.opendocument.text', 'text/css', 'text/javascript', 'application/x-httpd-php', 'application/xml', 'application/zip', 'application/vnd.rar', 'application/x-tar', 'application/gzip', 'application/x-7z-compressed', 'image/jpeg', 'image/png', 
   'image/bmp', 'image/svg+xml', 'image/tiff','application/x-python-code', 'text/x-python', 
    'image/gif', 'application/pdf', 'application/javascript', 'text/html']
    
    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
      setShow(true)
    } else {
        
      setSelectedFile(null);
      setShow(false)
      
     
    
    }

   
  }
  
  return (
    <div>
        <h1>Open AI accepted files</h1><hr />
        <h3>Text files: .txt <br />
Spreadsheets: .xls, .xlsx, .ods, .csv<br /><br />
Presentations: .ppt, .pptx, .odp<br />
Documents: .doc, .docx, .pdf, .odt<br />
Code files: .js, .html, .css, .py, .java, .cpp, .c, .rb, .php, .sql, .json, .xml <br />
Archives: .zip, .rar, .tar, .gz, .7z<br />
Images: .jpg, .jpeg, .png, .gif, .bmp, .svg, .tiff<br />
</h3><br /><br />
        <div>
          <h1>Please Upload your file here</h1><br />
            <input className='input'  type='file' onChange={handleFileChange} multiple/>
            
            <h2>{show === true ? (<>{selectedFile && <p>Selected file: {selectedFile.name}</p> }</>) :<><p>This File type doesn't support</p><p>It's accepts only Text files,Spreadsheets,Presentations,Documents,Code files,Archives,Images </p> </>}</h2>
           
         

        </div>
        
    </div>
  )
}


export default FileUpload