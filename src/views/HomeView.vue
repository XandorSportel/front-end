<template>
	<div class="container-fluid h-50 px-2">
		<div class="container-fluid d-flex mt-2 p-0">
			<div class="card w-100 me-1">
				<div class="card-body">
					<h5 class="card-title">Huisdierpedia</h5>
					<div class="card-text">
						Welkom op de huisdierpedia, hier kun je informatie vinden over alle huisdieren!
						Klik op een van de knoppen in de navigatiebalk om naar de pagina van het huisdier te gaan, of klik
						op 1 van de plaatjes hieronder.
					</div>
				</div>
			</div>
		</div>

		<div class="card w-100 mt-2 me-1">
			<div class="card-body">
				<h5 class="card-title">Alle huisdieren</h5>
				<div class="container-fluid d-flex">
					<router-link to="/katten" style="color: black; text-decoration: none;">
						<div class="card mx-1" style="width: 15rem; height: 14rem;">
							<div class="card-body">
								<img src="../images/katten.jpg" class="img-fluid" />
								<h5 class="card-title">Katten</h5>
							</div>
						</div>
					</router-link>
					<router-link to="/honden" style="color: black; text-decoration: none;">
						<div class="card mx-1" style="width: 15rem; height: 14rem;">
							<div class="card-body">
								<img src="../images/honden.jpg" class="img-fluid" />
								<h5 class="card-title">Honden</h5>
							</div>
						</div>
					</router-link>
					<router-link to="/konijnen" style="color: black; text-decoration: none;">
						<div class="card mx-1" style="width: 15rem; height: 14rem;">
							<div class="card-body">
								<img src="../images/konijn.jpg" class="img-fluid" style="max-height: 10rem;" />
								<h5 class="card-title">Konijnen</h5>
							</div>
						</div>
					</router-link>
					<router-link to="/seo" style="color: black; text-decoration: none;">
						<div class="card mx-1" style="width: 15rem; height: 14rem;">
							<div class="card-body">
								<img src="../images/seo.jpg" class="img-fluid" />
								<h5 class="card-title">SEO</h5>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
