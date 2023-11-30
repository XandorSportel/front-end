<template>
    <div class="container-fluid h-50 px-2">

        <div class="container-fluid d-flex mt-2 p-0">
            <div class="card w-75 me-1">
                <div class="card-body">
                    <h5 class="card-title">Hond</h5>
                    <div class="card-text">
                        De hond (Canis lupus familiaris) is een roofdier uit de familie van de hondachtigen (Canidae), en een gedomesticeerde ondersoort van de wolf. 
                        De wetenschappelijke naam ervan werd in 1758 als Canis familiaris gepubliceerd door Carl Linnaeus. 
                        De hond komt op alle continenten voor, meestal in gezelschap van de mens. Al sinds duizenden jaren wordt de hond door mensen gebruikt, 
                        bijvoorbeeld bij de jacht, als herdershond, trekdier, politiehond of hulphond, maar vaker als gezelschapsdier. 
                        Het houden van honden is niet zonder risico: er zijn in Nederland jaarlijks 150.000 bijtincidenten. 
                        Wereldwijd sterven naar schatting meer dan 50.000 mensen per jaar aan rabies, 
                        dat voornamelijk door een beet van besmette (zwerf)honden wordt overgebracht - met name in India.
                    </div>
                </div>
            </div>

            <div class="card w-25 ms-1">
                <div class="card-body">
                    <img :src="dogImg" class="" style="width: 100%; height: 200px; image-rendering: optimizeQuality;" />
                </div>
            </div>
        </div>

        <div class="card mt-2">
            <div class="card-body">
                <h5 class="card-title">Voeding</h5>
                <div class="card-text">
                    <p class="card-text">
                        Honden worden beschouwd als alleseters (omnivoren) met een sterke voorkeur voor vlees. 
                        Ze hebben de scherpe, puntige tanden en het korte maag-darmkanaal van vleeseters (carnivoren), 
                        die meer geschikt zijn voor de consumptie van vlees dan van plantaardige voedsel. 
                        Maar honden kunnen ook zetmeel en glucose verteren. Uitgesproken vleeseters zoals katten kunnen dat niet.
                    </p>
                    <p class="card-text">
                        Honden zijn in een proces van duizenden jaren erin geslaagd zich aan te passen aan de levenswijze van mensen en aten hun etensresten. 
                        Ze gedijen dan ook op een verscheidenheid aan voedsel, zowel vlees als plantaardig. 
                        Het vermogen van honden om koolhydraten te verteren wordt gezien als een belangrijk verschil met wolven.
                    </p>
                    <p class="card-text">
                        De voedingsbehoefte van honden varieert met de activiteit, met het ras, de leeftijd en de omgevingstemperatuur. 
                        De energiebehoefte van een dier bij normale activiteit ligt rond de 500 kJ per kilogram metabool gewicht. 
                        Dit kan oplopen tot 4200 kJ per kilogram metabool gewicht per dag bij zeer actieve dieren, zoals sleehonden. 
                        Te veel voedsel en te weinig beweging kan leiden tot obesitas.
                    </p>
                    <p class="card-text">
                        In landen als Nederland leven honden doorgaans van speciaal hondenvoer, waarvan vele soorten in de handel zijn, 
                        vaak in de vorm van brokken of blikvoer. Dit is veelal afgestemd op de voedingsbehoefte van honden.
                        Aanvullingen hierop zijn niet nodig en hebben vaak een negatief effect. Zo kan de toevoeging van calcium tot blaasstenen en botafwijkingen leiden. 
                        Sommige hondenbezitters voeden hun hond met "rauw voer" of "BARF", met als basis rauw vlees en botten. 
                        Andere hondenbezitters voeden hun hond met veganistisch voedsel. Onderzoek toont aan dat veganistisch hondenvoer voldoet of zelfs vaak gezonder is.
                        Anno 2022 zijn er diverse fabrikanten die gebalanceerd niet op vlees gebaseerd hondenvoedsel op de markt brengen.
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import axios from 'axios';
    
    export default {
        data() {
            return {
                dogImg: '',
            };
        },
        mounted() {
            this.getDogImg();
        },
        methods: {
            getDogImg() {
                axios.get('https://dog.ceo/api/breeds/image/random')
                    .then(response => {
                        this.dogImg = response.data.message;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }

</script>