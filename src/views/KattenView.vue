<template>
    <div class="container-fluid h-50 px-2">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Cat Fact</h5>
                <p class="card-text">{{ catFact }}</p>
            </div>
        </div>

        <div class="container-fluid d-flex mt-2 p-0">
            <div class="card w-75 me-1">
                <div class="card-body">
                    <h5 class="card-title">Kat</h5>
                    <div class="card-text">
                        De kat of huiskat (Felis silvestris catus) is een van de oudste huisdieren van de mens. 
                        De gedomesticeerde kat behoort tot de familie der katachtigen (Felidae). 
                        Ook het woord poes is gangbaar, soms meer specifiek in het geval van een vrouwelijke kat. 
                        Een mannelijke kat heet een kater, en een jong katje een kitten.
                    </div>
                </div>
            </div>

            <div class="card w-25 ms-1">
                <div class="card-body">
                    <img src="../images/katten.jpg" class="img-fluid" />
                </div>
            </div>
        </div>

        <div class="card mt-2">
            <div class="card-body">
                <h5 class="card-title">Gedrag</h5>
                <div class="card-text">
                    <p class="card-title">Jagen</p>
                    <p class="card-text">
                        Katten zijn van nature jagers. Ze zijn roofdieren en eten voornamelijk kleine zoogdieren, zoals muizen en ratten, maar ook vogels, reptielen en amfibieën. 
                        De kat is een solitair levend dier. De kat jaagt voornamelijk 's nachts en in de schemering. 
                        De kat is een roofdier en een van de beste jagers onder de roofdieren. De kat is een echte carnivoor, een vleeseter. 
                    </p>
                    <p class="card-title">Sociaal Gedrag</p>
                    <p class="card-text">
                        De gedomesticeerde kat is een sociaal flexibele soort. 
                        In een omgeving met verspreide voedselbronnen en lage populatiedichtheid leven katten solitair of in kleine groepjes van nauw verwante vrouwtjes. 
                        De grotere, niet-overlappende territoria van katers beslaan twee of meer van de kleinere territoria van de vrouwtjes. 
                        In een stedelijke omgeving of bij boerderijen zijn de voedselbronnen meer gecentraliseerd, 
                        wat leidt tot het vormen van groepen met een hoge dichtheid bestaande uit meerdere mannetjes en meerdere vrouwtjes met kleinere, 
                        overlappende home-ranges en een promiscue paarsysteem. 
                        Afhankelijk van de beschikbaarheid van voedselbronnen, zijn katten dus solitaire of sociale dieren. 
                        Indien ze de mogelijkheid hebben, zullen vrouwtjes familiegroepen vormen. 
                        Hun vrouwelijk nageslacht blijft bij hen en krijgen op hun beurt kittens, zodat een matriarchale groep ontstaat. 
                        Het mannelijke dier verlaat de groep wanneer ze geslachtsrijp worden.
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
                catFact: '',
            };
        },
        mounted() {
            this.getCatFact();
        },
        methods: {
            getCatFact() {
                axios.get('https://catfact.ninja/fact')
                    .then(response => {
                        this.catFact = response.data.fact;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }

</script>