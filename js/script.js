const ihsg = {

    nilai: 5594.77,

    perubahan: -245.02,

    persen: -4.20,

    tinggi: 5860.67,

    rendah: 5594.11,

    buka: 5846.49,

    volume: "31.74T",

    chart: [
        6200,
        6150,
        6000,
        5950,
        5810,
        5750,
        5650
    ]
};
document.getElementById("ihsgValue").innerHTML =
ihsg.nilai.toLocaleString();

const change =
document.getElementById("ihsgChange");

const ihsgValue =
document.getElementById("ihsgValue");

change.innerHTML =
`${ihsg.perubahan > 0 ? '+' : ''}${ihsg.perubahan}
(${ihsg.persen > 0 ? '+' : ''}${ihsg.persen}%)`;

document.getElementById("highValue").innerHTML =
ihsg.tinggi.toLocaleString();

document.getElementById("lowValue").innerHTML =
ihsg.rendah.toLocaleString();

document.getElementById("openValue").innerHTML =
ihsg.buka.toLocaleString();

document.getElementById("volumeValue").innerHTML =
ihsg.volume;

let chartColor;

if (ihsg.persen >= 0){

    chartColor = "#00d26a";

    change.style.color = "#00d26a";
    ihsgValue.style.color = "#00d26a";

}else{

    chartColor = "#ef4444";

    change.style.color = "#ef4444";
    ihsgValue.style.color = "#ef4444";

}

new Chart(
    document.getElementById("ihsgChart"),
    {
        type:'line',
    
        data:{
            labels:[
                '09',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15'
            ],
    
            datasets:[{
                data:ihsg.chart,
                borderColor:chartColor,
                borderWidth:3,
                pointRadius:0,
                tension:0.4
            }]
        },
    
        options:{
            plugins:{
                legend:{
                    display:false
                }
            },
    
            scales:{
                x:{
                    display:false
                },
    
                y:{
                    display:true,
                    position:'right',
                    min:5500,
                    max:6250,
    
                    ticks:{
                        stepSize:50,
                    
                        color:'#94a3b8',
                    
                        callback:function(value){
                    
                            if(value % 100 === 0){
                                return value.toLocaleString('id-ID');
                            }
                    
                            return '';
                        }
                    },
    
                    border:{
                        display:false
                    },
    
                    grid:{
                        color:'rgba(255,255,255,0.08)'
                    }
                }
            }
        }
    
    });   
    /* ===================================
   DROPDOWN MENU
=================================== */
    const saham = [

        {
            kode:"BBCA",
            nama:"Bank Central Asia",
            harga:"8.700",
            poin:"+200",
            perubahan:"+2.35%"
        },
        
        {
            kode:"BBRI",
            nama:"Bank Rakyat Indonesia",
            harga:"4.300",
            poin:"+80",
            perubahan:"+1.85%"
        },
        
        {
            kode:"BMRI",
            nama:"Bank Mandiri",
            harga:"5.200",
            poin:"-50",
            perubahan:"-0.90%"
        },
        
        {
            kode:"ASII",
            nama:"Astra International",
            harga:"5.000",
            poin:"+35",
            perubahan:"+0.75%"
        }
        
        ];

const container =
document.getElementById("stockContainer");

saham.forEach(item=>{

    container.innerHTML += `
    
    <div class="card">
    
        <h2>${item.kode}</h2>
    
        <p>${item.nama}</p>
    
        <div class="harga">
            ${item.harga}
        </div>
    
        <div class="${
        item.perubahan.includes('+')
        ? 'naik'
        : 'turun'
    }">
        ${item.poin} (${item.perubahan})
    </div>
    
    `;
    
    });

    function toggleMenu(){
    document
    .querySelector(".dropdown-content")
    .classList
    .toggle("show");
}

window.onclick = function(event){

    if(
        !event.target.matches('.menu-btn')
    ){

        const dropdown =
        document.querySelector(
            '.dropdown-content'
        );

        if(
            dropdown.classList.contains(
                'show'
            )
        ){
            dropdown.classList.remove(
                'show'
            );
        }

    }

}
function toggleMenu() {
    document
        .querySelector(".dropdown-content")
        .classList.toggle("show");
}

window.onclick = function(event) {

    if (!event.target.matches('.menu-btn')) {

        const dropdown =
            document.querySelector(".dropdown-content");

        if (dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
        }
    }
}
new TradingView.widget({
    container_id: "tradingview_chart",
    autosize: true,
    symbol: "IDX:BBCA",
    interval: "D",
    timezone: "Asia/Jakarta",
    theme: "dark",
    style: "1",
    locale: "id",
    allow_symbol_change: true,
    studies: [
        "RSI@tv-basicstudies",
        "Volume@tv-basicstudies"
    ]
});