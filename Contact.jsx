import React from "react";

// <!-- Footer -->

var year = new Date().getFullYear();

function Contact() {
    return (
        <div>
        <footer id="footer">
          <i class="social-icons fab fa-facebook-f"></i>
          <i class="social-icons fab fa-twitter"></i>
          <i class="social-icons fab fa-instagram"></i>
          <i class="social-icons fas fa-envelope"></i>
          <p> © Copyright {year} Mr.Cooks </p>
      
        </footer>
        </div>
    );
}

export default Contact;