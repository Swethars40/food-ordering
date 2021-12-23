import React from "react";
import "./App.css";

function ReviewTestimonials() {
    return (
        <div>
        <section id="testimonials">

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
            <h3 id="header2" class="testimonial-text">It is a fantastic platform with sophisticated functions and high flexibility!. The system works really really good. It is very easy for the customer to use.
            </h3>
            <img class="testimonial-img" src="https://www.licious.in/blog/wp-content/uploads/2016/07/Biryani.jpg" 
                alt="biriyani-img" />
            <em>Neha, Chennai</em>
            </div>

            <div class="carousel-item">  
            <h3 id="header2" class="testimonial-text">I have seen this place from outside but only ordered home delivery till date. The service is quick. Overall, in budget and quality food, no compromise with taste.
            </h3>
            <img class="testimonial-img" src="https://www.silive.com/resizer/lt2il3ffR4nrjKaR6Wx56tyoV74=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/2JU5HJCUVZDGFHMKHJBCO2HVGY.jpg" 
                alt="chinese-img" />
            <em>Vikram, Bangalore</em>
            </div>

            <div class="carousel-item">
              <h3 id="header2" class="testimonial-text">Although,I have never been to the restaurant. Online order placing service is very good. It is certainly one of the best food provider's with the service of HOME DELIVERY, that too with an option of cash on delivery.
                    </h3>
                    <img class="testimonial-img" src="https://cdn.whatsgabycooking.com/wp-content/uploads/Chicken-Shawarma-Stuffed-Pita-Pockets.jpg" 
                        alt="shawarma-img" />
                    <em>Rithu, Pune</em>
            </div>
            
            <div class="carousel-item">
            <h3 id="header2" class="testimonial-text">In case of non veg lovers u have a wide wide variety to go for !!!
            Overall nice place to treat yourself!! Good food and Services.
            </h3>
            <img class="testimonial-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjv14vNGVZ3tYH19W-jXKlcM5lq2EJw6ACmmm9HnZQxQxs0CB1xblqw7HyMMDpbnf6SNA&usqp=CAU" 
                alt="nv-img" />
            <em>Chandru, Cochin</em>
            </div>

            <div class="carousel-item">
            <h3 id="header2" class="testimonial-text">A perfect eatery joint with excellent taste & surprisingly reasonable prices. 
            The taste of food, veg and non veg, and bakes items was amazing.
            </h3>
            <img class="testimonial-img" src="https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                alt="nv-img" />
            <em>Lohith, Hyderabad</em>
            </div>
          </div>
    
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
        </div>
    );

    
}

export default ReviewTestimonials;