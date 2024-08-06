const footerElement = document.getElementById("foot-container")

function renderFooter(){
    footerElement.innerHTML = `
        <footer>
        <div class="footer-container">
            <div class="contact-text">
                <h3>Get in Touch</h3>
                <p>
                    Feel free to get in touch by emailing us at<br>
                    <a href="mailto:company@gmail.com">company@gmail.com</a> or by reaching out via our<br>
                    Phone Number. We look forward to hearing from you!
                </p>
                <div class="social-icons">
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f icon"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter icon"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram icon"></i></a>
                    <a href="#" aria-label="GitHub"><i class="fab fa-github icon"></i></a>
                </div>
            </div>
            <div class="contact-info">
                <div class="contact-method">
                    <img src="../assets/email.png" alt="Email Icon">
                    <p><a href="mailto:company@email.com">company@email.com</a></p>
                </div>
                <div class="contact-method">
                    <img src="../assets/phone.png" alt="Phone Icon">
                    <p>(123) 456-7890</p>
                </div>
            </div>
        </div>
    </footer>  
    `
}

renderFooter()