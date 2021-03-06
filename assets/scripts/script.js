$(document).ready(function () {
    console.log("ready!");
});

var map;

function create_map_markers() {
    //Locations
    const Varna = { lat: 43.21733945, lng: 27.898463459304434 };
    const Budapest = { lat: 47.514134350000006, lng: 19.091634960797748 };
    const MladaBoleslav = { lat: 50.41854105, lng: 14.913829178797954 };
    const Koprivnice = { lat: 49.5995142, lng: 18.143911511744882 };
    const Sleza = { lat: 51.0346177, lng: 16.99246135 };
    const Otopeni = { lat: 44.571096, lng: 26.067225 };
    const Tolyatti = { lat: 53.553455, lng: 49.250049 };
    const Aakirkeby = { lat: 55.058496, lng: 14.932545 };
    const Gjern = { lat: 56.226767, lng: 9.742556 };
    const Loomse = { lat: 58.594695, lng: 24.510503 };
    const Riga = { lat: 56.970487, lng: 24.22754 };
    const Kangasala = { lat: 61.440972, lng: 24.130038 };
    const Trollhattan = { lat: 58.271653, lng: 12.276198 };
    const Gothenburg = { lat: 57.694728, lng: 11.819691 };
    const Limassol = { lat: 34.665722, lng: 32.993622 };
    const Athens = { lat: 37.991419, lng: 23.729918 };
    const Maranello = { lat: 44.529765, lng: 10.861568 };
    const Modena = { lat: 44.65912, lng: 11.125864 };
    const Brescia = { lat: 45.524568, lng: 10.267213 };
    const Turin = { lat: 45.03191, lng: 7.673504 };
    const Catania = { lat: 37.526927, lng: 15.065237 };
    const Istanbul = { lat: 41.128159, lng: 29.047976 };
    const Encamp = { lat: 42.533088, lng: 1.577954 };
    const Aspang = { lat: 47.555919, lng: 16.089862 };
    const Brussels = { lat: 50.838801, lng: 4.392916 };
    const Warwickshire = { lat: 52.188848, lng: -1.481058 };
    const Sparkford = { lat: 51.04095, lng: -2.557735 };
    const Weybridge = { lat: 51.354859, lng: -0.468064 };
    const Mulhouse = { lat: 47.761884, lng: 7.326792 };
    const Paris = { lat: 48.966651, lng: 2.497351 };
    const LeMans = { lat: 47.956885, lng: 0.208425 };
    const Sochaux = { lat: 47.516121, lng: 6.831029 };
    const Reims = { lat: 49.250679, lng: 4.050444 };
    const Monaco = { lat: 43.730926, lng: 7.417058 };
    const Zwickau = { lat: 50.733136, lng: 12.484153 };
    const Wolfsburg = { lat: 52.433247, lng: 10.794309 };
    const Munchen = { lat: 48.176666, lng: 11.558965 };
    const StuttgartMB = { lat: 48.787855, lng: 9.234312 };
    const Cologne = { lat: 50.980793, lng: 6.898708 };
    const StuttgartP = { lat: 48.834187, lng: 9.152548 };
    const Malaga = { lat: 36.699287, lng: -4.43891 };
    //Markers
    const marker1 = new google.maps.Marker({
        position: Varna,
        map,
        title: "Retro-Museum, Varna, Bulgaria",
        content: "<h5>Retro-Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/east/varna.jpg' alt='Retro Museum Varna'></img>",
    });

    const marker2 = new google.maps.Marker({
        position: Budapest,
        map,
        title: "Museum of Transport, Budapest, Hungary",
        content: "<h5>Museum of Transport</h5>" + "<img class='imagesize' src='./assets/images/jpg/east/budapestmuseum.jpg' alt='Museum of Transport Budapest'></img>",
    });

    const marker3 = new google.maps.Marker({
        position: MladaBoleslav,
        map,
        title: "Škoda Auto Museum, Mladá Boleslav, Czechia",
        content: "<h5>Škoda Auto Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/east/mladaboleslav.jpg' alt='Skoda Museum Mlada Boleslav'></img>",
    });

    const marker4 = new google.maps.Marker({
        position: Koprivnice,
        map,
        title: "Tatra Muzeum, Kopřivnice, Czechia",
        content: "<h5>Tatra Muzeum</h5>" + "<img class='imagesize' src='./assets/images/jpg/east/tatra.jpg' alt='Tatra Museum Czechia'></img>",
    });

    const marker5 = new google.maps.Marker({
        position: Sleza,
        map,
        title: "Topacz Museum, Ślęza, Poland",
        content: "<h5>Topacz Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/east/sleza.jpg' alt='Topacz Museum Sleza'></img>",
    });

    const marker6 = new google.maps.Marker({
        position: Tolyatti,
        map,
        title: "AutoVAZ Museum, Tolyatti, Russia",
        content: "<h5>AutoVAZ Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/east/tolyatti.jpg' alt='AutoVAZ Museum Tolyatti'></img>",
    });

    const marker7 = new google.maps.Marker({
        position: Otopeni,
        map,
        title: "Tiriac Collection, Otopeni, Romania",
        content: "<h5>Tiriac Collection</h5>" + "<img class='imagesize' src='./assets/images/jpg/east/tiriac.jpg' alt='Tiriac Collection Otopeni'></img>",
    });

    const marker9 = new google.maps.Marker({
        position: Gjern,
        map,
        title: "Jysk Automuseum, Gjern, Denmark",
        content: "<h5>Jysk Automuseum</h5>" + "<img class='imagesize' src='./assets/images/jpg/north/jutland.jpg' alt='Jysk Automuseum Denmark'></img>",
    });

    const marker10 = new google.maps.Marker({
        position: Loomse,
        map,
        title: "Automuuseum, Loomse, Estonia",
        content: "<h5>Automuuseum</h5>" + "<img class='imagesize' src='./assets/images/jpg/north/estoniamuseum.jpg' alt='Estonian Auto Museum'></img>",
    });

    const marker11 = new google.maps.Marker({
        position: Riga,
        map,
        title: "Riga Motor Museum, Riga, Latvia",
        content: "<h5>Riga Motor Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/north/riga.jpg' alt='Riga Motor Museum Latvia'></img>",
    });

    const marker12 = new google.maps.Marker({
        position: Kangasala,
        map,
        title: "Mobilia, Kangasala, Finland",
        content: "<h5>Mobilia</h5>" + "<img class='imagesize' src='./assets/images/jpg/north/mobilia.jpg' alt='Mobilia Finland'></img>",
    });

    const marker13 = new google.maps.Marker({
        position: Trollhattan,
        map,
        title: "Saab Museum, Trollhättan, Sweden",
        content: "<h5>Saab Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/north/saabmuseum.jpg' alt='Saab Museum Sweden'></img>",
    });

    const marker14 = new google.maps.Marker({
        position: Gothenburg,
        map,
        title: "Volvo Museum, Gothenburg, Sweden",
        content: "<h5>Volvo Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/north/volvomuseum.jpg' alt='Volvo Museum Sweden'></img>",
    });

    const marker15 = new google.maps.Marker({
        position: Limassol,
        map,
        title: "Cyprus Motor Museum, Limassol, Cyprus",
        content: "<h5>Cyprus Motor Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/south/cyprus.jpg' alt='Cyprus Motor Museum'></img>",
    });

    const marker16 = new google.maps.Marker({
        position: Athens,
        map,
        title: "Hellenic Motor Museum, Athens, Greece",
        content: "<h5>Hellenic Motor Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/south/HellenicMuseum.jpg' alt='Hellenic Motor Museum Athens'></img>",
    });

    const marker17 = new google.maps.Marker({
        position: Maranello,
        map,
        title: "Museo Ferrari, Maranello, Italy",
        content: "<h5>Museo Ferrari</h5>" + "<img class='imagesize' src='./assets/images/jpg/south/Museo_Ferrari.jpg'> alt='Museo Ferrari Maranello'</img>",
    });

    const marker18 = new google.maps.Marker({
        position: Modena,
        map,
        title: "Museo Lamborghini, Modena, Italy",
        content: "<h5>Museo Lamborghini</h5>" + "<img class='imagesize' src='./assets/images/jpg/south/lamborghini.jpg' alt='Museo Lamborghini Modena'></img>",
    });

    const marker19 = new google.maps.Marker({
        position: Brescia,
        map,
        title: "Museo Mille Miglia, Brescia,Italy",
        content: "<h5>Museo Mille Miglia</h5>" + "<img class='imagesize' src='./assets/images/jpg/south/millemiglia.jpg' alt='Museo Mille Miglia Brescia'></img>",
    });

    const marker20 = new google.maps.Marker({
        position: Turin,
        map,
        title: "National Automuseum, Turin, Italy",
        content: "<h5>National Automuseum</h5>" + "<img class='imagesize' src='./assets/images/jpg/south/NationalItaly.jpg' alt='National Automuseum Italy'></img>",
    });

    const marker21 = new google.maps.Marker({
        position: Catania,
        map,
        title: "Modern Galery of Arts and Motors, Catania, Sicily",
        content: "<h5>MOGAM</h5>" + "<img class='imagesize' src='./assets/images/jpg/south/mogam.jpg' alt='Modern Galery of Arts and Motors Sicily'></img>",
    });

    const marker22 = new google.maps.Marker({
        position: Istanbul,
        map,
        title: "Ural Ataman Classic Car Museum, Istanbul, Turkey",
        content: "<h5>Ural Ataman Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/south/uralataman.jpg' alt='Ural Ataman Classic Car Museum Turkey'></img>",
    });

    const marker23 = new google.maps.Marker({
        position: Encamp,
        map,
        title: "National Automobile Museum, Encamp, Andorra",
        content: "<h5>National Automobile Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/andorra.jpg' alt='National Automobile Museum Andorra'></img>",
    });

    const marker24 = new google.maps.Marker({
        position: Aspang,
        map,
        title: "Automobilmuseum, Aspang, Austria",
        content: "<h5>Automobilmuseum</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/aspang.jpg' alt='Automobilmuseum Austria'></img>",
    });

    const marker25 = new google.maps.Marker({
        position: Brussels,
        map,
        title: "Autoworld, Brussels, Belgium",
        content: "<h5>Autoworld</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/autoworld.jpg' alt='Autoworld Belgium'></img>",
    });

    const marker26 = new google.maps.Marker({
        position: Warwickshire,
        map,
        title: "British Motor Museum, Warwickshire, England",
        content: "<h5>British Motor Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/british.jpg' alt='British Motor Museum'></img>",
    });

    const marker27 = new google.maps.Marker({
        position: Sparkford,
        map,
        title: "Haynes International Motor Museum, Sparkford, England",
        content: "<h5>Haynes Motor Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/haynes.jpg' alt='Haynes International Motor Museum England'></img>",
    });

    const marker28 = new google.maps.Marker({
        position: Weybridge,
        map,
        title: "Mercedes-Benz World, Weybridge, England",
        content: "<h5>Mercedes-Benz World</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/mbworld.jpg' alt='Mercedes-Benz World UK'></img>",
    });

    const marker29 = new google.maps.Marker({
        position: Mulhouse,
        map,
        title: "Cité de l'Automobile, Mulhouse, France",
        content: "<h5>Cité de l'Automobile</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/citeeauto.jpg' alt='Cité Automobile France'></img>",
    });

    const marker30 = new google.maps.Marker({
        position: Paris,
        map,
        title: "Citroën Heritage, Paris, France",
        content: "<h5>Citroën Heritage</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/citroen.jpg' alt='Citroën Heritage Paris'></img>",
    });

    const marker31 = new google.maps.Marker({
        position: LeMans,
        map,
        title: "Musée des 24 Heures du Mans, Le Mans, France",
        content: "<h5>LeMans 24 Hours Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/lemans.jpg' alt='LeMans 24 Hours Museum'></img>",
    });

    const marker32 = new google.maps.Marker({
        position: Sochaux,
        map,
        title: "Musée de l'Aventure Peugeot, Sochaux, France",
        content: "<h5>Peugeot Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/peugeot.jpg' alt='Peugeot Museum France'></img>",
    });

    const marker33 = new google.maps.Marker({
        position: Reims,
        map,
        title: "Musée Automobile, Reims, France",
        content: "<h5>Musée Automobile</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/reims.jpg' alt='Musée Automobile Reims France'></img>",
    });

    const marker34 = new google.maps.Marker({
        position: Monaco,
        map,
        title: "Monaco Top Cars Collection, Monaco",
        content: "<h5>Top Cars Collection</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/monaco.jpg' alt='Monaco Top Cars Collection'></img>",
    });

    const marker35 = new google.maps.Marker({
        position: Zwickau,
        map,
        title: "August Horch Museum, Zwickau, Germany",
        content: "<h5>August Horch Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/August-Horch.jpg' alt='August Horch Museum Zwickau'></img>",
    });

    const marker36 = new google.maps.Marker({
        position: Wolfsburg,
        map,
        title: "Autostadt, Wolfsburg, Germany",
        content: "<h5>Autostadt</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/autostadt.jpg' alt='Autostadt Wolfsburg'></img>",
    });

    const marker37 = new google.maps.Marker({
        position: Munchen,
        map,
        title: "BMW Museum, München, Germany",
        content: "<h5>BMW Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/bmw.jpg' alt='BMW Museum Germany'></img>",
    });

    const marker38 = new google.maps.Marker({
        position: StuttgartMB,
        map,
        title: "Mercedes-Benz Museum, Stuttgart, Germany",
        content: "<h5>Mercedes-Benz Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/mbenz.jpg' alt='Mercedes-Benz Museum Germany'></img>",
    });

    const marker39 = new google.maps.Marker({
        position: Cologne,
        map,
        title: "Motorworld, Cologne, Germany",
        content: "<h5>Motorworld</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/motorworldkoln.jpg' alt='Motorworld Cologne'></img>",
    });

    const marker40 = new google.maps.Marker({
        position: StuttgartP,
        map,
        title: "Porsche Museum, Stuttgart, Germany",
        content: "<h5>Porsche Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/Porsche.jpg' alt='Porsche Museum Stuttgart'></img>",
    });

    const marker41 = new google.maps.Marker({
        position: Malaga,
        map,
        title: "Museo Automovilístico de Málaga, Spain",
        content: "<h5>Malagan Automobile Museum</h5>" + "<img class='imagesize' src='./assets/images/jpg/west/malaga.jpg' alt='Auto Museum Malaga Spain'></img>",
    });

    const markers = [
        marker1,
        marker2,
        marker3,
        marker4,
        marker5,
        marker6,
        marker7,
        marker9,
        marker10,
        marker11,
        marker12,
        marker13,
        marker14,
        marker15,
        marker16,
        marker17,
        marker18,
        marker19,
        marker20,
        marker21,
        marker22,
        marker23,
        marker24,
        marker25,
        marker26,
        marker27,
        marker28,
        marker29,
        marker30,
        marker31,
        marker32,
        marker33,
        marker34,
        marker35,
        marker36,
        marker37,
        marker38,
        marker39,
        marker40,
        marker41,
    ];
    return markers;
}

