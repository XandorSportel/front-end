<template>
    <div class="container-fluid h-50 px-2">

        <div v-if="!isMobile" class="container-fluid d-flex mt-2 p-0">
            <div class="card w-75 me-1">
                <div class="card-body">
                    <h5 class="card-title">Konijn</h5>
                    <div class="card-text">
                        <p class="card-text">
                            De grootte zit tussen die van de echte hazen en de fluithazen in met een kop-romplengte van 35 tot 50 cm. 
                            De achterpoten van het konijn zijn relatief veel korter dan die van de hazen, maar langer dan die van de fluithazen. 
                            De buik is veel lichter van kleur dan de rug, vaak wit. Ook de onderzijde van de staart en de poten is wit.
                        </p>

                        <p class="card-text">
                            Het lichaamsgewicht bedraagt 1,2 tot 2,5 kilogram. De staart is 4 tot 8 centimeter lang. Konijnen hebben voornamelijk een grijsbruine kleur, 
                            wildkleur of agouti genaamd. De dieren hebben ook een roodbruine vlek in de nek. De oren hebben een bruin puntje, 
                            de bovenzijde van de staart is zwartbruin. De buikzijde is blauwig grijs van kleur, de onderzijde van de staart is wit. 
                            Deze valt zeer op als hij wordt opgewipt. Sommige konijnen die maar half wild zijn kunnen wit of zwart zijn. 
                            Bij het konijn zijn de oren maximaal tien centimeter lang en korter dan de kop.
                        </p>

                        <p class="card-text">
                            Het konijn leeft alleen van plantaardig voedsel. Ook eet het zijn eigen keutels op (coprofagie). 
                            Haasachtigen waaronder konijnen behoren niet tot de knaagdieren, al wordt dit vaak gedacht. 
                            Knaagdieren beschikken in het bovenste deel van het gebit over maar twee snijtanden, terwijl haasachtigen er vier hebben, 
                            waarvan de twee stifttanden achter de bovenste snijtanden staan.
                        </p>
                    </div>
                </div>
            </div>

            <div class="card w-25 ms-1">
                <div class="card-body d-flex justify-content-center">
                    <img src="../images/konijn.jpg" class="img-fluid" style="max-height: 15rem;" alt="Konijn" />
                </div>
            </div>
        </div>

        <div v-if="isMobile" class="container-fluid mt-2 p-0">
            <div class="card w-100 me-1">
                <div class="card-body d-flex justify-content-center">
                    <img src="../images/konijn.jpg" class="img-fluid" style="max-height: 15rem;" alt="Konijn" />
                </div>
            </div>

            <div class="card w-100 me-1 mt-2">
                <div class="card-body">
                    <h5 class="card-title">Konijn</h5>
                    <div class="card-text">
                        <p class="card-text">
                            De grootte zit tussen die van de echte hazen en de fluithazen in met een kop-romplengte van 35 tot 50 cm. 
                            De achterpoten van het konijn zijn relatief veel korter dan die van de hazen, maar langer dan die van de fluithazen. 
                            De buik is veel lichter van kleur dan de rug, vaak wit. Ook de onderzijde van de staart en de poten is wit.
                        </p>

                        <p class="card-text">
                            Het lichaamsgewicht bedraagt 1,2 tot 2,5 kilogram. De staart is 4 tot 8 centimeter lang. Konijnen hebben voornamelijk een grijsbruine kleur, 
                            wildkleur of agouti genaamd. De dieren hebben ook een roodbruine vlek in de nek. De oren hebben een bruin puntje, 
                            de bovenzijde van de staart is zwartbruin. De buikzijde is blauwig grijs van kleur, de onderzijde van de staart is wit. 
                            Deze valt zeer op als hij wordt opgewipt. Sommige konijnen die maar half wild zijn kunnen wit of zwart zijn. 
                            Bij het konijn zijn de oren maximaal tien centimeter lang en korter dan de kop.
                        </p>

                        <p class="card-text">
                            Het konijn leeft alleen van plantaardig voedsel. Ook eet het zijn eigen keutels op (coprofagie). 
                            Haasachtigen waaronder konijnen behoren niet tot de knaagdieren, al wordt dit vaak gedacht. 
                            Knaagdieren beschikken in het bovenste deel van het gebit over maar twee snijtanden, terwijl haasachtigen er vier hebben, 
                            waarvan de twee stifttanden achter de bovenste snijtanden staan.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card my-2">
            <div class="card-body">
                <h5 class="card-title">Leefwijze</h5>
                <div class="card-text">
                    <p class="card-text">
                        Het konijn is een schemerdier. Het leeft van een grote variatie aan plantaardig voedsel: grassen, kruiden, loten, knollen, 
                        bast en akkergewassen als graan en kool. Ook eten ze hun eigen uitwerpselen (coprofagie). Dit is een soort van herkauwing in twee fasen, 
                        na de eerste vertering eet het konijn de uitwerpselen rechtstreeks uit het rectum.
                    </p>
                    <p class="card-text">
                        Het konijn leeft in grote groepen in een uitgebreid gangenstelsel, een zogenaamde (konijnen)bouw, 
                        konijnenhol of konijnenburcht. De bouw wordt meestal aangelegd in een heuvel of een andere helling, als een duin. 
                        De ingang heeft een diameter van tien tot vijftig centimeter. Ze wagen zich zelden verder dan 400 meter van het hol af.
                    </p>
                    <p class="card-text">
                        Bij lage dichtheden leeft het konijn in paarverband, bij hoge dichtheden in groepen van ongeveer twintig volwassen dieren en hun jongen. 
                        Binnen zo'n groep vormen zich subgroepjes, bestaande uit één tot vijf mannetjes en één tot zes vrouwtjes. Zo'n subgroepje heeft zijn eigen graasplek, 
                        die het meestal verdedigt tegen andere dieren. Binnen een groep heerst een rangorde, waarbij de dominante dieren de beste nesten betrekken, 
                        vlak bij het centrum van de kolonie. De jongen van dominante dieren staan later vaak ook hoog in de hiërarchie.
                    </p>
                    <p class="card-text">
                        
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                isMobile: false,
            };
        }, 
        mounted() {
            this.isMobile = window.innerWidth < 768;
            window.addEventListener('resize', this.handleResize);
        },
        methods: {
            handleResize() {
                this.isMobile = window.innerWidth < 768;
            }
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        }
    }

</script>