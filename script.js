const app = document.querySelector('.app');

let hoursData = [];

const fetchData = async () => {
	await fetch('data.json').then((res) => res.json()).then((data) => (hoursData = data));
	displayTime();
	displayReport();
	console.log(hoursData);
};

window.addEventListener('load', fetchData());

// -------------DisplayReport
const displayReport = () => {
	app.innerHTML += `
      <section class="report">
        <div class="user-profile">
          <img src="./assets/images/image-jeremy.png" alt="user photo profil">
          <p class="report-for">Report for</p>
          <span id="firstNameUser">Jeremy</span><span id="lastNameUser">Robson</span>
        </div>
        <ul class="report-menu">
          <li><a id="daily" href="#">Daily</a></li>
          <li><a id="weekly" class="active" href="#">Weekly</a></li>
          <li><a id="monthly" href="#">Monthly</a></li>
        </ul>
      </section>
`;
};

// ------------ DisplayTime
const displayTime = () => {
	console.log(hoursData);

	app.innerHTML += hoursData
		.map(
			(time) =>
				`
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
                `
		)
		.join('');
};
