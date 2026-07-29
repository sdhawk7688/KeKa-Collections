<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="KeKa Collections – Elegant sarees for every occasion. Shop silk, cotton, Banarasi, wedding & more.">
  <meta name="keywords" content="saree, silk saree, Banarasi, wedding saree, KeKa Collections">
  <title>KeKa Collections | Elegant Sarees</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Header -->
  <header class="header">
    <div class="nav-container">
      <a href="index.html" class="logo">KeKa <span>Collections</span></a>
      <button class="menu-toggle" aria-label="Toggle menu">☰</button>
      <nav>
        <ul class="nav-links">
          <li><a href="index.html" class="active">Home</a></li>
          <li><a href="sarees.html">Sarees</a></li>
          <li><a href="categories.html">Categories</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-content">
      <h1>Timeless Elegance in Every Drape</h1>
      <p>Discover handpicked sarees that celebrate tradition and modern grace. From everyday cotton to bridal Banarasi – find your perfect saree at KeKa Collections.</p>
      <a href="sarees.html" class="btn btn-primary">Shop Now</a>
    </div>
  </section>

  <!-- Featured Sarees -->
  <section class="section">
    <h2 class="section-title">Featured Sarees</h2>
    <p class="section-subtitle">Our most loved pieces, carefully curated for you.</p>
    <div id="featured-grid" class="product-grid">
      <!-- Populated by JS -->
    </div>
    <div style="text-align:center; margin-top:2.5rem;">
      <a href="sarees.html" class="btn btn-outline">View All Sarees</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p>&copy; 2026 KeKa Collections. All rights reserved.</p>
    <p>Elegant sarees for every occasion.</p>
  </footer>

  <!-- Product Modal (shared) -->
  <div id="product-modal" class="modal-overlay" role="dialog" aria-modal="true">
    <div class="modal">
      <button class="modal-close" aria-label="Close">×</button>
      <div class="modal-img">
        <img src="" alt="">
      </div>
      <div class="modal-details">
        <span class="product-category modal-category"></span>
        <h2 class="modal-name"></h2>
        <p class="product-price modal-price"></p>
        <p class="modal-description"></p>
        <div class="modal-meta">
          <p><strong>Fabric:</strong> <span class="modal-fabric"></span></p>
          <p><strong>Color:</strong> <span class="modal-color"></span></p>
          <p><strong>Occasion:</strong> <span class="modal-occasion"></span></p>
          <p><strong>Availability:</strong> <span class="modal-availability"></span></p>
        </div>
      </div>
    </div>
  </div>

  <script src="js/app.js"></script>
</body>
</html>
