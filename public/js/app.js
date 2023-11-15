const drawers = document.querySelectorAll('.drawer');
const dropdowns = document.querySelectorAll('.dropdown');
const close = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar').classList;
const tabs = document.querySelectorAll('.tab');
const alertBtns = document.querySelectorAll('.alert button');
const collapseBtns = document.querySelectorAll('.button-collapse');

const openTab = function () {
	const targetActive = document.querySelector('.tab-content.active').classList;
	const tabActive = document.querySelector('.tab.active').classList;
	const targetAttr = this.getAttribute('target');
	const targetEl = document.querySelector(targetAttr).classList;

	tabActive.remove('active');
	this.classList.add('active');

	targetActive.remove('active');
	targetEl.add('active');
};

const openDropdown = function () {
	const target = document.querySelector(this.getAttribute('target')).classList;

	target.contains('active') ? target.remove('active') : target.add('active');
};

const closeAlert = function () {
	console.log('obj');
};

const collapse = function () {
	const target = document.querySelector(this.getAttribute('target')).classList;

	target.contains('block') ? target.remove('block') : target.add('block');
};

tabs.forEach(tab => tab.addEventListener('click', openTab));
dropdowns.forEach(dropdown => {
	const toggle = dropdown.querySelector('.toggle');

	toggle.addEventListener('click', openDropdown);
});
alertBtns.forEach(btn => btn.addEventListener('click', closeAlert));
collapseBtns.forEach(btn => btn.addEventListener('click', collapse));

drawers.forEach(drawer => {
	drawer.addEventListener('click', () => {
		sidebar.add('block');
	});
});

close.addEventListener('click', () => {
	sidebar.remove('block');
});

// window.addEventListener('load', () => {
//     const statusJaringan = document.getElementById('statusjaringan');
//     statusJaringan.innerHTML = '';

//     const statusOnLineOffLine = () => {
//         statusJaringan.classList.remove('offLine');
//         statusJaringan.classList.remove('onLine');

//         const kondisi = navigator.onLine;
//         if (!kondisi) {
//             statusJaringan.innerHTML = 'Kamu sedang offline, cek koneksi internet kamu ya';
//             statusJaringan.classList.add('offLine');
//             statusJaringan.style.display = 'block';
//             document.querySelector('.user').style.visibility = 'hidden';
//         } else {
//             statusJaringan.innerHTML = 'Kamu sudah online';
//             statusJaringan.classList.add('onLine');
//             document.querySelector('.user').style.visibility = 'visible';
//         }
//         setTimeout(() => {
//             statusJaringan.style.display = 'none';
//             console.log('setTimeout');
//         }, 3000); //set timeout untuk display
//     }

//     window.addEventListener('online', statusOnLineOffLine);
//     window.addEventListener('offline', statusOnLineOffLine);

//     statusOnLineOffLine();
// });


// // Mengecek status jaringan secara berkala setiap 5 detik
    // setInterval(statusOnLineOffLine, 5000);
