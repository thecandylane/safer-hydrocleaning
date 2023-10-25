import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Safer Powerwashing</h1>
        <p>Quality powerwashing services in [Your City]</p>
      </header>

      <section>
        <h2>About Us</h2>
        <p>
          At Safer Powerwashing, we provide top-notch powerwashing services 
          to help your home or business look its best. With years of experience 
          and a commitment to customer satisfaction, we're your first choice 
          for powerwashing in [Your City].
        </p>
      </section>

      <section>
        <h2>Services</h2>
        <ul>
          <li>Residential Powerwashing</li>
          <li>Commercial Powerwashing</li>
          <li>Driveway and Patio Cleaning</li>
          // Add other services here
        </ul>
      </section>

      <section>
        <h2>Testimonials</h2>
        <blockquote>
          "Safer Powerwashing did an amazing job on my home! I couldn't believe 
          how clean it looked afterwards." - Satisfied Customer
        </blockquote>
        // Add more testimonials here
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Need a quote or have questions? Reach out to us at: 
          <a href="mailto:contact@saferpowerwashing.com">contact@saferpowerwashing.com</a>
        </p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Safer Powerwashing. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
