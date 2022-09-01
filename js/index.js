const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')

const onGenerateSubmit = e => {
  e.preventDefault()
  clearUI()

  const url = document.getElementById('input-url').value
  const size = document.getElementById('select-size').value

  if (url === '') alert('Please enter your URL')
  else {
    showSpinner()
    setTimeout(() => {
      hideSpinner()
      generateQRCode(url, size)

      setTimeout(() => {
        const saveUrl = qr.querySelector('img').src
        createSaveBtn(saveUrl)
      }, 50)
    }, 1000)
  }
}

const generateQRCode = (text, width) => {
  const qrcode = new QRCode('qrcode', { text, width, height: width })
}

const showSpinner = () => {
  document.getElementById('spinner').style.display = 'block'
}

const hideSpinner = () => {
  document.getElementById('spinner').style.display = 'none'
}

const clearUI = () => {
  qr.innerHTML = ''

  const saveLink = document.getElementById('save-link')
  saveLink && saveLink.remove()
}

createSaveBtn = href => {
  const link = document.createElement('a')
  link.id = 'save-link'
  link.classList = 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded w-1/3 m-auto my-5'
  link.href = href
  link.download = 'qrcode'
  link.innerText = 'Save image'
  document.getElementById('generated').appendChild(link)
}

hideSpinner()

form.addEventListener('submit', onGenerateSubmit)