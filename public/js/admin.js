const statusBtn = document.querySelector('.status-btn');

function updateStatus() {
    axios.post('admin/users/:id', (req, res) => {
        
    })
}


statusBtn.addEventListener('click', updateStatus);