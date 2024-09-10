<script>
    export let images = [];
    let currentIndex = 0;
  
    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % images.length;
    };
  
    // Auto-play dengan menggunakan reactive statement
    $: setTimeout(nextSlide, 3000);
  </script>
  
  <div class="slider">
    <div class="slides" style="transform: translateX(-{currentIndex * 100}%)">
      {#each images as image (image)}
        <div class="slide">
          <img src={image} alt="Image slider" />
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .slider {
      overflow: hidden;
      width: 100%;
      height: 400px; /* Sesuaikan dengan kebutuhan */
    }
  
    .slides {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }
  
    .slide {
      min-width: 100%;
      box-sizing: border-box;
    }
  
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  </style>
