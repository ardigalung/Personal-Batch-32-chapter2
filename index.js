function takeValue() {

    // Deklarasi variable untuk menyimpan data sementara
    // .value digunakan untuk menagkap inputan user
    let name = document.getElementById('input-username').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value

    // Validasi inputan
    if (name == "") {
        alert("Name can't null!")
    }
    if (email == "") {
        alert("Email can't null!")
    }
    if (phone == "") {
        alert("Phone can't null!")
    }
    if (subject == "") {
        alert("Subject can't null!")
    }
    if (message == "") {
        alert("Your Message can't null!")
    }

    // let emailReceiver = "suwardi.hutagalung6@gmail.com"

    let anchor = document.createElement('a') //Membuat sebuah tag

    anchor.href = `mailto:${email}?subject=${subject}&body=Hello my name ${name}, ${message}, Call me ${phone}`

    anchor.click()

}