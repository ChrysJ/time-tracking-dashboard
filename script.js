const app = document.querySelector('.container-boxes');
const btnReport = document.querySelectorAll('.btn-report');
let hoursData = [];
let reportMethod = 'weekly';

const fetchData = async () => {
	await fetch('data.json').then((res) => res.json()).then((data) => (hoursData = data));
	displayTime();

	console.log(hoursData);
};

window.addEventListener('load', fetchData());

// ------------ DisplayTime
const displayTime = () => {
	app.innerHTML = hoursData
		.map((time) => {
			if (reportMethod == 'weekly') {
				return `
				<div class=container>
				<div class="categories" style="background-color: ${time.colors};"><img src="${time.img}" alt="icon ${time.title}"></div>
				<div class="container-content">
				<div class="title">
				<h4>${time.title}</h4>
				<button><i class="fa-solid fa-ellipsis"></i></button>
				</div>
				<div class="container-time">
				<span class="time">${time.timeframes.weekly.current}hrs</span>
				<p>Last Week - <span class="lastweek-time">${time.timeframes.weekly.previous}hrs</span></p>
				</div>
				</div>
				</div>
                `;
			} else if (reportMethod == 'daily') {
				return `
				<div class=container>
				<div class="categories" style="background-color: ${time.colors};"><img src="${time.img}" alt="icon ${time.title}"></div>
				<div class="container-content">
				<div class="title">
				<h4>${time.title}</h4>
				<button><i class="fa-solid fa-ellipsis"></i></button>
				</div>
				<div class="container-time">
				<span class="time">${time.timeframes.daily.current}hrs</span>
				<p>Last Week - <span class="lastweek-time">${time.timeframes.daily.previous}hrs</span></p>
				</div>
				</div>
				</div>
                `;
			} else if (reportMethod == 'monthly') {
				return `
				<div class=container>
				<div class="categories" style="background-color: ${time.colors};"><img src="${time.img}" alt="icon ${time.title}"></div>
				<div class="container-content">
				<div class="title">
				<h4>${time.title}</h4>
				<button><i class="fa-solid fa-ellipsis"></i></button>
				</div>
				<div class="container-time">
				<span class="time">${time.timeframes.monthly.current}hrs</span>
				<p>Last Week - <span class="lastweek-time">${time.timeframes.monthly.previous}hrs</span></p>
				</div>
				</div>
				</div>
                `;
			}
		})
		.join('');
	console.log(hoursData);
};

btnReport.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		removeActive();
		btn.classList.add('active');
		reportMethod = e.target.id;
		displayTime();
	});
});

const removeActive = () => {
	btnReport.forEach((btn) => {
		btn.classList.remove('active');
	});
};
