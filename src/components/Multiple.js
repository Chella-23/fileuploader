const handleFileChange = (event) => {
    const files = event.target.files;
    let totalSize = 0;
    
    // Maximum allowed size per file in bytes (2MB)
    const maxFileSize = 2 * 1024 * 1024;
    
    // Maximum allowed number of files
    const maxFiles = 20;
    
    for (let i = 0; i < files.length; i++) {
        totalSize += files[i].size;
    }
    
    if (files.length > maxFiles || totalSize > maxFileSize) {
        // Notify the user that they exceeded the limit
        alert(`You can upload a maximum of ${maxFiles} files with a total size of ${maxFileSize / (1024 * 1024)} MB.`);
        event.target.value = null; // Reset the file input
        return;
    }
    
    const allowedTypes = ['text/plain', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.oasis.opendocument.spreadsheet', 'text/csv', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.oasis.opendocument.presentation', 'image/jpeg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'application/json', 'application/ld+json',
        'application/vnd.oasis.opendocument.text', 'text/css', 'text/javascript', 'application/x-httpd-php', 'application/xml', 'application/zip', 'application/vnd.rar', 'application/x-tar', 'application/gzip', 'application/x-7z-compressed', 'image/jpeg', 'image/png',
        'image/bmp', 'image/svg+xml', 'image/tiff', 'application/x-python-code', 'text/x-python',
        'image/gif', 'application/pdf', 'application/javascript', 'text/html'
    ];

    for (let i = 0; i < files.length; i++) {
        if (!allowedTypes.includes(files[i].type)) {
            // Notify the user that this file type is not allowed
            alert(`File ${files[i].name} is not of an accepted type.`);
            event.target.value = null; // Reset the file input
            return;
        }
    }

    // Process the selected files since they meet all requirements
    setSelectedFile(files);
    setShow(true);
}
