const uploadArea = document.getElementById('upload-area');
        const fileInput = document.getElementById('file-input');
        const recipientEmail = document.getElementById('recipient-email');
        const message = document.getElementById('message');
        const sendButton = document.getElementById('send-button');

        uploadArea.addEventListener('click', () => fileInput.click());

        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('bg-gray-100');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('bg-gray-100');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('bg-gray-100');
            fileInput.files = e.dataTransfer.files;
            updateUploadAreaText();
        });

        fileInput.addEventListener('change', updateUploadAreaText);

        function updateUploadAreaText() {
            const fileCount = fileInput.files.length;
            const text = fileCount > 0 ? `${fileCount} file(s) selected` : 'Drag & Drop files here or click to select';
            uploadArea.querySelector('p').textContent = text;
        }

        sendButton.addEventListener('click', () => {
            if (fileInput.files.length === 0) {
                alert('Please select files to send.');
                return;
            }
            if (!recipientEmail.value) {
                alert('Please enter the recipient\'s email address.');
                return;
            }
            if (!isValidEmail(recipientEmail.value)) {
                alert('Please enter a valid email address.');
                return;
            }

            console.log('Files to send:', fileInput.files);
            console.log('Recipient:', recipientEmail.value);
            console.log('Message:', message.value);
            alert('Files would be sent to the recipient here. Implementation required on the server side.');
        });

        function isValidEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }