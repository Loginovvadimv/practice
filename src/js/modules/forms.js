const forms = () => {
  const form = document.querySelectorAll('.form');
  const inputs = document.querySelectorAll('input');
  const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  phoneInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });

  const message = {
    success: 'success',
    loading: 'loading...',
    failure: 'fail post'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  };

  const clearForm = () => {
    inputs.forEach(item => {
      item.value = '';
    })
  }

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessege = document.createElement('div');
      statusMessege.classList.add('status');
      item.appendChild(statusMessege);

      const formData = new FormData(item);

      postData('assets/server.php', formData).then(res => {
        statusMessege.textContent = message.success;
      }).catch(() => statusMessege.textContent = message.failure).finally(() => {
        clearForm();
        setTimeout(() => {
          statusMessege.remove();
        }, 5000);
      });

    });
  });
}

export default forms;