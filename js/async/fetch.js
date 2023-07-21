export default function () {
  const url =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png';

  const img = document.createElement('img');
  
  fetch(url)
    .then((response) => {
      return response.blob();
    })
    .then((data) => {

      img.src = URL.createObjectURL(data);
      document.body.appendChild(img);
    })
    .catch((err) => {
      alert('Failed: ' + err);
    });

  
  // img.src = url;
  // document.body.appendChild(img)
}
