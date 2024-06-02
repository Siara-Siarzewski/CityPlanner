
    let budget = 100000;
    let waterPerDay = 0;
    let allWater = 10;
    let energyPerDay = 0;
    let allEnergy = 10;
    let allPeople = 10;




    var budowa = document.getElementById("budowa");
    var closeBtn = document.getElementsByClassName("close")[0];
    changeSaldo();
    // Function to display the 'budowa' element
    function showBudowa() {
        budowa.style.display = "block";
    }
    function closeBudowa() {
        budowa.style.display = "none";
    }


    let timeBuild = [ 0, 450000, 18000000, 12000000, 6000000, 9000000, 4000000, 3600000, 6000000];
    let costBuild = [0, 1000, 7500, 10000, 25000, 2000, 750, 500, 3000]
    for (let i = 1; i <= 93; i++) {
        (function(index) {
            let button = document.getElementById("btn" + index);
            button.onclick = showBudowa;
    
            button.addEventListener('click', function(){
                 location_id = index;
                
                for(let x = 1; x <=8; x++){
                    (function(index2) {
                    let button2 = document.getElementById("budynek"+index2);
                    button2.addEventListener('click', function(){
                         building_id = index2;
                        let iconbuild = document.getElementById("ibraz"+location_id);
                        var nowyObraz = "./IMG/budowa.png";
                        iconbuild.src = nowyObraz;
                        budget = budget-costBuild[x]
                        setTimeout(function(){
                        if(building_id == 0){
                            var nowyObraz = "./IMG/plus.png";
                            iconbuild.src = nowyObraz;
                            // budget = budget-costBuild[x];
                        }
                        else if(building_id == 1){
                            var nowyObraz = "./IMG/house.png";
                            iconbuild.src = nowyObraz;
                            energyPerDay = energyPerDay-12;
                            waterPerDay =waterPerDay-8;
                            x=0;
                        }
                        else if(building_id == 2){
                            var nowyObraz = "./IMG/blok.png";
                            iconbuild.src = nowyObraz;
                            energyPerDay = energyPerDay-40;
                            waterPerDay =waterPerDay-25;
                            x=0;
                        }
                        else if(building_id == 3){
                            var nowyObraz = "./IMG/hospital.png";
                            iconbuild.src = nowyObraz;
                            energyPerDay = energyPerDay-45;
                            waterPerDay =waterPerDay-20;
                            x=0;
                        }
                        else if(building_id == 4){
                            var nowyObraz = "./IMG/bank.png";
                            iconbuild.src = nowyObraz;
                            energyPerDay = energyPerDay-10;
                            waterPerDay =waterPerDay-12;
                            x=0;
                        }
                        else if(building_id == 5){
                            var nowyObraz = "./IMG/factory.png";
                            iconbuild.src = nowyObraz;
                            energyPerDay = energyPerDay-10;
                            waterPerDay =waterPerDay-35;
                            x=0;
                        }
                        else if(building_id == 6){
                            var nowyObraz = "./IMG/electro.png";
                            iconbuild.src = nowyObraz;
                            energyPerDay = energyPerDay+100;
                            x=0;
                        }
                        else if(building_id == 7){
                            var nowyObraz = "./IMG/water.png";
                            iconbuild.src = nowyObraz;
                            waterPerDay = waterPerDay+100;
                            x=0;
                        }
                        else if(building_id == 8){
                            var nowyObraz = "./IMG/park.png";
                            iconbuild.src = nowyObraz;
                            energyPerDay = energyPerDay-30;
                            waterPerDay =waterPerDay-5;
                            x=0;
                        }
                        }, timeBuild[x]);
                        changeSaldo();
                        var xhr = new XMLHttpRequest();
                        var value1 = location_id;
                        var value2 = building_id;
                        var data = "value1=" + encodeURIComponent(value1) + "&value2=" + encodeURIComponent(value2);
    
                        xhr.open("POST", "aplikacja.php", true);
                        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                        xhr.onreadystatechange = function() {
                            if (xhr.readyState === 4 && xhr.status === 200) {
                                console.log("Odpowiedź z PHP: " + xhr.responseText);
                            }
                        
                        };
                        xhr.send(data);
                    
                    });
    
                    button2.onclick = closeBudowa;
                    i=0;
                    
                        // Zablokuj przycisk
                    button.disabled = true;
                    
                        // Dodatkowe operacje, które chcesz wykonać po kliknięciu przycisku
                    
                })(x);
                }
            });
        })(i);
    }


    function zmienObraz(image, building_id) {
                let iconbuild = document.getElementById(image);
                    if(building_id == 0){
                        var nowyObraz = "./IMG/plus.png";
                        iconbuild.src = nowyObraz;
                    }
                    else if(building_id == 1){
                        var nowyObraz = "./IMG/house.png";
                        iconbuild.src = nowyObraz;
                        x=1;
                    }
                    else if(building_id == 2){
                        var nowyObraz = "./IMG/blok.png";
                        iconbuild.src = nowyObraz;
                        x=1;
                    }
                    else if(building_id == 3){
                        var nowyObraz = "./IMG/hospital.png";
                        iconbuild.src = nowyObraz;
                        x=1;
                    }
                    else if(building_id == 4){
                        var nowyObraz = "./IMG/bank.png";
                        iconbuild.src = nowyObraz;
                        x=1;
                    }
                    else if(building_id == 5){
                        var nowyObraz = "./IMG/factory.png";
                        iconbuild.src = nowyObraz;
                        x=1;
                    }
                    else if(building_id == 6){
                        var nowyObraz = "./IMG/electro.png";
                        iconbuild.src = nowyObraz;
                        x=1;
                    }
                    else if(building_id == 7){
                        var nowyObraz = "./IMG/water.png";
                        iconbuild.src = nowyObraz;
                        x=1;
                    }
                    else if(building_id == 8){
                        var nowyObraz = "./IMG/park.png";
                        iconbuild.src = nowyObraz;
                        x=1;
                    }
                }

    closeBtn.onclick = function() {
        budowa.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == budowa) {
            budowa.style.display = "none";
        }
    }

    var statystyki = document.getElementById("statystyki");

    var staty = document.getElementById("showstats");
        
    var close1Btn = document.getElementsByClassName("close")[1];
    staty.onclick = function() {
        statystyki.style.display = "block";
    }

    close1Btn.onclick = function() {
        statystyki.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == statystyki) {
            statystyki.style.display = "none";
        }
    }
    function changeSaldo() {
        let saldo = document.getElementById("saldo");
        saldo.textContent = `Saldo: `+ budget+` $`;
    }

    const ctxPopulation = document.getElementById('populationChart').getContext('2d');
    const ctxResources = document.getElementById('resourcesChart').getContext('2d');
    
    const populationChart = new Chart(ctxPopulation, {
        type: 'pie',
        data: {
            labels: ['Total Water', 'Total Energy', 'Total People'],
            datasets: [{
                label: 'Resources and Population',
                data: [allWater, allEnergy, allPeople],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    const resourcesChart = new Chart(ctxResources, {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
            datasets: [
                {
                    label: 'Water per day',
                    data: [waterPerDay, waterPerDay, waterPerDay, waterPerDay, waterPerDay],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Energy per day',
                    data: [energyPerDay, energyPerDay, energyPerDay, energyPerDay, energyPerDay],
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });




    let day = 1;

        let intervalId = setInterval(function() {
                    // Pobierz element do wyświetlania danych
        let dayElement = document.getElementById("day");
        let waterstats = document.getElementById("water");
        let energystats = document.getElementById("energy");
        let peplestasts = document.getElementById("people");
        allEnergy = allEnergy+energyPerDay;
        allWater = allWater+waterPerDay;
        allPeople = allPeople+1+parseInt(allPeople/10);            
        waterstats.textContent = "Zasoby wody: "+allWater;
        energystats.textContent = "Zasoby energi: "+allEnergy;
        peplestasts.textContent = "Liczba ludności: "+allPeople;
        dayElement.textContent = "Dni: " + day;

        populationChart.data.datasets[0].data = [allWater, allEnergy, allPeople];
        populationChart.update();

        resourcesChart.data.datasets[0].data = [waterPerDay, waterPerDay, waterPerDay, waterPerDay, waterPerDay];
        resourcesChart.data.datasets[1].data = [energyPerDay, energyPerDay, energyPerDay, energyPerDay, energyPerDay];
        resourcesChart.update();
                    
            day++; // Zwiększ wartość licznika o 1
        }, 10000); // Wykonuj co 10 sekund (10000 milisekund)

    
          
  


