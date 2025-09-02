const historyData = [];


document.addEventListener('DOMContentLoaded', function () {

    const heartCountElement = document.getElementById('heart-count');


    const heartIcons = document.getElementsByClassName('heart-icon');


    for (let i = 0; i < heartIcons.length; i++) {
        heartIcons[i].addEventListener('click', function () {
            heartCountElement.textContent++;
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {

    const callButtons = document.querySelectorAll('.btn-call');


    const coinCountElement = document.getElementById('coin-count');

    let coinCount = parseInt(coinCountElement.textContent);

    callButtons.forEach(function (button) {
        button.addEventListener('click', function () {

            const serviceName = button.getAttribute('data-service');
            const emergencyNumber = button.getAttribute('data-number');

            if (coinCount >= 20) {

                coinCount -= 20;
                coinCountElement.textContent = coinCount;
                alert(`Calling ${serviceName}: ${emergencyNumber}...`);

            } else {

                alert('❌You do not have sufficient coins: To Call You need at least 20 coin');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {

    
    const historyContainer = document.getElementById('history-container');
    
    
    const btnClear = document.getElementById('btn-clear');

   
    function addHistoryEntry(serviceName, emergencyNumber) {
        
        const currentTime = new Date().toLocaleTimeString([]);

        
        const newHistoryEntry = document.createElement('div');
        newHistoryEntry.classList.add('flex', 'justify-between', 'items-center', 'bg-[#f5fff6]', 'p-5', 'rounded-xl'); 
        
      
        newHistoryEntry.innerHTML = `
            <div>
                <p class="font-bold">${serviceName}</p>
                <p>${emergencyNumber}</p>
            </div>
            <div>
                <p>${currentTime}</p>
            </div>
        `;
        
        
        historyContainer.appendChild(newHistoryEntry);
    }
    const btnNes = document.getElementById('btn-nes');
    if (btnNes) {
        btnNes.addEventListener('click', function () {
            addHistoryEntry('National Emergency Service', '999');
        });
    }


    const btnFireService = document.getElementById('btn-fire-service');
    if (btnFireService) {
        btnFireService.addEventListener('click', function () {
            addHistoryEntry('Fire Service', '999');
        });
    }

    const btnPolice = document.getElementById('btn-police');
    if (btnPolice) {
        btnPolice.addEventListener('click', function () {
            addHistoryEntry('Police', '999');
        });
    }

    const btnAmbulance = document.getElementById('btn-ambulance');
    if (btnAmbulance) {
        btnAmbulance.addEventListener('click', function () {
            addHistoryEntry('Ambulance', '1994-999999');
        });
    }

    const btnWCS = document.getElementById('btn-wcs');
    if (btnWCS) {
        btnWCS.addEventListener('click', function () {
            addHistoryEntry('Women & Child Support', '109');
        });
    }

    const btnACC = document.getElementById('btn-acc');
    if (btnACC) {
        btnACC.addEventListener('click', function () {
            addHistoryEntry('Anti Corruption Commission', '106');
        });
    }

    const btnElectricity = document.getElementById('btn-electricity');
    if (btnElectricity) {
        btnElectricity.addEventListener('click', function () {
            addHistoryEntry('Electricity Outage', '16216');
        });
    }

    const btnBrac = document.getElementById('btn-brac');
    if (btnBrac) {
        btnBrac.addEventListener('click', function () {
            addHistoryEntry('Brac', '16445');
        });
    }

    const btnBangladeshRailway = document.getElementById('btn-bangladesh-railway');
    if (btnBangladeshRailway) {
        btnBangladeshRailway.addEventListener('click', function () {
            addHistoryEntry('Bangladesh Railway', '163');
        });
    }

    
    if (btnClear) {
        btnClear.addEventListener('click', function () {
           
            historyContainer.innerHTML = '';
        });
    }

});