function initMap() {
    const markers = create_map_markers();

    /*Function that draws the map from Google Maps Documentation*/
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat: 52.314985, lng: 13.288772 },
        /*Map style array. Code from https://snazzymaps.com/style/6376/masik-www */
        /*Helping video for setting up Snazzymaps https://www.youtube.com/watch?v=iPq69CnYxMA&ab_channel=GoogleDevelopers */
        styles: [
            {
                featureType: "administrative.province",
                elementType: "all",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "administrative.locality",
                elementType: "labels",
                stylers: [
                    {
                        lightness: "-8",
                    },
                ],
            },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#000000",
                    },
                ],
            },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "administrative.neighborhood",
                elementType: "all",
                stylers: [
                    {
                        color: "#acacac",
                    },
                ],
            },
            {
                featureType: "administrative.neighborhood",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#484848",
                    },
                ],
            },
            {
                featureType: "administrative.neighborhood",
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        color: "#ff0000",
                    },
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "all",
                stylers: [
                    {
                        lightness: "-3",
                    },
                ],
            },
            {
                featureType: "landscape",
                elementType: "all",
                stylers: [
                    {
                        saturation: -100,
                    },
                    {
                        lightness: "72",
                    },
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "landscape",
                elementType: "labels",
                stylers: [
                    {
                        lightness: "23",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "all",
                stylers: [
                    {
                        saturation: -100,
                    },
                    {
                        lightness: "30",
                    },
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "all",
                stylers: [
                    {
                        lightness: "-19",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    {
                        lightness: "2",
                    },
                    {
                        gamma: "1.21",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        visibility: "off",
                    },
                    {
                        saturation: "15",
                    },
                    {
                        hue: "#ff0000",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "labels",
                stylers: [
                    {
                        lightness: "-43",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "labels.text",
                stylers: [
                    {
                        visibility: "on",
                    },
                    {
                        lightness: "22",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        weight: "0.12",
                    },
                    {
                        lightness: "-23",
                    },
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        visibility: "off",
                    },
                    {
                        lightness: "71",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "all",
                stylers: [
                    {
                        saturation: -100,
                    },
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "road.arterial",
                elementType: "all",
                stylers: [
                    {
                        saturation: -100,
                    },
                    {
                        lightness: 30,
                    },
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "road.local",
                elementType: "all",
                stylers: [
                    {
                        saturation: -100,
                    },
                    {
                        lightness: 40,
                    },
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "transit",
                elementType: "all",
                stylers: [
                    {
                        saturation: -100,
                    },
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "transit",
                elementType: "geometry.fill",
                stylers: [
                    {
                        saturation: "5",
                    },
                    {
                        visibility: "on",
                    },
                    {
                        lightness: "5",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    {
                        hue: "#ffff00",
                    },
                    {
                        lightness: "-24",
                    },
                    {
                        saturation: -97,
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [
                    {
                        saturation: "-88",
                    },
                    {
                        lightness: "-23",
                    },
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "labels",
                stylers: [
                    {
                        visibility: "on",
                    },
                    {
                        lightness: -25,
                    },
                    {
                        saturation: -100,
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "labels.text",
                stylers: [
                    {
                        weight: "0.01",
                    },
                    {
                        lightness: "9",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        lightness: "-32",
                    },
                    {
                        gamma: "2.99",
                    },
                ],
            },
        ],
    });

    /*Function to add and map markers*/
    function addMarker(marker) {
        /* Check content */
        var infoWindow = new google.maps.InfoWindow({
            content: marker.content,
        });

        /*Click event listerner for markers*/
        marker.addListener("click", function (event) {
            infoWindow.open(map, marker);
            /*Zooms to the clicked marker and makes it to be center of the map*/
            map.setZoom(15);
            map.setCenter(marker.getPosition());
            /*loads info and contact form for clicked marker*/
            load_museum_detail(marker);
        });

        /*Event listener for zooming out on map when closing an infowindow*/
        /* Inspiration for the code from https://stackoverflow.com/questions/38992746/how-to-zoom-out-the-map-when-the-infowindow-is-closed-in-google-map*/
        google.maps.event.addListener(infoWindow, "closeclick", function () {
            map.panTo({ lat: 52.314985, lng: 13.288772 });
            map.setZoom(4);
        });
    }

    /*Path for cluster icons*/
    const imagePath = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m";

    /*Enable marker clustering for this map and these markers*/
    const markerClusterer = new MarkerClusterer(map, markers, { imagePath: imagePath });

    /*for loop for placing markers on the map*/
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    console.log("Map loaded!");
}

/*Function for loading HTML code under the map*/
function load_museum_detail(marker) {
    console.log("You have successfully clicked on the marker of", marker.title);
    document.getElementById("museum_title").innerHTML = marker.title;
    document.getElementById("museum_detail").classList.remove("hide");
}

/* Scroll to top button code from @rdallaire on CodePen https://codepen.io/rdallaire/pen/apoyx */
$(window).scroll(function () {
    if ($(this).scrollTop() >= 450) {
        // If page is scrolled more than 450px
        $("#return-to-top").fadeIn(100); // Fade in the arrow
    } else {
        $("#return-to-top").fadeOut(100); // Else fade out the arrow
    }
});
$("#return-to-top").click(function () {
    // When arrow is clicked
    $("body,html").animate(
        {
            scrollTop: 0, // Scroll to top of body
        },
        500
    );
});