<template>
	<div class="w-100">
		<div class="hero-image">
		  <div class="hero-text">
		    <h1>OLYMPIC GAMES</h1>
		    <p>TOKYO 2020</p>
		  </div>
		</div>
		<div class="main">
			<div class="row">
				<div class="col-9">
					<div class="row d-flex">
						<div class="col-xl-6">
							<img class="w-100" src="../assets/paris1900.jpeg">
						</div>
						<div class="col-xl-6">
							<h3>Paris 1900</h3>
							<p>The 1900 Summer Olympics (French: Les Jeux olympiques d'été de 1900), today officially known as the Games of the II Olympiad, was an international multi-sport event that took place in Paris, France, in 1900. No opening or closing ceremonies were held; competitions began on 14 May and ended on 28 October.</p>
							<p>The Games were held as part of the 1900 World's Fair. In total, 997 competitors took part in 19 different sports. This number relies on certain assumptions about which events were and were not "Olympic". Many athletes, among them some who won events, didn't know that they had competed in the Olympic Games. Women took part in the games for the first time, and sailor Hélène de Pourtalès, born Helen Barbey in New York City, became the first female Olympic champion. The decision to hold competitions on a Sunday brought protests from many American athletes, who travelled as representatives of their colleges and were expected to withdraw rather than compete on their religious day of rest.</p>
							<p>At the Sorbonne conference of 1894, Pierre de Coubertin proposed that the Olympic Games should take place in 1900 in Paris. The delegates to the conference were unwilling to wait six years and lobbied to hold the first games in 1896. A decision was made to hold the first Olympic Games in 1896 in Athens and that Paris would host the second celebration.Most of the winners in 1900 did not receive medals, but were given cups or trophies. Professionals competed in fencing and Albert Robert Ayat (France), who won the épée for amateurs and masters, was awarded a prize of 3000 francs.</p>
						</div>
					</div>
					<div class="row d-flex">
						<div class="col-xl-6">
							<img class="w-100" src="https://stillmed.olympic.org/media/Images/OlympicOrg/News/2017/07/18/2017-07-18-Barcelona-Legacy-thumbnail.jpg">
						</div>
						<div class="col-xl-6">
							<h3>Barcelona 1993</h3>
							<p>The 1992 Summer Olympics (Spanish: Juegos Olímpicos de Verano de 1992), officially known as the Games of the XXV Olympiad, was an international multi-sport event held in Barcelona, Spain from 25 July to 9 August 1992.</p>
							<p>Beginning in 1994, the International Olympic Committee decided to hold the Summer and Winter Olympics in alternating even-numbered years. The 1992 Summer Olympics was the last occasion for the Summer and Winter Olympics to be staged in the same year. This Olympiad was the first since the end of the Cold War, and was unaffected by boycotts for the first time since the 1972 Olympiad.</p>
							<p>The Unified Team topped the medal table, winning 45 gold and 112 overall medals.</p>
						</div>
					</div>
				</div>
				<div class="col-3">
					<table class="table text-white">
						<thead class="thead-light">
							<tr>
								<th scope="col">Famous Athletes</th>
							</tr>
						</thead>
						<tr>
							<td>Michael Phelps</td>
						</tr>
						<tr>
							<td>Usain Bolt</td>
						</tr>
						<tr>
							<td>Mark Spitz</td>
						</tr>
						<tr>
							<td>Carl Lewis</td>
						</tr>
						<tr>
							<td>Paavo Nurmi</td>
						</tr>
						<tr>
							<td>Larisa Latýnina</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="800"
      img-height="600"
      style="background-color: black"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      	<b-carousel-slide>
	        <template v-slot:img>
	          <img
	            class="d-block img-fluid mx-auto"
	            width="800" 
	            height="600" 
	            src="../assets/juegos1.jpg"
	            alt="image slot"
	          >
	        </template>
    	</b-carousel-slide>
    	<b-carousel-slide>
	        <template v-slot:img>
	          <img
	            class="d-block img-fluid mx-auto"
	            width="800" 
	            height="600" 
	            src="../assets/juegos2.jpg"
	            alt="image slot"
	          >
	        </template>
    	</b-carousel-slide>
    	<b-carousel-slide>
	        <template v-slot:img>
	          <img
	            class="d-block img-fluid mx-auto"
	            width="800" 
	            height="600" 
	            src="../assets/juegos3.jpg"
	            alt="image slot"
	          >
	        </template>
    	</b-carousel-slide>
    	<b-carousel-slide>
	        <template v-slot:img>
	          <img
	            class="d-block img-fluid mx-auto"
	            width="800" 
	            height="600" 
	            src="../assets/juegos4.jpg"
	            alt="image slot"
	          >
	        </template>
    	</b-carousel-slide>
    	<b-carousel-slide>
	        <template v-slot:img>
	          <img
	            class="d-block img-fluid mx-auto"
	            width="800" 
	            height="600" 
	            src="../assets/juegos5.jpg"
	            alt="image slot"
	          >
	        </template>
    	</b-carousel-slide>
    	<b-carousel-slide>
	        <template v-slot:img>
	          <img
	            class="d-block img-fluid mx-auto"
	            width="800" 
	            height="600" 
	            src="../assets/juegos6.jpg"
	            alt="image slot"
	          >
	        </template>
    	</b-carousel-slide>
    </b-carousel>
	</div>
</template>

<script>

</script>

<style>
.fa {
  padding: 20px;
  font-size: 30px;
  width: 80px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}

.fa:hover {
    opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-twitter {
  background: #55ACEE;
  color: white;
}
.fa-instagram {
  background: #125688;
  color: white;
}

.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/hero.jpeg");

  /* Set a specific height */
  height: 100%;
  width: 100%;
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>