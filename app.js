// array kosong untuk menyimpan data yang dimasukkan
let blogs = []

let month = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Juni',
  'Juli',
  'Agustust',
  'September',
  'Oktober',
  'November',
  'Desember'
]

function addBlog() {

  let name = document.getElementById('input-name').value
  let starDate = document.getElementById('star-date').value
  let endDate = document.getElementById('end-date').value
  let description = document.getElementById('textarea').value


  let nodejs = document.getElementById('nodejs').checked
  let reactjs = document.getElementById('reactjs').checked
  let javaScript = document.getElementById('javascript').checked
  let socket = document.getElementById('socket').checked


  //untuk mengecek apakah true atau false dan simpan value
  if (nodejs) {
    nodejs = document.getElementById('nodejs').value
  } else { nodejs = "" }

  if (reactjs) {
    reactjs = document.getElementById('reactjs').value
  } else { reactjs = "" }

  if (javaScript) {
    javaScript = document.getElementById('javascript').value
  } else { javaScript = "" }

  if (socket) {
    socket = document.getElementById('socket').value
  } else { socket = "" }


  // files -> mengembalikan list array tempat file/ acces di array nol
  let image = document.getElementById('input-image').files[0]

  // path bloob access gambar
  image = URL.createObjectURL(image)

  let blog = {
    name,
    starDate,
    endDate,
    description,
    image,
    nodejs,
    reactjs,
    javaScript,
    socket
  }

  blogs.push(blog)
  renderBlog()

}

function renderBlog() {


  let blogContent = document.getElementsByClassName('content-project-main')[0]


  blogContent.innerHTML = renderCard() // settingan semula &  membuat card tidak menjadi double2

  for (let i = 0; i < blogs.length; i++) {
    blogContent.innerHTML += `
    <div class="content-card">
      <div class="image-content">
        <img src="${blogs[i].image}" alt="">
      </div>
        <div class="header">
          <a href="blog-detail.html">${blogs[i].name}</a>
        </div>
        <div class="durasi">
          <p>${duration(blogs[i].starDate, blogs[i].endDate)}</p>
        </div>
        <div class="isi">
          <p>
            ${blogs[i].description}
          </p>
        </div>
        <div class="skill" id="icon-skill">
          <img src="${blogs[i].nodejs}" alt="">
          <img src="${blogs[i].reactjs}" alt="">
          <img src="${blogs[i].javaScript}" alt="">
          <img src="${blogs[i].socket}" alt="">       
        </div>

        <div class="edit-hapus">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>`
  }

}

function getfullTime(star, end) {

  let data = new Date(star)

  let tanggal = data.getDate()
  let bulan = data.getMonth()
  let tahun = data.getFullYear()

  let time1 = `${tanggal} ${month[bulan]} ${tahun}`

  let data2 = new Date(end)

  let tanggal2 = data2.getDate()
  let bulan2 = data2.getMonth()
  let tahun2 = data2.getFullYear()

  let time2 = `${tanggal2} ${month[bulan2]} ${tahun2}`

  return time2

}

function duration(star, end) {

  let data1 = new Date(star)
  let data2 = new Date(end)

  let data3 = data2 - data1

  let bulan = Math.floor(data3 / (30 * (24 * 60 * 60 * 1000)))

  if (bulan != 0) {
    return bulan + ' Month'
  }
  else {
    let day = Math.floor(data3 / (24 * 60 * 60 * 1000))
    if (day != 0) {
      return day + ' day ago'
    }
    else {
      let jam = Math.floor(day / (60 * 60 * 1000))
      if (jam != 0) {
        return jam + ' jam ago'
      }
      else {
        let menit = Math.floor(day / (60 * 1000))
        if (menit != 0) {
          return menit + ' menit ago'
        }
        else {
          let detik = Math.floor(day / 1000)
          return detik + ' detik ago'
        }
      }
    }

  }

}

// setInterval(() => {
//   renderBlog()
// }, 1000)

function renderCard() {
  return `
  <div class="content-card">
  <div class="image-content">
    <img src="assets/my-img.jpg" alt="">
  </div>
  <div class="header">
    <a href="blog-detail.html">Judul</a>
  </div>
  <div class="durasi">
    <p>durasi : 3 Month</p>
  </div>
  <div class="isi">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptate minus consectetur eveniet
      asperiores
      autem perspiciatis? Sequi eaque consequuntur dolorum temporibus harum molestiae esse officiis, reprehenderit
      iusto, eum autem atque!
    </p>
  </div>
  <div class="skill">
    <img src="assets/node.png" alt="">
    <img src="assets/react.png" alt="">
    <img src="assets/js.png" alt="">
    <img src="assets/socket.png" alt="">
  </div>

  <div class="edit-hapus">
    <button>Edit</button>
    <button>Delete</button>
  </div>
</div>
  `
}

