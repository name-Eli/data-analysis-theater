document.addEventListener('DOMContentLoaded', () => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const dashData = {
    all: {
        revenue: "$718,518", tickets: "23,933", avg: "$30.02", catPct: "100%", loyalty: "48.3%", retention: "5.66", leadTime: "40.6",
        pricing: ["22.0%", "0.1%", "14.1%", "14.8%", "14.8%", "25.3%", "8.9%"],
        months: [11.4, 11.3, 5.5, 2.8, 5.7, 11.6, 6.0, 8.1, 9.8, 7.6, 12.5, 7.7],
        eventTimes: [{t: "Morning (6am-12pm)", p: "36.0%"}, {t: "Afternoon (12pm-6pm)", p: "13.9%"}, {t: "Evening (6pm-10pm)", p: "38.9%"}, {t: "Night (10pm-6am)", p: "11.2%"}],
        deadZone: { "90": "12.0%", "61": "12.7%", "31": "20.5%", "15": "20.7%", "dead": "11.6%", "rush": "22.5%" },
        cities: ["24.9%", "17.7%", "7.8%", "7.9%", "7.5%"],
        revConcl: "Premium Music tier drives 61% of total volume.",
        priceConcl: "Volume anchored in FREE seats; Revenue in $41-50 tier."
    },
    music: {
        revenue: "$437,351", tickets: "11,968", avg: "$36.54", catPct: "60.9%", loyalty: "45.7%", retention: "4.52", leadTime: "49.6",
        pricing: ["24.3%", "0.0%", "2.2%", "3.8%", "15.0%", "38.3%", "16.3%"],
        months: [12.2, 6.6, 7.5, 1.8, 3.7, 11.7, 6.5, 11.2, 13.9, 9.6, 10.4, 4.9],
        eventTimes: [{t: "Morning (6am-12pm)", p: "26.8%"}, {t: "Afternoon (12pm-6pm)", p: "9.0%"}, {t: "Evening (6pm-10pm)", p: "64.2%"}, {t: "Night (10pm-6am)", p: "0.0%"}],
        deadZone: { "90": "17.5%", "61": "15.4%", "31": "23.7%", "15": "15.8%", "dead": "9.0%", "rush": "18.6%" },
        cities: ["22.7%", "18.9%", "8.6%", "12.1%", "5.9%"],
        revConcl: "Music maintains the highest average price point ($36.54).",
        priceConcl: "Sharp polarization: 38% of music patrons pay $41-50."
    },
    family: {
        revenue: "$100,069", tickets: "4,551", avg: "$21.99", catPct: "13.9%", loyalty: "49.9%", retention: "3.94", leadTime: "48.5",
        pricing: ["26.1%", "0.1%", "31.7%", "18.2%", "0.0%", "21.7%", "2.3%"],
        months: [20.9, 1.4, 0.2, 0, 0, 3.1, 12.8, 8.9, 6.4, 10.8, 23.0, 12.5],
        eventTimes: [{t: "Morning (6am-12pm)", p: "40.9%"}, {t: "Afternoon (12pm-6pm)", p: "41.7%"}, {t: "Evening (6pm-10pm)", p: "8.6%"}, {t: "Night (10pm-6am)", p: "8.8%"}],
        deadZone: { "90": "13.8%", "61": "15.2%", "31": "27.6%", "15": "16.6%", "dead": "10.1%", "rush": "16.7%" },
        cities: ["24.6%", "12.4%", "9.9%", "1.6%", "11.7%"],
        revConcl: "Family events show high Q4 volume.",
        priceConcl: "Strong mid-tier demand: 31% within the $11-20 range."
    },
    rentals: {
        revenue: "$99,265", tickets: "4,369", avg: "$22.72", catPct: "13.8%", loyalty: "55.1%", retention: "11.04", leadTime: "17.7",
        pricing: ["20.0%", "0.0%", "23.7%", "20.6%", "35.6%", "0.0%", "0.1%"],
        months: [0, 30.9, 8.1, 0, 6.2, 27.6, 0, 0, 0, 0, 13.8, 13.3],
        eventTimes: [{t: "Morning (6am-12pm)", p: "59.7%"}, {t: "Afternoon (12pm-6pm)", p: "0.0%"}, {t: "Evening (6pm-10pm)", p: "0.0%"}, {t: "Night (10pm-6am)", p: "40.3%"}],
        deadZone: { "90": "0.0%", "61": "7.0%", "31": "7.1%", "15": "31.8%", "dead": "19.0%", "rush": "35.1%" },
        cities: ["29.5%", "22.0%", "3.4%", "3.8%", "7.1%"],
        revConcl: "Rentals rely on morning/night volume spikes.",
        priceConcl: "Skewed toward $31-40 tier (35.6%) for rental events."
    },
    dance: {
        revenue: "$56,703", tickets: "1,979", avg: "$28.65", catPct: "7.9%", loyalty: "37.4%", retention: "3.80", leadTime: "27.6",
        pricing: ["6.8%", "1.1%", "16.2%", "50.6%", "0.0%", "25.3%", "0.0%"],
        months: [16.0, 23.6, 0, 0, 22.5, 0, 3.4, 9.6, 15.5, 5.9, 0.7, 2.9],
        eventTimes: [{t: "Morning (6am-12pm)", p: "0.0%"}, {t: "Afternoon (12pm-6pm)", p: "18.3%"}, {t: "Evening (6pm-10pm)", p: "57.8%"}, {t: "Night (10pm-6am)", p: "23.9%"}],
        deadZone: { "90": "5.4%", "61": "7.6%", "31": "16.0%", "15": "32.2%", "dead": "11.1%", "rush": "27.7%" },
        cities: ["23.5%", "15.0%", "2.4%", "8.8%", "5.4%"],
        revConcl: "Dance shows steady interest in Evening slots.",
        priceConcl: "Majority of Dance sales occur in the $21-30 tier."
    },
    film: {
        revenue: "$15,881", tickets: "718", avg: "$22.12", catPct: "2.2%", loyalty: "74.8%", retention: "7.78", leadTime: "25.0",
        pricing: ["7.0%", "0.0%", "35.7%", "35.8%", "21.6%", "0.0%", "0.0%"],
        months: [0.8, 3.5, 6.5, 38.7, 22.3, 0, 0, 0, 11.0, 6.0, 8.6, 2.5],
        eventTimes: [{t: "Morning (6am-12pm)", p: "82.6%"}, {t: "Afternoon (12pm-6pm)", p: "0.0%"}, {t: "Evening (6pm-10pm)", p: "11.6%"}, {t: "Night (10pm-6am)", p: "5.8%"}],
        deadZone: { "90": "4.7%", "61": "1.7%", "31": "21.6%", "15": "28.0%", "dead": "13.6%", "rush": "30.4%" },
        cities: ["36.4%", "16.4%", "15.3%", "1.1%", "16.3%"],
        revConcl: "Film attracts a niche Morning audience.",
        priceConcl: "Balanced distribution across the $11-40 range."
    }
};

    const updateUI = (cat) => {
        const d = dashData[cat] || dashData.all;
        document.getElementById('revMetric').innerText = d.revenue;
        document.getElementById('catPct').innerText = d.catPct;
        document.getElementById('ticketCount').innerText = d.tickets;
        document.getElementById('avgPrice').innerText = d.avg;
        document.getElementById('rev-conclusion').innerText = d.revConcl;
        document.getElementById('price-conclusion').innerText = d.priceConcl;
        document.getElementById('loyaltyMetric').innerText = d.loyalty;
        document.getElementById('retentionVal').innerText = d.retention;
        document.getElementById('windowMetric').innerText = d.leadTime;
        const gf = document.getElementById('gaugeFill');
        const off = 125.6 - (parseFloat(d.loyalty) / 100) * 125.6;
        gf.style.strokeDashoffset = off;
        gf.style.stroke = '#0176d3';
        const dzc = document.getElementById('dz-conclusion');
        if (cat === 'rentals') dzc.innerText = "Critical: 54% of sales are last-minute.";
        else if (cat === 'music') dzc.innerText = "Stable booking curve; Dead Zone is minimal (9%).";
        else if (cat === 'family') dzc.innerText = "Families plan ahead; focus on the 31-60 day window.";
        else dzc.innerText = "Stop marketing spend 14 days out.";
        const pFills = document.querySelectorAll('.price-bar .fill');
        const pVals = document.querySelectorAll('.price-val');
        d.pricing.forEach((p, i) => {
            if(pFills[i]) pFills[i].style.height = p;
            if(pVals[i]) pVals[i].innerText = p;
        });
        document.getElementById('dz-90').innerText = d.deadZone["90"];
        document.getElementById('dz-61').innerText = d.deadZone["61"];
        document.getElementById('dz-31').innerText = d.deadZone["31"];
        document.getElementById('dz-15').innerText = d.deadZone["15"];
        document.getElementById('dz-dead').innerText = d.deadZone["dead"];
        document.getElementById('dz-rush').innerText = d.deadZone["rush"];
        d.cities.forEach((p, i) => { if(document.getElementById(`city${i+1}`)) document.getElementById(`city${i+1}`).innerText = p; });
        const cp = document.getElementById('chartPath');
        const ml = document.getElementById('monthLabels');
        ml.innerHTML = '';
        let pts = "";
        const mx = Math.max(...d.months, 20);
        d.months.forEach((v, i) => {
            const x = (i / 11) * 1000;
            const y = 180 - (v / mx) * 150;
            pts += (i === 0 ? "M " : "L ") + `${x} ${y} `;
            const s = document.createElement('span'); s.innerText = monthNames[i]; ml.appendChild(s);
        });
        cp.setAttribute('d', pts + "L 1000 200 L 0 200 Z");
        const tl = document.getElementById('timeList'); tl.innerHTML = '';
        d.eventTimes.forEach(et => {
            const li = document.createElement('li'); li.className = 'time-item';
            li.innerHTML = `<span>${et.t}</span> <div class="time-bar"><div style="width: ${et.p};"></div></div>`;
            tl.appendChild(li);
        });
    };

    const filter = document.getElementById('categoryFilter');
    filter.addEventListener('change', (e) => updateUI(e.target.value));
    updateUI('all');
});